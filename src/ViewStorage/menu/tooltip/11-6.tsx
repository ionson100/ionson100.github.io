import React, {useRef} from "react";
import {useToolTip} from 'bsr-tooltip'
import 'bsr-tooltip/dist/index.css'
import './index_center.css'
import {IoClose} from "react-icons/io5";
import {CodeSnippetJavaScript} from "../../codeSnippetJavaScript";

const code = `import React, {useRef} from "react";
import {useToolTip} from 'bsr-tooltip'
import 'bsr-tooltip/dist/index.css'
import './index_center.css'
import {IoClose} from "react-icons/io5";

/*.centered-body {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%,-50%);
}*/

export default function P11_6() {
    const mRef = useRef<HTMLDivElement>(null);
    const res = useToolTip(mRef, Body(), {
        position: "custom",
        className: 'centered-body',
        isWindowsClick: true,
        isSelfClose: true
    })

    function Body() {
        return (
            <div>
                <div style={{display: "flex", justifyContent: "right"}}>
                    <IoClose size={30} onClick={() => {
                        res.tooltip?.Close()
                    }}/>
                </div>
                <div>
                    <img alt={'image'} width={900} src={'https://www.gstatic.com/webp/gallery/1.jpg'}/>
                </div>
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


export default function P11_6() {
    const mRef = useRef<HTMLDivElement>(null);
    const res = useToolTip(mRef, Body(), {
        position: "custom",
        className: 'centered-body',
        mode: 'popupCloseSelf'
    })

    function Body() {

        return (

            <div style={{cursor: "default"}}>
                <div style={{display: "flex", justifyContent: "right"}}>
                    <IoClose size={30} style={{cursor: "pointer"}} onClick={() => {
                        res.tooltip?.Close()
                    }}/>
                </div>
                <div>
                    <img alt={'image'} width={900} src={'https://www.gstatic.com/webp/gallery/1.jpg'}/>
                </div>
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
