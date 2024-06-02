import React from "react";
import AvatarUploader from 'bsr-sau'

import {CodeSnippetJavaScript} from "../../codeSnippetJavaScript";
/*-----------------------------------*/
const code=`
import React from "react";
import AvatarUploader from 'bsr-sau'
import 'bsr-sau/dist/index.css'

export default function P3_1(){
    return(
        <>
            <label>I have disabled file selection. return false</label>
            <div>
                <AvatarUploader selectedFile={(f)=>{
                    alert(f?.name)
                    alert("I have disabled file selection. return false")
                    return false;
                }}/>
            </div>

            <br/>
            <label>I have allowed file selection. return true</label>
            <div>
                <AvatarUploader selectedFile={(f)=>{
                    alert(f?.name)
                    alert("I have allowed file selection. return true")
                    return true;
                }}/>
            </div>
        </>
    )
}
`
/*-----------------------------------*/
export default function P3_1(){
    return(
        <>
            <label>I have disabled file selection. return false</label>
            <div>
                <AvatarUploader selectedFile={(f)=>{
                    alert(f?.name)
                    alert("I have disabled file selection. return false")
                    return false;
                }}/>
            </div>

            <br/>
            <label>I have allowed file selection. return true</label>
            <div>
                <AvatarUploader selectedFile={(f)=>{
                    alert(f?.name)
                    alert("I have allowed file selection. return true")
                    return true;
                }}/>
            </div>
            <br/>
            <div>
                <CodeSnippetJavaScript code={code}/>
            </div>
        </>
    )
}
