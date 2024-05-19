import MenuItem from "bsr-menu";
import {SimpleText} from "./builderContent";
import "./menu.css"

export const widthM = 200

export function MenuHorizontalBand() {
    return (<div></div>)
}

const innerWidth = widthM - 2

export function BuilderBsrMenu() {
    return (
        <>
            <MenuHorizontalBand className='band'/>
            <MenuItem url={`#mode=bsrmenu&page=1-1`} tag={'1-1'} style={{width: innerWidth}}
                      content={SimpleText('Examples')}/>
            <MenuHorizontalBand/>
            <MenuItem url={`#mode=bsrmenu&page=1-2`} tag={'1-2'} style={{width: innerWidth}}
                      content={SimpleText('Quick start')}/>
            <MenuHorizontalBand/>
            <MenuItem url={`#mode=bsrmenu&page=1-3`} tag={'1-3'} style={{width: innerWidth}}
                      content={SimpleText('Behavior')}/>
            <MenuHorizontalBand/>
            <MenuItem url={`#mode=bsrmenu&page=1-4`} tag={'1-4'} style={{width: innerWidth}}
                      content={SimpleText('Disabled')}/>
            <MenuHorizontalBand/>
            <MenuItem url={`#mode=bsrmenu&page=1-5`} tag={'1-5'} style={{width: innerWidth}}
                      content={SimpleText('test')}/>
            <MenuHorizontalBand className='band'/>
        </>
    );

}

export function BuilderBsrOrm() {
    return (
        <>

            <MenuHorizontalBand className='band'/>
            <MenuItem url={`#mode=bsrorm&page=2-1`} tag={'2-1'} style={{width: innerWidth}}
                      content={SimpleText('test')}/>
            <MenuHorizontalBand/>
            <MenuItem url={`#mode=bsrorm&page=2-2`} tag={'2-2'} style={{width: innerWidth}}
                      content={SimpleText('test')}/>
            <MenuHorizontalBand/>
            <MenuItem url={`#mode=bsrorm&page=2-3`} tag={'2-3'} style={{width: innerWidth}}
                      content={SimpleText('test')}/>
            <MenuHorizontalBand/>
            <MenuItem url={`#mode=bsrorm&page=2-4`} tag={'2-4'} style={{width: innerWidth}}
                      content={SimpleText('test')}/>
            <MenuHorizontalBand/>
            <MenuItem url={`#mode=bsrorm&page=2-5`} tag={'2-5'} style={{width: innerWidth}}
                      content={SimpleText('test23')}/>
            <MenuHorizontalBand className='band'/>
        </>
    );

}

export function BuilderBsrSau() {
    return (
        <>

            <MenuHorizontalBand className='band'/>
            <MenuItem url={`#mode=bsrsau&page=3-1`} tag={'3-1'} style={{width: innerWidth}}
                      content={SimpleText('test')}/>
            <MenuHorizontalBand/>
            <MenuItem url={`#mode=bsrsau&page=3-2`} tag={'3-2'} style={{width: innerWidth}}
                      content={SimpleText('test')}/>
            <MenuHorizontalBand/>
            <MenuItem url={`#mode=bsrsau&page=3-3`} tag={'3-3'} style={{width: innerWidth}}
                      content={SimpleText('test')}/>
            <MenuHorizontalBand/>
            <MenuItem url={`#mode=bsrsau&page=3-4`} tag={'3-4'} style={{width: innerWidth}}
                      content={SimpleText('test')}/>
            <MenuHorizontalBand/>
            <MenuItem url={`#mode=bsrsau&page=3-5`} tag={'3-5'} style={{width: innerWidth}}
                      content={SimpleText('test23')}/>
            <MenuHorizontalBand className='band'/>
        </>
    );

}