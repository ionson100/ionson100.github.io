import React, {useRef} from "react";
import AvatarUploader from 'bsr-sau'
import {CodeSnippetJavaScript} from "../../codeSnippetJavaScript";
/*-----------------------------------*/
const code = `
import React , {useRef} from "react";
import AvatarUploader from 'bsr-sau'
import 'bsr-sau/dist/index.css'

export default function P3_5() {

    const mRefAvatarRef = useRef<InstanceType<typeof AvatarUploader>>(null)
    const mRefImage=useRef<HTMLImageElement>(null)
    return (
        <>
            <img ref={mRefImage} style={{borderRadius:"50%"}} height={100} alt={"Image preview"}/>
            <br/>
            <AvatarUploader
                ref={mRefAvatarRef}
                visibleLinkPreview={true}
                previewAsync={(url)=>{
                    mRefImage.current.src = url;
                }}
                preview={(url)=>{
                    alert("I ll insert the picture myself where I want: url: "+url);
                }}
            />
        </>
    )
}
`
/*-----------------------------------*/

export default function P3_5() {

    const mRefAvatarRef = useRef<InstanceType<typeof AvatarUploader>>(null)
    const mRefImage=useRef<HTMLImageElement>(null)
    return (
        <>
            <img ref={mRefImage} style={{borderRadius:"50%"}} height={100} alt={"Image preview"}/>
            <br/>
            <AvatarUploader
                ref={mRefAvatarRef}
                visibleLinkPreview={true}
                previewAsync={(url)=>{
                    mRefImage.current!.src = url;
                }}
                preview={(url)=>{
                    alert(`I'll insert the picture myself where I want: url: ${url}`);
                }}
            />
            <br/>
            <div>
                <CodeSnippetJavaScript code={code}/>
            </div>
        </>
    )
}
