import React, {useRef} from "react";
import {useToolTip} from 'bsr-tooltip'
import 'bsr-tooltip/dist/index.css'
import {CodeSnippetJavaScript} from "../../codeSnippetJavaScript";

export default function P11_2(){
    const mRefDiv1 = useRef<HTMLDivElement>(null)
    const mRefDiv2 = useRef<HTMLDivElement>(null)
    const mRefDiv3 = useRef<HTMLDivElement>(null)
    const mRefDiv4 = useRef<HTMLDivElement>(null)

    useToolTip(mRefDiv1, 'Simple Text',{position:'left'})
    useToolTip(mRefDiv2, 'Simple Text',{position:'bottom'})
    useToolTip(mRefDiv3, 'Simple Text',{position:'right'})
    useToolTip(mRefDiv4, 'Simple Text',{position:'top'})

   return (
       <div style={{display: "flex", margin: 100}}>

           <div ref={mRefDiv1} style={{width: 50, height: 50, margin: 100, background: "#ceb2b2"}}></div>
           <div ref={mRefDiv2} style={{width: 50, height: 50, margin: 100, background: "#ceb2b2"}}></div>
           <div ref={mRefDiv3} style={{width: 50, height: 50, margin: 100, background: "#ceb2b2"}}></div>
           <div ref={mRefDiv4} style={{width: 50, height: 50, margin: 100, background: "#ceb2b2"}}></div>
       </div>
   )
}
