import {FileUpload} from 'bsr-fileupload'
import 'bsr-fileupload/dist/index.css'
import {CodeSnippetDotNet} from "../../codeSnippetJavaScript";
import React from "react";


export default function Part1(){
    return (
        <div style={{display: 'flex',gridGap:'20px'}}>
            <FileUpload
                url={'/upload'}

                buttonStyle={{fontSize:17,fontWeight:'normal'}}
                style={{width:'500px',backgroundColor:"#fff"}} />

            <details>
                <summary style={{cursor:"pointer"}}>Default</summary>
                <div>
                    <CodeSnippetDotNet code={`import {FileUpload} from 'bsr-fileupload'
import 'bsr-fileupload/dist/index.css'

export default function App(){
    return <FileUpload url={'/api/upload'}/>
}`}/>
                </div>
            </details>

        </div>
        )
}