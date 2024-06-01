import React from "react";
import MenuItem from "bsr-menu";
import {CodeSnippetJavaScript} from "../codeSnippetJavaScript";

/*-------------------------------------*/
const code = `
import React from "react";
import MenuItem from "bsr-menu";


function myBuildContent({contentLeft, contentCenter, contentRight, iconDropOpen, iconDropClose, isOpenDrop, id, tag}) {
    return (
        <div style={{display: "flex", background: "yellow", height: "100%"}}>
            <div style={{background: "red"}}>{contentLeft}</div>
            <div style={{background: "grey",marginLeft:5}}>{contentCenter}</div>
            <div style={{background: "blue",marginLeft:5}}> {contentRight}</div>
        </div>
    )
}

export function P1_15() {

    return (
        <MenuItem
            contentLeft='left'
            content='center'
            contentRight='right'
            buildContent={myBuildContent} style={{ width: 200}}>
        </MenuItem>    
    )
}

`


/*-------------------------------------*/


function myBuildContent({contentLeft, contentCenter, contentRight, iconDropOpen, iconDropClose, isOpenDrop, id, tag}) {
    return (
        <div style={{display: "flex", background: "yellow", height: "100%"}}>
            <div style={{background: "red"}}>{contentLeft}</div>
            <div style={{background: "grey",marginLeft:5}}>{contentCenter}</div>
            <div style={{background: "blue",marginLeft:5}}> {contentRight}</div>
        </div>
    )
}

export  default function P1_15() {

    return (
        <>
            <MenuItem
                contentLeft="left"
                content={'center'}
                contentRight={'right'}
                buildContent={myBuildContent} style={{width: 200}}>
            </MenuItem>
            <br/>
            <br/>
            <div>
                <CodeSnippetJavaScript code={code}/>
            </div>
        </>
    )
}

