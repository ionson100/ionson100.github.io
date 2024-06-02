import React from "react";
import MenuItem from "bsr-menu";
import {CodeSnippetJavaScript} from "../../codeSnippetJavaScript";
/*-------------------------------------*/
const code = `
import React from "react";
import MenuItem from "bsr-menu";

function MyClick(e:InstanceType<typeof MenuItem>){
    alert( e.props.tag)
}
export function P1_12() {
   
    return (
        <MenuItem tag={'12'} contentLeft="Menu" onClick={MyClick} style={{background:"#d0cfcf"}}/>
    )
}
`


/*-------------------------------------*/


function MyClick(e:InstanceType<typeof MenuItem>){
    alert( e.props.tag)
}
export default  function P1_12() {

    return (
        <>
            <MenuItem tag={'12'} contentLeft="Menu" onClick={MyClick} style={{background:"#d0cfcf"}}/>
            <br/>
            <br/>
            <div>
                <CodeSnippetJavaScript code={code}/>
            </div>
        </>
    )
}