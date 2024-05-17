/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/@wordpress/icons/build-module/library/plus-circle.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@wordpress/icons/build-module/library/plus-circle.js ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/primitives */ "@wordpress/primitives");
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__);

/**
 * WordPress dependencies
 */

const plusCircle = (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.SVG, {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "-2 -2 24 24"
}, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.Path, {
  d: "M10 1c-5 0-9 4-9 9s4 9 9 9 9-4 9-9-4-9-9-9zm0 16c-3.9 0-7-3.1-7-7s3.1-7 7-7 7 3.1 7 7-3.1 7-7 7zm1-11H9v3H6v2h3v3h2v-3h3V9h-3V6zM10 1c-5 0-9 4-9 9s4 9 9 9 9-4 9-9-4-9-9-9zm0 16c-3.9 0-7-3.1-7-7s3.1-7 7-7 7 3.1 7 7-3.1 7-7 7zm1-11H9v3H6v2h3v3h2v-3h3V9h-3V6z"
}));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (plusCircle);
//# sourceMappingURL=plus-circle.js.map

/***/ }),

/***/ "./src/secrets.js":
/*!************************!*\
  !*** ./src/secrets.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const secret_key = "AIzaSyDKJA7jiGnkG_gR5HE6iXEdK2fmwU5_xiw";
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (secret_key);

/***/ }),

/***/ "./node_modules/fast-deep-equal/index.js":
/*!***********************************************!*\
  !*** ./node_modules/fast-deep-equal/index.js ***!
  \***********************************************/
/***/ ((module) => {



// do not edit .js files directly - edit src/index.jst



module.exports = function equal(a, b) {
  if (a === b) return true;

  if (a && b && typeof a == 'object' && typeof b == 'object') {
    if (a.constructor !== b.constructor) return false;

    var length, i, keys;
    if (Array.isArray(a)) {
      length = a.length;
      if (length != b.length) return false;
      for (i = length; i-- !== 0;)
        if (!equal(a[i], b[i])) return false;
      return true;
    }



    if (a.constructor === RegExp) return a.source === b.source && a.flags === b.flags;
    if (a.valueOf !== Object.prototype.valueOf) return a.valueOf() === b.valueOf();
    if (a.toString !== Object.prototype.toString) return a.toString() === b.toString();

    keys = Object.keys(a);
    length = keys.length;
    if (length !== Object.keys(b).length) return false;

    for (i = length; i-- !== 0;)
      if (!Object.prototype.hasOwnProperty.call(b, keys[i])) return false;

    for (i = length; i-- !== 0;) {
      var key = keys[i];

      if (!equal(a[key], b[key])) return false;
    }

    return true;
  }

  // true if both NaN, false otherwise
  return a!==a && b!==b;
};


/***/ }),

/***/ "./src/index.scss":
/*!************************!*\
  !*** ./src/index.scss ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "React" ***!
  \************************/
/***/ ((module) => {

module.exports = window["React"];

/***/ }),

/***/ "react-dom":
/*!***************************!*\
  !*** external "ReactDOM" ***!
  \***************************/
/***/ ((module) => {

module.exports = window["ReactDOM"];

/***/ }),

/***/ "@wordpress/commands":
/*!**********************************!*\
  !*** external ["wp","commands"] ***!
  \**********************************/
/***/ ((module) => {

module.exports = window["wp"]["commands"];

/***/ }),

/***/ "@wordpress/components":
/*!************************************!*\
  !*** external ["wp","components"] ***!
  \************************************/
/***/ ((module) => {

module.exports = window["wp"]["components"];

/***/ }),

/***/ "@wordpress/core-data":
/*!**********************************!*\
  !*** external ["wp","coreData"] ***!
  \**********************************/
/***/ ((module) => {

module.exports = window["wp"]["coreData"];

/***/ }),

/***/ "@wordpress/data":
/*!******************************!*\
  !*** external ["wp","data"] ***!
  \******************************/
/***/ ((module) => {

module.exports = window["wp"]["data"];

/***/ }),

/***/ "@wordpress/edit-post":
/*!**********************************!*\
  !*** external ["wp","editPost"] ***!
  \**********************************/
/***/ ((module) => {

module.exports = window["wp"]["editPost"];

/***/ }),

/***/ "@wordpress/element":
/*!*********************************!*\
  !*** external ["wp","element"] ***!
  \*********************************/
/***/ ((module) => {

module.exports = window["wp"]["element"];

/***/ }),

/***/ "@wordpress/i18n":
/*!******************************!*\
  !*** external ["wp","i18n"] ***!
  \******************************/
/***/ ((module) => {

module.exports = window["wp"]["i18n"];

/***/ }),

/***/ "@wordpress/plugins":
/*!*********************************!*\
  !*** external ["wp","plugins"] ***!
  \*********************************/
/***/ ((module) => {

module.exports = window["wp"]["plugins"];

/***/ }),

/***/ "@wordpress/primitives":
/*!************************************!*\
  !*** external ["wp","primitives"] ***!
  \************************************/
/***/ ((module) => {

module.exports = window["wp"]["primitives"];

/***/ }),

/***/ "./node_modules/@vis.gl/react-google-maps/dist/index.modern.mjs":
/*!**********************************************************************!*\
  !*** ./node_modules/@vis.gl/react-google-maps/dist/index.modern.mjs ***!
  \**********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   APILoadingStatus: () => (/* binding */ APILoadingStatus),
/* harmony export */   APIProvider: () => (/* binding */ APIProvider),
/* harmony export */   APIProviderContext: () => (/* binding */ APIProviderContext),
/* harmony export */   AdvancedMarker: () => (/* binding */ AdvancedMarker),
/* harmony export */   AdvancedMarkerContext: () => (/* binding */ AdvancedMarkerContext),
/* harmony export */   CollisionBehavior: () => (/* binding */ CollisionBehavior),
/* harmony export */   ControlPosition: () => (/* binding */ ControlPosition),
/* harmony export */   GoogleMapsContext: () => (/* binding */ GoogleMapsContext),
/* harmony export */   InfoWindow: () => (/* binding */ InfoWindow),
/* harmony export */   Map: () => (/* binding */ Map),
/* harmony export */   MapControl: () => (/* binding */ MapControl),
/* harmony export */   Marker: () => (/* binding */ Marker),
/* harmony export */   Pin: () => (/* binding */ Pin),
/* harmony export */   isLatLngLiteral: () => (/* binding */ isLatLngLiteral),
/* harmony export */   latLngEquals: () => (/* binding */ latLngEquals),
/* harmony export */   limitTiltRange: () => (/* binding */ limitTiltRange),
/* harmony export */   toLatLngLiteral: () => (/* binding */ toLatLngLiteral),
/* harmony export */   useAdvancedMarkerRef: () => (/* binding */ useAdvancedMarkerRef),
/* harmony export */   useApiIsLoaded: () => (/* binding */ useApiIsLoaded),
/* harmony export */   useApiLoadingStatus: () => (/* binding */ useApiLoadingStatus),
/* harmony export */   useMap: () => (/* binding */ useMap),
/* harmony export */   useMapsLibrary: () => (/* binding */ useMapsLibrary),
/* harmony export */   useMarkerRef: () => (/* binding */ useMarkerRef)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "react-dom");
/* harmony import */ var fast_deep_equal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! fast-deep-equal */ "./node_modules/fast-deep-equal/index.js");




function _toPrimitive(t, r) {
  if ("object" != typeof t || !t) return t;
  var e = t[Symbol.toPrimitive];
  if (void 0 !== e) {
    var i = e.call(t, r || "default");
    if ("object" != typeof i) return i;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return ("string" === r ? String : Number)(t);
}
function _toPropertyKey(t) {
  var i = _toPrimitive(t, "string");
  return "symbol" == typeof i ? i : String(i);
}
function _extends() {
  _extends = Object.assign ? Object.assign.bind() : function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends.apply(this, arguments);
}
function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;
  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }
  return target;
}

const APILoadingStatus = {
  NOT_LOADED: 'NOT_LOADED',
  LOADING: 'LOADING',
  LOADED: 'LOADED',
  FAILED: 'FAILED',
  AUTH_FAILURE: 'AUTH_FAILURE'
};

const MAPS_API_BASE_URL = 'https://maps.googleapis.com/maps/api/js';
/**
 * A GoogleMapsApiLoader to reliably load and unload the Google Maps JavaScript API.
 *
 * The actual loading and unloading is delayed into the microtask queue, to
 * allow using the API in an useEffect hook, without worrying about multiple API loads.
 */
