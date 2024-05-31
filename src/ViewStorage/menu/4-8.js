import React, {useRef} from "react";
import {ShowBsrDialog} from "bsr-modaldialog";
import 'bsr-modaldialog/dist/index.css'
import {CodeSnippetJavaScript} from "../codeSnippetJavaScript";

/*-------------------------------------*/
const code = `
import React, {useRef} from "react";
import {ShowBsrDialog} from "bsr-modaldialog";
import 'bsr-modaldialog/dist/index.css'

export function P4_8() {
    const mRefLabel = useRef();

    return (
        <>
            <label ref={mRefLabel}></label>

            <br/>
            <button onClick={() => {
                mRefLabel.current.innerText = ''
                ShowBsrDialog({

                    onCancel:(d)=>{
                        if(window.confirm('Shall we close the dialogue?')){
                            return true;
                        }else{
                            return false;
                        }
                    },

                    modal:true,
                    header: (<span style={{paddingLeft: 10}}>Dialog </span>),
                    body: <span style={{paddingLeft: 10,color:"red"}}>Body click Esc</span>,
                    buttons: [(<button data-mode={-1} data-focus={1}>close</button>)]
                }).then(a => {
                    mRefLabel.current.innerText = JSON.stringify(a)
                })
            }}>show
            </button>
        </>
    )
}

`


/*-------------------------------------*/


export function P4_8() {
    const mRefLabel = useRef();

    return (
        <>
            <label ref={mRefLabel}></label>

            <br/> <br/>
            <button onClick={() => {
                mRefLabel.current.innerText = ''
                ShowBsrDialog({

                    onCancel:(d)=>{
                        if(window.confirm('Shall we close the dialogue?')){
                            return true;
                        }else{
                            return false;
                        }
                    },

                    modal:true,
                    header: (<span style={{paddingLeft: 10}}>Dialog </span>),
                    body: <span style={{paddingLeft: 10,color:"red"}}>Body click Esc</span>,
                    buttons: [(<button data-mode={-1} data-focus={1}>close</button>)]
                }).then(a => {
                    mRefLabel.current.innerText = JSON.stringify(a)
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

