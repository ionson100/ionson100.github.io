import React, {useRef} from 'react';
import {useToolTip} from 'bsr-tooltip'
import 'bsr-tooltip/dist/index.css'
import { FiHelpCircle } from "react-icons/fi";
import {CodeSnippetJavaScript} from "../../codeSnippetJavaScript";
const style={
     margin: 100, cursor:"pointer"
}
function bodu(){
    return <div style={{width:300,padding:10}}>
     <p>
         Lorem ipsum dolor sit amet, consectetuer
         adipiscing elit. Aenean commodo ligula eget dolor.
         Aenean massa. Cum sociis natoque penatibus et magnis
         dis parturient montes, nascetur ridiculus mus.
     </p>
    </div>
}
export default function P11_4() {
    const mRefDiv1 = useRef<HTMLDivElement>(null)
    const mRefDiv2 = useRef<HTMLDivElement>(null)
    const mRefDiv3 = useRef<HTMLDivElement>(null)
    const mRefDiv4 = useRef<HTMLDivElement>(null)

    useToolTip(mRefDiv1, bodu(), {position: 'left', isWindowsClick: true})
    useToolTip(mRefDiv2, bodu(), {position: 'bottom', isWindowsClick: true})
    useToolTip(mRefDiv3, bodu(), {position: 'right', isWindowsClick: true})
    useToolTip(mRefDiv4, bodu(), {position: 'top', isWindowsClick: true})

    return (
        <>
            <div style={{display: "flex"}}>
                <div ref={mRefDiv1} style={style}><FiHelpCircle/></div>
                <div ref={mRefDiv2} style={style}><FiHelpCircle/></div>
                <div ref={mRefDiv3} style={style}><FiHelpCircle/></div>
                <div ref={mRefDiv4} style={style}><FiHelpCircle/></div>
            </div>
        </>
    )
}