class GoogleMapsApiLoader {
  /**
   * Loads the Maps JavaScript API with the specified parameters.
   * Since the Maps library can only be loaded once per page, this will
   * produce a warning when called multiple times with different
   * parameters.
   *
   * The returned promise resolves when loading completes
   * and rejects in case of an error or when the loading was aborted.
   */
  static async load(params, onLoadingStatusChange) {
    var _window$google;
    const libraries = params.libraries ? params.libraries.split(',') : [];
    const serializedParams = this.serializeParams(params);
    this.listeners.push(onLoadingStatusChange);
    // Note: if `google.maps.importLibrary` has been defined externally, we
    //   assume that loading is complete and successful.
    //   If it was defined by a previous call to this method, a warning
    //   message is logged if there are differences in api-parameters used
    //   for both calls.
    if ((_window$google = window.google) != null && (_window$google = _window$google.maps) != null && _window$google.importLibrary) {
      // no serialized parameters means it was loaded externally
      if (!this.serializedApiParams) {
        this.loadingStatus = APILoadingStatus.LOADED;
      }
      this.notifyLoadingStatusListeners();
    } else {
      this.serializedApiParams = serializedParams;
      this.initImportLibrary(params);
    }
    if (this.serializedApiParams && this.serializedApiParams !== serializedParams) {
      console.warn(`[google-maps-api-loader] The maps API has already been loaded ` + `with different parameters and will not be loaded again. Refresh the ` + `page for new values to have effect.`);
    }
    const librariesToLoad = ['maps', ...libraries];
    await Promise.all(librariesToLoad.map(name => google.maps.importLibrary(name)));
  }
  /**
   * Serialize the paramters used to load the library for easier comparison.
   */
  static serializeParams(params) {
    return [params.v, params.key, params.language, params.region, params.authReferrerPolicy, params.solutionChannel].join('/');
  }
  /**
   * Creates the global `google.maps.importLibrary` function for bootstrapping.
   * This is essentially a formatted version of the dynamic loading script
   * from the official documentation with some minor adjustments.
   *
   * The created importLibrary function will load the Google Maps JavaScript API,
   * which will then replace the `google.maps.importLibrary` function with the full
   * implementation.
   *
   * @see https://developers.google.com/maps/documentation/javascript/load-maps-js-api#dynamic-library-import
   */
  static initImportLibrary(params) {
    if (!window.google) window.google = {};
    if (!window.google.maps) window.google.maps = {};
    if (window.google.maps['importLibrary']) {
      console.error('[google-maps-api-loader-internal]: initImportLibrary must only be called once');
      return;
    }
    let apiPromise = null;
    const loadApi = () => {
      if (apiPromise) return apiPromise;
      apiPromise = new Promise((resolve, reject) => {
        var _document$querySelect;
        const scriptElement = document.createElement('script');
        const urlParams = new URLSearchParams();
        for (const [key, value] of Object.entries(params)) {
          const urlParamName = key.replace(/[A-Z]/g, t => '_' + t[0].toLowerCase());
          urlParams.set(urlParamName, value);
        }
        urlParams.set('loading', 'async');
        urlParams.set('callback', '__googleMapsCallback__');
        scriptElement.async = true;
        scriptElement.src = MAPS_API_BASE_URL + `?` + urlParams.toString();
        scriptElement.nonce = ((_document$querySelect = document.querySelector('script[nonce]')) == null ? void 0 : _document$querySelect.nonce) || '';
        scriptElement.onerror = () => {
          this.loadingStatus = APILoadingStatus.FAILED;
          this.notifyLoadingStatusListeners();
          reject(new Error('The Google Maps JavaScript API could not load.'));
        };
        window.__googleMapsCallback__ = () => {
          this.loadingStatus = APILoadingStatus.LOADED;
          this.notifyLoadingStatusListeners();
          resolve();
        };
        window.gm_authFailure = () => {
          this.loadingStatus = APILoadingStatus.AUTH_FAILURE;
          this.notifyLoadingStatusListeners();
        };
        this.loadingStatus = APILoadingStatus.LOADING;
        this.notifyLoadingStatusListeners();
        document.head.append(scriptElement);
      });
      return apiPromise;
    };
    // for the first load, we declare an importLibrary function that will
    // be overwritten once the api is loaded.
    google.maps.importLibrary = libraryName => loadApi().then(() => google.maps.importLibrary(libraryName));
  }
  /**
   * Calls all registered loadingStatusListeners after a status update.
   */
  static notifyLoadingStatusListeners() {
    for (const fn of this.listeners) {
      fn(this.loadingStatus);
    }
  }
}
/**
 * The current loadingStatus of the API.
 */
GoogleMapsApiLoader.loadingStatus = APILoadingStatus.NOT_LOADED;
/**
 * The parameters used for first loading the API.
 */
GoogleMapsApiLoader.serializedApiParams = void 0;
/**
 * A list of functions to be notified when the loading status changes.
 */
GoogleMapsApiLoader.listeners = [];

const _excluded$3 = ["onLoad", "apiKey", "version", "libraries"],
  _excluded2 = ["children"];
const DEFAULT_SOLUTION_CHANNEL = 'GMP_VISGL_react';
const APIProviderContext = react__WEBPACK_IMPORTED_MODULE_0__.createContext(null);
/**
 * local hook to set up the map-instance management context.
 */
function useMapInstances() {
  const [mapInstances, setMapInstances] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({});
  const addMapInstance = (mapInstance, id = 'default') => {
    setMapInstances(instances => _extends({}, instances, {
      [id]: mapInstance
    }));
  };
  const removeMapInstance = (id = 'default') => {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    setMapInstances(_ref => {
      let remaining = _objectWithoutPropertiesLoose(_ref, [id].map(_toPropertyKey));
      return remaining;
    });
  };
  const clearMapInstances = () => {
    setMapInstances({});
  };
  return {
    mapInstances,
    addMapInstance,
    removeMapInstance,
    clearMapInstances
  };
}
/**
 * local hook to handle the loading of the maps API, returns the current loading status
 * @param props
 */
function useGoogleMapsApiLoader(props) {
  const {
      onLoad,
      apiKey,
      version,
      libraries = []
    } = props,
    otherApiParams = _objectWithoutPropertiesLoose(props, _excluded$3);
  const [status, setStatus] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(GoogleMapsApiLoader.loadingStatus);
  const [loadedLibraries, addLoadedLibrary] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useReducer)((loadedLibraries, action) => {
    return _extends({}, loadedLibraries, {
      [action.name]: action.value
    });
  }, {});
  const librariesString = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => libraries == null ? void 0 : libraries.join(','), [libraries]);
  const serializedParams = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => JSON.stringify(_extends({
    apiKey,
    version
  }, otherApiParams)), [apiKey, version, otherApiParams]);
  const importLibrary = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(async name => {
    var _google;
    if (loadedLibraries[name]) {
      return loadedLibraries[name];
    }
    if (!((_google = google) != null && (_google = _google.maps) != null && _google.importLibrary)) {
      throw new Error('[api-provider-internal] importLibrary was called before ' + 'google.maps.importLibrary was defined.');
    }
    const res = await window.google.maps.importLibrary(name);
    addLoadedLibrary({
      name,
      value: res
    });
    return res;
  }, [loadedLibraries]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    (async () => {
      try {
        const params = _extends({
          key: apiKey
        }, otherApiParams);
        if (version) params.v = version;
        if ((librariesString == null ? void 0 : librariesString.length) > 0) params.libraries = librariesString;
        if (params.solutionChannel === undefined) params.solutionChannel = DEFAULT_SOLUTION_CHANNEL;else if (params.solutionChannel === '') delete params.solutionChannel;
        await GoogleMapsApiLoader.load(params, status => setStatus(status));
        for (const name of ['core', 'maps', ...libraries]) {
          await importLibrary(name);
        }
        if (onLoad) {
          onLoad();
        }
      } catch (error) {
        console.error('<ApiProvider> failed to load the Google Maps JavaScript API', error);
      }
    })();
  },
  // eslint-disable-next-line react-hooks/exhaustive-deps
  [apiKey, librariesString, serializedParams]);
  return {
    status,
    loadedLibraries,
    importLibrary
  };
}
/**
 * Component to wrap the components from this library and load the Google Maps JavaScript API
 */
const APIProvider = props => {
  const {
      children
    } = props,
    loaderProps = _objectWithoutPropertiesLoose(props, _excluded2);
  const {
    mapInstances,
    addMapInstance,
    removeMapInstance,
    clearMapInstances
  } = useMapInstances();
  const {
    status,
    loadedLibraries,
    importLibrary
  } = useGoogleMapsApiLoader(loaderProps);
  const contextValue = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => ({
    mapInstances,
    addMapInstance,
    removeMapInstance,
    clearMapInstances,
    status,
    loadedLibraries,
    importLibrary
  }), [mapInstances, addMapInstance, removeMapInstance, clearMapInstances, status, loadedLibraries, importLibrary]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(APIProviderContext.Provider, {
    value: contextValue
  }, children);
};

