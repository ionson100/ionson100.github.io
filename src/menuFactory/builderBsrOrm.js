import {MenuItem} from "bsr-menu";
import {SimpleText} from "./builderContent";
import "./menu.css"


export function MenuHorizontalBand(){
    return (<div></div>)
}

export function BuilderBsrMenu() {
    return (
        <>
            <MenuHorizontalBand className='band'/>
            <MenuItem url={`#mode=bsrmenu&page=1-1`} tag={'1-1'} content={SimpleText('Examples')}/>
            <MenuHorizontalBand/>
            <MenuItem url={`#mode=bsrmenu&page=1-2`} tag={'1-2'} content={SimpleText('Quick start')}/>
            <MenuHorizontalBand/>
            <MenuItem url={`#mode=bsrmenu&page=1-3`} tag={'1-3'} content={SimpleText('Behavior')}/>
            <MenuHorizontalBand/>
            <MenuItem url={`#mode=bsrmenu&page=1-4`} tag={'1-4'} content={SimpleText('Disabled')}/>
            <MenuHorizontalBand/>
            <MenuItem url={`#mode=bsrmenu&page=1-5`} tag={'1-5'} content={SimpleText('test')}/>
            <MenuHorizontalBand className='band'/>
        </>
    );

}

export function BuilderBsrOrm() {
    return (
        <>

            <MenuHorizontalBand className='band'/>
            <MenuItem url={`#mode=bsrorm&page=2-1`} tag={'2-1'} content={SimpleText('test')}/>
            <MenuHorizontalBand/>
            <MenuItem url={`#mode=bsrorm&page=2-2`} tag={'2-2'} content={SimpleText('test')}/>
            <MenuHorizontalBand/>
            <MenuItem url={`#mode=bsrorm&page=2-3`} tag={'2-3'} content={SimpleText('test')}/>
            <MenuHorizontalBand/>
            <MenuItem url={`#mode=bsrorm&page=2-4`} tag={'2-4'} content={SimpleText('test')}/>
            <MenuHorizontalBand/>
            <MenuItem url={`#mode=bsrorm&page=2-5`} tag={'2-5'} content={SimpleText('test23')}/>
            <MenuHorizontalBand className='band'/>
        </>
    );

}

export function BuilderBsrSau() {
    return (
        <>

            <MenuHorizontalBand className='band'/>
            <MenuItem url={`#mode=bsrsau&page=3-1`} tag={'3-1'} content={SimpleText('test')}/>
            <MenuHorizontalBand/>
            <MenuItem url={`#mode=bsrsau&page=3-2`} tag={'3-2'} content={SimpleText('test')}/>
            <MenuHorizontalBand/>
            <MenuItem url={`#mode=bsrsau&page=3-3`} tag={'3-3'} content={SimpleText('test')}/>
            <MenuHorizontalBand/>
            <MenuItem url={`#mode=bsrsau&page=3-4`} tag={'3-4'} content={SimpleText('test')}/>
            <MenuHorizontalBand/>
            <MenuItem url={`#mode=bsrsau&page=3-5`} tag={'3-5'} content={SimpleText('test23')}/>
            <MenuHorizontalBand className='band'/>
        </>
    );

}