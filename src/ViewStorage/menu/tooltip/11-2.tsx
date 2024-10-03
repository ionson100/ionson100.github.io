import React, { useRef} from 'react';
import {useToolTip} from 'bsr-tooltip'
import 'bsr-tooltip/dist/index.css'
import {CodeSnippetJavaScript} from "../../codeSnippetJavaScript";
import './index_center.css'


const code=`import React, { useRef} from 'react';
import {useToolTip} from 'bsr-tooltip'
import 'bsr-tooltip/dist/index.css'
/*.centered-body {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%,-50%);
}*/

export default function P11_2(){
    const mRefDiv1 = useRef<HTMLDivElement>(null)
    const mRefDiv2 = useRef<HTMLDivElement>(null)
    const mRefDiv3 = useRef<HTMLDivElement>(null)
    const mRefDiv4 = useRef<HTMLDivElement>(null)
    const mRefDiv5 = useRef<HTMLDivElement>(null)
    useToolTip(mRefDiv1, 'Simple Text',{position:'right'})
    useToolTip(mRefDiv2, 'Simple Text',{position:'bottom'})
    useToolTip(mRefDiv3, 'Simple Text',{position:'left'})
    useToolTip(mRefDiv4, 'Simple Text',{position:'top'})
    useToolTip(mRefDiv5, Body(),{position:'custom',className:'centered-body'})
    
    const style={width: 50, height: 20, margin: 20, background: "#ceb2b2"}

    function Body() {
        return <div>
            <img alt={'image'} width={900} src={'https://www.gstatic.com/webp/gallery/1.jpg'}/>
        </div>
    }

    return (
        <>
            <div style={{display: "flex"}}>
                <div ref={mRefDiv1} style={style}></div>
                <div ref={mRefDiv2} style={style}></div>
                <div ref={mRefDiv3} style={style}></div>
                <div ref={mRefDiv4} style={style}></div>
                <div ref={mRefDiv5} style={style}></div>
            </div>
        </>
    )
}`














export default function P11_2(){
    const mRefDiv1 = useRef<HTMLDivElement>(null)
    const mRefDiv2 = useRef<HTMLDivElement>(null)
    const mRefDiv3 = useRef<HTMLDivElement>(null)
    const mRefDiv4 = useRef<HTMLDivElement>(null)
    const mRefDiv5 = useRef<HTMLDivElement>(null)
    useToolTip(mRefDiv1, 'Simple Text',{position:'right'})
    useToolTip(mRefDiv2, 'Simple Text',{position:'bottom'})
    useToolTip(mRefDiv3, 'Simple Text',{position:'left'})
    useToolTip(mRefDiv4, 'Simple Text',{position:'top'})
    useToolTip(mRefDiv5, Body(),{position:'custom',className:'centered-body'})

    const style={width: 50, height: 20, margin: 100, background: "#ceb2b2"}

    function Body() {
        return <div>
            <img alt={'image alt'} width={900} src={'https://www.gstatic.com/webp/gallery/1.jpg'}/>
        </div>
    }

    return (
        <>
            <div style={{display: "flex"}}>
                <div ref={mRefDiv1} style={style}></div>
                <div ref={mRefDiv2} style={style}></div>
                <div ref={mRefDiv3} style={style}></div>
                <div ref={mRefDiv4} style={style}></div>
                <div ref={mRefDiv5} style={style}></div>
            </div>
            <CodeSnippetJavaScript code={code}/>

        </>
    )
}
