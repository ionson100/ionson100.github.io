import React, {useRef} from "react";
import AvatarUploader from 'bsr-sau'
import {CodeSnippetJavaScript} from "../../codeSnippetJavaScript";
/*-----------------------------------*/
const code = `
import React, {useRef} from "react";
import AvatarUploader from 'bsr-sau'
import 'bsr-sau/dist/index.css'

export default function P3_8() {
    const mRefAvatarRef = useRef<InstanceType<typeof AvatarUploader>>(null)
    return (
        <>
            <AvatarUploader ref={mRefAvatarRef}/>
            <br/>
            <button onClick={()=>{
                mRefAvatarRef.current.clear()
            }}>clear Avatar</button>
        </>
    )
}
`
/*-----------------------------------*/
export default function P3_8() {
    const mRefAvatarRef = useRef<InstanceType<typeof AvatarUploader>>(null)
    return (
        <>
            <AvatarUploader ref={mRefAvatarRef}/>
            <br/>
            <button onClick={()=>{
                mRefAvatarRef.current!.clear()
            }}>clear Avatar</button>
            <div>
                <CodeSnippetJavaScript code={code}/>
            </div>
        </>
    )
}
