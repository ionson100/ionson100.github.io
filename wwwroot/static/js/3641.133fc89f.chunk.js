"use strict";(self.webpackChunkionson100_github_io=self.webpackChunkionson100_github_io||[]).push([[3641],{83641:(n,e,t)=>{t.r(e),t.d(e,{default:()=>u});var o=t(65043),a=t(35616),r=t(61225),d=t(23156),s=t(70579);class l extends a.qk{validate(n){return!0}getData(n){return{mode:n,data:123}}render(){return(0,s.jsx)("div",{style:{padding:20},children:(0,s.jsx)("form",{method:"dialog",children:(0,s.jsx)("button",{children:"Close Dialog"})})})}}function i(n){let{callback:e}=n;return(0,s.jsx)("button",{onClick:()=>{e(""),(0,a.fG)({icon:(0,s.jsx)(d.rMV,{}),header:(0,s.jsx)("span",{style:{paddingLeft:10},children:"Form dialog"}),body:(0,s.jsx)(l,{}),bodyStyle:{padding:20},buttons:[(0,s.jsx)("button",{"data-mode":-1,"data-focus":1,className:"button-10",children:"close"})]}).then((n=>{e(JSON.stringify(n))}))},children:"show"})}const c='\nimport React from "react";\nimport {ShowBsrDialog,BaseBodyDialog} from "bsr-modaldialog";\nimport \'bsr-modaldialog/dist/index.css\'\nimport { FaReact } from "react-icons/fa6";\n\nclass CloseForm extends BaseBodyDialog{\n    validate(mode) {\n        return true\n    }\n    getData(mode) {\n        return{\n            mode:mode,\n            data:123\n        }\n    }\n    render() {\n        return(\n            <div style={{padding:20}}>\n                <form method="dialog">\n                    <button>Close Dialog</button>\n                </form>\n            </div>\n        )\n    }\n}\n\nexport default function CloseFormDialog ({callback}){\n\n    return(\n        <button onClick={()=>{\n            callback(\'\')\n            ShowBsrDialog({\n                icon:<FaReact/>,\n                header:<span style={{paddingLeft:10}}>Confirm dialog</span>,\n                body:<CloseForm/>,\n                bodyStyle:{padding:20},\n                buttons: [\n                    <button data-mode={-1} data-focus={1} className={\'button-10\'}>close</button>\n                ]\n            }).then(a => {\n                callback(JSON.stringify(a))\n            })\n        }}>\n            Confirm dialog\n        </button>\n    )\n}\n\n';function u(){const n=(0,o.useRef)();return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("label",{className:"label-then",ref:n}),(0,s.jsx)("br",{})," ",(0,s.jsx)("br",{}),i({callback:e=>{n.current.innerText=e}}),(0,s.jsx)("div",{children:(0,s.jsx)(r.MM,{code:c})})]})}}}]);
//# sourceMappingURL=3641.133fc89f.chunk.js.map