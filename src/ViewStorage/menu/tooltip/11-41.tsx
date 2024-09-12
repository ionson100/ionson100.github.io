import React, {useRef} from "react";
import {useToolTip} from "bsr-tooltip";
import {CodeSnippetJavaScript} from "../../codeSnippetJavaScript";
import './index_center.css'

const code=`import React, {useRef} from "react";
import {useToolTip} from "bsr-tooltip";

/*.centered-body {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%,-50%);
}*/
export default function P11_41() {
    const mRef = useRef<HTMLDivElement>(null);
    const res = useToolTip(mRef, Body(), {
        position: "custom",
        className: 'centered-body',
        mode: 'popupCloseSelf'
    })

    function Body() {

        return (

            <div style={{cursor: "default",background:"#f3eeee"}}>
               <button style={{margin:50}} onClick={()=>{
                   res.tooltip?.Close()
               }}>
                   Close
               </button>
            </div>

        )
    }

    return (
        <>
            <div ref={mRef} style={{padding: 50, background: "#918c8c", width: "fit-content", cursor: "pointer"}}></div>
        </>
    )
}
`

/*.centered-body {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%,-50%);
}*/
export default function P11_41() {
    const mRef = useRef<HTMLDivElement>(null);
    const res = useToolTip(mRef, Body(), {
        position: "custom",
        className: 'centered-body',
        mode: 'popupCloseSelf'
    })

    function Body() {

        return (

            <div style={{cursor: "default",background:"#f3eeee"}}>
               <button style={{margin:50}} onClick={()=>{
                   res.tooltip?.Close()
               }}>
                   Close
               </button>
            </div>

        )
    }

    return (
        <>
            <div ref={mRef} style={{padding: 50, background: "#918c8c", width: "fit-content", cursor: "pointer"}}></div>
            <CodeSnippetJavaScript code={code}/>
        </>
    )
}