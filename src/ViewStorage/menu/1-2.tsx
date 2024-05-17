import React from "react";
import {MenuItem} from "bsr-menu";
import Code from "./codePrism";

const code = `
import React from "react";
import {MenuItem} from "bsr-menu";


const App = () => {
  return (
      <MenuItem content={"Simple menu"} behavior={'click'}>
                <MenuItem content={'level 1'} positionPopup={'downRight'}>
                    <MenuItem content={'level 2'}/>
                    <MenuItem content={'level 2'}/>
                </MenuItem>
                <MenuItem content={'level 1'} positionPopup={'downRight'}>
                    <MenuItem content={'level 2'}/>
                    <MenuItem content={'level 2'}/>
                </MenuItem>
      </MenuItem>
  );
};
`;
export function P1_2() {
    return (

        <>
            <MenuItem content={"Simple menu"} behavior={'click'}>
                <MenuItem content={'level 1'} positionPopup={'downRight'}>
                    <MenuItem content={'level 2'}/>
                    <MenuItem content={'level 2'}/>
                </MenuItem>
                <MenuItem content={'level 1'} positionPopup={'downRight'}>
                    <MenuItem content={'level 2'}/>
                    <MenuItem content={'level 2'}/>
                </MenuItem>
            </MenuItem>
            <br/>
            <br/>
            <div className="App">
                <Code code={code} language="javascript" />
            </div>
        </>
    )
}