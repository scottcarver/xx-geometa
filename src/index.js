/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';
import { registerPlugin } from '@wordpress/plugins';
import {
	Modal,
	RadioControl,
	SelectControl,
	TextControl,
} from '@wordpress/components';
import { useState, useCallback, useEffect, useRef } from '@wordpress/element';
import { PluginPostPublishPanel, PluginSidebarMoreMenuItem, PluginMoreMenuItem, PluginSidebar, PluginDocumentSettingPanel} from '@wordpress/edit-post';
import SECRET_KEY from './secrets.js';


/* Tutorial here https://developers.google.com/maps/documentation/javascript/examples/rgm-autocomplete & here
https://developers.google.com/maps/documentation/javascript/examples/rgm-autocomplete#maps_rgm_autocomplete-javascript */
// import {APIProvider, Map, AdvancedMarker, Marker} from '@vis.gl/react-google-maps';
import {
	APIProvider,
	ControlPosition,
	MapControl,
	AdvancedMarker,
	Map,
	useMap,
	useMapsLibrary,
	useAdvancedMarkerRef,
  } from "@vis.gl/react-google-maps";


import { useEntityProp} from '@wordpress/core-data';
import { dispatch, select } from '@wordpress/data';
import { useCommand } from '@wordpress/commands';
import { blockMeta, stack, plusCircle, aspectRatio } from '@wordpress/icons';
/**
 * Internal dependencies
 */
import './index.scss';



/*
function App() {
  return <Map
    mapLib={import('mapbox-gl')}
    initialViewState={{
      longitude: -100,
      latitude: 40,
      zoom: 3.5
    }}
    style={{width: 600, height: 400}}
    mapStyle="mapbox://styles/mapbox/streets-v9"
  />;
}
*/



/**
 * Toggle the Preset Manager.
 *
 * Adds a sidebar button in the Post Editor and a Command Palette command.
 */


/*
*/
function toggleSidebar (){
	const isOpen = select('core/edit-post').isPluginSidebarOpened('block-development-examples-post-meta-modal-2502fb/geolocation-sidebar-plugin');
	const generalSidebarName = wp.data.select('core/edit-post').getActiveGeneralSidebarName();
	// alert("Sidebar name: " + generalSidebarName);

	if (isOpen) {
		// alert("toggle Sidebar " + isOpen);
		dispatch('core/edit-post').openGeneralSidebar('edit-post/document');
	} else {
		// alert("toggle Sidebar " + isOpen);
		dispatch('core/edit-post').openGeneralSidebar('block-development-examples-post-meta-modal-2502fb/geolocation-sidebar-plugin');
	}
	
	
}


const SetCenter = (props) => {
	const map = useMap();
	const [ meta, setMeta ] = useEntityProp( 'postType', 'post', 'meta' );
	const [ isStreetView, setisStreetView ] = useState(false);
	// const streetView = useMapsLibrary("streetView");

	const getCenter = (click) => {
		// Get Map Centerpoint
		let activeCenter = { lat: map.center.lat(), lng: map.center.lng()};

		// Use the Streetview location when Streetview is visible
		if(map.streetView.visible){
			activeCenter = { lat: map.streetView.position.lat(), lng: map.streetView.position.lng()};
		}

		setisStreetView(map.streetView.visible ? true : false);


		console.log("map was", map);
		console.log("center was", activeCenter);

		// Set Meta
		setMeta( {
			...meta,
			geo_latitude: activeCenter.lat,
			geo_longitude:  activeCenter.lng,
		});

		// Set Map Center
		map.setCenter(activeCenter);

	}
	
	return(
		<div className="center-control">
			{/* {JSON.stringify(props.position)} */}
				<button  onClick={getCenter}>Set Position</button>
		</div>
	);
}


