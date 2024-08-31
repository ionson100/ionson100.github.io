import React, {useEffect, useRef} from "react";
import {ContextMenu} from "bsr-context-menu";
import 'bsr-context-menu/dist/index.css'
import {CodeSnippetJavaScript} from "../../codeSnippetJavaScript";

const code=`import React, {useEffect, useRef} from "react";
import {ContextMenu} from "bsr-context-menu";
import 'bsr-context-menu/dist/index.css'

function Body(text: string) {
    return (
        <div style={{width: 200, cursor: "pointer"}}>
            <div>{text}:1</div>
            <div>{text}:2</div>
            <div>{text}:3</div>
            <div>{text}:4</div>
        </div>
    )
}

export default function P10_4() {
    const mRefMenu = useRef(null);
    useEffect(() => {

        let menu: ContextMenu | undefined;

        if (mRefMenu?.current) {
            menu = new ContextMenu({target: mRefMenu.current, body: Body('Menu')})
        }

        return () => {
            menu?.ContextMenuWillUnmount();
        }
    }, [mRefMenu.current])

    return  <div ref={mRefMenu} style={{width: 100, height: 100, background: "grey"}}/>
}`











function Body(text: string) {
    return (
        <div style={{width: 200, cursor: "pointer"}}>
            <div>{text}:1</div>
            <div>{text}:2</div>
            <div>{text}:3</div>
            <div>{text}:4</div>
        </div>
    )
}

export default function P10_4() {
    const mRefMenu = useRef(null);
    useEffect(() => {

        let menu: ContextMenu | undefined;

        if (mRefMenu?.current) {
            menu = new ContextMenu({target: mRefMenu.current, body: Body('Menu')})
        }

        return () => {
            menu?.ContextMenuWillUnmount();
        }
    }, [mRefMenu.current])

    return (
        <>
            <div ref={mRefMenu} style={{width: 100, height: 100, background: "grey"}}/>
            <CodeSnippetJavaScript code={code}/>
        </>
    )
}
