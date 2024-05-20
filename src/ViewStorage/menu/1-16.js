import React from "react";
import MenuItem from "bsr-menu";
import CodeSnippetJavaScript from "../codeSnippetJavaScript";

/*-------------------------------------*/
const code = `
import React from "react";
import MenuItem from "bsr-menu";

function myCheckBox(){
    return <div style={{width:30,background:"green"}} onClick={e=>{
    e.stopPropagation()}
    }>
        <input type='checkbox' name='myCheck'/>
    </div>
}

export function P1_16() {

    return (
        <MenuItem content='menu' positionPopup='downRight'>
            <MenuItem content='checkBox' contentRight={myCheckBox()}/>
        </MenuItem>
    )
}
`


/*-------------------------------------*/


function myCheckBox(){
    return <div style={{width:30,background:"green"}} onClick={e=>{
    e.stopPropagation()}
    }>
        <input type={"checkbox"} name={'myCheck'}/>
    </div>
}

export function P1_16() {

    return (
        <>
            <MenuItem content={'menu'} positionPopup={'downRight'}>
                <MenuItem
                    content="checkBox"

                    contentRight={myCheckBox()}/>
            </MenuItem>
            <br/>
            <br/>
            <div>
                <CodeSnippetJavaScript code={code}/>
            </div>
        </>
    )
}

