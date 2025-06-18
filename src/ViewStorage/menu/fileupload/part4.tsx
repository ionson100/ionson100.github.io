import {FileUpload} from 'bsr-fileupload'
import 'bsr-fileupload/dist/index.css'
import {CodeSnippetDotNet} from "../../codeSnippetJavaScript";
import React from "react";


export default function Part4(){
    return (
        <div style={{display: 'flex',gridGap:'20px'}}>
            <FileUpload
                url={'/upload'}
                onAbort={() => {
                    console.log('Aborting...');
                }}
                useModeMultipleFiles
                onError={response => {
                    console.log(response.responseText??"no data")
                }}
                onSuccess={response => {
                    console.log(response.responseText??"no data success")
                }}
                onValidateFiles={files => {
                    if(files && files.length!==2){
                        return 'only two files allowed'
                    }
                }}
                onPreUpload={(formData, xhr) => {
                    console.log(formData)
                    console.log(xhr)
                    return true;//continue
                }}

                buttonStyle={{fontSize:17,fontWeight:'normal'}}
                style={{width:'500px',backgroundColor:"#fff"}} />

            <details>
                <summary style={{cursor:"pointer"}}>events: onAbort, onError, onSuccess, onValidateFiles, onPreUpload </summary>
                <div>
                    <CodeSnippetDotNet code={`import {FileUpload} from 'bsr-fileupload'
import 'bsr-fileupload/dist/index.css'

export default function App(){
    return <FileUpload 
               useModeMultipleFiles
                onAbort={() => {
                    console.log('Aborting...');
                }}
                onError={response => {
                    console.log(response.responseText??"no data")
                }}
                onSuccess={response => {
                    console.log(response.responseText??"no data success")
                }}
                onValidateFiles={files => {
                    if(files && files.length!==2){
                        return 'only two files allowed' // error
                    }else{
                        return undefined // ok
                    }
                }}
                onPreUpload={(formData, xhr) => {
                    console.log(formData)
                    console.log(xhr)
                    return true;//continue
                }}

              url={'/api/upload'}/>
}`}/>
                </div>
            </details>

        </div>
    )
}