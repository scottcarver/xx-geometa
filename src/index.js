/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';
import { registerPlugin } from '@wordpress/plugins';
import {
	AnglePickerControl,
	Modal,
	TextControl,
	Button,
	ToggleControl,
	BaseControl,
	__experimentalNumberControl as NumberControl
} from '@wordpress/components';
import { useState, useEffect, useRef } from '@wordpress/element';
import { PluginSidebarMoreMenuItem, PluginMoreMenuItem, PluginSidebar, PluginDocumentSettingPanel, PluginPrePublishPanel} from '@wordpress/edit-post';


// import ClipboardComponent from "./CopyPaster.js";

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
import { blockMeta, stack, plusCircle, aspectRatio, globe } from '@wordpress/icons';
/**
 * Internal dependencies
 */
import './index.scss';


/** 
 * Get Compass Direction
 * 
 * Accepts an angle 0-360 and returns a stylized value
 */
function getCompassDirection(angle) {
    // Normalize the angle to 0-360 degrees
    let normalizedAngle = angle % 360;

    // Compass directions in 22.5° increments (N, NNE, NE, etc.)
    const directions = [
        "N", "NNE", "NE", "ENE", "E", "ESE", "SE", "SSE", "S", 
        "SSW", "SW", "WSW", "W", "WNW", "NW", "NNW", "N"
    ];

    // Calculate the corresponding direction index (16 cardinal directions)
    let directionIndex = Math.round(normalizedAngle / 22.5);

    // Retrieve the correct direction from the array
    let direction = directions[directionIndex];

    // Return the angle and direction in the desired format
    // return `${normalizedAngle}° ${direction}`;
	return `${direction}`;
}



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

