import React, {useRef} from "react";
import {ShowBsrDialog,ModalDialog} from "bsr-modaldialog";
import {CodeSnippetJavaScript} from "../../codeSnippetJavaScript";

/*-------------------------------------*/
const code = `
import React, {useRef} from "react";
import {ShowBsrDialog,ModalDialog} from "bsr-modaldialog";
import 'bsr-modaldialog/dist/index.css'

export  function P4_3() {
    const mRefLabel=useRef<HTMLLabelElement>(null);
    const mRefDialog=React.useRef<InstanceType<typeof ModalDialog>>(null)
    return (
        <>
            <label ref={mRefLabel}></label>
            <br/>
            <button onClick={() => {
                mRefLabel.current.innerText=''
                ShowBsrDialog({
                    refDialog:mRefDialog,
                    modal:false,
                    header:(<span style={{paddingLeft:10}}>Dialog </span>),
                    body:<span style={{paddingLeft:10}}>Close it with a button:Close Dialog</span>,
                    buttons:[(<button data-mode={-1} data-focus={1}>close</button>)]
                }).then(a=>{
                    mRefLabel.current.innerText=JSON.stringify(a)
                })
            }}>show
            </button>
            <br/>
            <button onClick={()=>{
                if(!mRefDialog.current){
                    alert("First open the dialog")
                }else {
                    mRefDialog.current.closeDialog("2323")
                }
            }}>Close Dialog</button>
        </>
    )
}

`


/*-------------------------------------*/


export default function P4_3() {
    const mRefLabel=useRef<HTMLLabelElement>(null);
    let mRefDialog=React.useRef<InstanceType<typeof ModalDialog>>(null)
    return (
        <>
            <label  className={'label-then'}  ref={mRefLabel}></label>
            <br/> <br/>
            <button onClick={() => {
                mRefLabel.current!.innerText=''
                ShowBsrDialog({
                    refDialog:mRefDialog,
                    modal:false,
                    header:(<span style={{paddingLeft:10}}>Dialog </span>),
                    body:<span style={{paddingLeft:10}}>Close it with a button:Close Dialog</span>,
                    buttons:[(<button data-mode={-1} data-focus={1}>close</button>)]
                }).then(a=>{
                    mRefLabel.current!.innerText=JSON.stringify(a)
                })
            }}>show
            </button>
            <br/> <br/>
            <button onClick={()=>{
                if(!mRefDialog.current){
                    alert("First open the dialog")
                }else {
                    mRefDialog.current.closeDialog("2323")
                }
            }}>Close Dialog</button>
            <br/>
            <div>
                <CodeSnippetJavaScript code={code}/>
            </div>
        </>
    )
}

