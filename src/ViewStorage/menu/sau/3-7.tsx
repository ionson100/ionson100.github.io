import React from "react";
import AvatarUploader from 'bsr-sau'
import 'bsr-sau/dist/index.css'
import {CodeSnippetJavaScript} from "../../codeSnippetJavaScript";
/*-----------------------------------*/
const code = `
import React from "react";
import AvatarUploader from 'bsr-sau'
import 'bsr-sau/dist/index.css'

export default function P3_2() {
    return (
       <>
            <AvatarUploader canvasSize={150}/>
            <br/>
            <AvatarUploader canvasSize={100}/>
       </>
    )
}
`
/*-----------------------------------*/
export default function P3_7() {
    return (
        <>
            <AvatarUploader canvasSize={150}/>
            <br/>
            <AvatarUploader canvasSize={100}/>
            <br/>
            <div>
                <CodeSnippetJavaScript code={code}/>
            </div>
        </>

    )
}