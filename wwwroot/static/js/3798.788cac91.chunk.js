"use strict";(self.webpackChunkionson100_github_io=self.webpackChunkionson100_github_io||[]).push([[3798],{83798:(t,e,s)=>{s.r(e),s.d(e,{default:()=>p});var a=s(65043),i=s(43602),r=(s(16046),s(61225)),n=s(70579);const o="import {useEffect, useRef, useState} from \"react\";\nimport {Paginator} from \"bsr-paginator\";\n\nexport function App() {\n    const refPaginator1 = useRef<Paginator>(null)\n    const refPaginator2 = useRef<Paginator>(null)\n    const refPaginator3 = useRef<Paginator>(null)\n    useEffect(() => {\n        /*fetching SetState(totalRows, pageSize,currentPage)*/\n        refPaginator1.current!.SetState(200, 10, 1)\n        refPaginator2.current!.SetState(100, 7, 1)\n        refPaginator3.current!.SetState(100, 5, 1)\n    }, [])\n\n    return (\n        <>\n            <h5>base</h5>\n            <Paginator\n                range={5}\n                ref={refPaginator1}\n                mode={'base'} /*default*/\n                ellipsis={'...'}\n                previous={'<'}\n                next={'>'}\n            />\n            \n            <h5>richBase</h5>\n            <Paginator\n                range={5}\n                ref={refPaginator2}\n                mode={'richBase'}\n                ellipsis={'...'}\n                previous={'<'}\n                next={'>'}\n            />\n            \n            <h5>showEllipsis</h5>\n            <Paginator\n               range={5}\n               ref={refPaginator3}\n               mode={'showEllipsis'}\n               ellipsis={'...'}\n               previous={'<'}\n               next={'>'}\n            />\n        </>\n    )\n}";function p(){const t=(0,a.useRef)(null),e=(0,a.useRef)(null),s=(0,a.useRef)(null);return(0,a.useEffect)((()=>{t.current.SetState(200,10,1),e.current.SetState(100,7,1),s.current.SetState(100,5,1)}),[]),(0,n.jsxs)("div",{style:{paddingBottom:20},children:[(0,n.jsx)("h5",{children:"base"}),(0,n.jsx)(i.m,{range:5,ref:t,mode:"base",ellipsis:"...",previous:"<",next:">"}),(0,n.jsx)("h5",{children:"richBase"}),(0,n.jsx)(i.m,{range:5,ref:e,mode:"richBase",ellipsis:"...",previous:"<",next:">"}),(0,n.jsx)("h5",{children:"showEllipsis"}),(0,n.jsx)(i.m,{range:5,ref:s,mode:"showEllipsis",ellipsis:"...",previous:"<",next:">"}),(0,n.jsx)("br",{}),(0,n.jsx)("br",{}),(0,n.jsx)(r.MM,{code:o})]})}},43602:(t,e,s)=>{s.d(e,{m:()=>d});var a=s(65043),i=function(t,e){return i=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var s in e)Object.prototype.hasOwnProperty.call(e,s)&&(t[s]=e[s])},i(t,e)};var r=function(){return r=Object.assign||function(t){for(var e,s=1,a=arguments.length;s<a;s++)for(var i in e=arguments[s])Object.prototype.hasOwnProperty.call(e,i)&&(t[i]=e[i]);return t},r.apply(this,arguments)};"function"===typeof SuppressedError&&SuppressedError;for(var n,o=[],p=0;p<256;++p)o.push((p+256).toString(16).slice(1));var l=new Uint8Array(16);function u(){if(!n&&!(n="undefined"!==typeof crypto&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto)))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return n(l)}var h,g={randomUUID:"undefined"!==typeof crypto&&crypto.randomUUID&&crypto.randomUUID.bind(crypto)};function c(t,e,s){if(g.randomUUID&&!e&&!t)return g.randomUUID();var a=(t=t||{}).random||(t.rng||u)();return a[6]=15&a[6]|64,a[8]=63&a[8]|128,function(t){let e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;return(o[t[e+0]]+o[t[e+1]]+o[t[e+2]]+o[t[e+3]]+"-"+o[t[e+4]]+o[t[e+5]]+"-"+o[t[e+6]]+o[t[e+7]]+"-"+o[t[e+8]]+o[t[e+9]]+"-"+o[t[e+10]]+o[t[e+11]]+o[t[e+12]]+o[t[e+13]]+o[t[e+14]]+o[t[e+15]]).toLowerCase()}(a)}!function(t){t[t.none=0]="none",t[t.first=1]="first",t[t.previous=2]="previous",t[t.next=3]="next",t[t.last=4]="last"}(h||(h={}));var d=function(t){function e(e){var s,i,r=this;return(r=t.call(this,e)||this).setClick=!1,r.list=[],r.mapPage=new Map,r.isAddMap=!1,r.refPaginator=a.createRef(),r.pages=0,r.range=null!==(s=r.props.range)&&void 0!==s?s:4,r.mode=null!==(i=r.props.mode)&&void 0!==i?i:"base",r.isChet=function(t){return!(t%2)},r.state={TotalRows:0,PageSize:1,CurrentPage:1,Range:r.range,Mode:r.mode},r}return function(t,e){if("function"!==typeof e&&null!==e)throw new TypeError("Class extends value "+String(e)+" is not a constructor or null");function s(){this.constructor=t}i(t,e),t.prototype=null===e?Object.create(e):(s.prototype=e.prototype,new s)}(e,t),e.prototype.setStatePaginator=function(t,e,s){this.setState({CurrentPage:e,TotalRows:t,PageSize:s,Range:this.range,Mode:this.mode})},e.prototype.SetState=function(t,e,s,a){var i=this;setTimeout((function(){i.setState({CurrentPage:null!==s&&void 0!==s?s:i.state.CurrentPage,PageSize:null!==e&&void 0!==e?e:i.state.PageSize,TotalRows:null!==t&&void 0!==t?t:i.state.TotalRows,Range:i.range,Mode:i.mode},a)}))},e.prototype.SetRange=function(t,e){this.range=t,this.setState({CurrentPage:1,PageSize:this.state.PageSize,TotalRows:this.state.TotalRows,Range:this.range,Mode:this.mode},e)},e.prototype.SetMode=function(t,e){this.mode=t,this.setState({CurrentPage:1,PageSize:this.state.PageSize,TotalRows:this.state.TotalRows,Range:this.range,Mode:this.mode},e)},Object.defineProperty(e.prototype,"State",{get:function(){var t=this;return{get TotalRows(){return t.state.TotalRows},get CurrentPage(){return t.state.CurrentPage},get PageSize(){return t.state.PageSize},get PagesCount(){return t.pages},get Range(){return t.range},get Mode(){return t.mode}}},enumerable:!1,configurable:!0}),e.prototype.SetCurrentPageAndClick=function(t,e){if(!(t>0))throw new Error("Page Purpose. The value must be greater than 0. Your value: "+t);this.setClick=!0,this.setClick=!0,this.setState({CurrentPage:t,PageSize:this.state.PageSize,TotalRows:this.state.TotalRows,Range:this.range},e)},e.prototype.Click=function(t,e){this.props.onChange&&(this.props.isMoreSends||this.state.CurrentPage!==t)&&this.props.onChange(t,e),this.setStatePaginator(this.state.TotalRows,t,this.state.PageSize)},e.prototype.renderButton=function(){var t=this;if(this.list.length=0,this.refPaginator.current){if(this.refPaginator.current.style.display="flex",this.state.CurrentPage<=0||this.state.PageSize<=0||this.state.TotalRows<=0)return this.refPaginator.current.style.display="none",null;this.isAddMap=!1,this.pages=Math.ceil(this.state.TotalRows/this.state.PageSize),(this.state.TotalRows<=this.state.PageSize||1===this.pages)&&(this.list.length=0,this.refPaginator.current.style.display="none");var e,s,a=this.range;a<=3&&(a=4);var i=!1,r=!1,n=this.mapPage.get(this.state.CurrentPage);if(n)e=n.start,s=n.delta,r=!0,i=!0,this.mapPage.clear(),this.isAddMap=!0;else if(this.pages<=a)e=1,s=this.pages+1,this.mapPage.clear();else if(this.state.CurrentPage<=a-2){switch(this.mapPage.clear(),e=1,this.mode){case"base":case"richBase":default:s=a+1;break;case"showEllipsis":s=a+1+1}this.pages>a&&(i=!0)}else if(this.state.CurrentPage<=this.pages-a+2)if(this.isAddMap=!0,this.mapPage.clear(),r=!0,i=!0,"richBase"===this.mode){var o=Math.floor((a-2)/2);e=this.state.CurrentPage-o,s=this.state.CurrentPage+o+(this.isChet(a)?0:1)}else{o=Math.floor(a/2);e=this.state.CurrentPage-o,s=this.state.CurrentPage+o+(this.isChet(a)?0:1)}else{this.mapPage.clear();var p=this.pages-a+1;switch(r=!0,this.mode){case"base":default:e=p<=0?1:p,s=this.pages+1;break;case"showEllipsis":e=(p-=1)<=0?1:p,s=this.pages+1}}this.appendButtonSide(h.first),this.appendButtonSide(h.previous),r&&this.appendButtonEllipsis(),"richBase"===this.mode&&r&&(this.appendButtonPage(1),this.appendButtonEllipsisRichBase());for(var l=function(a){a-1>e&&a<s-2&&u.isAddMap&&u.mapPage.set(a,{start:e,delta:s});var i="";u.state.CurrentPage===a&&(i="bsr-button-selection",u.setClick&&(u.setClick=!1,setTimeout((function(){t.props.onChange&&t.props.onChange(a,void 0)})))),u.appendButtonPage(a,i)},u=this,g=e;g<s;g++)l(g);return"richBase"===this.mode&&i&&(this.appendButtonEllipsisRichBase(),this.appendButtonPage(this.pages)),i&&this.appendButtonEllipsis(),this.appendButtonSide(h.next),this.appendButtonSide(h.last),this.list}},Object.defineProperty(e.prototype,"Paginator",{get:function(){return this.refPaginator.current},enumerable:!1,configurable:!0}),e.prototype.render=function(){var t;return a.createElement("div",{"data-paginator":1,style:this.props.style,ref:this.refPaginator,id:this.props.id,className:null!==(t=this.props.className)&&void 0!==t?t:"bsr-paginator"},this.renderButton())},e.prototype.appendButtonEllipsis=function(){var t;"showEllipsis"===this.mode&&this.list.push(a.createElement("button",{"data-ellipsis":1,key:c(),tabIndex:-1,style:this.props.styleEllipsis,className:"bsr-button-ellipsis"},null!==(t=this.props.ellipsis)&&void 0!==t?t:"..."))},e.prototype.appendButtonEllipsisRichBase=function(){var t;this.list.push(a.createElement("button",{key:c(),tabIndex:-1,style:this.props.styleEllipsis,className:"bsr-button-ellipsis"},null!==(t=this.props.ellipsis)&&void 0!==t?t:"..."))},e.prototype.appendButtonPage=function(t,e){var s=this;this.list.push(a.createElement("button",{"data-page":t,style:this.props.styleButton,key:c(),className:"bsr-button-page "+e,onClick:function(e){s.Click(t,e.target)}},t))},e.prototype.builderStyle=function(t){var e=this.props.styleNavigate;return t&&(e=e?r(r({},e),{visibility:"hidden"}):{visibility:"hidden"}),e},e.prototype.appendButtonSide=function(t){var e=this;switch(t){case h.none:return;case h.first:this.props.first&&this.list.push(a.createElement("button",{accessKey:this.props.accessKeyFirst,"data-navigate":"first",style:this.builderStyle(this.state.CurrentPage<=1&&this.props.isHidingNavigate),disabled:this.state.CurrentPage<=1,key:c(),className:"bsr-button-navigate",onClick:function(t){1!==e.state.CurrentPage&&e.Click(1,t.target)}},this.props.first));break;case h.previous:this.props.previous&&this.list.push(a.createElement("button",{accessKey:this.props.accessKeyPrevious,"data-navigate":"previous",style:this.builderStyle(this.state.CurrentPage<=1&&this.props.isHidingNavigate),disabled:this.state.CurrentPage<=1,key:c(),className:"bsr-button-navigate",onClick:function(t){var s=e.state.CurrentPage-1;s>0&&e.Click(s,t.target)}},this.props.previous));break;case h.next:this.props.next&&this.list.push(a.createElement("button",{accessKey:this.props.accessKeyNext,"data-navigate":"next",style:this.builderStyle(this.state.CurrentPage===this.pages&&this.props.isHidingNavigate),disabled:this.state.CurrentPage===this.pages,key:c(),className:"bsr-button-navigate",onClick:function(t){var s=e.state.CurrentPage+1;s<=e.pages&&e.Click(s,t.target)}},this.props.next));break;case h.last:this.props.last&&this.list.push(a.createElement("button",{accessKey:this.props.accessKeyLast,"data-navigate":"last",style:this.builderStyle(this.state.CurrentPage===this.pages&&this.props.isHidingNavigate),disabled:this.state.CurrentPage===this.pages,key:c(),className:"bsr-button-navigate",onClick:function(t){e.Click(e.pages,t.target)}},this.props.last))}},e}(a.Component)},16046:()=>{}}]);
//# sourceMappingURL=3798.788cac91.chunk.js.map