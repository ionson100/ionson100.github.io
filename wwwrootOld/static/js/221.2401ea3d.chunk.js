"use strict";(self.webpackChunkionson100_github_io=self.webpackChunkionson100_github_io||[]).push([[221],{221:(n,e,t)=>{t.r(e),t.d(e,{default:()=>u});var s=t(5043),o=t(5710),i=t(5719),r=t(3156),c=t(579);const l={paddingTop:5,paddingRight:5},m=n=>(0,c.jsx)("span",{style:{paddingLeft:10},children:n}),p="\nimport React, {useRef} from \"react\";\nimport MenuItem from \"bsr-menu\";\nimport {FaAnglesDown, FaAnglesRight} from \"react-icons/fa6\";\n\n\nconst styleImage={\n    paddingTop:5,\n    paddingRight:5\n}\n\n\nconst myContent=(message)=>{\n    return (<span style={{paddingLeft:10}}>{message}</span>)\n}\n\n\nexport function P1_5(){\n    \n    const mRefMenu=useRef()\n    // for ts: const mRefMenu = useRef<InstanceType<typeof MenuItem>>(null);\n    \n    return(\n           <>\n          \n            <button style={{margin:5}} onClick={()=>{\n                    mRefMenu.current.setShow(true);\n            }}>Show</button>\n\n            <button style={{margin:5}} onClick={()=>{\n                    mRefMenu.current.setShow(false);\n            }}>Hidden</button>\n          \n            <br/>\n            \n             <MenuItem\n                    ref={mRefMenu}\n                    positionPopup={'dropDown'}\n                    behavior={\"click\"}\n                    content={myContent('DropDown')}\n                    iconDropOpen={<FaAnglesDown size={15} style={styleImage}/>}\n                    iconDropClose={<FaAnglesRight size={15}  style={styleImage}/>}>\n\n                 <MenuItem content={myContent('simple')}/>\n                 <MenuItem content={myContent('simple')}/>\n                 <MenuItem content={myContent('simple')}/>\n                 <MenuItem content={myContent('simple')}/>\n                 <MenuItem content={myContent('simple')}/>\n                 <MenuItem content={myContent('simple')}/>\n             </MenuItem>\n          \n        </>\n    )\n}\n";function u(){const n=(0,s.useRef)();return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsxs)("div",{style:{display:"flex"},children:[(0,c.jsx)("button",{style:{margin:5},onClick:()=>{n.current.setShow(!0)},children:"Show"}),(0,c.jsx)("button",{style:{margin:5},onClick:()=>{n.current.setShow(!1)},children:"Hidden"})]}),(0,c.jsx)("br",{}),(0,c.jsx)("div",{style:{padding:5,background:"#f1efef",width:"fit-content"},children:(0,c.jsxs)(o.A,{ref:n,positionPopup:"dropDown",behavior:"click",content:m("DropDown"),iconDropOpen:(0,c.jsx)(r.GYJ,{size:15,style:l}),iconDropClose:(0,c.jsx)(r.iXv,{size:15,style:l}),children:[(0,c.jsx)(o.A,{content:m("simple")}),(0,c.jsx)(o.A,{content:m("simple")}),(0,c.jsx)(o.A,{content:m("simple")}),(0,c.jsx)(o.A,{content:m("simple")}),(0,c.jsx)(o.A,{content:m("simple")}),(0,c.jsx)(o.A,{content:m("simple")})]})}),(0,c.jsx)("br",{}),(0,c.jsx)("br",{}),(0,c.jsx)("br",{}),(0,c.jsx)("div",{children:(0,c.jsx)(i.MM,{code:p})})]})}}}]);
//# sourceMappingURL=221.2401ea3d.chunk.js.map