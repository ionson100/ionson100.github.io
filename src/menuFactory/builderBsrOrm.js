import {MenuItem,MenuHorizontalBand} from "bsr_menu";
import {SimpleText} from "./builderContent";
import {ClickMenu} from "./actionClick";
import "./menu.css"



export function BuilderBsrOrm() {
    return (
        <>

            <MenuHorizontalBand className='band'/>
            <MenuItem onClick={ClickMenu} url={`#mode=2&page=2-1`} tag={'2-1'} content={SimpleText('test')}/>
            <MenuHorizontalBand/>
            <MenuItem onClick={ClickMenu} url={`#mode=2&page=2-2`} tag={'2-2'}  content={SimpleText('test')}/>
            <MenuHorizontalBand/>
            <MenuItem onClick={ClickMenu} url={`#mode=2&page=2-3`} tag={'2-3'}  content={SimpleText('test')}/>
            <MenuHorizontalBand/>
            <MenuItem onClick={ClickMenu} url={`#mode=2&page=2-4`} tag={'2-4'}  content={SimpleText('test')}/>
            <MenuHorizontalBand/>
            <MenuItem onClick={ClickMenu} url={`#mode=2&page=2-5`} tag={'2-5'}  content={SimpleText('test23')}/>
            <MenuHorizontalBand className='band'/>
        </>
    );

}