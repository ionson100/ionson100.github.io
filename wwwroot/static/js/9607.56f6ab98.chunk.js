"use strict";(self.webpackChunkionson100_github_io=self.webpackChunkionson100_github_io||[]).push([[9607],{89607:(t,e,n)=>{n.r(e),n.d(e,{default:()=>u});var i=n(65043),o=n(41952),r=(n(9352),n(61225)),d=n(70579);const s="import React, {useRef} from 'react';\nimport {useContextMenu} from 'bsr-context-menu';\nimport 'bsr-context-menu/dist/index.css'\nimport {CgMenuBoxed} from \"react-icons/cg\";\n\n\nfunction Body(text:string){\n    return(\n        <div style={{width:200,cursor:'pointer'}}>\n            <div>{text}:1</div>\n            <div>{text}:2</div>\n            <div>{text}:3</div>\n            <div>{text}:4</div>\n        </div>\n    )\n}\n\nexport function P10_1(){\n  const mRefMenu=useRef(null);\n  useContextMenu(mRefMenu,Body('Menu'))\n    return <div ref={mRefMenu}  style={{width:100,height:100,background:'grey'}}/>\n}";function u(){const t=(0,i.useRef)(null);var e;return(0,o.E)(t,(e="Menu",(0,d.jsxs)("div",{style:{width:200,cursor:"pointer"},children:[(0,d.jsxs)("div",{children:[e,":1"]}),(0,d.jsxs)("div",{children:[e,":2"]}),(0,d.jsxs)("div",{children:[e,":3"]}),(0,d.jsxs)("div",{children:[e,":4"]})]}))),(0,d.jsxs)("div",{children:[(0,d.jsx)("div",{ref:t,style:{width:100,height:100,background:"grey"}}),(0,d.jsx)(r.MM,{code:s})]})}},41952:(t,e,n)=>{n.d(e,{E:()=>p,t:()=>a});var i,o=n(65043),r=n(84391),d=new Uint8Array(16);function s(){if(!i&&!(i="undefined"!==typeof crypto&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto)||"undefined"!==typeof msCrypto&&"function"===typeof msCrypto.getRandomValues&&msCrypto.getRandomValues.bind(msCrypto)))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return i(d)}var u=/^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i;for(var c=[],l=0;l<256;++l)c.push((l+256).toString(16).substr(1));function h(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,n=(c[t[e+0]]+c[t[e+1]]+c[t[e+2]]+c[t[e+3]]+"-"+c[t[e+4]]+c[t[e+5]]+"-"+c[t[e+6]]+c[t[e+7]]+"-"+c[t[e+8]]+c[t[e+9]]+"-"+c[t[e+10]]+c[t[e+11]]+c[t[e+12]]+c[t[e+13]]+c[t[e+14]]+c[t[e+15]]).toLowerCase();if(!function(t){return"string"===typeof t&&u.test(t)}(n))throw TypeError("Stringified UUID is invalid");return n}function v(t,e,n){var i=(t=t||{}).random||(t.rng||s)();return i[6]=15&i[6]|64,i[8]=63&i[8]|128,h(i)}var f=new Map,a=function(){function t(t){var e=this;this.contextAction=function(t){t.preventDefault(),e.div.style.visibility="hidden",f.forEach((function(t){t.click()})),e.innerRoot.render(e.props.body),setTimeout((function(){var n=e.getHeight(),i=e.getWidth(),o=e.div.offsetHeight,r=e.div.offsetWidth,d=t.pageY,s=t.pageX;n-d<o+50?(e.div.style.top=d-o+"px",e.div.style.left=i-s<r+50?s-r+"px":s+"px"):(e.div.style.top=d+"px",e.div.style.left=i-s<r+50?s-r+"px":s+"px"),e.div.style.visibility="visible"}),50)},this.click=this.click.bind(this),this.props=t,this.div=document.createElement("div"),this.div.className="bsr-context-menu",this.div.style.visibility="hidden",this.innerRoot=(0,r.createRoot)(this.div),document.body.appendChild(this.div),this.id=v(),this.div.onclick=function(){e.click()},this.ContextMenuDidMount()}return t.prototype.click=function(){this.innerRoot.render(null),this.div.style.visibility="hidden"},t.prototype.getHeight=function(){var t=document.body,e=document.documentElement;return Math.max(t.scrollHeight,t.offsetHeight,e.clientHeight,e.scrollHeight,e.offsetHeight)},t.prototype.getWidth=function(){var t=document.body,e=document.documentElement;return Math.max(t.scrollWidth,t.offsetWidth,e.clientWidth,e.scrollWidth,e.offsetWidth)},t.prototype.ContextMenuDidMount=function(){var t;window.addEventListener("click",this.click),null===(t=this.props.target)||void 0===t||t.addEventListener("contextmenu",this.contextAction),f.set(this.id,this)},t.prototype.ContextMenuWillUnmount=function(){var t,e=this;window.removeEventListener("click",this.click),null===(t=this.props.target)||void 0===t||t.removeEventListener("contextmenu",this.contextAction),f.delete(this.id),setTimeout((function(){e.innerRoot.unmount(),document.body.removeChild(e.div),e.props.target=void 0}))},t}(),p=function(t,e){(0,o.useEffect)((function(){var n;return(null===t||void 0===t?void 0:t.current)&&(n=new a({target:t.current,body:e})),function(){null===n||void 0===n||n.ContextMenuWillUnmount()}}),[e,t])}},9352:()=>{}}]);
//# sourceMappingURL=9607.56f6ab98.chunk.js.map