/**
 * Sets up effects to bind event-handlers for all event-props in MapEventProps.
 * @internal
 */
function useMapEvents(map, props) {
  // note: calling a useEffect hook from within a loop is prohibited by the
  // rules of hooks, but it's ok here since it's unconditional and the number
  // and order of iterations is always strictly the same.
  // (see https://legacy.reactjs.org/docs/hooks-rules.html)
  for (const propName of eventPropNames) {
    // fixme: this cast is essentially a 'trust me, bro' for typescript, but
    //   a proper solution seems way too complicated right now
    const handler = props[propName];
    const eventType = propNameToEventType[propName];
    // eslint-disable-next-line react-hooks/rules-of-hooks
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
      if (!map) return;
      if (!handler) return;
      const listener = google.maps.event.addListener(map, eventType, ev => {
        handler(createMapEvent(eventType, map, ev));
      });
      return () => listener.remove();
    }, [map, eventType, handler]);
  }
}
/**
 * Create the wrapped map-events used for the event-props.
 * @param type the event type as it is specified to the maps api
 * @param map the map instance the event originates from
 * @param srcEvent the source-event if there is one.
 */
function createMapEvent(type, map, srcEvent) {
  const ev = {
    type,
    map,
    detail: {},
    stoppable: false,
    stop: () => {}
  };
  if (cameraEventTypes.includes(type)) {
    const camEvent = ev;
    const center = map.getCenter();
    const zoom = map.getZoom();
    const heading = map.getHeading() || 0;
    const tilt = map.getTilt() || 0;
    const bounds = map.getBounds();
    if (!center || !bounds || !Number.isFinite(zoom)) {
      console.warn('[createEvent] at least one of the values from the map ' + 'returned undefined. This is not expected to happen. Please ' + 'report an issue at https://github.com/visgl/react-google-maps/issues/new');
    }
    camEvent.detail = {
      center: (center == null ? void 0 : center.toJSON()) || {
        lat: 0,
        lng: 0
      },
      zoom: zoom || 0,
      heading: heading,
      tilt: tilt,
      bounds: (bounds == null ? void 0 : bounds.toJSON()) || {
        north: 90,
        east: 180,
        south: -90,
        west: -180
      }
    };
    return camEvent;
  } else if (mouseEventTypes.includes(type)) {
    var _srcEvent$latLng;
    if (!srcEvent) throw new Error('[createEvent] mouse events must provide a srcEvent');
    const mouseEvent = ev;
    mouseEvent.domEvent = srcEvent.domEvent;
    mouseEvent.stoppable = true;
    mouseEvent.stop = () => srcEvent.stop();
    mouseEvent.detail = {
      latLng: ((_srcEvent$latLng = srcEvent.latLng) == null ? void 0 : _srcEvent$latLng.toJSON()) || null,
      placeId: srcEvent.placeId
    };
    return mouseEvent;
  }
  return ev;
}
/**
 * maps the camelCased names of event-props to the corresponding event-types
 * used in the maps API.
 */
const propNameToEventType = {
  onBoundsChanged: 'bounds_changed',
  onCenterChanged: 'center_changed',
  onClick: 'click',
  onContextmenu: 'contextmenu',
  onDblclick: 'dblclick',
  onDrag: 'drag',
  onDragend: 'dragend',
  onDragstart: 'dragstart',
  onHeadingChanged: 'heading_changed',
  onIdle: 'idle',
  onIsFractionalZoomEnabledChanged: 'isfractionalzoomenabled_changed',
  onMapCapabilitiesChanged: 'mapcapabilities_changed',
  onMapTypeIdChanged: 'maptypeid_changed',
  onMousemove: 'mousemove',
  onMouseout: 'mouseout',
  onMouseover: 'mouseover',
  onProjectionChanged: 'projection_changed',
  onRenderingTypeChanged: 'renderingtype_changed',
  onTilesLoaded: 'tilesloaded',
  onTiltChanged: 'tilt_changed',
  onZoomChanged: 'zoom_changed',
  // note: onCameraChanged is an alias for the bounds_changed event,
  // since that is going to be fired in every situation where the camera is
  // updated.
  onCameraChanged: 'bounds_changed'
};
const cameraEventTypes = ['bounds_changed', 'center_changed', 'heading_changed', 'tilt_changed', 'zoom_changed'];
const mouseEventTypes = ['click', 'contextmenu', 'dblclick', 'mousemove', 'mouseout', 'mouseover'];
const eventPropNames = Object.keys(propNameToEventType);

function useDeepCompareEffect(effect, deps) {
  const ref = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(undefined);
  if (!ref.current || !fast_deep_equal__WEBPACK_IMPORTED_MODULE_2__(deps, ref.current)) {
    ref.current = deps;
  }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(effect, ref.current);
}

const mapOptionKeys = new Set(['backgroundColor', 'clickableIcons', 'controlSize', 'disableDefaultUI', 'disableDoubleClickZoom', 'draggable', 'draggableCursor', 'draggingCursor', 'fullscreenControl', 'fullscreenControlOptions', 'gestureHandling', 'isFractionalZoomEnabled', 'keyboardShortcuts', 'mapTypeControl', 'mapTypeControlOptions', 'mapTypeId', 'maxZoom', 'minZoom', 'noClear', 'panControl', 'panControlOptions', 'restriction', 'rotateControl', 'rotateControlOptions', 'scaleControl', 'scaleControlOptions', 'scrollwheel', 'streetView', 'streetViewControl', 'streetViewControlOptions', 'styles', 'zoomControl', 'zoomControlOptions']);
/**
 * Internal hook to update the map-options when props are changed.
 *
 * @param map the map instance
 * @param mapProps the props to update the map-instance with
 * @internal
 */
function useMapOptions(map, mapProps) {
  /* eslint-disable react-hooks/exhaustive-deps --
   *
   * The following effects aren't triggered when the map is changed.
   * In that case, the values will be or have been passed to the map
   * constructor via mapOptions.
   */
  const mapOptions = {};
  const keys = Object.keys(mapProps);
  for (const key of keys) {
    if (!mapOptionKeys.has(key)) continue;
    mapOptions[key] = mapProps[key];
  }
  // update the map options when mapOptions is changed
  // Note: due to the destructuring above, mapOptions will be seen as changed
  //   with every re-render, so we're assuming the maps-api will properly
  //   deal with unchanged option-values passed into setOptions.
  useDeepCompareEffect(() => {
    if (!map) return;
    map.setOptions(mapOptions);
  }, [mapOptions]);
  /* eslint-enable react-hooks/exhaustive-deps */
}

function useApiLoadingStatus() {
  var _useContext;
  return ((_useContext = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(APIProviderContext)) == null ? void 0 : _useContext.status) || APILoadingStatus.NOT_LOADED;
}

/**
 * Internal hook that updates the camera when deck.gl viewState changes.
 * @internal
 */
function useDeckGLCameraUpdate(map, props) {
  const {
    viewport,
    viewState
  } = props;
  const isDeckGlControlled = !!viewport;
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useLayoutEffect)(() => {
    if (!map || !viewState) return;
    const {
      latitude,
      longitude,
      bearing: heading,
      pitch: tilt,
      zoom
    } = viewState;
    map.moveCamera({
      center: {
        lat: latitude,
        lng: longitude
      },
      heading,
      tilt,
      zoom: zoom + 1
    });
  }, [map, viewState]);
  return isDeckGlControlled;
}

function isLatLngLiteral(obj) {
  if (!obj || typeof obj !== 'object') return false;
  if (!('lat' in obj && 'lng' in obj)) return false;
  return Number.isFinite(obj.lat) && Number.isFinite(obj.lng);
}
function latLngEquals(a, b) {
  if (!a || !b) return false;
  const A = toLatLngLiteral(a);
  const B = toLatLngLiteral(b);
  if (A.lat !== B.lat || A.lng !== B.lng) return false;
  return true;
}
function toLatLngLiteral(obj) {
  if (isLatLngLiteral(obj)) return obj;
  return obj.toJSON();
}

