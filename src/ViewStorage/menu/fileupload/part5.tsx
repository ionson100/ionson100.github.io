import {FileUpload} from 'bsr-fileupload'
import 'bsr-fileupload/dist/index.css'
import {CodeSnippetDotNet} from "../../codeSnippetJavaScript";
import React from "react";


export default function Part5(){
    return (
        <div style={{display: 'flex',gridGap:'20px'}}>
    <FileUpload
        accept={'.jpg, .jpeg, .png'}
        url={'/upload'}

    buttonStyle={{fontSize:17,fontWeight:'normal'}}
    style={{width:'500px',backgroundColor:"#fff"}} />

    <details>
    <summary style={{cursor:"pointer"}}>accept</summary>
    <div>
    <CodeSnippetDotNet code={`import {FileUpload} from 'bsr-fileupload'
import 'bsr-fileupload/dist/index.css'

export default function App(){
    return <FileUpload url={'/api/upload'}  accept={'.jpg, .jpeg, .png'}/>
}`}/>
    </div>
    </details>

    </div>
)
}