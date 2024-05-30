import React, {useRef} from "react";
import {ShowBsrDialog} from "bsr-modaldialog";
import 'bsr-modaldialog/dist/index.css'
import {FaReact} from "react-icons/fa6";
import CodeSnippetJavaScript from "../codeSnippetJavaScript";

/*-------------------------------------*/
const code = `
import React, {useRef} from "react";
import {ShowBsrDialog} from "bsr-modaldialog";
import 'bsr-modaldialog/dist/index.css'
import { FaReact } from "react-icons/fa6";

export function P4_4() {
    const mRefLabel = useRef();
    return (
        <>
            <label ref={mRefLabel}></label>
            <br/>
           <button onClick={() => {
                mRefLabel.current.innerText = ''
                ShowBsrDialog({
                    position:"top",
                    icon: <FaReact color={"red"} size={20}/>,
                    header: (<span style={{paddingLeft: 10}}>Dialog </span>),
                    body: <span style={{paddingLeft: 10}}>Body</span>,
                    buttons: [
                        (<button data-mode={1} >mode:1</button>),
                        (<button data-mode={2} >mode:2</button>),
                        (<button data-mode={3} >mode:3</button>),
                        (<button data-mode={-1} data-focus={1}>close</button>)]
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


export function P4_5() {
    const mRefLabel = useRef();
    return (
        <>
            <label ref={mRefLabel}></label>
            <br/>
            <button onClick={() => {
                mRefLabel.current.innerText = ''
                ShowBsrDialog({
                    position:"top",
                    icon: <FaReact color={"red"} size={20}/>,
                    header: (<span style={{paddingLeft: 10}}>Dialog </span>),
                    body: <span style={{paddingLeft: 10,color:"red"}}>Body click Esc</span>,
                    buttons: [
                        (<button data-mode={1} >mode:1</button>),
                        (<button data-mode={2} >mode:2</button>),
                        (<button data-mode={3} >mode:3</button>),
                        (<button data-mode={-1} data-focus={1}>close</button>)]
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

