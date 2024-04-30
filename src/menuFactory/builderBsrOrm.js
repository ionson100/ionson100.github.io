import {MenuItem} from "bsr_menu";
import {clickMenu, text} from "./builderBsrMenu";



export function BuilderBsrOrm() {
    return (
        <>
            <MenuItem content={text('test')} tag={`2-1`} onClick={clickMenu}></MenuItem>
            <MenuItem content={text('test')} tag={`2-2`} onClick={clickMenu}></MenuItem>
            <MenuItem content={text('test')} tag={`2-3`} onClick={clickMenu}></MenuItem>
            <MenuItem content={text('test')} tag={`2-4`} onClick={clickMenu}></MenuItem>
            <MenuItem content={text('test')} tag={`2-5`} onClick={clickMenu}></MenuItem>
        </>
    );

}