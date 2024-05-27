import MenuItem from "bsr-menu";
import {SimpleText} from "./builderContent";

export const widthM = 250

export function MenuHorizontalBand() {
    return (<div className={'band'}></div>)
}

const innerWidth = widthM - 2

export function BuilderBsrMenu() {
    return (
        <>
            <MenuHorizontalBand/>
            <MenuItem url={`#mode=bsrmenu&page=1-1`} tag={'1-1'} style={{width: innerWidth}}
                      content={SimpleText('Examples')}/>
            <MenuHorizontalBand/>
            <MenuItem url={`#mode=bsrmenu&page=1-2`} tag={'1-2'} style={{width: innerWidth}}
                      content={SimpleText('Quick start')}/>
            <MenuHorizontalBand/>
            <MenuItem url={`#mode=bsrmenu&page=1-3`} tag={'1-3'} style={{width: innerWidth}}
                      content={SimpleText('behavior')}/>
            <MenuHorizontalBand/>
            <MenuItem url={`#mode=bsrmenu&page=1-4`} tag={'1-4'} style={{width: innerWidth}}
                      content={SimpleText('setDisabled(boolean)')}/>
            <MenuItem url={`#mode=bsrmenu&page=1-5`} tag={'1-5'} style={{width: innerWidth}}
                      title={'iconDropOpen, iconDropClose'}
                      content={SimpleText('iconDropOpen, iconDropClose')}/>
            <MenuHorizontalBand/>
            <MenuItem url={`#mode=bsrmenu&page=1-6`} tag={'1-6'} style={{width: innerWidth}}
                      content={SimpleText('Drop open() close()')} title={'Drop open() close()'}/>
            <MenuHorizontalBand/>
            <MenuItem url={`#mode=bsrmenu&page=1-7`} tag={'1-7'} style={{width: innerWidth}}
                      content={SimpleText('setShow(boolean)')} title={'setShow(boolean)'}/>
            <MenuHorizontalBand/>
            <MenuItem url={`#mode=bsrmenu&page=1-8`} tag={'1-8'} style={{width: innerWidth}}
                      content={SimpleText('menu popUp wrapper')} title={'menu popUp wrapper'}/>
            <MenuHorizontalBand/>
            <MenuItem url={`#mode=bsrmenu&page=1-9`} tag={'1-9'} style={{width: innerWidth}}
                      content={SimpleText('CloseMenu()')}/>
            <MenuHorizontalBand/>
            <MenuItem url={`#mode=bsrmenu&page=1-10`} tag={'1-10'} style={{width: innerWidth}}
                      content={SimpleText('setContent( any,any,any)')} title={'setContent( any,any,any)'}/>
            <MenuHorizontalBand/>
            <MenuItem url={`#mode=bsrmenu&page=1-11`} tag={'1-11'} style={{width: innerWidth}}
                      content={SimpleText('contentLeft content contentRight')}
                      title={'contentLeft content contentRight'}/>
            <MenuHorizontalBand/>
            <MenuItem url={`#mode=bsrmenu&page=1-12`} tag={'1-12'} style={{width: innerWidth}}
                      content={SimpleText('onClick')}/>
            <MenuHorizontalBand/>
            <MenuItem url={`#mode=bsrmenu&page=1-14`} tag={'1-14'} style={{width: innerWidth}}
                      content={SimpleText('onVisible')}/>
            <MenuHorizontalBand/>

            <MenuItem url={`#mode=bsrmenu&page=1-15`} tag={'1-15'} style={{width: innerWidth}}
                      content={SimpleText('buildContent')}/>
            <MenuHorizontalBand/>

            <MenuItem url={`#mode=bsrmenu&page=1-16`} tag={'1-16'} style={{width: innerWidth}}
                      content={SimpleText('add checkBox')}/>
            <MenuHorizontalBand/>
            <MenuItem url={`#mode=bsrmenu&page=1-17`} tag={'1-17'} style={{width: innerWidth}}
                      content={SimpleText('add any content')}/>
            <MenuHorizontalBand/>
            <MenuItem url={`#mode=bsrmenu&page=1-13`} tag={'1-13'} style={{width: innerWidth}}
                      content={SimpleText('Default Style')}/>
            <MenuHorizontalBand/>
        </>
    );

}

export function BuilderBsrOrm() {
    return (
        <>

            <MenuHorizontalBand/>
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
            <MenuHorizontalBand/>
        </>
    );

}

export function BuilderBsrSau() {
    return (
        <>

            <MenuHorizontalBand/>
            <MenuItem url={`#mode=bsrsau&page=3-1`} tag={'3-1'} style={{width: innerWidth}}
                      content={SimpleText('selectedFile')}/>
            <MenuHorizontalBand/>
            <MenuItem url={`#mode=bsrsau&page=3-2`} tag={'3-2'} style={{width: innerWidth}}
                      content={SimpleText('clientError severError')} title={'clientError severError'}/>
            <MenuHorizontalBand/>
            <MenuItem url={`#mode=bsrsau&page=3-3`} tag={'3-3'} style={{width: innerWidth}}
                      content={SimpleText('headerKeyValue')}/>
            <MenuHorizontalBand/>
            <MenuItem url={`#mode=bsrsau&page=3-4`} tag={'3-4'} style={{width: innerWidth}}
                      content={SimpleText('callbackFormData')}/>
            <MenuHorizontalBand/>
            <MenuItem url={`#mode=bsrsau&page=3-5`} tag={'3-5'} style={{width: innerWidth}}
                      content={SimpleText('preview previewAsync')} title={'preview previewAsync'}/>
            <MenuHorizontalBand/>
            <MenuItem url={`#mode=bsrsau&page=3-6`} tag={'3-6'} style={{width: innerWidth}}
                      content={SimpleText('beforeUpload')}/>
            <MenuHorizontalBand/>
            <MenuItem url={`#mode=bsrsau&page=3-7`} tag={'3-7'} style={{width: innerWidth}}
                      content={SimpleText('canvasSize')}/>
            <MenuHorizontalBand/>
            <MenuItem url={`#mode=bsrsau&page=3-8`} tag={'3-8'} style={{width: innerWidth}}
                      content={SimpleText('clear()')}/>
            <MenuHorizontalBand/>
            <MenuItem url={`#mode=bsrsau&page=3-9`} tag={'3-9'} style={{width: innerWidth}}
                      content={SimpleText('getCanvasFormData()')}/>
            <MenuHorizontalBand/>
            <MenuItem url={`#mode=bsrsau&page=3-10`} tag={'3-10'} style={{width: innerWidth}}
                      content={SimpleText('Example ASP.NET Core')}/>

        </>
    );

}