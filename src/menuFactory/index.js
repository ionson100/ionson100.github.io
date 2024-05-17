import {MenuItem} from "bsr-menu";
import "./menu.css"
import { FaAnglesRight } from "react-icons/fa6";
import { FaAnglesDown } from "react-icons/fa6";
import {BuilderBsrMenu, BuilderBsrOrm, BuilderBsrSau} from "./builderBsrOrm";
import {useEffect, useRef} from "react";
import {BuildContent, RunListenerHash} from "../hachListener";

export let MrfMenu=undefined
export let MrfOrm=undefined
export let MrfSau=undefined
const sizeImage=12;
let init=false;
export function MenuFactory() {

    const mRefMenu=useRef()
    const mRefOrm=useRef()
    const mRefSau=useRef()
    useEffect(()=>{
        MrfMenu=mRefMenu.current
        MrfOrm=mRefOrm.current
        MrfSau=mRefSau.current;
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
                content={()=>{return <span style={{paddingLeft:10}}>bsr-menu</span>}}>
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
                content={()=>{return <span style={{paddingLeft:10}}>bitnic.orm</span>}}>
                {
                    <BuilderBsrOrm/>
                }
            </MenuItem>
            <MenuItem
                ref={mRefSau}
                url={`#mode=bsrsau&page=bsrsau`}
                id='drop3'
                tag='bsrsau'
                positionPopup="dropDown"
                behavior="click"
                iconDropOpen={<FaAnglesDown size={sizeImage} style={{paddingTop:5,paddingRight:5}}/>}
                iconDropClose={<FaAnglesRight size={sizeImage} style={{paddingTop:5}}/>}
                content={()=>{return <span style={{paddingLeft:10}}>bsr-sau (simple avatar uploader)</span>}}>
                {
                    <BuilderBsrSau/>
                }
            </MenuItem>

        </>
    );
}