function useMapCameraParams(map, cameraStateRef, mapProps) {
  const center = mapProps.center ? toLatLngLiteral(mapProps.center) : null;
  let lat = null;
  let lng = null;
  if (center && Number.isFinite(center.lat) && Number.isFinite(center.lng)) {
    lat = center.lat;
    lng = center.lng;
  }
  const zoom = Number.isFinite(mapProps.zoom) ? mapProps.zoom : null;
  const heading = Number.isFinite(mapProps.heading) ? mapProps.heading : null;
  const tilt = Number.isFinite(mapProps.tilt) ? mapProps.tilt : null;
  // the following effect runs for every render of the map component and checks
  // if there are differences between the known state of the map instance
  // (cameraStateRef, which is updated by all bounds_changed events) and the
  // desired state in the props.
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useLayoutEffect)(() => {
    if (!map) return;
    const nextCamera = {};
    let needsUpdate = false;
    if (lat !== null && lng !== null && (cameraStateRef.current.center.lat !== lat || cameraStateRef.current.center.lng !== lng)) {
      nextCamera.center = {
        lat,
        lng
      };
      needsUpdate = true;
    }
    if (zoom !== null && cameraStateRef.current.zoom !== zoom) {
      nextCamera.zoom = zoom;
      needsUpdate = true;
    }
    if (heading !== null && cameraStateRef.current.heading !== heading) {
      nextCamera.heading = heading;
      needsUpdate = true;
    }
    if (tilt !== null && cameraStateRef.current.tilt !== tilt) {
      nextCamera.tilt = tilt;
      needsUpdate = true;
    }
    if (needsUpdate) {
      map.moveCamera(nextCamera);
    }
  });
}

const AuthFailureMessage = () => {
  const style = {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    zIndex: 999,
    display: 'flex',
    flexFlow: 'column nowrap',
    textAlign: 'center',
    justifyContent: 'center',
    fontSize: '.8rem',
    color: 'rgba(0,0,0,0.6)',
    background: '#dddddd',
    padding: '1rem 1.5rem'
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    style: style
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h2", null, "Error: AuthFailure"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", null, "A problem with your API key prevents the map from rendering correctly. Please make sure the value of the ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("code", null, "APIProvider.apiKey"), " prop is correct. Check the error-message in the console for further details."));
};

function useCallbackRef() {
  const [el, setEl] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);
  const ref = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(value => setEl(value), [setEl]);
  return [el, ref];
}

/**
 * Hook to check if the Maps JavaScript API is loaded
 */
function useApiIsLoaded() {
  const status = useApiLoadingStatus();
  return status === APILoadingStatus.LOADED;
}

function useForceUpdate() {
  const [, forceUpdate] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useReducer)(x => x + 1, 0);
  return forceUpdate;
}

function handleBoundsChange(map, ref) {
  const center = map.getCenter();
  const zoom = map.getZoom();
  const heading = map.getHeading() || 0;
  const tilt = map.getTilt() || 0;
  const bounds = map.getBounds();
  if (!center || !bounds || !Number.isFinite(zoom)) {
    console.warn('[useTrackedCameraState] at least one of the values from the map ' + 'returned undefined. This is not expected to happen. Please ' + 'report an issue at https://github.com/visgl/react-google-maps/issues/new');
  }
  // fixme: do we need the `undefined` cases for the camera-params? When are they used in the maps API?
  Object.assign(ref.current, {
    center: (center == null ? void 0 : center.toJSON()) || {
      lat: 0,
      lng: 0
    },
    zoom: zoom || 0,
    heading: heading,
    tilt: tilt
  });
}
/**
 * Creates a mutable ref object to track the last known state of the map camera.
 * This is used in `useMapCameraParams` to reduce stuttering in normal operation
 * by avoiding updates of the map camera with values that have already been processed.
 */
function useTrackedCameraStateRef(map) {
  const forceUpdate = useForceUpdate();
  const ref = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)({
    center: {
      lat: 0,
      lng: 0
    },
    heading: 0,
    tilt: 0,
    zoom: 0
  });
  // Record camera state with every bounds_changed event dispatched by the map.
  // This data is used to prevent feeding these values back to the
  // map-instance when a typical "controlled component" setup (state variable is
  // fed into and updated by the map).
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (!map) return;
    const listener = google.maps.event.addListener(map, 'bounds_changed', () => {
      handleBoundsChange(map, ref);
      // When an event is occured, we have to update during the next cycle.
      // The application could decide to ignore the event and not update any
      // camera props of the map, meaning that in that case we will have to
      // 'undo' the change to the camera.
      forceUpdate();
    });
    return () => listener.remove();
  }, [map, forceUpdate]);
  return ref;
}

const _excluded$2 = ["id", "defaultBounds", "defaultCenter", "defaultZoom", "defaultHeading", "defaultTilt", "reuseMaps"];
/**
 * Stores a stack of map-instances for each mapId. Whenever an
 * instance is used, it is removed from the stack while in use,
 * and returned to the stack when the component unmounts.
 * This allows us to correctly implement caching for multiple
 * maps om the same page, while reusing as much as possible.
 *
 * FIXME: while it should in theory be possible to reuse maps solely
 *   based on the mapId (as all other parameters can be changed at
 *   runtime), we don't yet have good enough tracking of options to
 *   reliably unset all the options that have been set.
 */
class CachedMapStack {
  static has(key) {
    return this.entries[key] && this.entries[key].length > 0;
  }
  static pop(key) {
    if (!this.entries[key]) return null;
    return this.entries[key].pop() || null;
  }
  static push(key, value) {
    if (!this.entries[key]) this.entries[key] = [];
    this.entries[key].push(value);
  }
}
/**
 * The main hook takes care of creating map-instances and registering them in
 * the api-provider context.
 * @return a tuple of the map-instance created (or null) and the callback
 *   ref that will be used to pass the map-container into this hook.
 * @internal
 */
CachedMapStack.entries = {};
function useMapInstance(props, context) {
  const apiIsLoaded = useApiIsLoaded();
  const [map, setMap] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);
  const [container, containerRef] = useCallbackRef();
  const cameraStateRef = useTrackedCameraStateRef(map);
  const {
      id,
      defaultBounds,
      defaultCenter,
      defaultZoom,
      defaultHeading,
      defaultTilt,
      reuseMaps
    } = props,
    mapOptions = _objectWithoutPropertiesLoose(props, _excluded$2);
  const hasZoom = props.zoom !== undefined || props.defaultZoom !== undefined;
  const hasCenter = props.center !== undefined || props.defaultCenter !== undefined;
  if (!defaultBounds && (!hasZoom || !hasCenter)) {
    console.warn('<Map> component is missing configuration. ' + 'You have to provide zoom and center (via the `zoom`/`defaultZoom` and ' + '`center`/`defaultCenter` props) or specify the region to show using ' + '`defaultBounds`. See ' + 'https://visgl.github.io/react-google-maps/docs/api-reference/components/map#required');
  }
  // apply default camera props if available and not overwritten by controlled props
  if (!mapOptions.center && defaultCenter) mapOptions.center = defaultCenter;
  if (!mapOptions.zoom && Number.isFinite(defaultZoom)) mapOptions.zoom = defaultZoom;
  if (!mapOptions.heading && Number.isFinite(defaultHeading)) mapOptions.heading = defaultHeading;
  if (!mapOptions.tilt && Number.isFinite(defaultTilt)) mapOptions.tilt = defaultTilt;
  for (const key of Object.keys(mapOptions)) if (mapOptions[key] === undefined) delete mapOptions[key];
  const savedMapStateRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)();
  // create the map instance and register it in the context
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (!container || !apiIsLoaded) return;
    const {
      addMapInstance,
      removeMapInstance
    } = context;
    const mapId = props.mapId;
    const cacheKey = mapId || 'default';
    let mapDiv;
    let map;
    if (reuseMaps && CachedMapStack.has(cacheKey)) {
      map = CachedMapStack.pop(cacheKey);
      mapDiv = map.getDiv();
      container.appendChild(mapDiv);
      map.setOptions(mapOptions);
      // detaching the element from the DOM lets the map fall back to its default
      // size, setting the center will trigger reloading the map.
      setTimeout(() => map.setCenter(map.getCenter()), 0);
    } else {
      mapDiv = document.createElement('div');
      mapDiv.style.height = '100%';
      container.appendChild(mapDiv);
      map = new google.maps.Map(mapDiv, mapOptions);
    }
    setMap(map);
    addMapInstance(map, id);
    if (defaultBounds) {
      map.fitBounds(defaultBounds);
    }
    // prevent map not rendering due to missing configuration
    else if (!hasZoom || !hasCenter) {
      map.fitBounds({
        east: 180,
        west: -180,
        south: -90,
        north: 90
      });
    }
    // the savedMapState is used to restore the camera parameters when the mapId is changed
    if (savedMapStateRef.current) {
      const {
        mapId: savedMapId,
        cameraState: savedCameraState
      } = savedMapStateRef.current;
      if (savedMapId !== mapId) {
        map.setOptions(savedCameraState);
      }
    }
    return () => {
      savedMapStateRef.current = {
        mapId,
        // eslint-disable-next-line react-hooks/exhaustive-deps
        cameraState: cameraStateRef.current
      };
      // detach the map-div from the dom
      mapDiv.remove();
      if (reuseMaps) {
        // push back on the stack
        CachedMapStack.push(cacheKey, map);
      } else {
        // remove all event-listeners to minimize the possibility of memory-leaks
        google.maps.event.clearInstanceListeners(map);
      }
      setMap(null);
      removeMapInstance(id);
    };
  },
  // some dependencies are ignored in the list below:
  //  - defaultBounds and the default* camera props will only be used once, and
  //    changes should be ignored
  //  - mapOptions has special hooks that take care of updating the options
  // eslint-disable-next-line react-hooks/exhaustive-deps
  [container, apiIsLoaded, id, props.mapId]);
  return [map, containerRef, cameraStateRef];
}

