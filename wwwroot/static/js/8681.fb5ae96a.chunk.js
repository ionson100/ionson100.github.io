"use strict";(self.webpackChunkionson100_github_io=self.webpackChunkionson100_github_io||[]).push([[8681],{760:(e,n,t)=>{t.d(n,{Cm:()=>d,L8:()=>a,MM:()=>l});var r=t(329),s=t(3844),o=t(579);const l=e=>{let{code:n}=e;return(0,o.jsx)("div",{style:{width:"fit-content"},children:(0,o.jsx)(r.A,{language:"jsx",style:s.A,children:n})})},d=e=>{let{code:n}=e;return(0,o.jsx)("div",{style:{width:"fit-content"},children:(0,o.jsx)(r.A,{language:"css",style:s.A,children:n})})},a=e=>{let{code:n}=e;return(0,o.jsx)("div",{style:{width:"fit-content"},children:(0,o.jsx)(r.A,{language:"csharp",style:s.A,children:n})})}},8681:(e,n,t)=>{t.r(n),t.d(n,{default:()=>a});var r=t(5043),s=t(5616),o=t(760),l=t(579);const d='\nimport React, {useRef} from "react";\nimport {ShowBsrDialog} from "bsr-modaldialog";\nimport \'bsr-modaldialog/dist/index.css\'\n\nexport function P4_4() {\n    const mRefLabel = useRef();\n    return (\n        <>\n            <label ref={mRefLabel}></label>\n            <br/>\n           <button onClick={() => {\n                mRefLabel.current.innerText = \'\'\n                \n                ShowBsrDialog({\n                   \n                    styleHeader:{background:"red"},\n                    styleBody:{background:"green"},\n                    styleFooter:{background:"yellow"},\n                    style:{width:200},\n                  \n                    header: (<span style={{paddingLeft: 10}}>Dialog </span>),\n                    body: <span style={{paddingLeft: 10,color:"red"}}>Body click Esc</span>,\n                    buttons: [(<button data-mode={-1} data-focus={1}>close</button>)]\n                }).then(a => {\n                    mRefLabel.current.innerText = JSON.stringify(a)\n                })\n                \n            }}>show\n            </button>\n        </>\n    )\n}\n\n';function a(){const e=(0,r.useRef)();return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)("label",{ref:e}),(0,l.jsx)("br",{})," ",(0,l.jsx)("br",{}),(0,l.jsx)("button",{onClick:()=>{e.current.innerText="",(0,s.fG)({styleHeader:{background:"red"},styleBody:{background:"green"},styleFooter:{background:"yellow"},style:{width:200},header:(0,l.jsx)("span",{style:{paddingLeft:10},children:"Dialog "}),body:(0,l.jsx)("span",{style:{paddingLeft:10,color:"red"},children:"Body click Esc"}),buttons:[(0,l.jsx)("button",{"data-mode":-1,"data-focus":1,children:"close"})]}).then((n=>{e.current.innerText=JSON.stringify(n)}))},children:"show"}),(0,l.jsx)("br",{}),(0,l.jsx)("div",{children:(0,l.jsx)(o.MM,{code:d})})]})}}}]);
//# sourceMappingURL=8681.fb5ae96a.chunk.js.map