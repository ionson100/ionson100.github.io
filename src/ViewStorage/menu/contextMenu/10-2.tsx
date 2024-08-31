import React, { useRef} from "react";
import {useContextMenu} from "bsr-context-menu";
import 'bsr-context-menu/dist/index.css'
import {CodeSnippetJavaScript} from "../../codeSnippetJavaScript";


const code=`import React, { useRef} from 'react';
import {useContextMenu} from 'bsr-context-menu';
import 'bsr-context-menu/dist/index.css'


function Body(text:string){
    return(
        <div style={{width:200,cursor:'pointer'}}>
            <div>{text}:1</div>
            <div>{text}:2</div>
            <div>{text}:3</div>
            <div>{text}:4</div>
        </div>
    )
}

export function P10_2(){
    const mRefMenu1=useRef(null);
    const mRefMenu2=useRef(null);
    useContextMenu(mRefMenu1,Body('MenuItem'))
    useContextMenu(mRefMenu2,Body('Menu'))

    return (
        <div style={{display:'flex'}}>
            <div ref={mRefMenu1} style={{width: 100, height: 100, background: "#9cee98",margin:10}}/>
            <div ref={mRefMenu2} style={{width: 100, height: 100, background: "#8994f2",margin:10}}/>
        </div>
    )
}`






function Body(text:string){
    return(
        <div style={{width:200,cursor:"pointer"}}>
            <div>{text}:1</div>
            <div>{text}:2</div>
            <div>{text}:3</div>
            <div>{text}:4</div>
        </div>
    )
}

export default function P10_2(){
    const mRefMenu1=useRef(null);
    const mRefMenu2=useRef(null);
    useContextMenu(mRefMenu1,Body('MenuItem'))
    useContextMenu(mRefMenu2,Body('Menu'))

    return (
        <>
            <div style={{display: "flex"}}>
                <div ref={mRefMenu1} style={{width: 100, height: 100, background: "#9cee98", margin: 10}}/>
                <div ref={mRefMenu2} style={{width: 100, height: 100, background: "#8994f2", margin: 10}}/>
            </div>
            <CodeSnippetJavaScript code={code}/>
        </>

    )
}
