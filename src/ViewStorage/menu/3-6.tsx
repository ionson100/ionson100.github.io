import React from "react";
import AvatarUploader from 'bsr-sau'
import 'bsr-sau/dist/index.css'
import CodeSnippetJavaScript from "../codeSnippetJavaScript";
/*-----------------------------------*/
const code = `
import React from "react";
import AvatarUploader from 'bsr-sau'
import 'bsr-sau/dist/index.css'

export default function P3_2() {
    return (
        <AvatarUploader
            beforeUpload={()=>{
                    alert('Start sending data to the server')
                }}
        />
    )
}
`
/*-----------------------------------*/
export default function P3_6() {
    return (
        <>
            <AvatarUploader
                beforeUpload={()=>{
                    alert('Start sending data to the server')
                }}
            />
            <br/>
            <div>
                <CodeSnippetJavaScript code={code}/>
            </div>
        </>

    )
}