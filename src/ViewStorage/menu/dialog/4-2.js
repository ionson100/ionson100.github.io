import React, {useRef} from "react";
import {ShowBsrDialog} from "bsr-modaldialog";
import 'bsr-modaldialog/dist/index.css'
import {CodeSnippetJavaScript} from "../../codeSnippetJavaScript";

/*-------------------------------------*/
const code = `
import React, {useRef} from "react";
import {ShowBsrDialog} from "bsr-modaldialog";
import 'bsr-modaldialog/dist/index.css'

export function P4_2() {
    const mRefLabel=useRef();
    return (
        <>
            <label ref={mRefLabel}></label>
            <br/>
            <button onClick={() => {
                mRefLabel.current.innerText=''
                ShowBsrDialog({
                    closeModalDialogClickForeignArea:true,
                    modal:true,
                    header:(<span style={{paddingLeft:10}}>Dialog </span>),
                    body:<span style={{paddingLeft:10}}>Click to page</span>,
                    buttons:[(<button data-mode={-1} data-focus={1}>close</button>)]
                }).then(a=>{
                    mRefLabel.current.innerText=JSON.stringify(a)
                })
            }}>show
            </button>
        </>
    )
}

`


/*-------------------------------------*/


export default function P4_2() {
    const mRefLabel=useRef();
    return (
        <>
            <label ref={mRefLabel}></label>
            <br/> <br/>
            <button onClick={() => {
                mRefLabel.current.innerText=''
                ShowBsrDialog({
                    closeModalDialogClickForeignArea:true,
                    modal:true,
                    header:(<span style={{paddingLeft:10}}>Dialog </span>),
                    body:<span style={{paddingLeft:10}}>Click to page</span>,
                    buttons:[(<button data-mode={-1} data-focus={1}>close</button>)]
                }).then(a=>{
                    mRefLabel.current.innerText=JSON.stringify(a)
                })
            }}>show
            </button>
            <br/>
            <div>
                <CodeSnippetJavaScript code={code}/>
            </div>
        </>
    )
}

