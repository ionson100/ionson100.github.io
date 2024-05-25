import React from "react";
import AvatarUploader from 'bsr-sau'
import 'bsr-sau/dist/index.css'
import CodeSnippetJavaScript from "../codeSnippetJavaScript";
/*-----------------------------------*/
const code = `
import React from "react";
import AvatarUploader from 'bsr-sau'
import 'bsr-sau/dist/index.css'

const header={
    "Content-Language": "en-US",
    "ETag": "33a64df551425fcc55e4d42a148795d9f25f89d4"
}
export default function P3_3() {
    return (
        <AvatarUploader
            headerKeyValue={header}
            clientError={(message) => alert(message)}
            serverError={(message) => alert(message)}
        />
    )
}
`
/*-----------------------------------*/
const header={
    "Content-Language": "en-US",
    "ETag": "33a64df551425fcc55e4d42a148795d9f25f89d4"

}
export default function P3_3() {
    return (
        <>
            <AvatarUploader
                headerKeyValue={header}
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