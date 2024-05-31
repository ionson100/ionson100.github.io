import React from "react";
import MenuItem from "bsr-menu";
import {CodeSnippetJavaScript} from "../codeSnippetJavaScript";

/*-------------------------------------*/
const code = `
import React from "react";
import MenuItem from "bsr-menu";

function MyVisible(e:InstanceType<typeof MenuItem>){
   setTimeout(() => {
        alert(e.props.tag) 
    })
}

export function P1_14() {

    return (
        <MenuItem  tag={'12'} contentLeft="Menu" onVisible={MyVisible} style={{background:"#d0cfcf"}}>
            <MenuItem contentLeft={'onVisible'}/>
        </MenuItem>
    )
}
`


/*-------------------------------------*/


function MyVisible(e: InstanceType<typeof MenuItem>) {
    setTimeout(() => {
        alert(e.props.tag)
    })
}

export function P1_14() {

    return (
        <>

            <MenuItem tag={'12'} contentLeft="Menu" onVisible={MyVisible} style={{background: "#d0cfcf"}}>
                <MenuItem contentLeft={'onVisible'} />
            </MenuItem>
            <br/>
            <br/>
            <div>
                <CodeSnippetJavaScript code={code}/>
            </div>
        </>
    )
}