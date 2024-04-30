import {MenuItem} from "bsr_menu";
import "./menu.css"
import { FaAnglesRight } from "react-icons/fa6";
import { FaAnglesDown } from "react-icons/fa6";
import {BuilderBsrMenu, PaintClear} from "./builderBsrMenu";
import {BuilderBsrOrm} from "./builderBsrOrm";
const sizeImage=12;
export function MenuFactory() {
    return (
        <>
            <MenuItem


                onClick={()=>{
                    PaintClear()
                }}
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
                onClick={()=>{
                    PaintClear()
                }}
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
