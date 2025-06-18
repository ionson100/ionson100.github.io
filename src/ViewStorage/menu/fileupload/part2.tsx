import {FileUpload} from 'bsr-fileupload'
import 'bsr-fileupload/dist/index.css'
import {CodeSnippetDotNet} from "../../codeSnippetJavaScript";
import React from "react";
import { MdOutlineCloudUpload } from "react-icons/md";
import { IoCloudOfflineOutline } from "react-icons/io5";
import { LuFileSearch } from "react-icons/lu";


export default function Part2(){
    const refUploader = React.createRef<FileUpload>();
    const bodyDrop=()=>{
        return(
            <div style={{color:"#1bc5f5",textAlign:"center"}}>
                <LuFileSearch size={50} style={{cursor:'pointer'}} onClick={()=>{refUploader.current?.SelectFiles();}} />
                <div>Drag and drop files here</div>
            </div>

        )
    }
    return (
        <div style={{display: 'flex',gridGap:'20px'}}>
            <FileUpload
                url={'/upload'}
                ref={refUploader}
                useModeMultipleFiles
                dropZoneContent={bodyDrop()}
                buttonAbortContent={<IoCloudOfflineOutline size={25}/>}
                buttonFileUploadContent={<MdOutlineCloudUpload size={25}/>}
                buttonSelectFilesContent={<LuFileSearch size={25}/>}
                buttonStyle={{fontWeight:'normal',width:50}}
                style={{width:'500px',backgroundColor:"#fff"}} />

            <details>
                <summary style={{cursor:"pointer"}}>Content drop zone, button, use mode multi select files</summary>
                <div>
                    <CodeSnippetDotNet code={`import {FileUpload} from 'bsr-fileupload'
import 'bsr-fileupload/dist/index.css'
import React from "react";
import { MdOutlineCloudUpload } from "react-icons/md";
import { IoCloudOfflineOutline } from "react-icons/io5";
import { LuFileSearch } from "react-icons/lu";

export default function App(){
     const refUploader = React.createRef<FileUpload>();
    const bodyDrop=()=>{
        return(
            <div style={{color:"#1bc5f5",textAlign:"center"}}>
                <LuFileSearch size={50} style={{cursor:'pointer'}} onClick={()=>{refUploader.current?.SelectFiles();}} />
                <p>Drag and drop files here</p>
            </div>

        )
    }
    return <FileUpload
                url={'/upload'}
                ref={refUploader}
                useModeMultipleFiles
                dropZoneContent={bodyDrop()}
                buttonAbortContent={<IoCloudOfflineOutline size={25}/>}
                buttonFileUploadContent={<MdOutlineCloudUpload size={25}/>}
                buttonSelectFilesContent={<LuFileSearch size={25}/>}
                buttonStyle={{fontSize:17,fontWeight:'normal',width:50}}
                style={{width:'500px',backgroundColor:"#fff"}} />
}`}/>
                </div>
            </details>

        </div>
    )
}