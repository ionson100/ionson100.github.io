import MenuItem from "bsr-menu";
import {CodeSnippetJavaScript} from "../../codeSnippetJavaScript";
import React, {useRef} from "react";

const myContent = ({message}: { message: string }) => {
    return (<span style={{paddingLeft: 10}}>{message}</span>)
}
/*------------------------------------*/
const code = ` 
// ts
import MenuItem from "bsr-menu";
import React, {useRef} from "react";

const myContent=({message}:{message:string})=>{
    return (<span style={{paddingLeft:10}}>{message}</span>)
}

export function P1_8() {

    const mRefMenu=useRef<InstanceType<typeof MenuItem >>(null)
    function myClick(menuItem:InstanceType<typeof MenuItem>){
        mRefMenu.current!.wrapper!.style.background='red'
        mRefMenu.current!.wrapper!.style.padding='100px'
        mRefMenu.current!.menu!.style.background='yellow'
        mRefMenu.current!.popUp!.style.background='red'
        menuItem.menu!.style.background='green'
    }

    return (
        <MenuItem ref={mRefMenu} content={myContent({message:'SimpleMeny'})} behavior={'click'} >
             <MenuItem content={myContent({message:'level 1'})} positionPopup={'downRight'}>
                   <MenuItem content={myContent({message:'click'})} onClick={myClick}/>
             </MenuItem>
        </MenuItem>
    )
}
`

/*------------------------------------*/
export default  function P1_8() {

    const mRefMenu = useRef<InstanceType<typeof MenuItem>>(null)

    function myClick(menuItem: InstanceType<typeof MenuItem>) {
        mRefMenu.current!.wrapper!.style.background = 'red'
        mRefMenu.current!.wrapper!.style.padding = '100px'
        mRefMenu.current!.menu!.style.background = 'yellow'
        mRefMenu.current!.popUp!.style.background = 'red'
        menuItem.menu!.style.background = 'green'
    }

    return (
        <>
            <div style={{padding: 5, background: "#f1efef", width: "fit-content"}}>
                <MenuItem ref={mRefMenu} content={myContent({message: 'SimpleMeny'})} behavior={'click'}>
                    <MenuItem content={myContent({message: 'level 1'})} positionPopup={'downRight'}>
                        <MenuItem content={myContent({message: 'click'})} onClick={myClick}/>
                    </MenuItem>
                </MenuItem>
            </div>

            <br/>
            <br/>
            <div>
                <CodeSnippetJavaScript code={code}/>
            </div>
        </>
    )
}