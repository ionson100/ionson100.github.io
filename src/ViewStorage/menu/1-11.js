import React from "react";
import MenuItem from "bsr-menu";
import CodeSnippetJavaScript from "../codeSnippetJavaScript";

import {AiFillCaretLeft, AiFillCaretRight} from "react-icons/ai";




export function P1_11() {

    return (
        <>
            <MenuItem contentLeft={<AiFillCaretLeft/>} content={'test'} contentRight={<AiFillCaretRight/>} style={{background:"#d7d6d6"}}/>
            <CodeSnippetJavaScript code={`
<MenuItem contentLeft={<AiFillCaretLeft/>} content={'test'} contentRight={<AiFillCaretRight/>}/>`}/>
            <br/>
            <MenuItem contentLeft={<AiFillCaretLeft/>} content={'test'}  style={{background:"#d7d6d6"}}/>
            <CodeSnippetJavaScript code={`
<MenuItem contentLeft={<AiFillCaretLeft/>} content={'test'} />`}/>

            <br/>
            <MenuItem  content={'test'} contentRight={<AiFillCaretRight/>} style={{background:"#d7d6d6"}}/>
            <CodeSnippetJavaScript code={`
<MenuItem  content={'test'} contentRight={<AiFillCaretRight/>}/>`}/>
            <br/>
            <MenuItem  content={'test'}  style={{background:"#d7d6d6"}}/>
            <CodeSnippetJavaScript code={`
<MenuItem  content={'test'} />`}/>
            <br/>
            <MenuItem   contentRight={<AiFillCaretRight/>} style={{background:"#d7d6d6",width:30}}/>
            <CodeSnippetJavaScript code={`
<MenuItem   contentRight={<AiFillCaretRight/>} style={{background:"#d7d6d6",width:30}}/>`}/>
        </>
    )
}