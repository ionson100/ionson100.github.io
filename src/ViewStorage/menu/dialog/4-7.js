import React, {useRef} from "react";
import {ShowBsrDialog} from "bsr-modaldialog";
import 'bsr-modaldialog/dist/index.css'
import {CodeSnippetJavaScript} from "../../codeSnippetJavaScript";

/*-------------------------------------*/
const code = `
import React, {useRef} from "react";
import {ShowBsrDialog} from "bsr-modaldialog";
import 'bsr-modaldialog/dist/index.css'

export function P4_7() {
    const mRefLabel = useRef();
    const mRefLabel2 = useRef();
    return (
        <>
            <label ref={mRefLabel}></label>
            <br/>
            <label ref={mRefLabel2}></label>
            <br/>
            <button onClick={() => {
                mRefLabel.current.innerText = ''
                ShowBsrDialog({
                    onShow:(d)=>{
                        mRefLabel2.current.innerText="SHOW: "+d;
                    },
                    onClose:(d)=>{
                        mRefLabel2.current.innerText="CLOSE: "+d;
                    },
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


export default function P4_7() {
    const mRefLabel = useRef();
    const mRefLabel2 = useRef();
    return (
        <>
            <label ref={mRefLabel}></label>
            <br/> <br/>
            <label ref={mRefLabel2}></label>
            <br/> <br/>
            <button onClick={() => {
                mRefLabel.current.innerText = ''
                ShowBsrDialog({
                    onShow:(d)=>{
                        mRefLabel2.current.innerText="SHOW: "+d;
                    },
                    onClose:(d)=>{
                        mRefLabel2.current.innerText="CLOSE: "+d;
                    },



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

