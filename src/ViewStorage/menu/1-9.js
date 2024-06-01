import React from "react";
import MenuItem from "bsr-menu";
import {CodeSnippetJavaScript} from "../codeSnippetJavaScript";
/*-------------------------------------*/
const code = `
import React from "react";
import MenuItem from "bsr-menu";

export function P1_9() {
    return (
        <>
            <button style={{marginRight: 10}} onClick={() => {
                MenuItem.CloseMenu(() => {
                      setTimeout(()=>{
                        alert('closed')
                    })
                })
            }}>CloseMenu
            </button>
           

            <MenuItem contentLeft="Menu" positionPopup={'downRight'}>
                <MenuItem content='level 1' positionPopup='downRight'>
                    <MenuItem content='level 2' positionPopup={'downRight'}>
                        <MenuItem content='level 3' positionPopup={'downRight'}>
                            <MenuItem content={'level4'}/>
                        </MenuItem>
                    </MenuItem>

                </MenuItem>
            </MenuItem>
        </>
    )
}
`

/*-------------------------------------*/
export default  function P1_9() {
    return (
        <>

            <button style={{marginRight: 10}} onClick={() => {
                MenuItem.CloseMenu(() => {
                    setTimeout(()=>{
                        alert('closed')
                    })
                })
            }}>CloseMenu
            </button>
            <br/>
            <br/>


            <MenuItem contentLeft="Menu" positionPopup={'downRight'}>
                <MenuItem content='level 1' positionPopup='downRight'>
                    <MenuItem content='level 2' positionPopup={'downRight'}>
                        <MenuItem content='level 3' positionPopup={'downRight'}>
                            <MenuItem content={'level4'}/>
                        </MenuItem>
                    </MenuItem>

                </MenuItem>
            </MenuItem>
            <br/>
            <br/>
            <div>
                <CodeSnippetJavaScript code={code}/>
            </div>
        </>
    )
}