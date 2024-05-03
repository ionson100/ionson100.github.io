import {MenuItem} from "bsr_menu";
import "./menu.css"
import { FaAnglesRight } from "react-icons/fa6";
import { FaAnglesDown } from "react-icons/fa6";
import {BuilderBsrMenu} from "./builderBsrMenu";
import {BuilderBsrOrm} from "./builderBsrOrm";
import {useEffect, useRef} from "react";
import {BuildContent, RunListenerHash} from "../hachListener";

export let MrfMenu=undefined
export let MrfOrm=undefined
const sizeImage=12;
let init=false;
export function MenuFactory() {

    const mRefMenu=useRef()
    const mRefOrm=useRef()
    useEffect(()=>{
        MrfMenu=mRefMenu.current
        MrfOrm=mRefOrm.current
        if(init===false){
            init=true;



            RunListenerHash()
            setTimeout(()=>{
                if(window.location.hash){
                    const url=window.location.toString()
                    BuildContent(url)
                }
            },100)




        }

    })

    return (
        <>
            <MenuItem

                ref={mRefMenu}
                url={`#mode=bsrmenu&page=bsrmenu`}
                id='drop1'
                tag='bsrmenu'
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
                ref={mRefOrm}
                url={`#mode=bsrorm&page=bsrorm`}
                id='drop2'
                tag='bsrorm'
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
