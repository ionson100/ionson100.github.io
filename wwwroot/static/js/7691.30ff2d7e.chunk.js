"use strict";(self.webpackChunkionson100_github_io=self.webpackChunkionson100_github_io||[]).push([[7691],{760:(n,e,t)=>{t.d(e,{Cm:()=>i,L8:()=>a,MM:()=>l});var s=t(329),o=t(3844),r=t(579);const l=n=>{let{code:e}=n;return(0,r.jsx)("div",{style:{width:"fit-content"},children:(0,r.jsx)(s.A,{language:"jsx",style:o.A,children:e})})},i=n=>{let{code:e}=n;return(0,r.jsx)("div",{style:{width:"fit-content"},children:(0,r.jsx)(s.A,{language:"css",style:o.A,children:e})})},a=n=>{let{code:e}=n;return(0,r.jsx)("div",{style:{width:"fit-content"},children:(0,r.jsx)(s.A,{language:"csharp",style:o.A,children:e})})}},7691:(n,e,t)=>{t.r(e),t.d(e,{default:()=>a});var s=t(5043),o=t(5616),r=t(760),l=t(579);const i="\nimport React, {useRef} from \"react\";\nimport {ShowBsrDialog} from \"bsr-modaldialog\";\nimport 'bsr-modaldialog/dist/index.css'\n\nexport function P4_8() {\n    const mRefLabel = useRef();\n\n    return (\n        <>\n            <label ref={mRefLabel}></label>\n\n            <br/>\n            <button onClick={() => {\n                mRefLabel.current.innerText = ''\n                ShowBsrDialog({\n\n                    onCancel:(d)=>{\n                        if(window.confirm('Shall we close the dialogue?')){\n                            return true;\n                        }else{\n                            return false;\n                        }\n                    },\n\n                    modal:true,\n                    header: (<span style={{paddingLeft: 10}}>Dialog </span>),\n                    body: <span style={{paddingLeft: 10,color:\"red\"}}>Body click Esc</span>,\n                    buttons: [(<button data-mode={-1} data-focus={1}>close</button>)]\n                }).then(a => {\n                    mRefLabel.current.innerText = JSON.stringify(a)\n                })\n            }}>show\n            </button>\n        </>\n    )\n}\n\n";function a(){const n=(0,s.useRef)();return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)("label",{ref:n}),(0,l.jsx)("br",{})," ",(0,l.jsx)("br",{}),(0,l.jsx)("button",{onClick:()=>{n.current.innerText="",(0,o.fG)({onCancel:n=>!!window.confirm("Shall we close the dialogue?"),modal:!0,header:(0,l.jsx)("span",{style:{paddingLeft:10},children:"Dialog "}),body:(0,l.jsx)("span",{style:{paddingLeft:10,color:"red"},children:"Body click Esc"}),buttons:[(0,l.jsx)("button",{"data-mode":-1,"data-focus":1,children:"close"})]}).then((e=>{n.current.innerText=JSON.stringify(e)}))},children:"show"}),(0,l.jsx)("br",{}),(0,l.jsx)("div",{children:(0,l.jsx)(r.MM,{code:i})})]})}}}]);
//# sourceMappingURL=7691.30ff2d7e.chunk.js.map