"use strict";(self.webpackChunkionson100_github_io=self.webpackChunkionson100_github_io||[]).push([[7360],{760:(n,e,t)=>{t.d(e,{Cm:()=>a,L8:()=>r,MM:()=>i});var l=t(329),o=t(3844),s=t(579);const i=n=>{let{code:e}=n;return(0,s.jsx)("div",{style:{width:"fit-content"},children:(0,s.jsx)(l.A,{language:"jsx",style:o.A,children:e})})},a=n=>{let{code:e}=n;return(0,s.jsx)("div",{style:{width:"fit-content"},children:(0,s.jsx)(l.A,{language:"css",style:o.A,children:e})})},r=n=>{let{code:e}=n;return(0,s.jsx)("div",{style:{width:"fit-content"},children:(0,s.jsx)(l.A,{language:"csharp",style:o.A,children:e})})}},7360:(n,e,t)=>{t.r(e),t.d(e,{default:()=>r});var l=t(5043),o=t(5616),s=t(760),i=t(579);const a='\nimport React, {useRef} from "react";\nimport {ShowBsrDialog,ModalDialog} from "bsr-modaldialog";\nimport \'bsr-modaldialog/dist/index.css\'\n\nexport  function P4_3() {\n    const mRefLabel=useRef<HTMLLabelElement>(null);\n    const mRefDialog=React.useRef<InstanceType<typeof ModalDialog>>(null)\n    return (\n        <>\n            <label ref={mRefLabel}></label>\n            <br/>\n            <button onClick={() => {\n                mRefLabel.current!.innerText=\'\'\n                ShowBsrDialog({\n                    refDialog:mRefDialog,\n                    modal:false,\n                    header:(<span style={{paddingLeft:10}}>Dialog </span>),\n                    body:<span style={{paddingLeft:10}}>Close it with a button:Close Dialog</span>,\n                    buttons:[(<button data-mode={-1} data-focus={1}>close</button>)]\n                }).then(a=>{\n                    mRefLabel.current!.innerText=JSON.stringify(a)\n                })\n            }}>show\n            </button>\n            <br/>\n            <button onClick={()=>{\n                if(!mRefDialog.current){\n                    alert("First open the dialog")\n                }else {\n                    mRefDialog.current.closeDialog("2323")\n                }\n            }}>Close Dialog</button>\n        </>\n    )\n}\n\n';function r(){const n=(0,l.useRef)(null);let e=l.useRef(null);return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)("label",{ref:n}),(0,i.jsx)("br",{})," ",(0,i.jsx)("br",{}),(0,i.jsx)("button",{onClick:()=>{n.current.innerText="",(0,o.fG)({refDialog:e,modal:!1,header:(0,i.jsx)("span",{style:{paddingLeft:10},children:"Dialog "}),body:(0,i.jsx)("span",{style:{paddingLeft:10},children:"Close it with a button:Close Dialog"}),buttons:[(0,i.jsx)("button",{"data-mode":-1,"data-focus":1,children:"close"})]}).then((e=>{n.current.innerText=JSON.stringify(e)}))},children:"show"}),(0,i.jsx)("br",{})," ",(0,i.jsx)("br",{}),(0,i.jsx)("button",{onClick:()=>{e.current?e.current.closeDialog("2323"):alert("First open the dialog")},children:"Close Dialog"}),(0,i.jsx)("br",{}),(0,i.jsx)("div",{children:(0,i.jsx)(s.MM,{code:a})})]})}}}]);
//# sourceMappingURL=7360.83c34069.chunk.js.map