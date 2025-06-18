import {FileUpload} from 'bsr-fileupload'
import 'bsr-fileupload/dist/index.css'
import {CodeSnippetDotNet} from "../../codeSnippetJavaScript";
import React, {useRef, useState} from "react";


export default function Part8(){
    const audio=useRef<FileUpload>(null)
    const [availabilityFiles, setAvailabilityFiles] = useState(false);
    const [uploading, setUploading] = useState(false);
    return (
        <div style={{display: 'flex',gridGap:'20px'}}>
            <div>
                <FileUpload
                    onPreUpload={(formData, xhr) => {
                        console.log(xhr);
                        console.log(formData);
                        return true; // continue
                    }}
                    url={'/upload'}
                    ref={audio}
                    heightZone={100}
                    onEventFilePresenceChange={setAvailabilityFiles}
                    onEventFileUploadStatus={setUploading}
                    useHiddenButtonAbort
                    useHiddenButtonUpload
                    useHiddenButtonSelectFile


                    buttonStyle={{fontSize:17,fontWeight:'normal'}}
                    style={{width:'500px',backgroundColor:"#fff"}} />
                <div style={{textAlign:"right",width:'100%'}}>
                    {
                        availabilityFiles&&!uploading?<button  onClick={()=> audio.current!.ClearFiles()}>clear</button>:null
                    }
                    {
                        uploading?<button onClick={()=> audio.current!.Abort()}>abort</button>:null
                    }
                    {
                        availabilityFiles&&!uploading?<button  onClick={()=> audio.current!.FileUpload()}>upload</button>:null
                    }
                    {
                        !uploading?<button  onClick={()=> audio.current!.SelectFiles()}>select file</button>:null
                    }
                </div>
            </div>

            <details>
                <summary style={{cursor:"pointer"}}>Using external buttons</summary>
                <div>
                    <CodeSnippetDotNet code={`import {FileUpload} from 'bsr-fileupload'
import 'bsr-fileupload/dist/index.css'
import React, {useRef, useState} from "react";

export default function App(){
    const audio=useRef<FileUpload>(null)
    const [availabilityFiles, setAvailabilityFiles] = useState(false);
    const [uploading, setUploading] = useState(false);
    return (
          <div>
                <FileUpload
                    url={'/upload'}
                    ref={audio}
                    onPreUpload={(formData, xhr) => {
                        console.log(xhr);
                        console.log(formData);
                        return true; // continue
                    }}
                    heightZone={100}
                    onEventFilePresenceChange={setAvailabilityFiles}
                    onEventFileUploadStatus={setUploading}
                    useHiddenButtonAbort
                    useHiddenButtonUpload
                    useHiddenButtonSelectFile/>
                <div style={{textAlign:"right",width:'100%'}}>
                    {
                        uploading?<button onClick={()=> audio.current!.Abort()}>abort</button>:null
                    }
                    {
                        availabilityFiles&&!uploading?<button  onClick={()=> audio.current!.FileUpload()}>upload</button>:null
                    }
                    {
                        !uploading?<button  onClick={()=> audio.current!.SelectFiles()}>select file</button>:null
                    }
                </div>
            </div>
    )
}`}/>
                </div>
            </details>

        </div>
    )
}