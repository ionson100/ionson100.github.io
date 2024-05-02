import {MenuHorizontalBand, MenuItem} from "bsr_menu";
import {SimpleText} from "./builderContent";
import {ClickMenu} from "./actionClick";


export function BuilderBsrMenu() {
    return (
        <>
            <MenuHorizontalBand className='band'/>
            <MenuItem onClick={ClickMenu} url={`#mode=1&page=1-1`} tag={'1-1'} content={SimpleText('test')}/>
            <MenuHorizontalBand/>
            <MenuItem onClick={ClickMenu} url={`#mode=1&page=1-2`} tag={'1-2'} content={SimpleText('test')}/>
            <MenuHorizontalBand/>
            <MenuItem onClick={ClickMenu} url={`#mode=1&page=1-3`} tag={'1-3'} content={SimpleText('test')}/>
            <MenuHorizontalBand/>
            <MenuItem onClick={ClickMenu} url={`#mode=1&page=1-4`} tag={'1-4'} content={SimpleText('test')}/>
            <MenuHorizontalBand/>
            <MenuItem onClick={ClickMenu} url={`#mode=1&page=1-5`} tag={'1-5'} content={SimpleText('test')}/>
            <MenuHorizontalBand className='band'/>
        </>
    );

}