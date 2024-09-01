import React, { useRef} from 'react';
import {useToolTip} from 'bsr-tooltip'
import 'bsr-tooltip/dist/index.css'
import {CodeSnippetJavaScript} from "../../codeSnippetJavaScript";

const code=`import React, { useRef} from 'react';
import {useToolTip} from 'bsr-tooltip'
import 'bsr-tooltip/dist/index.css'

export default function P11_3(){
    const mRefDiv1 = useRef<HTMLDivElement>(null)
    const mRefDiv2 = useRef<HTMLDivElement>(null)
    const mRefDiv3 = useRef<HTMLDivElement>(null)
    const mRefDiv4 = useRef<HTMLDivElement>(null)

    useToolTip(mRefDiv1, 'Click My',{position:'left',isWindows:true})
    useToolTip(mRefDiv2, 'Click My',{position:'bottom',isWindows:true})
    useToolTip(mRefDiv3, 'Click My',{position:'right',isWindows:true})
    useToolTip(mRefDiv4, 'Click My',{position:'top',isWindows:true})

    return (
        <>
            <div style={{display: "flex"}}>
                <div ref={mRefDiv1} style={{width: 50, height: 50, margin: 100, background: "#ceb2b2"}}></div>
                <div ref={mRefDiv2} style={{width: 50, height: 50, margin: 100, background: "#ceb2b2"}}></div>
                <div ref={mRefDiv3} style={{width: 50, height: 50, margin: 100, background: "#ceb2b2"}}></div>
                <div ref={mRefDiv4} style={{width: 50, height: 50, margin: 100, background: "#ceb2b2"}}></div>
            </div>
        </>
    )
}
`








export default function P11_3(){
    const mRefDiv1 = useRef<HTMLDivElement>(null)
    const mRefDiv2 = useRef<HTMLDivElement>(null)
    const mRefDiv3 = useRef<HTMLDivElement>(null)
    const mRefDiv4 = useRef<HTMLDivElement>(null)

    useToolTip(mRefDiv1, 'Click My',{position:'left',isWindows:true})
    useToolTip(mRefDiv2, 'Click My',{position:'bottom',isWindows:true})
    useToolTip(mRefDiv3, 'Click My',{position:'right',isWindows:true})
    useToolTip(mRefDiv4, 'Click My',{position:'top',isWindows:true})

    return (
        <>
            <div style={{display: "flex"}}>
                <div ref={mRefDiv1} style={{width: 50, height: 50, margin: 100, background: "#ceb2b2"}}></div>
                <div ref={mRefDiv2} style={{width: 50, height: 50, margin: 100, background: "#ceb2b2"}}></div>
                <div ref={mRefDiv3} style={{width: 50, height: 50, margin: 100, background: "#ceb2b2"}}></div>
                <div ref={mRefDiv4} style={{width: 50, height: 50, margin: 100, background: "#ceb2b2"}}></div>
            </div>
            <CodeSnippetJavaScript code={code}/>

        </>
    )
}
