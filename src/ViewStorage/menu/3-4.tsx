import React from "react";
import AvatarUploader from 'bsr-sau'
import 'bsr-sau/dist/index.css'
import CodeSnippetJavaScript from "../codeSnippetJavaScript";
/*-----------------------------------*/
const code = `
import React from "react";
import AvatarUploader from 'bsr-sau'
import 'bsr-sau/dist/index.css'

const myDate={
    "file-name": "123.jpg",
    "user-age": 20

}
export default function P3_3() {
    return (
        <AvatarUploader
            callbackFormData={myDate}
            clientError={(message) => alert(message)}
            serverError={(message) => alert(message)}
        />
    )
}
`
/*-----------------------------------*/
const myDate={
    "file-name": "123.jpg",
    "user-age": 20

}
export default function P3_4() {
    return (
        <>
            <AvatarUploader
                callbackFormData={myDate}
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