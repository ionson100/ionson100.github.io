import React, {useRef} from 'react';
import {useToolTip} from 'bsr-tooltip'
import 'bsr-tooltip/dist/index.css'
import { FiHelpCircle } from "react-icons/fi";
import {CodeSnippetJavaScript} from "../../codeSnippetJavaScript";


const code=`
import React, {useRef} from 'react';
import {useToolTip} from 'bsr-tooltip'
import 'bsr-tooltip/dist/index.css'
import { FiHelpCircle } from "react-icons/fi";
const style={
     margin: 100, cursor:"pointer"
}
function body(){
    return <div style={{width:300,padding:10}}>
     <p>
         Lorem ipsum dolor sit amet, consectetuer
         adipiscing elit. Aenean commodo ligula eget dolor.
         Aenean massa. Cum sociis natoque penatibus et magnis
         dis parturient montes, nascetur ridiculus mus.
     </p>
    </div>
}
const style={
     margin: 100, cursor:"pointer"
}
function body(){
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

    useToolTip(mRefDiv1, body(), {position: 'rightBottom', mode:"popup"})
    useToolTip(mRefDiv2, body(), {position: 'rightBottom',  mode:"popup"})
    useToolTip(mRefDiv3, body(), {position: 'leftBottom',  mode:"popup"})
    useToolTip(mRefDiv4, body(), {position: 'leftBottom',  mode:"popup"})

    return (
        <>
            <div style={{display: "flex"}}>
                <div ref={mRefDiv1} style={style}><FiHelpCircle/></div>
                <div ref={mRefDiv2} style={style}><FiHelpCircle/></div>
                <div ref={mRefDiv3} style={style}><FiHelpCircle/></div>
                <div ref={mRefDiv4} style={style}><FiHelpCircle/></div>
            </div>
            <CodeSnippetJavaScript code={code}/>
        </>
    )
}
`

















const style={
     margin: 100, cursor:"pointer"
}
function body(){
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

    useToolTip(mRefDiv1, body(), {position: 'rightBottom', mode:"popup"})
    useToolTip(mRefDiv2, body(), {position: 'rightBottom',  mode:"popup"})
    useToolTip(mRefDiv3, body(), {position: 'leftBottom',  mode:"popup"})
    useToolTip(mRefDiv4, body(), {position: 'leftBottom',  mode:"popup"})

    return (
        <>
            <div style={{display: "flex"}}>
                <div ref={mRefDiv1} style={style}><FiHelpCircle/></div>
                <div ref={mRefDiv2} style={style}><FiHelpCircle/></div>
                <div ref={mRefDiv3} style={style}><FiHelpCircle/></div>
                <div ref={mRefDiv4} style={style}><FiHelpCircle/></div>
            </div>
            <CodeSnippetJavaScript code={code}/>
        </>
    )
}
