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
import { blockMeta, stack, plusCircle } from '@wordpress/icons';
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
				geo_latitude: place.geometry.location.lat(),
				geo_longitude:  place.geometry.location.lng(),
			} )

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
	const [ markerRef, marker] = useAdvancedMarkerRef();

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
			// ...meta,
			geo_latitude: lat,
			geo_longitude: lng,
		} )

	};

	const handleRightClick = (ev) => {

		console.log('right click!', ev);

		const lat = ev.detail.latLng.lat;
		const lng =  ev.detail.latLng.lng;

		setMeta( {
			// ...meta,
			geo_latitude: lat,
			geo_longitude: lng,
		} )
		
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
					<li>Title: {meta?.geo_title}</li>
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
					// size="large"
					isFullScreen
				>
					Befire
					<div style={{position:"relative", aspectRatio: "3 / 1"}}>
					{/* <Map
						mapLib={import('mapbox-gl')}
						initialViewState={{
							longitude: -20,
							latitude: 20,
							zoom: 5
						}}
						mapboxAccessToken="pk.eyJ1Ijoic2NvdHRjYXJ2ZXIiLCJhIjoiY2o3NmdvOWVsMHZ1NzJxcDMzaTZnYnNzciJ9.zvt3Nnb-hclh5dnuUVF7vw"
						style={{width: "100%", height: "100%"}}
						mapStyle="mapbox://styles/mapbox/streets-v9"
					>
						 <Marker longitude={-20} latitude={20} anchor="bottom" >
						 	<div style={{ backgroundColor: 'red', width: '10px', height: '10px', borderRadius: '50%' }}></div>
						</Marker>
					</Map> */}
					 

					<APIProvider apiKey={SECRET_KEY} version='3'>
						<Map mapId="geocoder_tool" defaultCenter={position} defaultZoom={10} gestureHandling={'greedy'} onContextmenu={handleRightClick}>
							<AdvancedMarker position={position} draggable onDragEnd={handleDragChange}  />
						</Map>

						<MapControl position={ControlPosition.TOP}>
							<div className="autocomplete-control">
								<PlaceAutocomplete onPlaceSelect={setSelectedPlace} />
							</div>
							<button>HEY!</button>
						</MapControl>

						<MapHandler place={selectedPlace} marker={marker} />

					</APIProvider>

					</div>

					<li>Latitude? {meta?.geo_latitude}</li>
					<li>Longitude? {meta?.geo_longitude}</li>
					
					<TextControl
						label={ __(
							'Text Field',
							'block-development-examples'
						) }
						value={ meta?.geo_title || '' }
						onChange={ ( newValue ) =>
							setMeta( {
								...meta,
								geo_title: newValue,
							} )
						}
					/>
					<RadioControl
						label={ __(
							'Radio Field',
							'block-development-examples'
						) }
						selected={
							meta?.geo_public || ''
						}
						options={ [
							{ label: 'Visible', value: true, },
							{ label: 'Hidden', value: false, },
						] }
						onChange={ ( newValue ) =>
							setMeta( {
								...meta,
								geo_public: newValue,
							} )
						}
					/>
					
					
				</Modal>
			) }
		</>
	);
}

registerPlugin( 'block-development-examples-post-meta-modal-2502fb', {
	render: MetaModalManager,
} );