const GoogleMapsContext = react__WEBPACK_IMPORTED_MODULE_0__.createContext(null);
const Map = props => {
  const {
    children,
    id,
    className,
    style
  } = props;
  const context = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(APIProviderContext);
  const loadingStatus = useApiLoadingStatus();
  if (!context) {
    throw new Error('<Map> can only be used inside an <ApiProvider> component.');
  }
  const [map, mapRef, cameraStateRef] = useMapInstance(props, context);
  useMapCameraParams(map, cameraStateRef, props);
  useMapEvents(map, props);
  useMapOptions(map, props);
  const isDeckGlControlled = useDeckGLCameraUpdate(map, props);
  const isControlledExternally = !!props.controlled;
  // disable interactions with the map for externally controlled maps
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (!map) return;
    // fixme: this doesn't seem to belong here (and it's mostly there for convenience anyway).
    //   The reasoning is that a deck.gl canvas will be put on top of the map, rendering
    //   any default map controls pretty much useless
    if (isDeckGlControlled) {
      map.setOptions({
        disableDefaultUI: true
      });
    }
    // disable all control-inputs when the map is controlled externally
    if (isDeckGlControlled || isControlledExternally) {
      map.setOptions({
        gestureHandling: 'none',
        keyboardShortcuts: false
      });
    }
    return () => {
      map.setOptions({
        gestureHandling: props.gestureHandling,
        keyboardShortcuts: props.keyboardShortcuts
      });
    };
  }, [map, isDeckGlControlled, isControlledExternally, props.gestureHandling, props.keyboardShortcuts]);
  // setup a stable cameraOptions object that can be used as dependency
  const center = props.center ? toLatLngLiteral(props.center) : null;
  let lat = null;
  let lng = null;
  if (center && Number.isFinite(center.lat) && Number.isFinite(center.lng)) {
    lat = center.lat;
    lng = center.lng;
  }
  const cameraOptions = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => {
    var _lat, _lng, _props$zoom, _props$heading, _props$tilt;
    return {
      center: {
        lat: (_lat = lat) != null ? _lat : 0,
        lng: (_lng = lng) != null ? _lng : 0
      },
      zoom: (_props$zoom = props.zoom) != null ? _props$zoom : 0,
      heading: (_props$heading = props.heading) != null ? _props$heading : 0,
      tilt: (_props$tilt = props.tilt) != null ? _props$tilt : 0
    };
  }, [lat, lng, props.zoom, props.heading, props.tilt]);
  // externally controlled mode: reject all camera changes that don't correspond to changes in props
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useLayoutEffect)(() => {
    if (!map || !isControlledExternally) return;
    map.moveCamera(cameraOptions);
    const listener = map.addListener('bounds_changed', () => {
      map.moveCamera(cameraOptions);
    });
    return () => listener.remove();
  }, [map, isControlledExternally, cameraOptions]);
  const combinedStyle = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => _extends({
    width: '100%',
    height: '100%',
    position: 'relative',
    // when using deckgl, the map should be sent to the back
    zIndex: isDeckGlControlled ? -1 : 0
  }, style), [style, isDeckGlControlled]);
  const contextValue = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => ({
    map
  }), [map]);
  if (loadingStatus === APILoadingStatus.AUTH_FAILURE) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      style: _extends({
        position: 'relative'
      }, className ? {} : combinedStyle),
      className: className
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(AuthFailureMessage, null));
  }
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", _extends({
    ref: mapRef,
    "data-testid": 'map',
    style: className ? undefined : combinedStyle,
    className: className
  }, id ? {
    id
  } : {}), map ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(GoogleMapsContext.Provider, {
    value: contextValue
  }, children) : null);
};
Map.deckGLViewProps = true;

const shownMessages = new Set();
function logErrorOnce(...args) {
  const key = JSON.stringify(args);
  if (!shownMessages.has(key)) {
    shownMessages.add(key);
    console.error(...args);
  }
}

/**
 * Retrieves a map-instance from the context. This is either an instance
 * identified by id or the parent map instance if no id is specified.
 * Returns null if neither can be found.
 */
const useMap = (id = null) => {
  const ctx = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(APIProviderContext);
  const {
    map
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(GoogleMapsContext) || {};
  if (ctx === null) {
    logErrorOnce('useMap(): failed to retrieve APIProviderContext. ' + 'Make sure that the <APIProvider> component exists and that the ' + 'component you are calling `useMap()` from is a sibling of the ' + '<APIProvider>.');
    return null;
  }
  const {
    mapInstances
  } = ctx;
  // if an id is specified, the corresponding map or null is returned
  if (id !== null) return mapInstances[id] || null;
  // otherwise, return the closest ancestor
  if (map) return map;
  // finally, return the default map instance
  return mapInstances['default'] || null;
};

function useMapsLibrary(name) {
  const apiIsLoaded = useApiIsLoaded();
  const ctx = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(APIProviderContext);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (!apiIsLoaded || !ctx) return;
    // Trigger loading the libraries via our proxy-method.
    // The returned promise is ignored, since importLibrary will update loadedLibraries
    // list in the context, triggering a re-render.
    void ctx.importLibrary(name);
  }, [apiIsLoaded, ctx, name]);
  return (ctx == null ? void 0 : ctx.loadedLibraries[name]) || null;
}

function setValueForStyles(element, styles, prevStyles) {
  if (styles != null && typeof styles !== 'object') {
    throw new Error('The `style` prop expects a mapping from style properties to values, ' + "not a string. For example, style={{marginRight: spacing + 'em'}} when " + 'using JSX.');
  }
  const elementStyle = element.style;
  // without `prevStyles`, just set all values
  if (prevStyles == null) {
    if (styles == null) return;
    for (const styleName in styles) {
      if (!styles.hasOwnProperty(styleName)) continue;
      setValueForStyle(elementStyle, styleName, styles[styleName]);
    }
    return;
  }
  // unset all styles in `prevStyles` that aren't in `styles`
  for (const styleName in prevStyles) {
    if (prevStyles.hasOwnProperty(styleName) && (styles == null || !styles.hasOwnProperty(styleName))) {
      // Clear style
      const isCustomProperty = styleName.indexOf('--') === 0;
      if (isCustomProperty) {
        elementStyle.setProperty(styleName, '');
      } else if (styleName === 'float') {
        elementStyle.cssFloat = '';
      } else {
        elementStyle[styleName] = '';
      }
    }
  }
  // only assign values from `styles` that are different from `prevStyles`
  if (styles == null) return;
  for (const styleName in styles) {
    const value = styles[styleName];
    if (styles.hasOwnProperty(styleName) && prevStyles[styleName] !== value) {
      setValueForStyle(elementStyle, styleName, value);
    }
  }
}
function setValueForStyle(elementStyle, styleName, value) {
  const isCustomProperty = styleName.indexOf('--') === 0;
  // falsy values will unset the style property
  if (value == null || typeof value === 'boolean' || value === '') {
    if (isCustomProperty) {
      elementStyle.setProperty(styleName, '');
    } else if (styleName === 'float') {
      elementStyle.cssFloat = '';
    } else {
      elementStyle[styleName] = '';
    }
  }
  // custom properties can't be directly assigned
  else if (isCustomProperty) {
    elementStyle.setProperty(styleName, value);
  }
  // numeric values are treated as 'px' unless the style property expects unitless numbers
  else if (typeof value === 'number' && value !== 0 && !isUnitlessNumber(styleName)) {
    elementStyle[styleName] = value + 'px'; // Presumes implicit 'px' suffix for unitless numbers
  }
  // everything else can just be assigned
  else {
    if (styleName === 'float') {
      elementStyle.cssFloat = value;
    } else {
      elementStyle[styleName] = ('' + value).trim();
    }
  }
}
// CSS properties which accept numbers but are not in units of "px".
const unitlessNumbers = new Set(['animationIterationCount', 'aspectRatio', 'borderImageOutset', 'borderImageSlice', 'borderImageWidth', 'boxFlex', 'boxFlexGroup', 'boxOrdinalGroup', 'columnCount', 'columns', 'flex', 'flexGrow', 'flexPositive', 'flexShrink', 'flexNegative', 'flexOrder', 'gridArea', 'gridRow', 'gridRowEnd', 'gridRowSpan', 'gridRowStart', 'gridColumn', 'gridColumnEnd', 'gridColumnSpan', 'gridColumnStart', 'fontWeight', 'lineClamp', 'lineHeight', 'opacity', 'order', 'orphans', 'scale', 'tabSize', 'widows', 'zIndex', 'zoom', 'fillOpacity',
// SVG-related properties
'floodOpacity', 'stopOpacity', 'strokeDasharray', 'strokeDashoffset', 'strokeMiterlimit', 'strokeOpacity', 'strokeWidth']);
function isUnitlessNumber(name) {
  return unitlessNumbers.has(name);
}

