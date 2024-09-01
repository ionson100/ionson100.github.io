import React, {useRef} from "react";
import {useContextMenu} from "bsr-context-menu";
import 'bsr-context-menu/dist/index.css'
import {CodeSnippetJavaScript} from "../../codeSnippetJavaScript";

const code=`import React, {useRef} from 'react';
import {useContextMenu} from 'bsr-context-menu';
import 'bsr-context-menu/dist/index.css'
import {CgMenuBoxed} from "react-icons/cg";


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

export function P10_1(){
  const mRefMenu=useRef(null);
  useContextMenu(mRefMenu,Body('Menu'))
    return <div ref={mRefMenu}  style={{width:100,height:100,background:'grey'}}/>
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

export default function P10_1(){
  const mRefMenu=useRef(null);
  useContextMenu(mRefMenu,Body('Menu'))

    return (
        <div>

            <div ref={mRefMenu} style={{width: 100, height: 100, background: "grey"}}/>
            <CodeSnippetJavaScript code={code}/>
        </div>

    )
}

