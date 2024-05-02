import {MenuItem} from "bsr_menu";
import {ClickMenu} from "./actionClick";
import {SimpleText} from "./builderContent";




export function BuilderBsrMenu() {
    return (
        <>

            <MenuItem content={SimpleText('test')} tag={`1-1`} onClick={ClickMenu}></MenuItem>
            <MenuItem content={SimpleText('test')} tag={`1-2`} onClick={ClickMenu}></MenuItem>
            <MenuItem content={SimpleText('test')} tag={`1-3`} onClick={ClickMenu}></MenuItem>
            <MenuItem content={SimpleText('test')} tag={`1-4`} onClick={ClickMenu}></MenuItem>
            <MenuItem content={SimpleText('test')} tag={`1-5`} onClick={ClickMenu}></MenuItem>


        </>
    );

}