import {FileUpload} from 'bsr-fileupload'
import 'bsr-fileupload/dist/index.css'
import {CodeSnippetDotNet} from "../../codeSnippetJavaScript";
import React from "react";


export default function Part3(){
    return (
        <div style={{display: 'flex',gridGap:'20px'}}>
            <FileUpload
                url={'/upload'}
                useModeMultipleFiles
                modeAppendFiles={'portion'}

                buttonStyle={{fontSize:17,fontWeight:'normal'}}
                style={{width:'500px',backgroundColor:"#fff"}} />

            <details>
                <summary style={{cursor:"pointer"}}>Append portion files (only multi select)</summary>
                <div>
                    <CodeSnippetDotNet code={`import {FileUpload} from 'bsr-fileupload'
import 'bsr-fileupload/dist/index.css'

export default function App(){
    return <FileUpload 
                useModeMultipleFiles
                modeAppendFiles={'portion'}
                url={'/api/upload'}/>
}`}/>
                </div>
            </details>

        </div>
    )
}