//   Map Handler
const MapHandler = ({ place, marker }) => {
	const map = useMap();


	useEffect(() => {
	  if (!map || !place || !marker) return;
  
	  if (place.geometry?.viewport) {
		map.fitBounds(place.geometry?.viewport);
	  }
  
	  marker.position = place.geometry?.location;
	}, [map, place, marker]);

	return null;
  };
  
	//   Place Autocomplete
  const PlaceAutocomplete = ({ onPlaceSelect }) => {
	const [placeAutocomplete, setPlaceAutocomplete] = useState(null);
	const inputRef = useRef(null);
	const places = useMapsLibrary("places");
	
	const [ meta, setMeta ] = useEntityProp( 'postType', 'post', 'meta' );
	const map = useMap();

	// Change
	useEffect(() => {

		console.log("places changed");
		if (!places || !inputRef.current) return;
	
		const options = {
			fields: ["geometry", "name", "formatted_address"],
		};
		// const results = new places.Autocomplete(inputRef.current, options);
		// const results = new google.maps.places.PlaceAutocompleteElement();
		
		// console.log("results ", results);

	  	setPlaceAutocomplete(new places.Autocomplete(inputRef.current, options));
	}, [places]);


	// Change
	useEffect(() => {
		console.log("onPlaceSelect, placeAutocomplete changed");

		if (!placeAutocomplete) return;
	
		placeAutocomplete.addListener("place_changed", () => {

			console.log("also, 	placeAutocomplete.getPlace() occurred", placeAutocomplete.getPlace());
			onPlaceSelect(placeAutocomplete.getPlace());

			const place = placeAutocomplete.getPlace();

			const setmeta = setMeta( {
				...meta,
				geo_latitude: place.geometry.location.lat(),
				geo_longitude:  place.geometry.location.lng(),
			} )

			// Reset Center
			if (map) { map.fitBounds(place.geometry?.viewport); }

		});
	}, [onPlaceSelect, placeAutocomplete]);


	return (
	  <div className="autocomplete-container">
		<input ref={inputRef} />
	  </div>
	);
  };

