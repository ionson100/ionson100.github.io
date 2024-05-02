import {MenuItem} from "bsr_menu";
import {SimpleText} from "./builderContent";


export function BuilderBsrMenu() {
    return (
        <>
            <MenuItem url={`#mode=1&page=1-1`} content={SimpleText('test')}/>
            <MenuItem url={`#mode=1&page=1-2`} content={SimpleText('test')}/>
            <MenuItem url={`#mode=1&page=1-3`} content={SimpleText('test')}/>
            <MenuItem url={`#mode=1&page=1-4`} content={SimpleText('test')}/>
            <MenuItem url={`#mode=1&page=1-5`} content={SimpleText('test')}/>
        </>
    );

}