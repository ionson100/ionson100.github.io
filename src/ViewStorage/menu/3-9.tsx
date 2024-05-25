import React, {useRef} from "react";
import AvatarUploader from 'bsr-sau'
import 'bsr-sau/dist/index.css'
import CodeSnippetJavaScript from "../codeSnippetJavaScript";
/*-----------------------------------*/
const code = `
import React, {useRef} from "react";
import AvatarUploader from 'bsr-sau'
import 'bsr-sau/dist/index.css'

export default function P3_9() {
    const mRefAvatarRef = useRef<InstanceType<typeof AvatarUploader>>(null)
    return (
        <>
            <AvatarUploader ref={mRefAvatarRef}/>
            <br/>
            <button onClick={()=>{
               const dataForForm=mRefAvatarRef.current!.getCanvasFormData()
                alert(dataForForm)
            }}>I will send the data to the server myself</button>
        </>
    )
}
`
/*-----------------------------------*/
export default function P3_9() {
    const mRefAvatarRef = useRef<InstanceType<typeof AvatarUploader>>(null)
    return (
        <>
            <AvatarUploader ref={mRefAvatarRef}/>
            <br/>
            <button onClick={()=>{
               const dataForForm=mRefAvatarRef.current!.getCanvasFormData()
                alert(dataForForm)
            }}>I will send the data to the server myself</button>
            <div>
                <CodeSnippetJavaScript code={code}/>
            </div>
        </>
    )
}