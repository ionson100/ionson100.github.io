"use strict";(self.webpackChunkionson100_github_io=self.webpackChunkionson100_github_io||[]).push([[641],{641:(t,i,o)=>{o.r(i),o.d(i,{default:()=>p});var e=o(65043),s=o(10226),n=(o(68278),o(61225)),h=o(70579);class p extends e.Component{constructor(){super(...arguments),this.tooltip=void 0,this.mRefButton=e.createRef()}componentDidMount(){this.tooltip=new s.w({target:this.mRefButton.current,body:"simple button",options:{style:{backgroundColor:"green",padding:"5px"}}})}componentWillUnmount(){var t;null===(t=this.tooltip)||void 0===t||t.ContextMenuWillUnmount()}render(){return(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)("div",{style:{padding:100},children:(0,h.jsx)("button",{ref:this.mRefButton,children:"button"})}),(0,h.jsx)(n.MM,{code:"import React from \"react\";\nimport {ToolTip} from 'bsr-tooltip'\nimport 'bsr-tooltip/dist/index.css'\n\nexport default class P11_5 extends React.Component<any, any>{\n    private tooltip?:ToolTip\n    private mRefButton=React.createRef<HTMLButtonElement>()\n\n    componentDidMount() {\n        this.tooltip=new ToolTip({\n            target:this.mRefButton.current!,\n            body:'simple button',\n            options:{\n                style:{backgroundColor:'green',padding:\"5px\"}\n            }\n        })\n    }\n    \n    componentWillUnmount() {\n        this.tooltip?.ContextMenuWillUnmount();\n    }\n    \n    render() {\n        return(\n            <div style={{padding:100}}>\n                <button ref={this.mRefButton}>button</button>\n            </div>\n        )\n    }\n}"})]})}}},10226:(t,i,o)=>{o.d(i,{D:()=>m,w:()=>c});var e,s=o(65043),n=o(84391),h=new Uint8Array(16);function p(){if(!e&&!(e="undefined"!==typeof crypto&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto)||"undefined"!==typeof msCrypto&&"function"===typeof msCrypto.getRandomValues&&msCrypto.getRandomValues.bind(msCrypto)))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return e(h)}var r=/^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i;for(var d=[],l=0;l<256;++l)d.push((l+256).toString(16).substr(1));function f(t){var i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,o=(d[t[i+0]]+d[t[i+1]]+d[t[i+2]]+d[t[i+3]]+"-"+d[t[i+4]]+d[t[i+5]]+"-"+d[t[i+6]]+d[t[i+7]]+"-"+d[t[i+8]]+d[t[i+9]]+"-"+d[t[i+10]]+d[t[i+11]]+d[t[i+12]]+d[t[i+13]]+d[t[i+14]]+d[t[i+15]]).toLowerCase();if(!function(t){return"string"===typeof t&&r.test(t)}(o))throw TypeError("Stringified UUID is invalid");return o}function u(t,i,o){var e=(t=t||{}).random||(t.rng||p)();return e[6]=15&e[6]|64,e[8]=63&e[8]|128,f(e)}var a={display:"flex",justifyContent:"center",alignItems:"center",paddingLeft:15,paddingRight:15},v=new Map,c=function(){function t(t){var i,o,e,h,p;this.isShow=!1,this.position="left",this.props=t,this.id=u(),v.set(this.id,this),this.Close=this.Close.bind(this),this.mouseEnter=this.mouseEnter.bind(this),this.mode=null!==(o=null===(i=this.props.options)||void 0===i?void 0:i.mode)&&void 0!==o?o:"tooltip",this.div=document.createElement("div"),this.div.className="bsr-left-tooltip",(null===(e=this.props.options)||void 0===e?void 0:e.className)&&(this.div.className=this.props.options.className),(null===(h=this.props.options)||void 0===h?void 0:h.style)&&Object.assign(this.div.style,this.props.options.style),this.innerRoot=(0,n.createRoot)(this.div),s.isValidElement(this.props.body)?this.innerRoot.render(this.props.body):this.innerRoot.render(s.createElement("div",{style:a},this.props.body)),this.isWindows=!1,"tooltip"===this.mode?this.ActivateTooltip():(this.ActivateWindows(),this.isWindows=!0,"popup"===this.mode&&(this.div.style.cursor="pointer")),this.position="right",(null===(p=this.props.options)||void 0===p?void 0:p.position)&&(this.position=this.props.options.position)}return t.prototype.Close=function(){this.isShow&&(document.body.removeChild(this.div),this.isShow=!1)},t.prototype.ActivateWindows=function(){var t,i;"popup"===this.mode||"popupCloseSelf"===this.mode?null===(t=this.props.target)||void 0===t||t.addEventListener("mouseup",this.mouseEnter):null===(i=this.props.target)||void 0===i||i.addEventListener("mouseenter",this.mouseEnter),"popupCloseSelf"===this.mode||this.div.addEventListener("click",this.Close)},t.prototype.maxZIndex=function(){return Array.from(document.querySelectorAll("body *")).map((function(t){return parseFloat(window.getComputedStyle(t).zIndex)})).filter((function(t){return!isNaN(t)})).sort().pop()},t.prototype.ActivateTooltip=function(){var t,i;null===(t=this.props.target)||void 0===t||t.addEventListener("mouseenter",this.mouseEnter),null===(i=this.props.target)||void 0===i||i.addEventListener("mouseleave",this.Close)},t.prototype.getOffsetPosition=function(t){var i=t.getBoundingClientRect();return{left:i.left+window.scrollX,top:i.top+window.scrollY}},t.prototype.getOffsetAttribute=function(t){var i=t.getBoundingClientRect();return{width:i.width,height:i.height}},t.prototype.mouseEnter=function(){if(void 0!==this.props.target&&(v.forEach((function(t){t.Close()})),!this.isShow)){var t=this.props.target,i=this.getOffsetPosition(t),o=this.getOffsetAttribute(t),e=this.maxZIndex();if(this.div.style.zIndex=e?"".concat(e+1):"10000000000000",document.body.appendChild(this.div),"custom"===this.position&&(this.isShow=!0),"right"===this.position){var s=i.top+Math.round(o.height/2)-Math.round(this.div.offsetHeight/2),n=o.width+i.left;this.div.style.top=s+"px",this.div.style.left=n+"px",this.isShow=!0}if("rightBottom"===this.position){s=i.top+o.height,n=o.width+i.left;this.div.style.top=s+"px",this.div.style.left=n+"px",this.isShow=!0}if("rightTop"===this.position){s=i.top-this.div.offsetHeight,n=o.width+i.left;this.div.style.top=s+"px",this.div.style.left=n+"px",this.isShow=!0}if("left"===this.position){s=i.top+Math.round(o.height/2)-Math.round(this.div.offsetHeight/2),n=i.left-this.div.offsetWidth-10;this.div.style.top=s+"px",this.div.style.left=n+"px",this.isShow=!0}if("leftBottom"===this.position){s=i.top+o.height,n=i.left-this.div.offsetWidth-10;this.div.style.top=s+"px",this.div.style.left=n+"px",this.isShow=!0}if("leftTop"===this.position){s=i.top-this.div.offsetHeight,n=i.left-this.div.offsetWidth-10;this.div.style.top=s+"px",this.div.style.left=n+"px",this.isShow=!0}if("bottom"===this.position){s=i.top+o.height,n=i.left+o.width/2-this.div.offsetWidth/2;this.div.style.top=s+"px",this.div.style.left=n+"px",this.isShow=!0}if("bottomRight"===this.position){s=i.top+o.height,n=i.left+o.width;this.div.style.top=s+"px",this.div.style.left=n+"px",this.isShow=!0}if("bottomLeft"===this.position){s=i.top+o.height,n=i.left-this.div.offsetWidth;this.div.style.top=s+"px",this.div.style.left=n+"px",this.isShow=!0}if("top"===this.position){s=i.top-this.div.offsetHeight-10,n=i.left+o.width/2-this.div.offsetWidth/2;this.isWindows&&(n=i.left+o.width/2),this.div.style.top=s+"px",this.div.style.left=n+"px",this.isShow=!0}if("topRight"===this.position){s=i.top-this.div.offsetHeight-10,n=i.left+o.width;this.div.style.top=s+"px",this.div.style.left=n+"px",this.isShow=!0}if("topLeft"===this.position){s=i.top-this.div.offsetHeight-10,n=i.left-this.div.offsetWidth;this.div.style.top=s+"px",this.div.style.left=n+"px",this.isShow=!0}}},t.prototype.ContextMenuWillUnmount=function(){var t=this;this.props.body=void 0,this.props.target=void 0,v.delete(this.id),setTimeout((function(){if(t.innerRoot.unmount(),t.isShow)try{document.body.removeChild(t.div)}catch(i){}t.props.target=void 0}))},t}(),m=function(t,i,o){var e={tooltip:void 0,target:t,options:o};return(0,s.useEffect)((function(){return(null===t||void 0===t?void 0:t.current)&&(e.tooltip=new c({target:t.current,body:i,options:o})),function(){var t;null===(t=e.tooltip)||void 0===t||t.ContextMenuWillUnmount()}}),[null===t||void 0===t?void 0:t.current]),e}},68278:()=>{}}]);
//# sourceMappingURL=641.f26d30bc.chunk.js.map