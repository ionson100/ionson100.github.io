import React, {useRef} from "react";
import MenuItem from "bsr-menu";
import {CodeSnippetJavaScript} from "../../codeSnippetJavaScript";
import {FaAnglesDown, FaAnglesRight} from "react-icons/fa6";

const styleImage={
    paddingTop:5,
    paddingRight:5,
}
const myContent=(message)=>{
    return (<span style={{paddingLeft:10}}>{message}</span>)
}
/*________________________________*/
const code = `
import React, {useRef} from "react";
import MenuItem from "bsr-menu";
import {FaAnglesDown, FaAnglesRight} from "react-icons/fa6";


const styleImage={
    paddingTop:5,
    paddingRight:5
}


const myContent=(message)=>{
    return (<span style={{paddingLeft:10}}>{message}</span>)
}


export function P1_5(){
    
    const mRefMenu=useRef()
    // for ts: const mRefMenu = useRef<InstanceType<typeof MenuItem>>(null);
    
    return(
           <>
          
            <button style={{margin:5}} onClick={()=>{
                    mRefMenu.current.setShow(true);
            }}>Show</button>

            <button style={{margin:5}} onClick={()=>{
                    mRefMenu.current.setShow(false);
            }}>Hidden</button>
          
            <br/>
            
             <MenuItem
                    ref={mRefMenu}
                    positionPopup={'dropDown'}
                    behavior={"click"}
                    content={myContent('DropDown')}
                    iconDropOpen={<FaAnglesDown size={15} style={styleImage}/>}
                    iconDropClose={<FaAnglesRight size={15}  style={styleImage}/>}>

                 <MenuItem content={myContent('simple')}/>
                 <MenuItem content={myContent('simple')}/>
                 <MenuItem content={myContent('simple')}/>
                 <MenuItem content={myContent('simple')}/>
                 <MenuItem content={myContent('simple')}/>
                 <MenuItem content={myContent('simple')}/>
             </MenuItem>
          
        </>
    )
}
`;
/*________________________________*/



export  default function P1_7(){
    const mRefMenu=useRef();
    return(
        <>
            <div style={{display:"flex"}}>
                <button style={{margin:5}} onClick={()=>{
                    mRefMenu.current.setShow(true);
                }}>Show</button>

                <button style={{margin:5}} onClick={()=>{
                    mRefMenu.current.setShow(false);
                }}>Hidden</button>
            </div>
            <br/>
            <div style={{padding:5,background:"#f1efef",width:"fit-content"}}>
                <MenuItem
                    ref={mRefMenu}
                    positionPopup={'dropDown'}
                    behavior={"click"}
                    content={myContent('DropDown')}
                    iconDropOpen={<FaAnglesDown size={15} style={styleImage}/>}
                    iconDropClose={<FaAnglesRight size={15}  style={styleImage}/>}>

                    <MenuItem content={myContent('simple')}/>
                    <MenuItem content={myContent('simple')}/>
                    <MenuItem content={myContent('simple')}/>
                    <MenuItem content={myContent('simple')}/>
                    <MenuItem content={myContent('simple')}/>
                    <MenuItem content={myContent('simple')}/>
                </MenuItem>
            </div>

            <br/>
            <br/>
            <br/>
            <div>
                <CodeSnippetJavaScript code={code}/>
            </div>
        </>
    )
}