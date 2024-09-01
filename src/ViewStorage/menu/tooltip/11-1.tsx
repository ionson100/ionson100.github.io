import React, {useRef} from "react";
import {useToolTip} from 'bsr-tooltip'
import 'bsr-tooltip/dist/index.css'
import {CodeSnippetJavaScript} from "../../codeSnippetJavaScript";

const code = `import {useRef} from "react";
import {useToolTip} from 'bsr-tooltip'
import 'bsr-tooltip/dist/index.css'

export default function P11_1 (){
    const mRefDiv=useRef<HTMLDivElement>(null)
    useToolTip(mRefDiv,'Simple Text')
    return <div ref={mRefDiv} style={{padding:50,background:'grey',width:0,height:0}}></div>
}`

export default function P11_1() {
    const mRefDiv = useRef<HTMLDivElement>(null)
    useToolTip(mRefDiv, 'Simple Text')
    return (<>
        <div ref={mRefDiv} style={{padding: 50, background: 'grey', width: 0, height: 0,marginTop:10}}></div>
        <CodeSnippetJavaScript code={code}/>
    </>)
}
