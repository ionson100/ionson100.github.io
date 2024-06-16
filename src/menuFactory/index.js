import MenuItem from "bsr-menu";
import {FaAnglesRight} from "react-icons/fa6";
import {FaAnglesDown} from "react-icons/fa6";
import {BuilderBsrDialog, BuilderBsrMenu, BuilderBsrOrm, BuilderBsrSau, BuilderBsrTree, widthM} from "./builderBsrOrm";
import {useEffect, useRef} from "react";
import {BuildContent, RunListenerHash} from "../hachListener";

export let HtmlMenu = undefined
export let HtmlOrm = undefined
export let HtmlSau = undefined
export let HtmlDialog = undefined
export let HtmlTree = undefined
const sizeImage = 12;
let init = false;
const styleImage = {
    paddingTop: 5,
    paddingRight: 5
}
const styleMenu = {
    borderTop: "1px solid  #d7d4d4",
    borderBottom: "1px solid  #d7d4d4",
    width: widthM
}

export function MenuFactory() {

    const mRefMenu = useRef()
    const mRefOrm = useRef()
    const mRefSau = useRef()
    const mRefDialog = useRef()
    const mRefTree = useRef()
    useEffect(() => {
        HtmlMenu = mRefMenu.current
        HtmlOrm = mRefOrm.current
        HtmlSau = mRefSau.current;
        HtmlDialog=mRefDialog.current;
        HtmlTree=mRefTree.current
        if (init === false) {
            init = true;


            RunListenerHash()
            setTimeout(() => {
                if (window.location.hash) {
                    const url = window.location.toString()
                    BuildContent(url)
                }
            }, 100)


        }

    },[])

    return (
        <>
            <MenuItem

                tabIndex={1}
                style={styleMenu}
                ref={mRefMenu}
                url={`#mode=bsrmenu&page=bsrmenu`}
                id='drop1'
                tag='bsrmenu'
                positionPopup="dropDown"
                behavior="click"
                iconDropOpen={<FaAnglesDown size={sizeImage} style={styleImage}/>}
                iconDropClose={<FaAnglesRight size={sizeImage} style={styleImage}/>}
                content={() => {
                    return <span style={{paddingLeft: 10}}>bsr-menu</span>
                }}>
                {
                    <BuilderBsrMenu/>
                }
            </MenuItem>

            <MenuItem
                tabIndex={2}
                style={styleMenu}
                ref={mRefOrm}
                url={`#mode=bsrorm&page=bsrorm`}
                id='drop2'
                tag='bsrorm'
                positionPopup="dropDown"
                behavior="click"
                iconDropOpen={<FaAnglesDown size={sizeImage} style={styleImage}/>}
                iconDropClose={<FaAnglesRight size={sizeImage} style={styleImage}/>}
                content={() => {
                    return <span style={{paddingLeft: 10}}>bitnic.orm</span>
                }}>
                {
                    <BuilderBsrOrm/>
                }
            </MenuItem>

            <MenuItem
                tabIndex={3}
                style={styleMenu}
                ref={mRefSau}
                url={`#mode=bsrsau&page=bsrsau`}
                id='drop3'
                tag='bsrsau'
                positionPopup="dropDown"
                behavior="click"
                iconDropOpen={<FaAnglesDown size={sizeImage} style={styleImage}/>}
                iconDropClose={<FaAnglesRight size={sizeImage} style={styleImage}/>}
                content={() => {
                    return <span style={{paddingLeft: 10}}>bsr-sau (simple avatar uploader)</span>
                }}>
                {
                    <BuilderBsrSau/>
                }
            </MenuItem>

            <MenuItem
                tabIndex={4}
                style={styleMenu}
                ref={mRefDialog}
                url={`#mode=bsrdialog&page=bsrdialog`}
                id='drop4'
                tag='bsrdialog'
                positionPopup="dropDown"
                behavior="click"
                iconDropOpen={<FaAnglesDown size={sizeImage} style={styleImage}/>}
                iconDropClose={<FaAnglesRight size={sizeImage} style={styleImage}/>}
                content={() => {
                    return <span style={{paddingLeft: 10}}>bsr-modaldialog</span>
                }}>
                {
                    <BuilderBsrDialog/>
                }
            </MenuItem>

            <MenuItem
                tabIndex={5}
                style={styleMenu}
                ref={mRefTree}
                url={`#mode=bsrtree&page=bsrtree`}
                id='drop5'
                tag='bsrtree'
                positionPopup="dropDown"
                behavior="click"
                iconDropOpen={<FaAnglesDown size={sizeImage} style={styleImage}/>}
                iconDropClose={<FaAnglesRight size={sizeImage} style={styleImage}/>}
                content={() => {
                    return <span style={{paddingLeft: 10}}>bsr-tree-virtual</span>
                }}>
                {
                    <BuilderBsrTree/>
                }
            </MenuItem>

        </>
    );
}