// Set Center
const SetCenterButton = (props) => {
	const map = useMap();
	// const [ meta, setMeta ] = useEntityProp( 'postType', 'post', 'meta' );
	const postType = select('core/editor').getCurrentPostType();
	const [meta, setMeta] = useEntityProp('postType', postType, 'meta');
	// console.log("POSTTYPE! " + postType);

	const [ isStreetView, setisStreetView ] = useState(false);
	// const streetView = useMapsLibrary("streetView");

	const getCenter = (click) => {
		// alert("boop");
		// Get Map Centerpoint
		let activeCenter = { lat: map.center.lat(), lng: map.center.lng()};

		// Use the Streetview location when Streetview is visible
		if(map.streetView.visible){
			activeCenter = { 
				lat: map.streetView.position.lat(), 
				lng: map.streetView.position.lng()
			};
		}

		setisStreetView(map.streetView.visible ? true : false);

		// console.log("map was", map);
		// console.log("center was", activeCenter);

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
			<Button  onClick={getCenter} variant="secondary">Set Position to Map Center</Button>
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
	
	// const [ meta, setMeta ] = useEntityProp( 'postType', 'post', 'meta' )
	const postType = select('core/editor').getCurrentPostType();
	const [meta, setMeta] = useEntityProp('postType', postType, 'meta');
	// console.log("POSTTYPE! " + postType);
	
	const map = useMap();

	// Change
	useEffect(() => {

		// console.log("places changed");
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
		// console.log("onPlaceSelect, placeAutocomplete changed");

		if (!placeAutocomplete) return;
	
		placeAutocomplete.addListener("place_changed", () => {

			// console.log("also, 	placeAutocomplete.getPlace() occurred", placeAutocomplete.getPlace());
			onPlaceSelect(placeAutocomplete.getPlace());

			const place = placeAutocomplete.getPlace();

			setMeta( {
				...meta,
				geo_latitude: place.geometry.location.lat(),
				geo_longitude:  place.geometry.location.lng(),
				geo_address: place.formatted_address
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

	const postType = select('core/editor').getCurrentPostType();

	// A critical value was missing, just stop now
	if(
		!('apiKey' in GeometaPluginSettings) || 
		!('supportedPostTypes' in GeometaPluginSettings) || 
		!('interfacePlacement' in GeometaPluginSettings) || 
		!('interfaceMaps' in GeometaPluginSettings) ||
		(!GeometaPluginSettings.supportedPostTypes.includes(postType))
	){ 
		console.log("data needed to run MetaModalManager were not present");
		return false; 
	}

	const { apiKey, supportedPostTypes, interfacePlacement, interfaceMaps, proprietryData, starterMap } = GeometaPluginSettings;
	const showMap = (apiKey !== undefined) && (apiKey !== "") && (interfaceMaps === "map_selector");
	const [meta, setMeta] = useEntityProp('postType', postType, 'meta');
	const [ selectedPlace, setSelectedPlace] = useState(null);
	const [ isModalOpen, setModalOpen ] = useState( false );
	const [ markerRef, marker] = useAdvancedMarkerRef();
	const alaska = {lat: 61.2176, lng: -149.8997};
	const position = {lat: meta?.geo_latitude || alaska.lat, lng: meta?.geo_longitude || alaska.lng};

	// Register 'Edit Geolocation' Command
	useCommand( {
		name: 'manage-post-geolocation',
		label: __( 'Edit Geolocation data', 'block-development-examples' ),
		icon: globe,
		callback: () => setModalOpen( true ),
		context: 'block-editor',
	} );

	useCommand( {
		name: 'manage-settings-geolocation',
		label: __( 'Edit Geolocation Settings', 'block-development-examples' ),
		icon: globe,
		callback: () => window.location = 'http://localhost/gutenberg-test/wp-admin/options-general.php?page=geo-sidebar-settings',
		context: 'block-editor',
	} );

	// Register 'Toggle Geolocation' Command (only with 'sidebar' placement)
	{interfacePlacement === "sidebar" && 
		useCommand( {
			name: 'view-post-geolocation',
			label: __( 'Toggle Geolocation Panel', 'block-development-examples' ),
			icon: globe,
			callback: () => toggleSidebar(),
			context: 'block-editor',
		} );
	}

	/**
	 * Preview Geometa
	 * Compontentized markup which previews the current data. This is broken apart because it is used in two places (the sidebar and publish panel), depending on which user setting was selected.
	 */
	const PreviewGeometa = function(props){
		const postType = select('core/editor').getCurrentPostType();
		const [meta, setMeta] = useEntityProp('postType', postType, 'meta');
		// console.log('props', props);
		return(
			<div className={`geo-mega ${(props.variant === 'padded') ? 'geo-mega--padded' : ''}`}>
				<ul>
					<li className={`${meta?.geo_public ? 'green' : 'red'}`}><strong>Public:</strong> <span style={ meta?.geo_public ? { color: 'green'} : {color: 'red'}}
					>{meta?.geo_public == 1 ? "Yes" : "No"}</span></li>
					<li><strong>Address:</strong> {meta?.geo_address ? meta?.geo_address : '--'}</li>
					<li><strong>Latitude:</strong> {meta?.geo_latitude ? meta?.geo_latitude : '--'}</li>
					<li><strong>Longitude:</strong> {meta?.geo_longitude ? meta?.geo_longitude : '--'}</li>
					{/* <li><strong>Heading:</strong> {meta?.geo_heading + " degrees, (" + getCompassDirection(meta?.geo_heading) +")"}</li> */}
					{proprietryData &&
					<li><strong>Map URL:</strong> 
						{meta.geo_map &&
							<a href={meta?.geo_map} target="_blank" style={{width:'130px', whiteSpace:'nowrap', overflow:'hidden', textOverflow:'ellipsis'}}>{meta?.geo_map}</a>
						}


						{!meta.geo_map &&
							// <a href="http://localhost/pointoforegon.com/nwmaps/oregon/" target="_blank">🆕 Create New</a>
							<>--</>
						}
						
						
					</li>
					}
				</ul>
				<Button onClick={ () => setModalOpen( true ) } variant="secondary" icon="admin-site-alt3">Edit Geodata</Button>
			</div>
		);
	}

	// Handle Drag Change
	const handleDragChange = (ev) => {
		// console.log('camera changed: ', ev);

		const lat = ev.latLng.lat();
		const lng =  ev.latLng.lng();

		setMeta( {
			...meta,
			geo_latitude: lat,
			geo_longitude: lng,
		} )
	};

	// Handle Right Click
	const handleRightClick = (ev) => {
		// console.log('right click!', ev);

		const lat = ev.detail.latLng.lat;
		const lng =  ev.detail.latLng.lng;

		setMeta({
			...meta,
			geo_latitude: lat,
			geo_longitude: lng,
		})
		
	};

	return (
		<>

			{/* <PluginPrePublishPanel>
				PREPUB!
			</PluginPrePublishPanel> */}

			{/* Quick Link */}
			{interfacePlacement === "quicklink" && 
				<PluginMoreMenuItem icon="admin-site-alt3" onClick={() => {setModalOpen(true)} }>
					Edit Geodata
				</PluginMoreMenuItem>
			}
			
			{/* Sidebar */}
			{interfacePlacement === "sidebar" && 
				<PluginSidebarMoreMenuItem 
					target="geolocation-sidebar-plugin" 
					icon="admin-site-alt3">
					Geodata Sidebar
				</PluginSidebarMoreMenuItem>
			}

			{/* Sidebar */}
			{interfacePlacement === "publish" && 
			<PluginDocumentSettingPanel  
				name="custom-panel"
				title="Geodata"
				className="custom-panel"
				isPluginSidebarOpened={false}
			>
				{/* Preview Data */}
				<PreviewGeometa />
			</PluginDocumentSettingPanel>
			}
		
			{/* Sidebar Content */}
			{interfacePlacement === "sidebar" && 
			<PluginSidebar name="geolocation-sidebar-plugin" icon="admin-site-alt3" title="Geodata">
				{/* Preview Data */}
				<PreviewGeometa variant="padded" />
			</PluginSidebar>
			}
			
			{/* Expanded Overlay View */}
			{isModalOpen && (
				<Modal
					className="xx_geometa_modal"
					title={ __( 'Edit Geodata', 'block-development-examples')}
					onRequestClose={ () => setModalOpen( false ) }
					size={showMap ? 'fill' : 'small'}
				>
					<APIProvider apiKey={apiKey} version='3'>
					<div className={`modal ${showMap ? 'modal--fullscreen' : ''}`}>

						{/* Controls  */}
						<div className="modal__controls">
							
							{/* Experimental, bring this later */}
							{/* <ClipboardComponent /> */}
							
							{/* Public */}
							<BaseControl label="Public:">
								<br />

								<ToggleControl
									label={ meta?.geo_public ? "Yes" : "No" }
									checked={ meta?.geo_public || '' }
									help={ meta?.geo_public ? "Location data is visible." : "Location data is hidden." }  
									onChange={ ( newValue ) =>  setMeta({ geo_public: newValue ? 1 : 0 }) }
								/>

							</BaseControl>

							<br />

							{/* Address Control */}
							<TextControl
								label={ __('Address','block-development-examples') }
								value={ meta?.geo_address || '' }
								onChange={ ( newValue ) => setMeta({ ...meta, geo_address: newValue, })}
								help="Freeform textual description of coordinates."
							/>

							<br />
							{/* Latitude */}
							<NumberControl
								label={ __('Latitude','block-development-examples') }
								step=".0001"
								isShiftStepEnabled={ true }
								onChange={ ( newValue ) => setMeta({ ...meta, geo_latitude: Number(newValue) })}
								shiftStep={ 10 }
								min="-90"
								max="90"
								value={ meta?.geo_latitude || '' }
								help="Decimal degrees -90 to 90 (negative values are in the southern hemisphere)."
								spinControls="none"
							/>

							<br />

							{/* Longitude */}
							<NumberControl
								label={ __('Longitude', 'block-development-examples') }
								step=".0001"
								isShiftStepEnabled={ true }
								onChange={ ( newValue ) => setMeta({ ...meta, geo_longitude: Number(newValue), })}
								shiftStep={ 10 }
								min="-180"
								max="180"
								value={ meta?.geo_longitude || '' }
								help="Decimal degrees -180 to 180 (negative values are in the western hemisphere)."
							/>

						
							{/* 
							<BaseControl
								id="angle-picker-control"
								// label="Label text"
								help={"A value between 0 and 360 representing direction."}
								//  + getCompassDirection(meta?.geo_heading) + ")"
							>
								<AnglePickerControl
									id="angle-picker-control"
									label={ __("Heading",'block-development-examples') }
									onChange={ ( newValue ) => setMeta({ ...meta, geo_heading: newValue, })}
									value={ meta?.geo_heading || '' }
										
								/>
							</BaseControl>
							*/}

							{/* Map Control */}
							{proprietryData &&
								<>
									<br />

									<TextControl
										label={ __('Map URL','block-development-examples') }
										value={ meta?.geo_map || '' }
										onChange={ ( newValue ) => setMeta({ ...meta, geo_map: newValue, })}
										// help="The URL of a page displaying a Map for this location"
										help={
											<>
												A URL which contains a map.{' '}
												{ meta?.geo_map &&
													<a href={ meta?.geo_map} target="_blank" rel="noopener noreferrer">
														View Current
													</a>
												}
												{' '}
												
												{starterMap &&
													<a href={starterMap} target="_blank" rel="noopener noreferrer">
														Defaults
													</a>
												}
											</>
										}
									/>
								</>
							}


							{/* Set Center */}
							{showMap && <SetCenterButton /> }
							
						</div>

						{/* Map */}
						{showMap &&
							<div className="modal__map">

								{/* Map */}
								<Map 
									mapId="geocoder_tool" 
									defaultCenter={position} 
									defaultZoom={13}
									gestureHandling={'greedy'} 
									onContextmenu={handleRightClick} 
									fullscreenControl={false}
									streetViewControlOptions={{position: ControlPosition.TOP_RIGHT}}
								>
									{position && <AdvancedMarker position={position} draggable onDragEnd={handleDragChange}  /> }
								</Map>

								{/* Search Feature */}
								<MapControl position={ControlPosition.TOP_CENTER}>
									<div className="autocomplete-control">
										<PlaceAutocomplete onPlaceSelect={setSelectedPlace} />
									</div>
								</MapControl>

								{/* Set Map Center */}
								<SetCenterButton />
								
								{/* Dynamic Map Handler */}
								<MapHandler place={selectedPlace} marker={marker} />
							
							</div>
						}
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
