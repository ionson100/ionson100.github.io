"use strict";(self.webpackChunkionson100_github_io=self.webpackChunkionson100_github_io||[]).push([[3115],{93115:(t,e,n)=>{n.r(e),n.d(e,{default:()=>u});var s=n(65043),a=n(43602),i=(n(16046),n(61225)),r=n(70579);const o='import {useEffect, useRef, useState} from "react";\nimport {Paginator} from "bsr-paginator";\nimport \'bsr-paginator/dist/index.css\'\n\nexport function App() {\n    const [myClick, setMyClick] = useState(\'\');\n    const [myFetch, setMyFetch] = useState(\'\');\n    const refPaginator = useRef<Paginator>(null)\n    useEffect(() => {\n         /*fetching: SetState(totalRows, pageSize,currentPage,callback) */\n        refPaginator.current!.SetState(100, 5, 1, () => WriteFetch())\n    }, []);\n    function WriteFetch() {\n        const str = "totalRows: "+refPaginator!.current!.State.TotalRows+ \n            " pageSize: "+refPaginator.current!.State.PageSize+\n            " currentPage: "+refPaginator.current!.State.CurrentPage+\n            " range: "+refPaginator.current!.State.Range+\n            " mode: "+refPaginator.current!.State.Mode\n        setMyFetch(str)\n    }\n    return (\n        <div>\n            <div>{myClick}</div>\n            <div style={{display: "flex"}}>\n                <button onClick={() => refPaginator.current!.SetState(800, 5, 1, () => WriteFetch())}>\n                    Fetch 800 rows\n                </button>\n                <button onClick={() => refPaginator.current!.SetState(undefined, 10, 1, () => WriteFetch())}>\n                    Page size 10\n                </button>\n                <button onClick={() => refPaginator.current!.SetState(undefined, 5, 1, () => WriteFetch())}>\n                    Page size 5\n                </button>\n                <button onClick={() => refPaginator.current!.SetCurrentPageAndClick(6, () => WriteFetch())}>\n                    Got to page 6 and click\n                </button>\n                <button\n                    onClick={() => refPaginator.current!.SetCurrentPageAndClick(refPaginator.current!.State.PagesCount, () => WriteFetch())}>\n                    Go to last page and click\n                </button>\n                <button\n                    onClick={() => refPaginator.current!.SetState(0, undefined, undefined, () => WriteFetch())}>\n                    hidde\n                </button>\n                <button onClick={() => refPaginator.current!.SetRange(10, () => WriteFetch())}>\n                    range 10\n                </button>\n                <button onClick={() => refPaginator.current!.SetRange(7, () => WriteFetch())}>\n                    range 7\n                </button>\n                <select onChange={(value) => {\n                    refPaginator.current!.SetMode(value.target.value as \'base\' | \'richBase\' | \'showEllipsis\', () => WriteFetch())\n                }}>\n                    <option value="base" >base</option>\n                    <option value="richBase" selected={true}>richBase</option>\n                    <option value="showEllipsis">showEllipsis</option>\n                </select>\n            </div>\n            <div>{myFetch}</div>\n            <Paginator\n                range={5}\n                ref={refPaginator}\n                mode={\'richBase\'}\n                ellipsis={\'..\'}\n                previous={\'<\'}\n                next={\'>\'}\n                first={\'<<\'}\n                last={\'>>\'}\n                onChange={(page) => {\n                    setMyClick("Click page " + page + "  of " + refPaginator.current!.State.PagesCount)\n                }}\n            />\n        </div>\n    )\n}';function u(){const[t,e]=(0,s.useState)(""),[n,u]=(0,s.useState)(""),l=(0,s.useRef)(null);function c(){const t="totalRows: "+l.current.State.TotalRows+" pageSize: "+l.current.State.PageSize+" currentPage: "+l.current.State.CurrentPage+" range: "+l.current.State.Range+" mode: "+l.current.State.Mode;u(t)}return(0,s.useEffect)((()=>{l.current.SetState(100,5,1,(()=>c()))}),[]),(0,r.jsxs)("div",{children:[(0,r.jsxs)("div",{style:{display:"flex"},children:[(0,r.jsx)("button",{onClick:()=>l.current.SetState(800,5,1,(()=>c())),children:"Fetch 800 rows"}),(0,r.jsx)("button",{onClick:()=>l.current.SetState(void 0,10,1,(()=>c())),children:"Page size 10"}),(0,r.jsx)("button",{onClick:()=>l.current.SetState(void 0,5,1,(()=>c())),children:"Page size 5"}),(0,r.jsx)("button",{onClick:()=>l.current.SetCurrentPageAndClick(6,(()=>c())),children:"Got to page 6 and click"}),(0,r.jsx)("button",{onClick:()=>l.current.SetCurrentPageAndClick(l.current.State.PagesCount,(()=>c())),children:"Go to last page and click"}),(0,r.jsx)("button",{onClick:()=>l.current.SetState(0,void 0,void 0,(()=>c())),children:"hidde"}),(0,r.jsx)("button",{onClick:()=>l.current.SetRange(10,(()=>c())),children:"range 10"}),(0,r.jsx)("button",{onClick:()=>l.current.SetRange(7,(()=>c())),children:"range 7"}),(0,r.jsxs)("select",{onChange:t=>{l.current.SetMode(t.target.value,(()=>c()))},children:[(0,r.jsx)("option",{value:"base",children:"base"}),(0,r.jsx)("option",{value:"richBase",selected:!0,children:"richBase"}),(0,r.jsx)("option",{value:"showEllipsis",children:"showEllipsis"})]})]}),(0,r.jsx)("div",{style:{height:30},children:n}),(0,r.jsx)("div",{style:{height:30},children:t}),(0,r.jsx)(a.m,{range:5,ref:l,mode:"richBase",ellipsis:"..",previous:"<",next:">",first:"<<",last:">>",onChange:t=>{e("Click page "+t+"  of "+l.current.State.PagesCount)}}),(0,r.jsx)("br",{}),(0,r.jsx)("br",{}),(0,r.jsx)(i.MM,{code:o})]})}},43602:(t,e,n)=>{n.d(e,{m:()=>d});var s=n(65043),a=function(t,e){return a=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n])},a(t,e)};var i=function(){return i=Object.assign||function(t){for(var e,n=1,s=arguments.length;n<s;n++)for(var a in e=arguments[n])Object.prototype.hasOwnProperty.call(e,a)&&(t[a]=e[a]);return t},i.apply(this,arguments)};"function"===typeof SuppressedError&&SuppressedError;for(var r,o=[],u=0;u<256;++u)o.push((u+256).toString(16).slice(1));var l=new Uint8Array(16);function c(){if(!r&&!(r="undefined"!==typeof crypto&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto)))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return r(l)}var p,h={randomUUID:"undefined"!==typeof crypto&&crypto.randomUUID&&crypto.randomUUID.bind(crypto)};function g(t,e,n){if(h.randomUUID&&!e&&!t)return h.randomUUID();var s=(t=t||{}).random||(t.rng||c)();return s[6]=15&s[6]|64,s[8]=63&s[8]|128,function(t){let e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;return(o[t[e+0]]+o[t[e+1]]+o[t[e+2]]+o[t[e+3]]+"-"+o[t[e+4]]+o[t[e+5]]+"-"+o[t[e+6]]+o[t[e+7]]+"-"+o[t[e+8]]+o[t[e+9]]+"-"+o[t[e+10]]+o[t[e+11]]+o[t[e+12]]+o[t[e+13]]+o[t[e+14]]+o[t[e+15]]).toLowerCase()}(s)}!function(t){t[t.none=0]="none",t[t.first=1]="first",t[t.previous=2]="previous",t[t.next=3]="next",t[t.last=4]="last"}(p||(p={}));var d=function(t){function e(e){var n,a,i=this;return(i=t.call(this,e)||this).setClick=!1,i.list=[],i.mapPage=new Map,i.isAddMap=!1,i.refPaginator=s.createRef(),i.pages=0,i.range=null!==(n=i.props.range)&&void 0!==n?n:4,i.mode=null!==(a=i.props.mode)&&void 0!==a?a:"base",i.isChet=function(t){return!(t%2)},i.state={TotalRows:0,PageSize:1,CurrentPage:1,Range:i.range,Mode:i.mode},i}return function(t,e){if("function"!==typeof e&&null!==e)throw new TypeError("Class extends value "+String(e)+" is not a constructor or null");function n(){this.constructor=t}a(t,e),t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)}(e,t),e.prototype.setStatePaginator=function(t,e,n){this.setState({CurrentPage:e,TotalRows:t,PageSize:n,Range:this.range,Mode:this.mode})},e.prototype.SetState=function(t,e,n,s){var a=this;setTimeout((function(){a.setState({CurrentPage:null!==n&&void 0!==n?n:a.state.CurrentPage,PageSize:null!==e&&void 0!==e?e:a.state.PageSize,TotalRows:null!==t&&void 0!==t?t:a.state.TotalRows,Range:a.range,Mode:a.mode},s)}))},e.prototype.SetRange=function(t,e){this.range=t,this.setState({CurrentPage:1,PageSize:this.state.PageSize,TotalRows:this.state.TotalRows,Range:this.range,Mode:this.mode},e)},e.prototype.SetMode=function(t,e){this.mode=t,this.setState({CurrentPage:1,PageSize:this.state.PageSize,TotalRows:this.state.TotalRows,Range:this.range,Mode:this.mode},e)},Object.defineProperty(e.prototype,"State",{get:function(){var t=this;return{get TotalRows(){return t.state.TotalRows},get CurrentPage(){return t.state.CurrentPage},get PageSize(){return t.state.PageSize},get PagesCount(){return t.pages},get Range(){return t.range},get Mode(){return t.mode}}},enumerable:!1,configurable:!0}),e.prototype.SetCurrentPageAndClick=function(t,e){if(!(t>0))throw new Error("Page Purpose. The value must be greater than 0. Your value: "+t);this.setClick=!0,this.setClick=!0,this.setState({CurrentPage:t,PageSize:this.state.PageSize,TotalRows:this.state.TotalRows,Range:this.range},e)},e.prototype.Click=function(t,e){this.props.onChange&&(this.props.isMoreSends||this.state.CurrentPage!==t)&&this.props.onChange(t,e),this.setStatePaginator(this.state.TotalRows,t,this.state.PageSize)},e.prototype.renderButton=function(){var t=this;if(this.list.length=0,this.refPaginator.current){if(this.refPaginator.current.style.display="flex",this.state.CurrentPage<=0||this.state.PageSize<=0||this.state.TotalRows<=0)return this.refPaginator.current.style.display="none",null;this.isAddMap=!1,this.pages=Math.ceil(this.state.TotalRows/this.state.PageSize),(this.state.TotalRows<=this.state.PageSize||1===this.pages)&&(this.list.length=0,this.refPaginator.current.style.display="none");var e,n,s=this.range;s<=3&&(s=4);var a=!1,i=!1,r=this.mapPage.get(this.state.CurrentPage);if(r)e=r.start,n=r.delta,i=!0,a=!0,this.mapPage.clear(),this.isAddMap=!0;else if(this.pages<=s)e=1,n=this.pages+1,this.mapPage.clear();else if(this.state.CurrentPage<=s-2){switch(this.mapPage.clear(),e=1,this.mode){case"base":case"richBase":default:n=s+1;break;case"showEllipsis":n=s+1+1}this.pages>s&&(a=!0)}else if(this.state.CurrentPage<=this.pages-s+2)if(this.isAddMap=!0,this.mapPage.clear(),i=!0,a=!0,"richBase"===this.mode){var o=Math.floor((s-2)/2);e=this.state.CurrentPage-o,n=this.state.CurrentPage+o+(this.isChet(s)?0:1)}else{o=Math.floor(s/2);e=this.state.CurrentPage-o,n=this.state.CurrentPage+o+(this.isChet(s)?0:1)}else{this.mapPage.clear();var u=this.pages-s+1;switch(i=!0,this.mode){case"base":default:e=u<=0?1:u,n=this.pages+1;break;case"showEllipsis":e=(u-=1)<=0?1:u,n=this.pages+1}}this.appendButtonSide(p.first),this.appendButtonSide(p.previous),i&&this.appendButtonEllipsis(),"richBase"===this.mode&&i&&(this.appendButtonPage(1),this.appendButtonEllipsisRichBase());for(var l=function(s){s-1>e&&s<n-2&&c.isAddMap&&c.mapPage.set(s,{start:e,delta:n});var a="";c.state.CurrentPage===s&&(a="bsr-button-selection",c.setClick&&(c.setClick=!1,setTimeout((function(){t.props.onChange&&t.props.onChange(s,void 0)})))),c.appendButtonPage(s,a)},c=this,h=e;h<n;h++)l(h);return"richBase"===this.mode&&a&&(this.appendButtonEllipsisRichBase(),this.appendButtonPage(this.pages)),a&&this.appendButtonEllipsis(),this.appendButtonSide(p.next),this.appendButtonSide(p.last),this.list}},Object.defineProperty(e.prototype,"Paginator",{get:function(){return this.refPaginator.current},enumerable:!1,configurable:!0}),e.prototype.render=function(){var t;return s.createElement("div",{"data-paginator":1,style:this.props.style,ref:this.refPaginator,id:this.props.id,className:null!==(t=this.props.className)&&void 0!==t?t:"bsr-paginator"},this.renderButton())},e.prototype.appendButtonEllipsis=function(){var t;"showEllipsis"===this.mode&&this.list.push(s.createElement("button",{"data-ellipsis":1,key:g(),tabIndex:-1,style:this.props.styleEllipsis,className:"bsr-button-ellipsis"},null!==(t=this.props.ellipsis)&&void 0!==t?t:"..."))},e.prototype.appendButtonEllipsisRichBase=function(){var t;this.list.push(s.createElement("button",{key:g(),tabIndex:-1,style:this.props.styleEllipsis,className:"bsr-button-ellipsis"},null!==(t=this.props.ellipsis)&&void 0!==t?t:"..."))},e.prototype.appendButtonPage=function(t,e){var n=this;this.list.push(s.createElement("button",{"data-page":t,style:this.props.styleButton,key:g(),className:"bsr-button-page "+e,onClick:function(e){n.Click(t,e.target)}},t))},e.prototype.builderStyle=function(t){var e=this.props.styleNavigate;return t&&(e=e?i(i({},e),{visibility:"hidden"}):{visibility:"hidden"}),e},e.prototype.appendButtonSide=function(t){var e=this;switch(t){case p.none:return;case p.first:this.props.first&&this.list.push(s.createElement("button",{accessKey:this.props.accessKeyFirst,"data-navigate":"first",style:this.builderStyle(this.state.CurrentPage<=1&&this.props.isHidingNavigate),disabled:this.state.CurrentPage<=1,key:g(),className:"bsr-button-navigate",onClick:function(t){1!==e.state.CurrentPage&&e.Click(1,t.target)}},this.props.first));break;case p.previous:this.props.previous&&this.list.push(s.createElement("button",{accessKey:this.props.accessKeyPrevious,"data-navigate":"previous",style:this.builderStyle(this.state.CurrentPage<=1&&this.props.isHidingNavigate),disabled:this.state.CurrentPage<=1,key:g(),className:"bsr-button-navigate",onClick:function(t){var n=e.state.CurrentPage-1;n>0&&e.Click(n,t.target)}},this.props.previous));break;case p.next:this.props.next&&this.list.push(s.createElement("button",{accessKey:this.props.accessKeyNext,"data-navigate":"next",style:this.builderStyle(this.state.CurrentPage===this.pages&&this.props.isHidingNavigate),disabled:this.state.CurrentPage===this.pages,key:g(),className:"bsr-button-navigate",onClick:function(t){var n=e.state.CurrentPage+1;n<=e.pages&&e.Click(n,t.target)}},this.props.next));break;case p.last:this.props.last&&this.list.push(s.createElement("button",{accessKey:this.props.accessKeyLast,"data-navigate":"last",style:this.builderStyle(this.state.CurrentPage===this.pages&&this.props.isHidingNavigate),disabled:this.state.CurrentPage===this.pages,key:g(),className:"bsr-button-navigate",onClick:function(t){e.Click(e.pages,t.target)}},this.props.last))}},e}(s.Component)},16046:()=>{}}]);
//# sourceMappingURL=3115.db582cdd.chunk.js.map