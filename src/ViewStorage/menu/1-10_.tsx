import React, {useRef} from "react";
import MenuItem from "bsr-menu";
import {CodeSnippetJavaScript} from "../codeSnippetJavaScript";
import { AiFillCaretLeft,AiFillCaretRight } from "react-icons/ai";
/*-------------------------------------*/
const code = `
//ts
import React, {useRef} from "react";
import MenuItem from "bsr-menu";
import { AiFillCaretLeft,AiFillCaretRight } from "react-icons/ai";

export function P1_10_() {
    const mRefMenu=useRef<InstanceType<typeof MenuItem>>(null);
    return (
        <>

            <button style={{marginRight: 10}} onClick={() => {
                mRefMenu.current!.setContent(<AiFillCaretLeft/>, <span style={{paddingLeft:10}}>Test1</span>, <AiFillCaretRight/>)
            }}>SetContent1</button>
            <button style={{marginRight: 10}} onClick={() => {
                mRefMenu.current!.setContent(undefined, <span style={{paddingLeft:10}}>Test2</span>, <AiFillCaretRight/>)
            }}>SetContent2</button>
            <button style={{marginRight: 10}} onClick={() => {
                mRefMenu.current!.setContent(<AiFillCaretLeft/>, <span style={{paddingLeft:10}}>Test3</span>, undefined)
            }}>SetContent3</button>
          

            <MenuItem ref={mRefMenu} content="Menu" />
        </>
    )
}
`


/*-------------------------------------*/



export default  function P1_10_() {
    const mRefMenu=useRef<InstanceType<typeof MenuItem>>(null);
    return (
        <>

            <button style={{marginRight: 10}} onClick={() => {
                mRefMenu.current!.setContent(<AiFillCaretLeft/>, <span style={{paddingLeft:10}}>Test1</span>, <AiFillCaretRight/>)
            }}>SetContent1</button>
            <button style={{marginRight: 10}} onClick={() => {
                mRefMenu.current!.setContent(undefined, <span style={{paddingLeft:10}}>Test2</span>, <AiFillCaretRight/>)
            }}>SetContent2</button>
            <button style={{marginRight: 10}} onClick={() => {
                mRefMenu.current!.setContent(<AiFillCaretLeft/>, <span style={{paddingLeft:10}}>Test3</span>, undefined)
            }}>SetContent3</button>
            <br/>
            <br/>


            <MenuItem ref={mRefMenu} content="Menu" />


            <br/>
            <br/>
            <div>
                <CodeSnippetJavaScript code={code}/>
            </div>
        </>
    )
}