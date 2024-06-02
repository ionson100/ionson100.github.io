import React, {useRef} from "react";
import MenuItem from "bsr-menu";
import {CodeSnippetJavaScript} from "../../codeSnippetJavaScript";
import { AiFillCaretLeft,AiFillCaretRight } from "react-icons/ai";
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
           

            <MenuItem content="Menu" positionPopup={'downRight'}>
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


const  content={
    contentLeft:<AiFillCaretLeft/>,
    content:<span style={{paddingLeft:10}}>Test</span>,
    contentRich:<AiFillCaretRight/>
}
export default  function P1_10() {
    const mRefMenu=useRef();
    return (
        <>

            <button style={{marginRight: 10}} onClick={() => {
               mRefMenu.current.setContent(content)
            }}>SetContent
            </button>
            <br/>
            <br/>


            <MenuItem ref={mRefMenu} content="Menu" />


            <br/>
            <br/>
            <div>
                <CodeSnippetJavaScript code={code}/>
            </div>
        </>
    )
}