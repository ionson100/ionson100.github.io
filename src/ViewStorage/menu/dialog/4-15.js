import React, {useRef} from "react";
import {ShowBsrDialog} from "bsr-modaldialog";
import {CodeSnippetJavaScript} from "../../codeSnippetJavaScript";
import CloseFormDialog from "./examprs/CloseFrom";

/*-------------------------------------*/
const code = `
import React from "react";
import {ShowBsrDialog,BaseBodyDialog} from "bsr-modaldialog";
import 'bsr-modaldialog/dist/index.css'
import { FaReact } from "react-icons/fa6";

class CloseForm extends BaseBodyDialog{
    validate(mode) {
        return true
    }
    getData(mode) {
        return{
            mode:mode,
            data:123
        }
    }
    render() {
        return(
            <div style={{padding:20}}>
                <form method="dialog">
                    <button>Close Dialog</button>
                </form>
            </div>
        )
    }
}

export default function CloseFormDialog ({callback}){

    return(
        <button onClick={()=>{
            callback('')
            ShowBsrDialog({
                icon:<FaReact/>,
                header:<span style={{paddingLeft:10}}>Confirm dialog</span>,
                body:<CloseForm/>,
                bodyStyle:{padding:20},
                buttons: [
                    <button data-mode={-1} data-focus={1} className={'button-10'}>close</button>
                ]
            }).then(a => {
                callback(JSON.stringify(a))
            })
        }}>
            Confirm dialog
        </button>
    )
}

`


/*-------------------------------------*/


export default function P4_15() {
    const mRefLabel = useRef();

    return (
        <>
            <label className={'label-then'} ref={mRefLabel}></label>
            <br/> <br/>
            {
                CloseFormDialog({
                    callback: (s) => {
                        mRefLabel.current.innerText = s;
                    }
                })
            }
            <div>
                <CodeSnippetJavaScript code={code}/>
            </div>
        </>
    )
}

