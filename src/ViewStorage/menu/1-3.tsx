import React from "react";
import MenuItem from "bsr-menu";
import {CodeSnippetJavaScript} from "../codeSnippetJavaScript";

const code = `
import React from "react";
import MenuItem from "bsr-menu";


const App = () => {
  return (
      <MenuItem contentLeft="Simple  behavior" behavior='click'>
                <MenuItem content='level 1'  positionPopup='downRight' behavior='click'>
                    <MenuItem content='level 2'/>
                    <MenuItem content='level 2'/>
                </MenuItem>
                <MenuItem content='level 1' positionPopup='downRight' behavior='move'>
                    <MenuItem content='level 2'/>
                    <MenuItem content='level 2'/>
                </MenuItem>
      </MenuItem>
  );
};
`;

export function P1_3() {
    return (

        <>
            <MenuItem contentLeft="Simple  behavior" behavior='click'>
                <MenuItem content='level 1' positionPopup='downRight' behavior='click'>
                    <MenuItem content='level 2'/>
                    <MenuItem content='level 2'/>
                </MenuItem>
                <MenuItem content='level 1' positionPopup='downRight' behavior='move'>
                    <MenuItem content='level 2'/>
                    <MenuItem content='level 2'/>
                </MenuItem>
            </MenuItem>
            <br/>
            <br/>
            <div >
                <CodeSnippetJavaScript code={code}/>
            </div>
        </>
    )
}