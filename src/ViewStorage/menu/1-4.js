import React, {useRef} from "react";
import {MenuItem} from "bsr-menu";
import Code from "./codePrism";

const code = `
import React from "react";
import {MenuItem} from "bsr-menu";


const App = () => {
    const mRefMenu=useRef();
    // for ts: const mRefMenu = useRef<InstanceType<typeof MenuItem>>(null);
  return (
           <div style={{display:'flex'}}>
                <button style={{marginRight:10}} onClick={()=>{
                    mRefMenu.current.setDisabled(true)
                }}>disable</button>
                <button onClick={() => {
                    mRefMenu.current.setDisabled(false)
                }}>undisable</button>
            </div>
            <MenuItem  ref={mRefMenu} content="Simple  disable" behavior='click'>
            </MenuItem>
  );
};
`;

export function P1_4() {
    const mRefMenu=useRef();
    return (
        <>
            <div style={{display:'flex'}}>
                <button style={{marginRight:10}} onClick={()=>{
                    mRefMenu.current.setDisabled(true)
                }}>disable</button>
                <button onClick={() => {
                    mRefMenu.current.setDisabled(false)
                }}>undisable</button>
            </div>
            <MenuItem  ref={mRefMenu} content="Simple  disable" behavior='click'>
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