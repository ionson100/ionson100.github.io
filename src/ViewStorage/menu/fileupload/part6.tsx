import {FileUpload} from 'bsr-fileupload'
import 'bsr-fileupload/dist/index.css'
import {CodeSnippetDotNet} from "../../codeSnippetJavaScript";
import React from "react";
const renderItem=(file:File)=>{
    return (
        <div style={{display:'flex'}}>
            <div style={{width:'100%',whiteSpace:'nowrap', overflow:'hidden',textOverflow:'ellipsis',paddingRight:10}}>
                {file.name}
            </div>
            <img src={URL.createObjectURL(file)} alt=".." height={50}/>
        </div>
    )
}

export default function Part6(){
    return (
        <div style={{display: 'flex',gridGap:'20px'}}>
            <FileUpload
                useModeMultipleFiles
                accept={'.jpg, .jpeg, .png'}
                url={'/upload'}
                buttonStyle={{fontSize:17,fontWeight:'normal'}}
                renderFileItem={renderItem}
                style={{width:'500px',backgroundColor:"#fff"}} />

            <details>
                <summary style={{cursor:"pointer"}}>Using renderFileItem</summary>
                <div>
                    <CodeSnippetDotNet code={`import {FileUpload} from 'bsr-fileupload'
import 'bsr-fileupload/dist/index.css'
const renderItem=(file:File)=>{
    return (
        <div style={{display:'flex'}}>
            <div style={{width:'100%',whiteSpace:'nowrap', overflow:'hidden',textOverflow:'ellipsis',paddingRight:10}}>
                {file.name}
            </div>
            <img src={URL.createObjectURL(file)} alt=".." height={50}/>
        </div>
    )
}
export default function App(){
    return <FileUpload 
              url={'/api/upload'} 
              renderFileItem={renderItem} 
              useModeMultipleFiles
              accept={'.jpg, .jpeg, .png'}/>
}`}/>
                </div>
            </details>

        </div>
    )
}