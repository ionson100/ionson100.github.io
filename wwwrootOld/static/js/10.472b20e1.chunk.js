"use strict";(self.webpackChunkionson100_github_io=self.webpackChunkionson100_github_io||[]).push([[10],{1010:(e,t,r)=>{r.d(t,{A:()=>l});var o=function(e,t){return o=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])},o(e,t)};function n(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}"function"===typeof SuppressedError&&SuppressedError;var i,a={exports:{}},s={};a.exports=function(){if(i)return s;i=1;var e=Symbol.for("react.element"),t=Symbol.for("react.portal"),r=Symbol.for("react.fragment"),o=Symbol.for("react.strict_mode"),n=Symbol.for("react.profiler"),a=Symbol.for("react.provider"),u=Symbol.for("react.context"),c=Symbol.for("react.forward_ref"),l=Symbol.for("react.suspense"),p=Symbol.for("react.memo"),f=Symbol.for("react.lazy"),h=Symbol.iterator,d={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},m=Object.assign,y={};function v(e,t,r){this.props=e,this.context=t,this.refs=y,this.updater=r||d}function g(){}function b(e,t,r){this.props=e,this.context=t,this.refs=y,this.updater=r||d}v.prototype.isReactComponent={},v.prototype.setState=function(e,t){if("object"!==typeof e&&"function"!==typeof e&&null!=e)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")},v.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},g.prototype=v.prototype;var w=b.prototype=new g;w.constructor=b,m(w,v.prototype),w.isPureReactComponent=!0;var R=Array.isArray,S=Object.prototype.hasOwnProperty,_={current:null},E={key:!0,ref:!0,__self:!0,__source:!0};function C(t,r,o){var n,i={},a=null,s=null;if(null!=r)for(n in void 0!==r.ref&&(s=r.ref),void 0!==r.key&&(a=""+r.key),r)S.call(r,n)&&!E.hasOwnProperty(n)&&(i[n]=r[n]);var u=arguments.length-2;if(1===u)i.children=o;else if(1<u){for(var c=Array(u),l=0;l<u;l++)c[l]=arguments[l+2];i.children=c}if(t&&t.defaultProps)for(n in u=t.defaultProps)void 0===i[n]&&(i[n]=u[n]);return{$$typeof:e,type:t,key:a,ref:s,props:i,_owner:_.current}}function x(t){return"object"===typeof t&&null!==t&&t.$$typeof===e}var k=/\/+/g;function F(e,t){return"object"===typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return t[e]}))}(""+e.key):t.toString(36)}function I(r,o,n,i,a){var s=typeof r;"undefined"!==s&&"boolean"!==s||(r=null);var u=!1;if(null===r)u=!0;else switch(s){case"string":case"number":u=!0;break;case"object":switch(r.$$typeof){case e:case t:u=!0}}if(u)return a=a(u=r),r=""===i?"."+F(u,0):i,R(a)?(n="",null!=r&&(n=r.replace(k,"$&/")+"/"),I(a,o,n,"",(function(e){return e}))):null!=a&&(x(a)&&(a=function(t,r){return{$$typeof:e,type:t.type,key:r,ref:t.ref,props:t.props,_owner:t._owner}}(a,n+(!a.key||u&&u.key===a.key?"":(""+a.key).replace(k,"$&/")+"/")+r)),o.push(a)),1;if(u=0,i=""===i?".":i+":",R(r))for(var c=0;c<r.length;c++){var l=i+F(s=r[c],c);u+=I(s,o,n,l,a)}else if(l=function(e){return null===e||"object"!==typeof e?null:"function"===typeof(e=h&&e[h]||e["@@iterator"])?e:null}(r),"function"===typeof l)for(r=l.call(r),c=0;!(s=r.next()).done;)u+=I(s=s.value,o,n,l=i+F(s,c++),a);else if("object"===s)throw o=String(r),Error("Objects are not valid as a React child (found: "+("[object Object]"===o?"object with keys {"+Object.keys(r).join(", ")+"}":o)+"). If you meant to render a collection of children, use an array instead.");return u}function L(e,t,r){if(null==e)return e;var o=[],n=0;return I(e,o,"","",(function(e){return t.call(r,e,n++)})),o}function z(e){if(-1===e._status){var t=e._result;(t=t()).then((function(t){0!==e._status&&-1!==e._status||(e._status=1,e._result=t)}),(function(t){0!==e._status&&-1!==e._status||(e._status=2,e._result=t)})),-1===e._status&&(e._status=0,e._result=t)}if(1===e._status)return e._result.default;throw e._result}var D={current:null},O={transition:null},P={ReactCurrentDispatcher:D,ReactCurrentBatchConfig:O,ReactCurrentOwner:_};function j(){throw Error("act(...) is not supported in production builds of React.")}return s.Children={map:L,forEach:function(e,t,r){L(e,(function(){t.apply(this,arguments)}),r)},count:function(e){var t=0;return L(e,(function(){t++})),t},toArray:function(e){return L(e,(function(e){return e}))||[]},only:function(e){if(!x(e))throw Error("React.Children.only expected to receive a single React element child.");return e}},s.Component=v,s.Fragment=r,s.Profiler=n,s.PureComponent=b,s.StrictMode=o,s.Suspense=l,s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=P,s.act=j,s.cloneElement=function(t,r,o){if(null===t||void 0===t)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var n=m({},t.props),i=t.key,a=t.ref,s=t._owner;if(null!=r){if(void 0!==r.ref&&(a=r.ref,s=_.current),void 0!==r.key&&(i=""+r.key),t.type&&t.type.defaultProps)var u=t.type.defaultProps;for(c in r)S.call(r,c)&&!E.hasOwnProperty(c)&&(n[c]=void 0===r[c]&&void 0!==u?u[c]:r[c])}var c=arguments.length-2;if(1===c)n.children=o;else if(1<c){u=Array(c);for(var l=0;l<c;l++)u[l]=arguments[l+2];n.children=u}return{$$typeof:e,type:t.type,key:i,ref:a,props:n,_owner:s}},s.createContext=function(e){return(e={$$typeof:u,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null}).Provider={$$typeof:a,_context:e},e.Consumer=e},s.createElement=C,s.createFactory=function(e){var t=C.bind(null,e);return t.type=e,t},s.createRef=function(){return{current:null}},s.forwardRef=function(e){return{$$typeof:c,render:e}},s.isValidElement=x,s.lazy=function(e){return{$$typeof:f,_payload:{_status:-1,_result:e},_init:z}},s.memo=function(e,t){return{$$typeof:p,type:e,compare:void 0===t?null:t}},s.startTransition=function(e){var t=O.transition;O.transition={};try{e()}finally{O.transition=t}},s.unstable_act=j,s.useCallback=function(e,t){return D.current.useCallback(e,t)},s.useContext=function(e){return D.current.useContext(e)},s.useDebugValue=function(){},s.useDeferredValue=function(e){return D.current.useDeferredValue(e)},s.useEffect=function(e,t){return D.current.useEffect(e,t)},s.useId=function(){return D.current.useId()},s.useImperativeHandle=function(e,t,r){return D.current.useImperativeHandle(e,t,r)},s.useInsertionEffect=function(e,t){return D.current.useInsertionEffect(e,t)},s.useLayoutEffect=function(e,t){return D.current.useLayoutEffect(e,t)},s.useMemo=function(e,t){return D.current.useMemo(e,t)},s.useReducer=function(e,t,r){return D.current.useReducer(e,t,r)},s.useRef=function(e){return D.current.useRef(e)},s.useState=function(e){return D.current.useState(e)},s.useSyncExternalStore=function(e,t,r){return D.current.useSyncExternalStore(e,t,r)},s.useTransition=function(){return D.current.useTransition()},s.version="18.3.1",s}();var u=a.exports,c=n(u),l=function(e){function t(t){var r=e.call(this,t)||this;return r.mRefInputFile=u.createRef(),r.mRefZoom=u.createRef(),r.mRefRotDiv=u.createRef(),r.mRefPanelButtons=u.createRef(),r.mRefCanvas=u.createRef(),r.mRefLink1=u.createRef(),r.mRefLink2=u.createRef(),r.coord={x:0,y:0},r.coordE={x:0,y:0},r.coordS={x:0,y:0},r.base_image=void 0,r.isStart=!1,r.mFile=void 0,r.imageSize={width:r.props.canvasSize,height:r.props.canvasSize,scaleW:r.props.canvasSize},r.mContext=null,r.onFileChange=r.onFileChange.bind(r),r.previewF=r.previewF.bind(r),r.formUpload=r.formUpload.bind(r),r.stop=r.stop.bind(r),r.start=r.start.bind(r),r.wheel=r.wheel.bind(r),r.draw=r.draw.bind(r),r}return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");function r(){this.constructor=e}o(e,t),e.prototype=null===t?Object.create(t):(r.prototype=t.prototype,new r)}(t,e),t.prototype.componentDidMount=function(){this.mRefCanvas.current.width=this.props.canvasSize,this.mRefCanvas.current.height=this.props.canvasSize,this.mRefRotDiv.current.style.width="".concat(this.props.canvasSize,"px"),this.mRefRotDiv.current.style.padding="5px",this.mContext=this.mRefCanvas.current.getContext("2d"),this.mContext.canvas.addEventListener("wheel",this.wheel),this.mContext.canvas.addEventListener("mousedown",this.start),this.mContext.canvas.addEventListener("mouseout",this.stop),this.mContext.canvas.addEventListener("mouseup",this.stop),!0!==this.props.visibleLinkPreview&&(this.mRefLink1.current.style.display="none")},t.prototype.wheel=function(e){if(e.preventDefault(),e.stopImmediatePropagation(),this.mFile){e=e||window.event;var t=parseInt(this.mRefZoom.current.value),r=e.deltaY||e.detail||e.deltaY;r>0&&t<99&&(this.mRefZoom.current.value=t+1+"",this.zoomImage(100-t)),r<0&&t>0&&(this.mRefZoom.current.value=t-1+"",this.zoomImage(100-t))}},t.prototype.start=function(e){this.mRefCanvas.current.addEventListener("mousemove",this.draw),this.reposition(e),this.isStart=!0},t.prototype.stop=function(){this.mFile&&this.isStart&&(this.coordS.x=this.coordE.x,this.coordS.y=this.coordE.y,this.mRefCanvas.current.removeEventListener("mousemove",this.draw),this.isStart=!1)},t.prototype.reposition=function(e){this.coord.x=e.offsetX,this.coord.y=e.offsetY},t.prototype.draw=function(e){this.mFile&&(this.coordE.x=this.coordS.x+e.offsetX-this.coord.x,this.coordE.y=this.coordS.y+e.offsetY-this.coord.y,this.drawImageE())},t.prototype.onFileChange=function(e){var t=this,r=e.target.files;if(r){var o=r.item(0);if(o&&(this.mFile=o,!this.props.selectedFile||this.props.selectedFile(this.mFile))){this.mRefZoom.current.value="0",this.coordE.x=this.coordE.y=this.coordS.x=this.coordS.y=this.coord.x=this.coord.y=0,this.imageSize={width:this.props.canvasSize,height:this.props.canvasSize,scaleW:100};var n=window.URL.createObjectURL(this.mFile);this.base_image=new Image,this.base_image.src=n,this.base_image.onload=function(){var e,r;(null===(e=t.base_image)||void 0===e?void 0:e.width)&&(t.imageSize.width=t.base_image.width),(null===(r=t.base_image)||void 0===r?void 0:r.height)&&(t.imageSize.height=t.base_image.height),t.drawImageE()},this.mRefPanelButtons.current.style.visibility="visible"}}},t.prototype.drawImageE=function(){this.mContext.clearRect(0,0,this.mContext.canvas.width,this.mContext.canvas.height),this.mContext.drawImage(this.base_image,this.coordE.x,this.coordE.y,this.getWidth(),this.getHeight()),this.props.previewAsync&&this.props.previewAsync(this.mContext.canvas.toDataURL())},t.prototype.zoomImage=function(e){this.mFile&&(this.imageSize.scaleW=e,this.drawImageE())},t.prototype.previewF=function(){this.props.preview&&this.props.preview(this.mContext.canvas.toDataURL())},t.prototype.getCanvasFormData=function(){return this.mContext.canvas.toDataURL()},t.prototype.getWidth=function(){return Math.round(this.imageSize.width*this.imageSize.scaleW/100)},t.prototype.getHeight=function(){return Math.round(this.imageSize.height*this.imageSize.scaleW/100)},t.prototype.formUpload=function(){var e=this;try{this.props.beforeUpload&&this.props.beforeUpload();var t=new XMLHttpRequest;t.open("POST",this.props.url);var r=new FormData;if(this.props.callbackFormData&&("function"===typeof this.props.callbackFormData?r.append("data",JSON.stringify(this.props.callbackFormData())):"string"===typeof this.props.callbackFormData?r.append("data",this.props.callbackFormData):"object"===typeof this.props.callbackFormData&&r.append("data",JSON.stringify(this.props.callbackFormData))),this.props.headerKeyValue)for(var o in this.props.headerKeyValue)t.setRequestHeader(o,this.props.headerKeyValue[o]);r.append("avatar",this.mContext.canvas.toDataURL()),t.onreadystatechange=function(r){if(4===t.readyState)if(200===t.status)e.props.done&&(e.props.done(r.target.response),e.clear());else{var o="Error: ".concat(t.status," ").concat(t.statusText," ").concat(t.responseText," ");e.props.serverError&&e.props.serverError(o)}},t.upload.addEventListener("progress",(function(t){e.props.progress&&e.props.progress(t)})),t.send(r)}catch(n){this.props.clientError&&this.props.clientError(n)}},t.prototype.clear=function(){this.coord.x=0,this.coord.y=0,this.coordE.x=0,this.coordE.y=0,this.coordS.x=0,this.coordS.y=0,this.base_image=void 0,this.isStart=!1,this.mFile=void 0,this.mContext.clearRect(0,0,this.mRefCanvas.current.width,this.mRefCanvas.current.height),this.mRefPanelButtons.current.style.visibility="hidden",this.mRefInputFile.current&&(this.mRefInputFile.current.value="")},t.prototype.render=function(){var e=this;return c.createElement(c.Fragment,null,c.createElement("div",{ref:this.mRefRotDiv,className:this.props.className,style:this.props.style},c.createElement("div",{className:"sau-head"},c.createElement("div",{id:"sau-b-0",className:"sau-link",onClick:function(){e.mRefInputFile.current.click()}},"file"),c.createElement("input",{type:"file",ref:this.mRefInputFile,className:"sau-file",onChange:this.onFileChange,accept:"image/png, image/jpeg"})),c.createElement("div",{className:"sau-attribute",style:{textAlign:"center"}},c.createElement("canvas",{ref:this.mRefCanvas,className:this.props.classNameCanvas,id:"sau",style:this.props.styleCanvas}),c.createElement("div",{ref:this.mRefPanelButtons,style:{visibility:"hidden"}},c.createElement("div",{style:{display:"flex"}},c.createElement("div",{style:{fontSize:12}},"zoom:"),c.createElement("input",{style:{width:"90%",paddingLeft:5},onChange:function(t){var r=100-parseInt(t.target.value);e.zoomImage(r)},ref:this.mRefZoom,type:"range",min:"0",max:"99",defaultValue:"0",step:"1"})),c.createElement("div",{ref:this.mRefLink1,"data-sau":"l1",className:"sau-link",onClick:this.previewF},"preview"),c.createElement("div",{ref:this.mRefLink2,"data-sau":"l2",className:"sau-link",onClick:this.formUpload},"upload")))))},t.defaultProps={canvasSize:200,selectedFile:void 0,callbackFormData:void 0,url:void 0,headerKeyValue:void 0,beforeUpload:void 0,clientError:void 0,progress:void 0,preview:void 0,previewAsync:void 0,done:void 0,serverError:void 0,visibleLinkPreview:void 0,className:"sau",classNameCanvas:"canvas-sau"},t}(u.Component)}}]);
//# sourceMappingURL=10.472b20e1.chunk.js.map