"use strict";(self.webpackChunkionson100_github_io=self.webpackChunkionson100_github_io||[]).push([[9100],{51757:(e,n,t)=>{t.d(n,{n:()=>a});var s=t(35616),r=t(60184),i=t(70579);class l extends s.qk{getData(e){}validate(e){return!0}render(){return(0,i.jsx)(i.Fragment,{children:(0,i.jsxs)("div",{style:{textAlign:"center",padding:10},children:["Close me",(0,i.jsx)("br",{}),(0,i.jsx)("button",{onClick:()=>{this.selfClose("333")},children:"selfClose"})]})})}}async function a(){const e=[];return e.push((0,i.jsx)("button",{className:"button-10","data-mode":-1,"data-focus":!0,children:"close"})),await(0,s.fG)({position:"top",style:{width:300},icon:(0,i.jsx)(r.XiY,{}),header:(0,i.jsx)("span",{style:{paddingLeft:30},children:"Close me:"}),body:(0,i.jsx)(l,{}),buttons:e})}},19100:(e,n,t)=>{t.r(n),t.d(n,{default:()=>o});t(65043);var s=t(35616),r=t(61225),i=t(54964),l=t(70579);const a="\nimport {BaseBodyDialog, ShowBsrDialog} from \"bsr-modaldialog\";\nimport React, {ReactElement, useRef} from \"react\";\nimport {FaUserSecret} from \"react-icons/fa\";\n\nexport class MyForm extends BaseBodyDialog {\n\n    public mRefFirstName: React.RefObject<HTMLInputElement> = React.createRef<HTMLInputElement>()\n    public mRefEmail: React.RefObject<HTMLInputElement> = React.createRef<HTMLInputElement>()\n    public mRefPassword: React.RefObject<HTMLInputElement> = React.createRef<HTMLInputElement>()\n    public mRefRole: React.RefObject<HTMLSelectElement> = React.createRef<HTMLSelectElement>()\n    public mRefError: React.RefObject<HTMLLabelElement> = React.createRef<HTMLLabelElement>();\n\n\n    validate(mode: string | undefined): boolean {\n        this.mRefError.current.innerText = ''\n\n\n        if (!mode || mode === '-2' || mode === '-1') {\n            return true;\n        }\n\n        if (mode === '1') {// click register\n\n\n           f (this.mRefFirstName.current.value === '') {\n                this.mRefError.current.innerText = 'First name empty.'\n                this.mRefFirstName.current?.focus()\n                return false;\n            }\n            if (this.mRefEmail.current.value === '') {\n                this.mRefError.current.innerText = 'Email empty.'\n                this.mRefEmail.current?.focus()\n                return false;\n            }\n            if (this.mRefPassword.current.value === '') {\n                this.mRefPassword.current?.focus()\n                this.mRefError.current.innerText = 'Password empty.'\n                return false;\n            }\n            if (this.mRefRole.current.selectedIndex === 0) {\n                this.mRefRole.current?.focus()\n                this.mRefError.current.innerText = 'Role not selected.'\n                return false;\n            }\n\n            //Simulating a request to the server\n            setTimeout(() => {\n                this.selfClose('200')\n            }, 1000)\n            return false\n        }\n        return false;\n\n\n    }\n\n    getData(mode: string | undefined): object | undefined {\n        if (mode === '-1' || mode === '-2')\n            return undefined\n        return {\n            userName: this.mRefFirstName.current?.value,\n            email: this.mRefEmail.current?.value,\n            password: this.mRefPassword.current?.value,\n            role: this.mRefRole.current?.value\n        };\n    }\n\n    componentDidMount() {\n        setTimeout(() => {\n            this.mRefFirstName.current.focus()// override focus button dialog :close (if there)\n        }, 100)\n    }\n\n    render() {\n        return (\n            <div style={{paddingTop: 2, paddingBottom: 2}}>\n\n                <fieldset>\n                    <label ref={this.mRefError} style={{color: \"red\"}}/>\n                    <h2>Sign Up</h2>\n                    <div className=\"Field\">\n                        <label>First name <sup>*</sup></label>\n                        <input ref={this.mRefFirstName} placeholder=\"First name\"/>\n                    </div>\n                    <div className=\"Field\">\n                        <label>Last name</label>\n                        <input placeholder=\"Last name\"/>\n                    </div>\n                    <div className=\"Field\">\n                        <label>Email address <sup>*</sup></label>\n                        <input ref={this.mRefEmail} placeholder=\"Email address\"/>\n                    </div>\n                    <div className=\"Field\">\n                        <label>Password <sup>*</sup></label>\n                        <input ref={this.mRefPassword} type=\"password\" placeholder=\"Password\"/>\n                    </div>\n                    <div className=\"Field\">\n                        <label>Role <sup>*</sup></label>\n                        <select ref={this.mRefRole}>\n                            <option value=\"role\">Role</option>\n                            <option value=\"individual\">Individual</option>\n                            <option value=\"business\">Business</option>\n                        </select>\n                    </div>\n\n                </fieldset>\n            </div>\n        );\n    }\n}\n\nexport function GetRegisterDialog() {\n    const mRefLabel = useRef<HTMLLabelElement>(null)\n    const but: ReactElement[] = []\n    but.push(<a data-mode={2} href=\"https://medium.com/@ericapantojacs/react-registration-form-d298b3b7e75d\">Visit source code</a>)\n     but.push(<button className={'button-10'} data-mode={100} onClick={()=>{\n        ConfirmDialogF()\n    }\n    }>showModal</button>)\n    but.push(<button className={'button-10'} data-mode={1}>register</button>)\n    but.push(< button className={'button-10'} data-mode={-1} data-focus={true}>close</button>);\n\n    return (\n        <>\n            <label  className={'label-then'}  ref={mRefLabel}></label>\n            <br/>\n            \n            <button onClick={() => {\n                mRefLabel.current.innerText = ''\n\n                ShowBsrDialog({\n                    style: {width: 520},\n                    position: 'center',\n                    icon: <FaUserSecret/>,\n                    header: (<span style={{paddingLeft: 30}}>User registration:</span>),\n                    body: <MyForm/>,\n                    buttons: but\n                }).then(a => {\n                    mRefLabel.current.innerText = JSON.stringify(a);\n                })\n            }}> Click\n            </button>\n            \n        </>\n    )\n}\n\n";s.qk;function o(){return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(i.U,{}),(0,l.jsx)("br",{}),(0,l.jsx)("div",{children:(0,l.jsx)(r.MM,{code:a})})]})}},54964:(e,n,t)=>{t.d(n,{F:()=>o,U:()=>d});var s=t(35616),r=t(65043),i=t(60184),l=t(51757),a=t(70579);class o extends s.qk{constructor(){super(...arguments),this.mRefFirstName=r.createRef(),this.mRefEmail=r.createRef(),this.mRefPassword=r.createRef(),this.mRefRole=r.createRef(),this.mRefError=r.createRef()}validate(e){return this.mRefError.current.innerText="","100"!==e&&(!e||"-2"===e||"-1"===e||"1"===e&&(""===this.mRefFirstName.current.value?(this.mRefError.current.innerText="First name empty.",null===(n=this.mRefFirstName.current)||void 0===n||n.focus(),!1):""===this.mRefEmail.current.value?(this.mRefError.current.innerText="Email empty.",null===(t=this.mRefEmail.current)||void 0===t||t.focus(),!1):""===this.mRefPassword.current.value?(null===(s=this.mRefPassword.current)||void 0===s||s.focus(),this.mRefError.current.innerText="Password empty.",!1):0===this.mRefRole.current.selectedIndex?(null===(r=this.mRefRole.current)||void 0===r||r.focus(),this.mRefError.current.innerText="Role not selected.",!1):(setTimeout((()=>{this.selfClose("200")}),1e3),!1)));var n,t,s,r}getData(e){var n,t,s,r;if("-1"!==e&&"-2"!==e)return{userName:null===(n=this.mRefFirstName.current)||void 0===n?void 0:n.value,email:null===(t=this.mRefEmail.current)||void 0===t?void 0:t.value,password:null===(s=this.mRefPassword.current)||void 0===s?void 0:s.value,role:null===(r=this.mRefRole.current)||void 0===r?void 0:r.value}}componentDidMount(){setTimeout((()=>{this.mRefFirstName.current.focus()}),100)}render(){return(0,a.jsx)("div",{style:{paddingTop:2,paddingBottom:2},children:(0,a.jsxs)("fieldset",{children:[(0,a.jsx)("label",{ref:this.mRefError,style:{color:"red"}}),(0,a.jsx)("h2",{children:"Sign Up"}),(0,a.jsxs)("div",{className:"Field",children:[(0,a.jsxs)("label",{children:["First name ",(0,a.jsx)("sup",{children:"*"})]}),(0,a.jsx)("input",{ref:this.mRefFirstName,placeholder:"First name"})]}),(0,a.jsxs)("div",{className:"Field",children:[(0,a.jsx)("label",{children:"Last name"}),(0,a.jsx)("input",{placeholder:"Last name"})]}),(0,a.jsxs)("div",{className:"Field",children:[(0,a.jsxs)("label",{children:["Email address ",(0,a.jsx)("sup",{children:"*"})]}),(0,a.jsx)("input",{ref:this.mRefEmail,placeholder:"Email address"})]}),(0,a.jsxs)("div",{className:"Field",children:[(0,a.jsxs)("label",{children:["Password ",(0,a.jsx)("sup",{children:"*"})]}),(0,a.jsx)("input",{ref:this.mRefPassword,type:"password",placeholder:"Password"})]}),(0,a.jsxs)("div",{className:"Field",children:[(0,a.jsxs)("label",{children:["Role ",(0,a.jsx)("sup",{children:"*"})]}),(0,a.jsxs)("select",{ref:this.mRefRole,children:[(0,a.jsx)("option",{value:"role",children:"Role"}),(0,a.jsx)("option",{value:"individual",children:"Individual"}),(0,a.jsx)("option",{value:"business",children:"Business"})]})]})]})})}}function d(){const e=(0,r.useRef)(null),n=[];return n.push((0,a.jsx)("a",{style:{fontSize:20},href:"https://medium.com/@ericapantojacs/react-registration-form-d298b3b7e75d",children:"Visit source code"})),n.push((0,a.jsx)("button",{className:"button-10","data-mode":100,onClick:()=>{(0,l.n)()},children:"showModal"})),n.push((0,a.jsx)("button",{className:"button-10","data-mode":1,children:"register"})),n.push((0,a.jsx)("button",{className:"button-10","data-mode":-1,"data-focus":!0,children:"close"})),(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)("label",{className:"label-then",ref:e}),(0,a.jsx)("br",{})," ",(0,a.jsx)("br",{}),(0,a.jsx)("button",{onClick:()=>{e.current.innerText="",(0,s.fG)({style:{width:520},position:"center",icon:(0,a.jsx)(i.XiY,{}),header:(0,a.jsx)("span",{style:{paddingLeft:30},children:"User registration:"}),body:(0,a.jsx)(o,{}),buttons:n}).then((n=>{e.current.innerText=JSON.stringify(n)}))},children:" Click"})]})}}}]);
//# sourceMappingURL=9100.c7271e2a.chunk.js.map