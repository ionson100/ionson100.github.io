"use strict";(self.webpackChunkionson100_github_io=self.webpackChunkionson100_github_io||[]).push([[7446],{760:(e,t,n)=>{n.d(t,{Cm:()=>i,L8:()=>d,MM:()=>a});var r=n(329),o=n(3844),s=n(579);const a=e=>{let{code:t}=e;return(0,s.jsx)("div",{style:{width:"fit-content"},children:(0,s.jsx)(r.A,{language:"jsx",style:o.A,children:t})})},i=e=>{let{code:t}=e;return(0,s.jsx)("div",{style:{width:"fit-content"},children:(0,s.jsx)(r.A,{language:"css",style:o.A,children:t})})},d=e=>{let{code:t}=e;return(0,s.jsx)("div",{style:{width:"fit-content"},children:(0,s.jsx)(r.A,{language:"csharp",style:o.A,children:t})})}},7446:(e,t,n)=>{n.r(t),n.d(t,{default:()=>l});var r=n(5043),o=n(5616),s=n(760),a=n(579);const i='\nimport React, {useRef} from "react";\nimport {ShowBsrDialog,BaseBodyDialog} from "bsr-modaldialog";\nimport \'bsr-modaldialog/dist/index.css\'\n\nclass BodyDialog extends BaseBodyDialog {\n    constructor(props) {\n        super(props);\n        this.mRefInput = React.createRef();\n    }\n\n    /**\n     * Checking the completion of data, making a decision to continue\n     * @param mode data-mode attribute value\n     * @returns {boolean} true - continue false break\n     */\n    validate(mode) {\n        if(mode==="1"){\n            const text=this.mRefInput.current.value;\n            if(text.length===0){\n                alert(" input value empty")\n                return false;\n            }\n            return true;\n        }\n        return true;\n    }\n\n\n    /**\n     * Receiving data from a dialog to pass it outside\n     * @param mode data-mode attribute value\n     * @returns {object} data body\n     */\n    getData(mode) {\n\n        return {\n            text:this.mRefInput.current.value\n        }\n\n    }\n    componentDidMount() {\n        this.mRefInput.current.value=this.props.text\n        setTimeout(()=>{\n            this.mRefInput.current.select();\n            this.mRefInput.current.focus()\n        },100)\n    }\n\n    render() {\n        return (\n            <input ref={this.mRefInput} type={"text"} style={{fontSize:20}} />\n        )\n    }\n}\n\n',d="\n\nexport function P4_10() {\n    const mRefLabel = useRef();\n\n    return (\n        <>\n            <label ref={mRefLabel}></label>\n            <br/>\n            \n            <button onClick={() => {\n                mRefLabel.current.innerText = ''\n                \n                ShowBsrDialog({\n                    modal: true,\n                    header: (<span style={{paddingLeft: 10}}>Dialog Prompt</span>),\n                    body: <BodyDialog text={'default text'}/>,\n                    styleBody:{padding:20},\n                    buttons: [\n                        (<button data-mode={1}>ok</button>),\n                        (<button data-mode={-1}>close</button>)\n                    ]\n                }).then(a => {\n                    mRefLabel.current.innerText = JSON.stringify(a)\n                })\n            }}>show\n            </button>\n        </>\n    )\n}\n\n";class u extends o.qk{constructor(e){super(e),this.mRefInput=r.createRef()}validate(e){if("1"===e){return 0!==this.mRefInput.current.value.length||(alert(" input value empty"),!1)}return!0}getData(e){return{text:this.mRefInput.current.value}}componentDidMount(){this.mRefInput.current.value=this.props.text,setTimeout((()=>{this.mRefInput.current.select(),this.mRefInput.current.focus()}),100)}render(){return(0,a.jsx)("input",{ref:this.mRefInput,type:"text",style:{fontSize:20}})}}function l(){const e=(0,r.useRef)();return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)("p",{children:["For complex dialogs, in order to gain full control over the contents of the body,",(0,a.jsx)("br",{}),"the body needs to inherit from the abstract class BaseBodyDialog,",(0,a.jsx)("br",{}),"where you need to implement the methods: validate and getData ",(0,a.jsx)("br",{}),"and rendering method.",(0,a.jsx)("br",{}),"Event trace:",(0,a.jsx)("br",{}),"1. Pressing a button or EDS key.",(0,a.jsx)("br",{}),"2. Processing in the validate procedure. If the procedure returns a false result, the processing ends.",(0,a.jsx)("br",{}),"3. Obtaining body content data, procedure getData.",(0,a.jsx)("br",{}),"4. Formation of a response to the promise and closing the dialogue.",(0,a.jsx)("br",{}),(0,a.jsxs)("span",{style:{fontWeight:"bold"},children:["Attention: in all procedures the mode argument, the value of the data-mode attribute",(0,a.jsx)("br",{})]})]}),(0,a.jsx)("label",{ref:e}),(0,a.jsx)("br",{})," ",(0,a.jsx)("br",{}),(0,a.jsx)("button",{onClick:()=>{e.current.innerText="",(0,o.fG)({modal:!0,header:(0,a.jsx)("span",{style:{paddingLeft:10},children:"Dialog Prompt "}),body:(0,a.jsx)(u,{text:"default text"}),styleBody:{padding:20},buttons:[(0,a.jsx)("button",{"data-mode":1,children:"ok"}),(0,a.jsx)("button",{"data-mode":-1,children:"close"})]}).then((t=>{e.current.innerText=JSON.stringify(t)}))},children:"show"}),(0,a.jsx)("br",{}),(0,a.jsx)("div",{children:(0,a.jsx)(s.MM,{code:i})}),(0,a.jsx)("br",{}),(0,a.jsx)("div",{children:(0,a.jsx)(s.MM,{code:d})})]})}}}]);
//# sourceMappingURL=7446.266efd13.chunk.js.map