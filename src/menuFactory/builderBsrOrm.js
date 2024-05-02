import {MenuItem} from "bsr_menu";

import {ClickMenu} from "./actionClick";
import {SimpleText} from "./builderContent";



export function BuilderBsrOrm() {
    return (
        <>
            <MenuItem content={SimpleText('test')} tag={`2-1`} onClick={ClickMenu}></MenuItem>
            <MenuItem content={SimpleText('test')} tag={`2-2`} onClick={ClickMenu}></MenuItem>
            <MenuItem content={SimpleText('test')} tag={`2-3`} onClick={ClickMenu}></MenuItem>
            <MenuItem content={SimpleText('test')} tag={`2-4`} onClick={ClickMenu}></MenuItem>
            <MenuItem content={SimpleText('test')} tag={`2-5`} onClick={ClickMenu}></MenuItem>
        </>
    );

}