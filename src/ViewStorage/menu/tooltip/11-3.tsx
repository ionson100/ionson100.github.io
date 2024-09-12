import React, { useRef} from 'react';
import {useToolTip} from 'bsr-tooltip'
import 'bsr-tooltip/dist/index.css'
import {CodeSnippetJavaScript} from "../../codeSnippetJavaScript";

const code=`import React, { useRef} from 'react';
import {useToolTip} from 'bsr-tooltip'
import 'bsr-tooltip/dist/index.css'

export default function P11_3(){
    const mRefDiv1 = useRef<HTMLDivElement>(null)
    useToolTip(mRefDiv1, 'my div',{position:'right',mode:"tooltip"})
    return (
        <>
            <div style={{display: "flex"}}>
                <div ref={mRefDiv1} style={{width: 50, height: 50, margin: 100, background: "#ceb2b2"}}></div>
            </div>
        </>
    )
}

`








export default function P11_3(){
    const mRefDiv1 = useRef<HTMLDivElement>(null)
    useToolTip(mRefDiv1, 'my div',{position:'right',mode:"tooltip"})
    return (
        <>
            <div style={{display: "flex"}}>
                <div ref={mRefDiv1} style={{width: 50, height: 50, margin: 100, background: "#ceb2b2"}}></div>
            </div>
            <CodeSnippetJavaScript code={code}/>
        </>
    )
}
