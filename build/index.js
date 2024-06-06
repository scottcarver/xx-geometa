(()=>{"use strict";var e={17:e=>{e.exports=function e(t,n){if(t===n)return!0;if(t&&n&&"object"==typeof t&&"object"==typeof n){if(t.constructor!==n.constructor)return!1;var o,r,a;if(Array.isArray(t)){if((o=t.length)!=n.length)return!1;for(r=o;0!=r--;)if(!e(t[r],n[r]))return!1;return!0}if(t.constructor===RegExp)return t.source===n.source&&t.flags===n.flags;if(t.valueOf!==Object.prototype.valueOf)return t.valueOf()===n.valueOf();if(t.toString!==Object.prototype.toString)return t.toString()===n.toString();if((o=(a=Object.keys(t)).length)!==Object.keys(n).length)return!1;for(r=o;0!=r--;)if(!Object.prototype.hasOwnProperty.call(n,a[r]))return!1;for(r=o;0!=r--;){var l=a[r];if(!e(t[l],n[l]))return!1}return!0}return t!=t&&n!=n}}},t={};function n(o){var r=t[o];if(void 0!==r)return r.exports;var a=t[o]={exports:{}};return e[o](a,a.exports,n),a.exports}(()=>{const e=window.React,t=window.wp.i18n,o=window.wp.plugins,r=window.wp.components,a=window.wp.element,l=window.wp.editPost,i=window.ReactDOM;var s=n(17);function c(e){var t=function(e,t){if("object"!=typeof e||!e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var o=n.call(e,"string");if("object"!=typeof o)return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"==typeof t?t:String(t)}function u(){return u=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},u.apply(this,arguments)}function d(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}const m={NOT_LOADED:"NOT_LOADED",LOADING:"LOADING",LOADED:"LOADED",FAILED:"FAILED",AUTH_FAILURE:"AUTH_FAILURE"};class p{static async load(e,t){var n;const o=e.libraries?e.libraries.split(","):[],r=this.serializeParams(e);this.listeners.push(t),null!=(n=window.google)&&null!=(n=n.maps)&&n.importLibrary?(this.serializedApiParams||(this.loadingStatus=m.LOADED),this.notifyLoadingStatusListeners()):(this.serializedApiParams=r,this.initImportLibrary(e)),this.serializedApiParams&&this.serializedApiParams!==r&&console.warn("[google-maps-api-loader] The maps API has already been loaded with different parameters and will not be loaded again. Refresh the page for new values to have effect.");const a=["maps",...o];await Promise.all(a.map((e=>google.maps.importLibrary(e))))}static serializeParams(e){return[e.v,e.key,e.language,e.region,e.authReferrerPolicy,e.solutionChannel].join("/")}static initImportLibrary(e){if(window.google||(window.google={}),window.google.maps||(window.google.maps={}),window.google.maps.importLibrary)return void console.error("[google-maps-api-loader-internal]: initImportLibrary must only be called once");let t=null;const n=()=>t||(t=new Promise(((t,n)=>{var o;const r=document.createElement("script"),a=new URLSearchParams;for(const[t,n]of Object.entries(e)){const e=t.replace(/[A-Z]/g,(e=>"_"+e[0].toLowerCase()));a.set(e,n)}a.set("loading","async"),a.set("callback","__googleMapsCallback__"),r.async=!0,r.src="https://maps.googleapis.com/maps/api/js?"+a.toString(),r.nonce=(null==(o=document.querySelector("script[nonce]"))?void 0:o.nonce)||"",r.onerror=()=>{this.loadingStatus=m.FAILED,this.notifyLoadingStatusListeners(),n(new Error("The Google Maps JavaScript API could not load."))},window.__googleMapsCallback__=()=>{this.loadingStatus=m.LOADED,this.notifyLoadingStatusListeners(),t()},window.gm_authFailure=()=>{this.loadingStatus=m.AUTH_FAILURE,this.notifyLoadingStatusListeners()},this.loadingStatus=m.LOADING,this.notifyLoadingStatusListeners(),document.head.append(r)})),t);google.maps.importLibrary=e=>n().then((()=>google.maps.importLibrary(e)))}static notifyLoadingStatusListeners(){for(const e of this.listeners)e(this.loadingStatus)}}p.loadingStatus=m.NOT_LOADED,p.serializedApiParams=void 0,p.listeners=[];const g=["onLoad","apiKey","version","libraries"],f=["children"],h=e.createContext(null),b=t=>{const{children:n}=t,o=d(t,f),{mapInstances:r,addMapInstance:a,removeMapInstance:l,clearMapInstances:i}=function(){const[t,n]=(0,e.useState)({});return{mapInstances:t,addMapInstance:(e,t="default")=>{n((n=>u({},n,{[t]:e})))},removeMapInstance:(e="default")=>{n((t=>d(t,[e].map(c))))},clearMapInstances:()=>{n({})}}}(),{status:s,loadedLibraries:m,importLibrary:b}=function(t){const{onLoad:n,apiKey:o,version:r,libraries:a=[]}=t,l=d(t,g),[i,s]=(0,e.useState)(p.loadingStatus),[c,m]=(0,e.useReducer)(((e,t)=>u({},e,{[t.name]:t.value})),{}),f=(0,e.useMemo)((()=>null==a?void 0:a.join(",")),[a]),h=(0,e.useMemo)((()=>JSON.stringify(u({apiKey:o,version:r},l))),[o,r,l]),b=(0,e.useCallback)((async e=>{var t;if(c[e])return c[e];if(null==(t=google)||null==(t=t.maps)||!t.importLibrary)throw new Error("[api-provider-internal] importLibrary was called before google.maps.importLibrary was defined.");const n=await window.google.maps.importLibrary(e);return m({name:e,value:n}),n}),[c]);return(0,e.useEffect)((()=>{(async()=>{try{const e=u({key:o},l);r&&(e.v=r),(null==f?void 0:f.length)>0&&(e.libraries=f),void 0===e.solutionChannel?e.solutionChannel="GMP_VISGL_react":""===e.solutionChannel&&delete e.solutionChannel,await p.load(e,(e=>s(e)));for(const e of["core","maps",...a])await b(e);n&&n()}catch(e){console.error("<ApiProvider> failed to load the Google Maps JavaScript API",e)}})()}),[o,f,h]),{status:i,loadedLibraries:c,importLibrary:b}}(o),v=(0,e.useMemo)((()=>({mapInstances:r,addMapInstance:a,removeMapInstance:l,clearMapInstances:i,status:s,loadedLibraries:m,importLibrary:b})),[r,a,l,i,s,m,b]);return e.createElement(h.Provider,{value:v},n)};function v(e,t,n){const o={type:e,map:t,detail:{},stoppable:!1,stop:()=>{}};if(w.includes(e)){const e=o,n=t.getCenter(),r=t.getZoom(),a=t.getHeading()||0,l=t.getTilt()||0,i=t.getBounds();return n&&i&&Number.isFinite(r)||console.warn("[createEvent] at least one of the values from the map returned undefined. This is not expected to happen. Please report an issue at https://github.com/visgl/react-google-maps/issues/new"),e.detail={center:(null==n?void 0:n.toJSON())||{lat:0,lng:0},zoom:r||0,heading:a,tilt:l,bounds:(null==i?void 0:i.toJSON())||{north:90,east:180,south:-90,west:-180}},e}if(E.includes(e)){var r;if(!n)throw new Error("[createEvent] mouse events must provide a srcEvent");const e=o;return e.domEvent=n.domEvent,e.stoppable=!0,e.stop=()=>n.stop(),e.detail={latLng:(null==(r=n.latLng)?void 0:r.toJSON())||null,placeId:n.placeId},e}return o}const y={onBoundsChanged:"bounds_changed",onCenterChanged:"center_changed",onClick:"click",onContextmenu:"contextmenu",onDblclick:"dblclick",onDrag:"drag",onDragend:"dragend",onDragstart:"dragstart",onHeadingChanged:"heading_changed",onIdle:"idle",onIsFractionalZoomEnabledChanged:"isfractionalzoomenabled_changed",onMapCapabilitiesChanged:"mapcapabilities_changed",onMapTypeIdChanged:"maptypeid_changed",onMousemove:"mousemove",onMouseout:"mouseout",onMouseover:"mouseover",onProjectionChanged:"projection_changed",onRenderingTypeChanged:"renderingtype_changed",onTilesLoaded:"tilesloaded",onTiltChanged:"tilt_changed",onZoomChanged:"zoom_changed",onCameraChanged:"bounds_changed"},w=["bounds_changed","center_changed","heading_changed","tilt_changed","zoom_changed"],E=["click","contextmenu","dblclick","mousemove","mouseout","mouseover"],C=Object.keys(y);const S=new Set(["backgroundColor","clickableIcons","controlSize","disableDefaultUI","disableDoubleClickZoom","draggable","draggableCursor","draggingCursor","fullscreenControl","fullscreenControlOptions","gestureHandling","isFractionalZoomEnabled","keyboardShortcuts","mapTypeControl","mapTypeControlOptions","mapTypeId","maxZoom","minZoom","noClear","panControl","panControlOptions","restriction","rotateControl","rotateControlOptions","scaleControl","scaleControlOptions","scrollwheel","streetView","streetViewControl","streetViewControlOptions","styles","zoomControl","zoomControlOptions"]);function _(){var t;return(null==(t=(0,e.useContext)(h))?void 0:t.status)||m.NOT_LOADED}function L(e){return function(e){return!(!e||"object"!=typeof e)&&"lat"in e&&"lng"in e&&Number.isFinite(e.lat)&&Number.isFinite(e.lng)}(e)?e:e.toJSON()}const P=()=>e.createElement("div",{style:{position:"absolute",top:0,left:0,bottom:0,right:0,zIndex:999,display:"flex",flexFlow:"column nowrap",textAlign:"center",justifyContent:"center",fontSize:".8rem",color:"rgba(0,0,0,0.6)",background:"#dddddd",padding:"1rem 1.5rem"}},e.createElement("h2",null,"Error: AuthFailure"),e.createElement("p",null,"A problem with your API key prevents the map from rendering correctly. Please make sure the value of the ",e.createElement("code",null,"APIProvider.apiKey")," prop is correct. Check the error-message in the console for further details."));function O(){return _()===m.LOADED}const k=["id","defaultBounds","defaultCenter","defaultZoom","defaultHeading","defaultTilt","reuseMaps"];class x{static has(e){return this.entries[e]&&this.entries[e].length>0}static pop(e){return this.entries[e]&&this.entries[e].pop()||null}static push(e,t){this.entries[e]||(this.entries[e]=[]),this.entries[e].push(t)}}function M(t,n){const o=O(),[r,a]=(0,e.useState)(null),[l,i]=function(){const[t,n]=(0,e.useState)(null);return[t,(0,e.useCallback)((e=>n(e)),[n])]}(),s=function(t){const n=function(){const[,t]=(0,e.useReducer)((e=>e+1),0);return t}(),o=(0,e.useRef)({center:{lat:0,lng:0},heading:0,tilt:0,zoom:0});return(0,e.useEffect)((()=>{if(!t)return;const e=google.maps.event.addListener(t,"bounds_changed",(()=>{!function(e,t){const n=e.getCenter(),o=e.getZoom(),r=e.getHeading()||0,a=e.getTilt()||0,l=e.getBounds();n&&l&&Number.isFinite(o)||console.warn("[useTrackedCameraState] at least one of the values from the map returned undefined. This is not expected to happen. Please report an issue at https://github.com/visgl/react-google-maps/issues/new"),Object.assign(t.current,{center:(null==n?void 0:n.toJSON())||{lat:0,lng:0},zoom:o||0,heading:r,tilt:a})}(t,o),n()}));return()=>e.remove()}),[t,n]),o}(r),{id:c,defaultBounds:u,defaultCenter:m,defaultZoom:p,defaultHeading:g,defaultTilt:f,reuseMaps:h}=t,b=d(t,k),v=void 0!==t.zoom||void 0!==t.defaultZoom,y=void 0!==t.center||void 0!==t.defaultCenter;u||v&&y||console.warn("<Map> component is missing configuration. You have to provide zoom and center (via the `zoom`/`defaultZoom` and `center`/`defaultCenter` props) or specify the region to show using `defaultBounds`. See https://visgl.github.io/react-google-maps/docs/api-reference/components/map#required"),!b.center&&m&&(b.center=m),!b.zoom&&Number.isFinite(p)&&(b.zoom=p),!b.heading&&Number.isFinite(g)&&(b.heading=g),!b.tilt&&Number.isFinite(f)&&(b.tilt=f);for(const e of Object.keys(b))void 0===b[e]&&delete b[e];const w=(0,e.useRef)();return(0,e.useEffect)((()=>{if(!l||!o)return;const{addMapInstance:e,removeMapInstance:r}=n,i=t.mapId,d=i||"default";let m,p;if(h&&x.has(d)?(p=x.pop(d),m=p.getDiv(),l.appendChild(m),p.setOptions(b),setTimeout((()=>p.setCenter(p.getCenter())),0)):(m=document.createElement("div"),m.style.height="100%",l.appendChild(m),p=new google.maps.Map(m,b)),a(p),e(p,c),u?p.fitBounds(u):v&&y||p.fitBounds({east:180,west:-180,south:-90,north:90}),w.current){const{mapId:e,cameraState:t}=w.current;e!==i&&p.setOptions(t)}return()=>{w.current={mapId:i,cameraState:s.current},m.remove(),h?x.push(d,p):google.maps.event.clearInstanceListeners(p),a(null),r(c)}}),[l,o,c,t.mapId]),[r,i,s]}x.entries={};const I=e.createContext(null),D=t=>{const{children:n,id:o,className:r,style:a}=t,l=(0,e.useContext)(h),i=_();if(!l)throw new Error("<Map> can only be used inside an <ApiProvider> component.");const[c,d,p]=M(t,l);!function(t,n,o){const r=o.center?L(o.center):null;let a=null,l=null;r&&Number.isFinite(r.lat)&&Number.isFinite(r.lng)&&(a=r.lat,l=r.lng);const i=Number.isFinite(o.zoom)?o.zoom:null,s=Number.isFinite(o.heading)?o.heading:null,c=Number.isFinite(o.tilt)?o.tilt:null;(0,e.useLayoutEffect)((()=>{if(!t)return;const e={};let o=!1;null===a||null===l||n.current.center.lat===a&&n.current.center.lng===l||(e.center={lat:a,lng:l},o=!0),null!==i&&n.current.zoom!==i&&(e.zoom=i,o=!0),null!==s&&n.current.heading!==s&&(e.heading=s,o=!0),null!==c&&n.current.tilt!==c&&(e.tilt=c,o=!0),o&&t.moveCamera(e)}))}(c,p,t),function(t,n){for(const o of C){const r=n[o],a=y[o];(0,e.useEffect)((()=>{if(!t)return;if(!r)return;const e=google.maps.event.addListener(t,a,(e=>{r(v(a,t,e))}));return()=>e.remove()}),[t,a,r])}}(c,t),function(t,n){const o={},r=Object.keys(n);for(const e of r)S.has(e)&&(o[e]=n[e]);!function(t,n){const o=(0,e.useRef)(void 0);o.current&&s(n,o.current)||(o.current=n),(0,e.useEffect)(t,o.current)}((()=>{t&&t.setOptions(o)}),[o])}(c,t);const g=function(t,n){const{viewport:o,viewState:r}=n,a=!!o;return(0,e.useLayoutEffect)((()=>{if(!t||!r)return;const{latitude:e,longitude:n,bearing:o,pitch:a,zoom:l}=r;t.moveCamera({center:{lat:e,lng:n},heading:o,tilt:a,zoom:l+1})}),[t,r]),a}(c,t),f=!!t.controlled;(0,e.useEffect)((()=>{if(c)return g&&c.setOptions({disableDefaultUI:!0}),(g||f)&&c.setOptions({gestureHandling:"none",keyboardShortcuts:!1}),()=>{c.setOptions({gestureHandling:t.gestureHandling,keyboardShortcuts:t.keyboardShortcuts})}}),[c,g,f,t.gestureHandling,t.keyboardShortcuts]);const b=t.center?L(t.center):null;let w=null,E=null;b&&Number.isFinite(b.lat)&&Number.isFinite(b.lng)&&(w=b.lat,E=b.lng);const O=(0,e.useMemo)((()=>{var e,n,o,r,a;return{center:{lat:null!=(e=w)?e:0,lng:null!=(n=E)?n:0},zoom:null!=(o=t.zoom)?o:0,heading:null!=(r=t.heading)?r:0,tilt:null!=(a=t.tilt)?a:0}}),[w,E,t.zoom,t.heading,t.tilt]);(0,e.useLayoutEffect)((()=>{if(!c||!f)return;c.moveCamera(O);const e=c.addListener("bounds_changed",(()=>{c.moveCamera(O)}));return()=>e.remove()}),[c,f,O]);const k=(0,e.useMemo)((()=>u({width:"100%",height:"100%",position:"relative",zIndex:g?-1:0},a)),[a,g]),x=(0,e.useMemo)((()=>({map:c})),[c]);return i===m.AUTH_FAILURE?e.createElement("div",{style:u({position:"relative"},r?{}:k),className:r},e.createElement(P,null)):e.createElement("div",u({ref:d,"data-testid":"map",style:r?void 0:k,className:r},o?{id:o}:{}),c?e.createElement(I.Provider,{value:x},n):null)};D.deckGLViewProps=!0;const A=new Set;const N=(t=null)=>{const n=(0,e.useContext)(h),{map:o}=(0,e.useContext)(I)||{};if(null===n)return function(...e){const t=JSON.stringify(e);A.has(t)||(A.add(t),console.error(...e))}("useMap(): failed to retrieve APIProviderContext. Make sure that the <APIProvider> component exists and that the component you are calling `useMap()` from is a sibling of the <APIProvider>."),null;const{mapInstances:r}=n;return null!==t?r[t]||null:o||r.default||null};function z(t){const n=O(),o=(0,e.useContext)(h);return(0,e.useEffect)((()=>{n&&o&&o.importLibrary(t)}),[n,o,t]),(null==o?void 0:o.loadedLibraries[t])||null}function T(e,t,n){const o=0===t.indexOf("--");var r;null==n||"boolean"==typeof n||""===n?o?e.setProperty(t,""):"float"===t?e.cssFloat="":e[t]="":o?e.setProperty(t,n):"number"!=typeof n||0===n||(r=t,F.has(r))?"float"===t?e.cssFloat=n:e[t]=(""+n).trim():e[t]=n+"px"}const F=new Set(["animationIterationCount","aspectRatio","borderImageOutset","borderImageSlice","borderImageWidth","boxFlex","boxFlexGroup","boxOrdinalGroup","columnCount","columns","flex","flexGrow","flexPositive","flexShrink","flexNegative","flexOrder","gridArea","gridRow","gridRowEnd","gridRowSpan","gridRowStart","gridColumn","gridColumnEnd","gridColumnSpan","gridColumnStart","fontWeight","lineClamp","lineHeight","opacity","order","orphans","scale","tabSize","widows","zIndex","zoom","fillOpacity","floodOpacity","stopOpacity","strokeDasharray","strokeDashoffset","strokeMiterlimit","strokeOpacity","strokeWidth"]);function G(t,n,o){(0,e.useEffect)((()=>{if(!t||!n||!o)return;const e=google.maps.event.addListener(t,n,o);return()=>null==e?void 0:e.remove()}),[t,n,o])}function R(t,n,o){(0,e.useEffect)((()=>{t&&(t[n]=o)}),[t,n,o])}const j=e.createContext(null),H=(0,e.forwardRef)(((t,n)=>{const{children:o}=t,[r,a]=function(t){const[n,o]=(0,e.useState)(null),[r,a]=(0,e.useState)(null),l=(0,e.useRef)(null),i=N(),s=z("marker"),{children:c,className:u,style:d,onClick:m,onDrag:p,onDragStart:g,onDragEnd:f,collisionBehavior:h,clickable:b,draggable:v,position:y,title:w,zIndex:E}=t,C=e.Children.count(c);return(0,e.useEffect)((()=>{if(!i||!s)return;const e=new s.AdvancedMarkerElement;e.map=i,o(e);let t=null;return C>0&&(t=document.createElement("div"),e.content=t,a(t)),()=>{var n;e.map=null,null==(n=t)||n.remove(),o(null),a(null)}}),[i,s,C]),R(r,"className",null!=u?u:""),(0,e.useEffect)((()=>{r&&(function(e,t,n){if(null!=t&&"object"!=typeof t)throw new Error("The `style` prop expects a mapping from style properties to values, not a string. For example, style={{marginRight: spacing + 'em'}} when using JSX.");const o=e.style;if(null!=n){for(const e in n)!n.hasOwnProperty(e)||null!=t&&t.hasOwnProperty(e)||(0===e.indexOf("--")?o.setProperty(e,""):"float"===e?o.cssFloat="":o[e]="");if(null!=t)for(const e in t){const r=t[e];t.hasOwnProperty(e)&&n[e]!==r&&T(o,e,r)}}else{if(null==t)return;for(const e in t)t.hasOwnProperty(e)&&T(o,e,t[e])}}(r,d||null,l.current),l.current=d||null)}),[r,u,d]),R(n,"position",y),R(n,"title",null!=w?w:""),R(n,"zIndex",E),R(n,"collisionBehavior",h),(0,e.useEffect)((()=>{n&&(n.gmpDraggable=void 0!==v?v:!!(p||g||f))}),[n,v,p,f,g]),(0,e.useEffect)((()=>{n&&(n.gmpClickable=void 0!==b?b:!!m)}),[n,b,m]),G(n,"click",m),G(n,"drag",p),G(n,"dragstart",g),G(n,"dragend",f),[n,r]}(t),l=(0,e.useMemo)((()=>r?{marker:r}:null),[r]);return(0,e.useImperativeHandle)(n,(()=>r),[r]),a?e.createElement(j.Provider,{value:l},(0,i.createPortal)(o,a)):null})),B=({children:t,position:n})=>{const o=(0,e.useMemo)((()=>document.createElement("div")),[]),r=N();return(0,e.useEffect)((()=>{if(!r)return;const e=r.controls[n];return e.push(o),()=>{const t=e.getArray();if(!t)return;const n=t.indexOf(o);e.removeAt(n)}}),[o,r,n]),(0,i.createPortal)(t,o)},Z=["onClick","onDrag","onDragStart","onDragEnd","onMouseOver","onMouseOut"];(0,e.forwardRef)(((t,n)=>{const o=function(t){const[n,o]=(0,e.useState)(null),r=N(),{onClick:a,onDrag:l,onDragStart:i,onDragEnd:s,onMouseOver:c,onMouseOut:u}=t,m=d(t,Z),{position:p,draggable:g}=m;return(0,e.useEffect)((()=>{if(!r)return void(void 0===r&&console.error("<Marker> has to be inside a Map component."));const e=new google.maps.Marker(m);return e.setMap(r),o(e),()=>{e.setMap(null),o(null)}}),[r]),(0,e.useEffect)((()=>{if(!n)return;const e=n,t=google.maps.event;return a&&t.addListener(e,"click",a),l&&t.addListener(e,"drag",l),i&&t.addListener(e,"dragstart",i),s&&t.addListener(e,"dragend",s),c&&t.addListener(e,"mouseover",c),u&&t.addListener(e,"mouseout",u),n.setDraggable(Boolean(g)),()=>{t.clearInstanceListeners(e)}}),[n,g,a,l,i,s,c,u]),(0,e.useEffect)((()=>{n&&m&&n.setOptions(m)}),[n,m]),(0,e.useEffect)((()=>{!g&&p&&n&&n.setPosition(p)}),[g,p,n]),n}(t);return(0,e.useImperativeHandle)(n,(()=>o),[o]),e.createElement(e.Fragment,null)}));const U=window.wp.coreData,V=window.wp.data,J=window.wp.commands,K=window.wp.primitives,q=(0,e.createElement)(K.SVG,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},(0,e.createElement)(K.Path,{d:"M12 3.3c-4.8 0-8.8 3.9-8.8 8.8 0 4.8 3.9 8.8 8.8 8.8 4.8 0 8.8-3.9 8.8-8.8s-4-8.8-8.8-8.8zm6.5 5.5h-2.6C15.4 7.3 14.8 6 14 5c2 .6 3.6 2 4.5 3.8zm.7 3.2c0 .6-.1 1.2-.2 1.8h-2.9c.1-.6.1-1.2.1-1.8s-.1-1.2-.1-1.8H19c.2.6.2 1.2.2 1.8zM12 18.7c-1-.7-1.8-1.9-2.3-3.5h4.6c-.5 1.6-1.3 2.9-2.3 3.5zm-2.6-4.9c-.1-.6-.1-1.1-.1-1.8 0-.6.1-1.2.1-1.8h5.2c.1.6.1 1.1.1 1.8s-.1 1.2-.1 1.8H9.4zM4.8 12c0-.6.1-1.2.2-1.8h2.9c-.1.6-.1 1.2-.1 1.8 0 .6.1 1.2.1 1.8H5c-.2-.6-.2-1.2-.2-1.8zM12 5.3c1 .7 1.8 1.9 2.3 3.5H9.7c.5-1.6 1.3-2.9 2.3-3.5zM10 5c-.8 1-1.4 2.3-1.8 3.8H5.5C6.4 7 8 5.6 10 5zM5.5 15.3h2.6c.4 1.5 1 2.8 1.8 3.7-1.8-.6-3.5-2-4.4-3.7zM14 19c.8-1 1.4-2.2 1.8-3.7h2.6C17.6 17 16 18.4 14 19z"})),W=t=>{const n=N(),o=(0,V.select)("core/editor").getCurrentPostType(),[l,i]=(0,U.useEntityProp)("postType",o,"meta"),[s,c]=(0,a.useState)(!1);return(0,e.createElement)("div",{className:"center-control"},(0,e.createElement)(r.Button,{onClick:e=>{let t={lat:n.center.lat(),lng:n.center.lng()};n.streetView.visible&&(t={lat:n.streetView.position.lat(),lng:n.streetView.position.lng()}),c(!!n.streetView.visible),i({...l,geo_latitude:t.lat,geo_longitude:t.lng}),n.setCenter(t)},variant:"secondary"},"Set Position to Map Center"))},Y=({place:e,marker:t})=>{const n=N();return(0,a.useEffect)((()=>{n&&e&&t&&(e.geometry?.viewport&&n.fitBounds(e.geometry?.viewport),t.position=e.geometry?.location)}),[n,e,t]),null},X=({onPlaceSelect:t})=>{const[n,o]=(0,a.useState)(null),r=(0,a.useRef)(null),l=z("places"),i=(0,V.select)("core/editor").getCurrentPostType(),[s,c]=(0,U.useEntityProp)("postType",i,"meta"),u=N();return(0,a.useEffect)((()=>{l&&r.current&&o(new l.Autocomplete(r.current,{fields:["geometry","name","formatted_address"]}))}),[l]),(0,a.useEffect)((()=>{n&&n.addListener("place_changed",(()=>{t(n.getPlace());const e=n.getPlace();c({...s,geo_latitude:e.geometry.location.lat(),geo_longitude:e.geometry.location.lng(),geo_address:e.formatted_address}),u&&u.fitBounds(e.geometry?.viewport)}))}),[t,n]),(0,e.createElement)("div",{className:"autocomplete-container"},(0,e.createElement)("input",{ref:r}))};(0,o.registerPlugin)("block-development-examples-post-meta-modal-2502fb",{render:function(){const n=(0,V.select)("core/editor").getCurrentPostType();if(!("apiKey"in GeometaPluginSettings&&"supportedPostTypes"in GeometaPluginSettings&&"interfacePlacement"in GeometaPluginSettings&&"interfaceMaps"in GeometaPluginSettings&&GeometaPluginSettings.supportedPostTypes.includes(n)))return console.log("data needed to run MetaModalManager were not present"),!1;const{apiKey:o,supportedPostTypes:i,interfacePlacement:s,interfaceMaps:c}=GeometaPluginSettings,u=void 0!==o&&""!==o&&"map_selector"===c,[d,m]=(0,U.useEntityProp)("postType",n,"meta"),[p,g]=(0,a.useState)(null),[f,h]=(0,a.useState)(!1),[v,y]=function(){const[t,n]=(0,e.useState)(null);return[(0,e.useCallback)((e=>{n(e)}),[]),t]}(),w={lat:d?.geo_latitude||61.2176,lng:d?.geo_longitude||-149.8997};(0,J.useCommand)({name:"manage-post-geolocation",label:(0,t.__)("Edit Geolocation data","block-development-examples"),icon:q,callback:()=>h(!0),context:"block-editor"}),"sidebar"===s&&(0,J.useCommand)({name:"view-post-geolocation",label:(0,t.__)("Toggle Geolocation Panel","block-development-examples"),icon:q,callback:()=>function(){const e=(0,V.select)("core/edit-post").isPluginSidebarOpened("block-development-examples-post-meta-modal-2502fb/geolocation-sidebar-plugin");wp.data.select("core/edit-post").getActiveGeneralSidebarName(),e?(0,V.dispatch)("core/edit-post").openGeneralSidebar("edit-post/document"):(0,V.dispatch)("core/edit-post").openGeneralSidebar("block-development-examples-post-meta-modal-2502fb/geolocation-sidebar-plugin")}(),context:"block-editor"});const E=function(t){const n=(0,V.select)("core/editor").getCurrentPostType(),[o,a]=(0,U.useEntityProp)("postType",n,"meta");return(0,e.createElement)("div",{className:"geo-mega "+("padded"===t.variant?"geo-mega--padded":"")},(0,e.createElement)("ul",null,(0,e.createElement)("li",{className:o?.geo_public?"green":"red"},(0,e.createElement)("strong",null,"Public:")," ",(0,e.createElement)("span",null,1==o?.geo_public?"Yes":"No")),(0,e.createElement)("li",null,(0,e.createElement)("strong",null,"Address:")," ",o?.geo_address),(0,e.createElement)("li",null,(0,e.createElement)("strong",null,"Latitude:")," ",o?.geo_latitude),(0,e.createElement)("li",null,(0,e.createElement)("strong",null,"Longitude:")," ",o?.geo_longitude)),(0,e.createElement)(r.Button,{onClick:()=>h(!0),variant:"secondary",icon:"admin-site-alt3"},"Edit Geodata"))};return(0,e.createElement)(e.Fragment,null,"quicklink"===s&&(0,e.createElement)(l.PluginMoreMenuItem,{icon:"admin-site-alt3",onClick:()=>{h(!0)}},"Edit Geolocation Data"),"sidebar"===s&&(0,e.createElement)(l.PluginSidebarMoreMenuItem,{target:"geolocation-sidebar-plugin",icon:"admin-site-alt3"},"Geolocation Sidebar"),"publish"===s&&(0,e.createElement)(l.PluginDocumentSettingPanel,{name:"custom-panel",title:"Geolocation Data",className:"custom-panel",isPluginSidebarOpened:!1},(0,e.createElement)(E,null)),"sidebar"===s&&(0,e.createElement)(l.PluginSidebar,{name:"geolocation-sidebar-plugin",icon:"admin-site-alt3",title:"Geolocation"},(0,e.createElement)(E,{variant:"padded"})),f&&(0,e.createElement)(r.Modal,{className:"xx_geometa_modal",title:(0,t.__)("Edit Geolocation Data","block-development-examples"),onRequestClose:()=>h(!1),size:u?"fill":"small"},(0,e.createElement)(b,{apiKey:o,version:"3"},(0,e.createElement)("div",{className:"modal "+(u?"modal--fullscreen":"")},(0,e.createElement)("div",{className:"modal__controls"},(0,e.createElement)(r.BaseControl,{label:"Public:"},(0,e.createElement)("br",null),(0,e.createElement)(r.ToggleControl,{label:d?.geo_public?"Yes":"No",checked:d?.geo_public||"",help:d?.geo_public?"Location data is visible.":"Location data is hidden.",onChange:e=>m({geo_public:e?1:0})})),(0,e.createElement)(r.TextControl,{label:(0,t.__)("Address","block-development-examples"),value:d?.geo_address||"",onChange:e=>m({...d,geo_address:e}),help:"Freeform textual description of coordinates."}),(0,e.createElement)(r.__experimentalNumberControl,{label:(0,t.__)("Latitude","block-development-examples"),step:".0001",isShiftStepEnabled:!0,onChange:e=>m({...d,geo_latitude:Number(e)}),shiftStep:10,min:"-90",max:"90",value:d?.geo_latitude||"",help:"Decimal degrees -90 to 90 (negative values are in the southern hemisphere).",spinControls:"none"}),(0,e.createElement)(r.__experimentalNumberControl,{label:(0,t.__)("Longitude","block-development-examples"),step:".0001",isShiftStepEnabled:!0,onChange:e=>m({...d,geo_longitude:Number(e)}),shiftStep:10,min:"-180",max:"180",value:d?.geo_longitude||"",help:"Decimal degrees -180 to 180 (negative values are in the western hemisphere)."}),u&&(0,e.createElement)(W,null)),u&&(0,e.createElement)("div",{className:"modal__map"},(0,e.createElement)(D,{mapId:"geocoder_tool",defaultCenter:w,defaultZoom:13,gestureHandling:"greedy",onContextmenu:e=>{const t=e.detail.latLng.lat,n=e.detail.latLng.lng;m({...d,geo_latitude:t,geo_longitude:n})},fullscreenControl:!1,streetViewControlOptions:{position:3}},w&&(0,e.createElement)(H,{position:w,draggable:!0,onDragEnd:e=>{const t=e.latLng.lat(),n=e.latLng.lng();m({...d,geo_latitude:t,geo_longitude:n})}})),(0,e.createElement)(B,{position:2},(0,e.createElement)("div",{className:"autocomplete-control"},(0,e.createElement)(X,{onPlaceSelect:g}))),(0,e.createElement)(W,null),(0,e.createElement)(Y,{place:p,marker:y}))))))}})})()})();