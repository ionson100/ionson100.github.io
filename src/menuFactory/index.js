import {MenuItem} from "bsr_menu";
import "./menu.css"
import { FaAnglesRight } from "react-icons/fa6";
import { FaAnglesDown } from "react-icons/fa6";
import {BuilderBsrMenu} from "./builderBsrMenu";
import {BuilderBsrOrm} from "./builderBsrOrm";
import {ClickMenu} from "./actionClick";
import {useEffect} from "react";
import {myState} from "../state";
import {BuildContent, RunListenerHash} from "../hachActivator";
const sizeImage=12;
let init=false;
export function MenuFactory() {
    useEffect(()=>{
        if(init===false){
            BuildContent(window.location.href,true);
            RunListenerHash()
            init=true;
        }

    })

    return (
        <>
            <MenuItem
                id='drop1'
                onClick={ClickMenu}
                tag={myState.dropMenuLabel}
                positionPopup="dropDown"
                behavior="click"
                iconDropOpen={<FaAnglesDown size={sizeImage} style={{paddingTop:5,paddingRight:5}}/>}
                iconDropClose={<FaAnglesRight size={sizeImage} style={{paddingTop:5}}/>}
                content="bsr-menu">
                {
                    <BuilderBsrMenu/>
                }
            </MenuItem>
            <MenuItem
                id='drop2'
                onClick={ClickMenu}
                tag={myState.dropOrmLabel}
                positionPopup="dropDown"
                behavior="click"
                iconDropOpen={<FaAnglesDown size={sizeImage} style={{paddingTop:5,paddingRight:5}}/>}
                iconDropClose={<FaAnglesRight size={sizeImage} style={{paddingTop:5}}/>}
                content="bsrOrm">
                {
                    <BuilderBsrOrm/>
                }
            </MenuItem>

        </>
    );
}
