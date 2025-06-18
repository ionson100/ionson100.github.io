import {FileUpload} from 'bsr-fileupload'
import 'bsr-fileupload/dist/index.css'
import {CodeSnippetDotNet} from "../../codeSnippetJavaScript";
import React from "react";


export default function Part7(){
    return (
        <div style={{display: 'flex',gridGap:'20px'}}>
            <FileUpload
                url={'/upload'}
                heightZone={100}
                addingUserData={()=>{
                    return {
                        "myData":JSON.stringify({
                            id:'e284914c-4afd-4dca-aa13-c0472c0db6a2',
                            name:'user@user.com',
                        })
                }}}
                addingHeader={()=>{
                    return {
                        'Authorization': 'Basic YWxhZGRpbjpvcGVuc2VzYW1l',
                    }
                }}

                buttonStyle={{fontSize:17,fontWeight:'normal'}}
                style={{width:'500px',backgroundColor:"#fff",height:'fit-content'}} />

            <details>
                <summary style={{cursor:"pointer"}}>Adding  UserData:key-value, Header: key-value, usage heightZone</summary>
                <div>
                    <CodeSnippetDotNet code={`import {FileUpload} from 'bsr-fileupload'
import 'bsr-fileupload/dist/index.css'

export default function App(){
    return <FileUpload 
                url={'/upload'}
                heightZone={100}
                addingUserData={()=>{
                    return {
                        "myData":JSON.stringify({
                            id:'e284914c-4afd-4dca-aa13-c0472c0db6a2',
                            name:'user@user.com',
                        })
                }}}
                addingHeader={()=>{
                    return {
                        'Authorization': 'Basic YWxhZGRpbjpvcGVuc2VzYW1l',
                    }
                }}/>
}`}/>
                </div>
            </details>

        </div>
    )
}