function MetaModalManager() {
	const [ isModalOpen, setModalOpen ] = useState( false );
	const [ meta, setMeta ] = useEntityProp( 'postType', 'post', 'meta' );
	const [ selectedPlace, setSelectedPlace] = useState(null);
	// const [ ideal, SetCenter] = useState(null);

	
	// SetCenter
	const [ markerRef, marker] = useAdvancedMarkerRef();

	console.log("selectedPlace is: ", selectedPlace);

	// const [ lat, setLat] = useState(meta?.geo_latitude || "61.2176");
	// const [ lng, setLng] = useState(meta?.geo_latitude || "-149.8997");
	// const { dispatch, select } = wp.data;

	// Register a command for the Command Palette.
	useCommand( {
		name: 'manage-post-geolocation',
		label: __( 'Edit Geolocation data', 'block-development-examples' ),
		icon: plusCircle,
		callback: () => setModalOpen( true ),
		context: 'block-editor',
	} );

	/*	*/
	useCommand( {
		name: 'view-post-geolocation',
		label: __( 'Toggle Geolocation Panel', 'block-development-examples' ),
		icon: plusCircle,
		callback: () => toggleSidebar(),
		context: 'block-editor',
	} );

	const alaska = {lat: 61.2176, lng: -149.8997};
	const position = {lat: meta?.geo_latitude || alaska.lat, lng: meta?.geo_longitude || alaska.lng};

	const handleDragChange = (ev) => {

		console.log('camera changed: ', ev);

		const lat = ev.latLng.lat();
		const lng =  ev.latLng.lng();

		setMeta( {
			...meta,
			geo_latitude: lat,
			geo_longitude: lng,
		} )
		// setSelectedPlace(ev);
	};

	const handleRightClick = (ev) => {

		console.log('right click!', ev);

		const lat = ev.detail.latLng.lat;
		const lng =  ev.detail.latLng.lng;

		setMeta( {
			...meta,
			geo_latitude: lat,
			geo_longitude: lng,
		} )
		// setSelectedPlace(ev);
	};

	return (
		<>

			<PluginSidebarMoreMenuItem target="geolocation-sidebar-plugin" icon="admin-site-alt">
			 	Geolocation Data
			</PluginSidebarMoreMenuItem>
		
			{/* Sidebar Content */}
			<PluginSidebar name="geolocation-sidebar-plugin" icon="admin-site-alt" title="Geolocation">
				{/* Text Search 
				<TextControl
					label={ __( 'Text Field', 'block-development-examples') }
					value={ meta?.geo_title || '' }
				
				/>*/}
				<>
				<h3>Current Geodata:</h3>					
				<ul>
					{/* <li>Title: {meta?.geo_title}</li> */}
					<li>Address? {meta?.geo_address}</li>
					<li>Latitude? {meta?.geo_latitude}</li>
					<li>Longitude? {meta?.geo_longitude}</li>
					<li>Public? {meta?.geo_public}</li>
		
				</ul>
				<button onClick={ () => setModalOpen( true ) }>Edit</button>
				</>
			</PluginSidebar>
			
			{/* Expanded Overlay View */}
			{ isModalOpen && (
				<Modal
					className="post_meta_modal_2502fb_container"
					title={ __(
						'Edit Geolocation Data',
						'block-development-examples'
					) }
					onRequestClose={ () => setModalOpen( false ) }
					isFullScreen
					// size='large'
				>

					<APIProvider apiKey={SECRET_KEY} version='3'>
					<div className="modal">

						{/* Controls  */}
						<div className="modal__controls">
						
							<ul>
								<li>Latitude? {meta?.geo_latitude}</li>
								<li>Longitude? {meta?.geo_longitude}</li>
							</ul>

							<TextControl
								label={ __(
									'Geo Address',
									'block-development-examples'
								) }
								value={ meta?.geo_address || '' }
								onChange={ ( newValue ) =>
									setMeta({ ...meta, geo_addres: newValue, })
								}
							/>
							
							<TextControl
								label={ __(
									'Geo Address',
									'block-development-examples'
								) }
								value={ meta?.geo_address || '' }
								onChange={ ( newValue ) =>
									setMeta({ ...meta, geo_address: newValue, })
								}
							/>
							
							<RadioControl
								label={ __('Radio Field', 'block-development-examples') }
								selected={ meta?.geo_public || ''}
								options={[
									{ label: 'Visible', value: true, },
									{ label: 'Hidden', value: false, },
								]}
								onChange={ ( newValue ) => setMeta({ ...meta, geo_public: newValue, }) }
							/>
							
							{/* Set Center */}
							<SetCenter />

						</div>
						{/* Map */}
						<div className="modal__map">

							{/* <div style={{position:"relative"}} className='modal__ratio'> */}
								{/* Google API Boundary */}
						

								{/* Map with Advanced Marker */}
								{/*  disableDefaultUI={true} */}
								<Map 
									mapId="geocoder_tool" 
									defaultCenter={position} 
									defaultZoom={13}
									gestureHandling={'greedy'} 
									onContextmenu={handleRightClick} 
									fullscreenControl={false}
									streetViewControlOptions={{position: ControlPosition.TOP_RIGHT}}
								>
									<AdvancedMarker position={position} draggable onDragEnd={handleDragChange}  />
								</Map>

								{/* AutoSelect Tool */}
								<MapControl position={ControlPosition.TOP_CENTER}>
									<div className="autocomplete-control">
										<PlaceAutocomplete onPlaceSelect={setSelectedPlace} />
									</div>
								</MapControl>

								{/* Center Control 
								<MapControl position={ControlPosition.BOTTOM_CENTER}>
									<SetCenter />
								</MapControl>
								 */}

								<SetCenter />
								<MapHandler place={selectedPlace} marker={marker} />

								
							
							{/* </div> */}
						</div>

					</div>
					</APIProvider>
					
				</Modal>
			) }
		</>
	);
}

registerPlugin( 'block-development-examples-post-meta-modal-2502fb', {
	render: MetaModalManager,
} );
