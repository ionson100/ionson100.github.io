import React from "react";
import MenuItem from "bsr-menu";
import {CodeSnippetJavaScript} from "../../codeSnippetJavaScript";

/*-------------------------------------*/
const code = `
import React from "react";
import MenuItem from "bsr-menu";

function FormBox() {
    return <div onClick={(e) => {
        e.stopPropagation()
       }
    }>
        <div className='FormExample'>
            <label>
                First Name:
                <input style={{width:170}} type=text name='name_first'/>
            </label>
            <br/>
            <label>
                Last Name:
                <input style={{width:170}} type=text name='name_second'/>
            </label>
            <br/>
            <br/>
            <button onClick={() => {
                  MenuItem.CloseMenu()
               }}>Close
            </button>
        </div>
    </div>
}

export function P1_17() {

    return (
        <MenuItem contentLeft='menu form' positionPopup='downRight' style={{background:"#c2c0c0"}}>
            {
                <FormBox/>
            }
        </MenuItem>
    )
}
`


/*-------------------------------------*/


function FormBox() {
    return <div onClick={(e) => {
        e.stopPropagation()
    }
    }>
        <div className='FormExample'>
            <label>
                First Name:
                <input style={{width:"170px"}} type="text" name="name"/>
            </label>
            <br/>
            <label>
                Last Name:
                <input style={{width:"170px"}} type="text" name="name"/>
            </label>
            <br/>
            <br/>
            <button onClick={() => {
                MenuItem.CloseMenu()
            }}>Close
            </button>
        </div>
    </div>
}

export  default function P1_17() {

    return (
        <>
            <MenuItem contentLeft={'menu form'} positionPopup={'downRight'} style={{background:"#c2c0c0"}}>
                {
                    <FormBox/>
                }
            </MenuItem>
            <br/>
            <br/>
            <div>
                <CodeSnippetJavaScript code={code}/>
            </div>
        </>
    )
}