/* eslint-disable @typescript-eslint/no-explicit-any */
/**
 * Internally used to bind events to Maps JavaScript API objects.
 * @internal
 */
function useMapsEventListener(target, name, callback) {
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (!target || !name || !callback) return;
    const listener = google.maps.event.addListener(target, name, callback);
    return () => listener == null ? void 0 : listener.remove();
  }, [target, name, callback]);
}

/**
 * Internally used to copy values from props into API-Objects
 * whenever they change.
 *
 * @example
 *   usePropBinding(marker, 'position', position);
 *
 * @internal
 */
function usePropBinding(object, prop, value) {
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (!object) return;
    object[prop] = value;
  }, [object, prop, value]);
}

/* eslint-disable complexity */
/**
 * Copy of the `google.maps.CollisionBehavior` constants.
 * They have to be duplicated here since we can't wait for the maps API to load to be able to use them.
 */
const CollisionBehavior = {
  REQUIRED: 'REQUIRED',
  REQUIRED_AND_HIDES_OPTIONAL: 'REQUIRED_AND_HIDES_OPTIONAL',
  OPTIONAL_AND_HIDES_LOWER_PRIORITY: 'OPTIONAL_AND_HIDES_LOWER_PRIORITY'
};
const AdvancedMarkerContext = react__WEBPACK_IMPORTED_MODULE_0__.createContext(null);
function useAdvancedMarker(props) {
  const [marker, setMarker] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);
  const [contentContainer, setContentContainer] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);
  const prevStyleRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  const map = useMap();
  const markerLibrary = useMapsLibrary('marker');
  const {
    children,
    className,
    style,
    onClick,
    onDrag,
    onDragStart,
    onDragEnd,
    collisionBehavior,
    clickable,
    draggable,
    position,
    title,
    zIndex
  } = props;
  const numChildren = react__WEBPACK_IMPORTED_MODULE_0__.Children.count(children);
  // create an AdvancedMarkerElement instance and add it to the map once available
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (!map || !markerLibrary) return;
    const newMarker = new markerLibrary.AdvancedMarkerElement();
    newMarker.map = map;
    setMarker(newMarker);
    // create the container for marker content if there are children
    let contentElement = null;
    if (numChildren > 0) {
      contentElement = document.createElement('div');
      newMarker.content = contentElement;
      setContentContainer(contentElement);
    }
    return () => {
      var _contentElement;
      newMarker.map = null;
      (_contentElement = contentElement) == null || _contentElement.remove();
      setMarker(null);
      setContentContainer(null);
    };
  }, [map, markerLibrary, numChildren]);
  // update className and styles of marker.content element
  usePropBinding(contentContainer, 'className', className != null ? className : '');
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (!contentContainer) return;
    setValueForStyles(contentContainer, style || null, prevStyleRef.current);
    prevStyleRef.current = style || null;
  }, [contentContainer, className, style]);
  // copy other props
  usePropBinding(marker, 'position', position);
  usePropBinding(marker, 'title', title != null ? title : '');
  usePropBinding(marker, 'zIndex', zIndex);
  usePropBinding(marker, 'collisionBehavior', collisionBehavior);
  // set gmpDraggable from props (when unspecified, it's true if any drag-event
  // callbacks are specified)
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (!marker) return;
    if (draggable !== undefined) marker.gmpDraggable = draggable;else if (onDrag || onDragStart || onDragEnd) marker.gmpDraggable = true;else marker.gmpDraggable = false;
  }, [marker, draggable, onDrag, onDragEnd, onDragStart]);
  // set gmpClickable from props (when unspecified, it's true if the onClick event
  // callback is specified)
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (!marker) return;
    if (clickable !== undefined) marker.gmpClickable = clickable;else if (onClick) marker.gmpClickable = true;else marker.gmpClickable = false;
  }, [marker, clickable, onClick]);
  useMapsEventListener(marker, 'click', onClick);
  useMapsEventListener(marker, 'drag', onDrag);
  useMapsEventListener(marker, 'dragstart', onDragStart);
  useMapsEventListener(marker, 'dragend', onDragEnd);
  return [marker, contentContainer];
}
const AdvancedMarker = (0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)((props, ref) => {
  const {
    children
  } = props;
  const [marker, contentContainer] = useAdvancedMarker(props);
  const advancedMarkerContextValue = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => marker ? {
    marker
  } : null, [marker]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useImperativeHandle)(ref, () => marker, [marker]);
  if (!contentContainer) return null;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(AdvancedMarkerContext.Provider, {
    value: advancedMarkerContextValue
  }, (0,react_dom__WEBPACK_IMPORTED_MODULE_1__.createPortal)(children, contentContainer));
});
function useAdvancedMarkerRef() {
  const [marker, setMarker] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);
  const refCallback = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(m => {
    setMarker(m);
  }, []);
  return [refCallback, marker];
}

const _excluded$1 = ["children", "style", "className", "pixelOffset", "anchor", "shouldFocus", "onClose", "onCloseClick"];
/**
 * Component to render an Info Window with the Maps JavaScript API
 */
const InfoWindow = props => {
  const {
      // content options
      children,
      style,
      className,
      pixelOffset,
      // open options
      anchor,
      shouldFocus,
      // events
      onClose,
      onCloseClick
    } = props,
    infoWindowOptions = _objectWithoutPropertiesLoose(props, _excluded$1);
  // ## create infowindow instance once the mapsLibrary is available.
  const mapsLibrary = useMapsLibrary('maps');
  const [infoWindow, setInfoWindow] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);
  const [contentContainer, setContentContainer] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (!mapsLibrary) return;
    if (pixelOffset) {
      infoWindowOptions.pixelOffset = new google.maps.Size(pixelOffset[0], pixelOffset[1]);
    }
    // intentionally shadowing the state variables here
    const infoWindow = new google.maps.InfoWindow(infoWindowOptions);
    const contentContainer = document.createElement('div');
    infoWindow.setContent(contentContainer);
    setInfoWindow(infoWindow);
    setContentContainer(contentContainer);
    // cleanup: remove infoWindow, all event listeners and contentElement
    return () => {
      google.maps.event.clearInstanceListeners(infoWindow);
      infoWindow.close();
      contentContainer.remove();
      setInfoWindow(null);
      setContentContainer(null);
    };
  },
  // `infoWindowOptions` is missing from dependencies:
  //
  // We don't want to re-create the infowindow instance
  // when the options change.
  // Updating the options is handled in the useEffect below.
  //
  // eslint-disable-next-line react-hooks/exhaustive-deps
  [mapsLibrary]);
  // ## update className and styles for `contentContainer`
  // stores previously applied style properties, so they can be removed when unset
  const prevStyleRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (!contentContainer) return;
    setValueForStyles(contentContainer, style || null, prevStyleRef.current);
    prevStyleRef.current = style || null;
    if (className !== contentContainer.className) contentContainer.className = className || '';
  }, [contentContainer, className, style]);
  // ## update options
  useDeepCompareEffect(() => {
    if (!infoWindow) return;
    if (pixelOffset) {
      infoWindowOptions.pixelOffset = new google.maps.Size(pixelOffset[0], pixelOffset[1]);
    }
    infoWindow.setOptions(infoWindowOptions);
  },
  // dependency `infoWindow` isn't needed since options are passed to the constructor
  // eslint-disable-next-line react-hooks/exhaustive-deps
  [infoWindowOptions]);
  // ## bind event handlers
  useMapsEventListener(infoWindow, 'close', onClose);
  useMapsEventListener(infoWindow, 'closeclick', onCloseClick);
  // ## open info window when content and map are available
  const map = useMap();
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    // `anchor === null` means an anchor is defined but not ready yet.
    if (!contentContainer || !infoWindow || anchor === null) return;
    const openOptions = {
      map
    };
    if (anchor) {
      openOptions.anchor = anchor;
    }
    if (shouldFocus !== undefined) {
      openOptions.shouldFocus = shouldFocus;
    }
    infoWindow.open(openOptions);
  }, [infoWindow, contentContainer, anchor, map, shouldFocus]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, contentContainer !== null && (0,react_dom__WEBPACK_IMPORTED_MODULE_1__.createPortal)(children, contentContainer));
};

