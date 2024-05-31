import React from "react";
import AvatarUploader from 'bsr-sau'
import 'bsr-sau/dist/index.css'
import {CodeSnippetJavaScript} from "../codeSnippetJavaScript";
/*-----------------------------------*/
const code = `
import React from "react";
import AvatarUploader from 'bsr-sau'
import 'bsr-sau/dist/index.css'

export default function P3_2() {
    return (
        <AvatarUploader
            clientError={(message) => alert(message)}
            serverError={(message) => alert(message)}
        />
    )
}
`
/*-----------------------------------*/
export default function P3_2() {
    return (
        <>
            <AvatarUploader
                clientError={(message) => alert(message)}
                serverError={(message) => alert(message)}
            />
            <br/>
            <div>
                <CodeSnippetJavaScript code={code}/>
            </div>
        </>

    )
}