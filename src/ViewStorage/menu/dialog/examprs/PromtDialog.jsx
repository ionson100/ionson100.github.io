
import {ShowBsrDialog,BaseBodyDialog} from "bsr-modaldialog";
import 'bsr-modaldialog/dist/index.css'
import { FaReact } from "react-icons/fa6";
import React from "react";
import SimpleAlert from "./Alert";
class ConfirmDialog extends BaseBodyDialog {
    constructor(props) {
        super(props);
        this.mRefError=React.createRef();
        this.mRefFirstName=React.createRef();
        this.mRefLastName=React.createRef();
    }
    validate(mode) {
        this.mRefError.current.innerText=''
        if(mode==="1"){
             const text=this.mRefFirstName.current.value;
             if(text.length===0){
                 this.mRefError.current.innerText='First name empty.'
                 SimpleAlert('First name empty.').then(a=>{
                     this.mRefFirstName.current.focus()
                 })
                 return false;
             }
        }
        return true;
    }
    getData(mode) {
        if(mode==="1"){
            return {
                firstName:this.mRefFirstName.current.value,
                lastName:this.mRefLastName.current.value,
            }
        }
        return undefined

    }
    componentDidMount() {
       setTimeout(()=>{
           this.mRefFirstName.current.focus()
       })
    }

    render() {
        return (
            <fieldset style={{width:460,margin:2}}>
                <label ref={this.mRefError} style={{color: "red"}}/>
                <div className="Field">
                    <label>First name <sup>*</sup></label>
                    <input ref={this.mRefFirstName} placeholder="First name"/>
                </div>
                <div className="Field">
                    <label>Last name</label>
                    <input ref={this.mRefLastName} placeholder="Last name"/>
                </div>
            </fieldset>
        )
    }
}

export default function SimpleConfirm({callback}) {

    return (
        <button onClick={() => {
            callback('')
            ShowBsrDialog({
                icon: <FaReact/>,
                header: <span style={{paddingLeft: 10}}>Prompt Dialog</span>,
                body: <ConfirmDialog/>,
                bodyStyle: {padding: 20},
                buttons: [
                    <button data-mode={1}  className={'button-10'}>ok</button>,
                    <button data-mode={-1} className={'button-10'}>close</button>
                ]
            }).then(a => {
                callback(JSON.stringify(a))
            })
        }}>
            prompt dialog
        </button>
    )

}