/**
 * Copy of the `google.maps.ControlPosition` constants.
 * They have to be duplicated here since we can't wait for the maps API to load to be able to use them.
 */
const ControlPosition = {
  TOP_LEFT: 1,
  TOP_CENTER: 2,
  TOP: 2,
  TOP_RIGHT: 3,
  LEFT_CENTER: 4,
  LEFT_TOP: 5,
  LEFT: 5,
  LEFT_BOTTOM: 6,
  RIGHT_TOP: 7,
  RIGHT: 7,
  RIGHT_CENTER: 8,
  RIGHT_BOTTOM: 9,
  BOTTOM_LEFT: 10,
  BOTTOM_CENTER: 11,
  BOTTOM: 11,
  BOTTOM_RIGHT: 12,
  CENTER: 13,
  BLOCK_START_INLINE_START: 14,
  BLOCK_START_INLINE_CENTER: 15,
  BLOCK_START_INLINE_END: 16,
  INLINE_START_BLOCK_CENTER: 17,
  INLINE_START_BLOCK_START: 18,
  INLINE_START_BLOCK_END: 19,
  INLINE_END_BLOCK_START: 20,
  INLINE_END_BLOCK_CENTER: 21,
  INLINE_END_BLOCK_END: 22,
  BLOCK_END_INLINE_START: 23,
  BLOCK_END_INLINE_CENTER: 24,
  BLOCK_END_INLINE_END: 25
};
const MapControl = ({
  children,
  position
}) => {
  const controlContainer = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => document.createElement('div'), []);
  const map = useMap();
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (!map) return;
    const controls = map.controls[position];
    controls.push(controlContainer);
    return () => {
      const controlsArray = controls.getArray();
      // controlsArray could be undefined if the map is in an undefined state (e.g. invalid API-key, see #276
      if (!controlsArray) return;
      const index = controlsArray.indexOf(controlContainer);
      controls.removeAt(index);
    };
  }, [controlContainer, map, position]);
  return (0,react_dom__WEBPACK_IMPORTED_MODULE_1__.createPortal)(children, controlContainer);
};

const _excluded = ["onClick", "onDrag", "onDragStart", "onDragEnd", "onMouseOver", "onMouseOut"];
function useMarker(props) {
  const [marker, setMarker] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);
  const map = useMap();
  const {
      onClick,
      onDrag,
      onDragStart,
      onDragEnd,
      onMouseOver,
      onMouseOut
    } = props,
    markerOptions = _objectWithoutPropertiesLoose(props, _excluded);
  const {
    position,
    draggable
  } = markerOptions;
  // create marker instance and add to the map once the map is available
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (!map) {
      if (map === undefined) console.error('<Marker> has to be inside a Map component.');
      return;
    }
    const newMarker = new google.maps.Marker(markerOptions);
    newMarker.setMap(map);
    setMarker(newMarker);
    return () => {
      newMarker.setMap(null);
      setMarker(null);
    };
    // We do not want to re-render the whole marker when the options change.
    // Marker options update is handled in a useEffect below.
    // Excluding markerOptions from dependency array on purpose here.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [map]);
  // attach and re-attach event-handlers when any of the properties change
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (!marker) return;
    const m = marker;
    // Add event listeners
    const gme = google.maps.event;
    if (onClick) gme.addListener(m, 'click', onClick);
    if (onDrag) gme.addListener(m, 'drag', onDrag);
    if (onDragStart) gme.addListener(m, 'dragstart', onDragStart);
    if (onDragEnd) gme.addListener(m, 'dragend', onDragEnd);
    if (onMouseOver) gme.addListener(m, 'mouseover', onMouseOver);
    if (onMouseOut) gme.addListener(m, 'mouseout', onMouseOut);
    marker.setDraggable(Boolean(draggable));
    return () => {
      gme.clearInstanceListeners(m);
    };
  }, [marker, draggable, onClick, onDrag, onDragStart, onDragEnd, onMouseOver, onMouseOut]);
  // update markerOptions (note the dependencies aren't properly checked
  // here, we just assume that setOptions is smart enough to not waste a
  // lot of time updating values that didn't change)
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (!marker) return;
    if (markerOptions) marker.setOptions(markerOptions);
  }, [marker, markerOptions]);
  // update position when changed
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    // Should not update position when draggable
    if (draggable || !position || !marker) return;
    marker.setPosition(position);
  }, [draggable, position, marker]);
  return marker;
}
/**
 * Component to render a marker on a map
 */
const Marker = (0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)((props, ref) => {
  const marker = useMarker(props);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useImperativeHandle)(ref, () => marker, [marker]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null);
});
function useMarkerRef() {
  const [marker, setMarker] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);
  const refCallback = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(m => {
    setMarker(m);
  }, []);
  return [refCallback, marker];
}

/**
 * Component to configure the appearance of an AdvancedMarker
 */
const Pin = props => {
  var _useContext;
  const advancedMarker = (_useContext = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(AdvancedMarkerContext)) == null ? void 0 : _useContext.marker;
  const glyphContainer = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => document.createElement('div'), []);
  // Create Pin View instance
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (!advancedMarker) {
      if (advancedMarker === undefined) {
        console.error('The <Pin> component can only be used inside <AdvancedMarker>.');
      }
      return;
    }
    if (props.glyph && props.children) {
      logErrorOnce('The <Pin> component only uses children to render the glyph if both the glyph property and children are present.');
    }
    if (react__WEBPACK_IMPORTED_MODULE_0__.Children.count(props.children) > 1) {
      logErrorOnce('Passing multiple children to the <Pin> component might lead to unexpected results.');
    }
    const pinViewOptions = _extends({}, props);
    const pinElement = new google.maps.marker.PinElement(pinViewOptions);
    // Set glyph to glyph container if children are present (rendered via portal).
    // If both props.glyph and props.children are present, props.children takes priority.
    if (props.children) {
      pinElement.glyph = glyphContainer;
    }
    // Set content of Advanced Marker View to the Pin View element
    advancedMarker.content = pinElement.element;
  }, [advancedMarker, glyphContainer, props]);
  return (0,react_dom__WEBPACK_IMPORTED_MODULE_1__.createPortal)(props.children, glyphContainer);
};

const mapLinear = (x, a1, a2, b1, b2) => b1 + (x - a1) * (b2 - b1) / (a2 - a1);
const getMapMaxTilt = zoom => {
  if (zoom <= 10) {
    return 30;
  }
  if (zoom >= 15.5) {
    return 67.5;
  }
  // range [10...14]
  if (zoom <= 14) {
    return mapLinear(zoom, 10, 14, 30, 45);
  }
  // range [14...15.5]
  return mapLinear(zoom, 14, 15.5, 45, 67.5);
};
/**
 * Function to limit the tilt range of the Google map when updating the view state
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const limitTiltRange = ({
  viewState
}) => {
  const pitch = viewState.pitch;
  const gmZoom = viewState.zoom + 1;
  const maxTilt = getMapMaxTilt(gmZoom);
  return _extends({}, viewState, {
    fovy: 25,
    pitch: Math.min(maxTilt, pitch)
  });
};


//# sourceMappingURL=index.modern.mjs.map


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_plugins__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/plugins */ "@wordpress/plugins");
/* harmony import */ var _wordpress_plugins__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_plugins__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _wordpress_edit_post__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/edit-post */ "@wordpress/edit-post");
/* harmony import */ var _wordpress_edit_post__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_edit_post__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _secrets_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./secrets.js */ "./src/secrets.js");
/* harmony import */ var _vis_gl_react_google_maps__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @vis.gl/react-google-maps */ "./node_modules/@vis.gl/react-google-maps/dist/index.modern.mjs");
/* harmony import */ var _wordpress_core_data__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @wordpress/core-data */ "@wordpress/core-data");
/* harmony import */ var _wordpress_core_data__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_wordpress_core_data__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _wordpress_commands__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @wordpress/commands */ "@wordpress/commands");
/* harmony import */ var _wordpress_commands__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_wordpress_commands__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _wordpress_icons__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @wordpress/icons */ "./node_modules/@wordpress/icons/build-module/library/plus-circle.js");
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./index.scss */ "./src/index.scss");

/**
 * WordPress dependencies
 */







