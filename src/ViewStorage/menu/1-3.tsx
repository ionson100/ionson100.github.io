import React from "react";
import {MenuItem} from "bsr-menu";
import Code from "./codePrism";

const code = `
import React from "react";
import {MenuItem} from "bsr-menu";


const App = () => {
  return (
      <MenuItem content="Simple  behavior" behavior='click'>
                <MenuItem content='level 1' positionPopup='downRight' behavior='click'>
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
            <MenuItem content="Simple  behavior" behavior='click'>
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
                <Code code={code} language="js"/>
            </div>
        </>
    )
}