/* Tutorial here https://developers.google.com/maps/documentation/javascript/examples/rgm-autocomplete & here
https://developers.google.com/maps/documentation/javascript/examples/rgm-autocomplete#maps_rgm_autocomplete-javascript */
// import {APIProvider, Map, AdvancedMarker, Marker} from '@vis.gl/react-google-maps';





/**
 * Internal dependencies
 */


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
function toggleSidebar() {
  const isOpen = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_9__.select)('core/edit-post').isPluginSidebarOpened('block-development-examples-post-meta-modal-2502fb/geolocation-sidebar-plugin');
  const generalSidebarName = wp.data.select('core/edit-post').getActiveGeneralSidebarName();
  // alert("Sidebar name: " + generalSidebarName);

  if (isOpen) {
    // alert("toggle Sidebar " + isOpen);
    (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_9__.dispatch)('core/edit-post').openGeneralSidebar('edit-post/document');
  } else {
    // alert("toggle Sidebar " + isOpen);
    (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_9__.dispatch)('core/edit-post').openGeneralSidebar('block-development-examples-post-meta-modal-2502fb/geolocation-sidebar-plugin');
  }
}

//   Map Handler
const MapHandler = ({
  place,
  marker
}) => {
  const map = (0,_vis_gl_react_google_maps__WEBPACK_IMPORTED_MODULE_7__.useMap)();
  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_4__.useEffect)(() => {
    if (!map || !place || !marker) return;
    if (place.geometry?.viewport) {
      map.fitBounds(place.geometry?.viewport);
    }
    marker.position = place.geometry?.location;
  }, [map, place, marker]);
  return null;
};

//   Place Autocomplete
const PlaceAutocomplete = ({
  onPlaceSelect
}) => {
  const [placeAutocomplete, setPlaceAutocomplete] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_4__.useState)(null);
  const inputRef = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_4__.useRef)(null);
  const places = (0,_vis_gl_react_google_maps__WEBPACK_IMPORTED_MODULE_7__.useMapsLibrary)("places");
  const [meta, setMeta] = (0,_wordpress_core_data__WEBPACK_IMPORTED_MODULE_8__.useEntityProp)('postType', 'post', 'meta');

  // Change
  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_4__.useEffect)(() => {
    console.log("places changed");
    if (!places || !inputRef.current) return;
    const options = {
      fields: ["geometry", "name", "formatted_address"]
    };
    // const results = new places.Autocomplete(inputRef.current, options);
    // const results = new google.maps.places.PlaceAutocompleteElement();

    // console.log("results ", results);

    setPlaceAutocomplete(new places.Autocomplete(inputRef.current, options));
  }, [places]);

  // Change
  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_4__.useEffect)(() => {
    console.log("onPlaceSelect, placeAutocomplete changed");
    if (!placeAutocomplete) return;
    placeAutocomplete.addListener("place_changed", () => {
      console.log("also, 	placeAutocomplete.getPlace() occurred", placeAutocomplete.getPlace());
      onPlaceSelect(placeAutocomplete.getPlace());
      const place = placeAutocomplete.getPlace();
      const setmeta = setMeta({
        geo_latitude: place.geometry.location.lat(),
        geo_longitude: place.geometry.location.lng()
      });
    });
  }, [onPlaceSelect, placeAutocomplete]);
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "autocomplete-container"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("input", {
    ref: inputRef
  }));
};
function MetaModalManager() {
  const [isModalOpen, setModalOpen] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_4__.useState)(false);
  const [meta, setMeta] = (0,_wordpress_core_data__WEBPACK_IMPORTED_MODULE_8__.useEntityProp)('postType', 'post', 'meta');
  const [selectedPlace, setSelectedPlace] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_4__.useState)(null);
  const [markerRef, marker] = (0,_vis_gl_react_google_maps__WEBPACK_IMPORTED_MODULE_7__.useAdvancedMarkerRef)();

  // const [ lat, setLat] = useState(meta?.geo_latitude || "61.2176");
  // const [ lng, setLng] = useState(meta?.geo_latitude || "-149.8997");
  // const { dispatch, select } = wp.data;

  // Register a command for the Command Palette.
  (0,_wordpress_commands__WEBPACK_IMPORTED_MODULE_10__.useCommand)({
    name: 'manage-post-geolocation',
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Edit Geolocation data', 'block-development-examples'),
    icon: _wordpress_icons__WEBPACK_IMPORTED_MODULE_12__["default"],
    callback: () => setModalOpen(true),
    context: 'block-editor'
  });

  /*	*/
  (0,_wordpress_commands__WEBPACK_IMPORTED_MODULE_10__.useCommand)({
    name: 'view-post-geolocation',
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Toggle Geolocation Panel', 'block-development-examples'),
    icon: _wordpress_icons__WEBPACK_IMPORTED_MODULE_12__["default"],
    callback: () => toggleSidebar(),
    context: 'block-editor'
  });
  const alaska = {
    lat: 61.2176,
    lng: -149.8997
  };
  const position = {
    lat: meta?.geo_latitude || alaska.lat,
    lng: meta?.geo_longitude || alaska.lng
  };
  const handleDragChange = ev => {
    console.log('camera changed: ', ev);
    const lat = ev.latLng.lat();
    const lng = ev.latLng.lng();
    setMeta({
      // ...meta,
      geo_latitude: lat,
      geo_longitude: lng
    });
  };
  const handleRightClick = ev => {
    console.log('right click!', ev);
    const lat = ev.detail.latLng.lat;
    const lng = ev.detail.latLng.lng;
    setMeta({
      // ...meta,
      geo_latitude: lat,
      geo_longitude: lng
    });
  };
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_edit_post__WEBPACK_IMPORTED_MODULE_5__.PluginSidebarMoreMenuItem, {
    target: "geolocation-sidebar-plugin",
    icon: "admin-site-alt"
  }, "Geolocation Data"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_edit_post__WEBPACK_IMPORTED_MODULE_5__.PluginSidebar, {
    name: "geolocation-sidebar-plugin",
    icon: "admin-site-alt",
    title: "Geolocation"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("h3", null, "Current Geodata:"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("ul", null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("li", null, "Title: ", meta?.geo_title), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("li", null, "Address? ", meta?.geo_address), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("li", null, "Latitude? ", meta?.geo_latitude), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("li", null, "Longitude? ", meta?.geo_longitude), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("li", null, "Public? ", meta?.geo_public)), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("button", {
    onClick: () => setModalOpen(true)
  }, "Edit"))), isModalOpen && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.Modal, {
    className: "post_meta_modal_2502fb_container",
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Edit Geolocation Data', 'block-development-examples'),
    onRequestClose: () => setModalOpen(false)
    // size="large"
    ,
    isFullScreen: true
  }, "Befire", (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    style: {
      position: "relative",
      aspectRatio: "3 / 1"
    }
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_vis_gl_react_google_maps__WEBPACK_IMPORTED_MODULE_7__.APIProvider, {
    apiKey: _secrets_js__WEBPACK_IMPORTED_MODULE_6__["default"],
    version: "3"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_vis_gl_react_google_maps__WEBPACK_IMPORTED_MODULE_7__.Map, {
    mapId: "geocoder_tool",
    defaultCenter: position,
    defaultZoom: 10,
    gestureHandling: 'greedy',
    onContextmenu: handleRightClick
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_vis_gl_react_google_maps__WEBPACK_IMPORTED_MODULE_7__.AdvancedMarker, {
    position: position,
    draggable: true,
    onDragEnd: handleDragChange
  })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_vis_gl_react_google_maps__WEBPACK_IMPORTED_MODULE_7__.MapControl, {
    position: _vis_gl_react_google_maps__WEBPACK_IMPORTED_MODULE_7__.ControlPosition.TOP
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "autocomplete-control"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(PlaceAutocomplete, {
    onPlaceSelect: setSelectedPlace
  })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("button", null, "HEY!")), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(MapHandler, {
    place: selectedPlace,
    marker: marker
  }))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("li", null, "Latitude? ", meta?.geo_latitude), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("li", null, "Longitude? ", meta?.geo_longitude), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.TextControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Text Field', 'block-development-examples'),
    value: meta?.geo_title || '',
    onChange: newValue => setMeta({
      ...meta,
      geo_title: newValue
    })
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.RadioControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Radio Field', 'block-development-examples'),
    selected: meta?.geo_public || '',
    options: [{
      label: 'Visible',
      value: true
    }, {
      label: 'Hidden',
      value: false
    }],
    onChange: newValue => setMeta({
      ...meta,
      geo_public: newValue
    })
  })));
}
(0,_wordpress_plugins__WEBPACK_IMPORTED_MODULE_2__.registerPlugin)('block-development-examples-post-meta-modal-2502fb', {
  render: MetaModalManager
});
})();

/******/ })()
;
//# sourceMappingURL=index.js.map