import {MenuItem} from "bsr_menu";

export const text = (text) => {
    return (<span style={{paddingLeft: 15}}>{text}</span>)
}
export const clickMenu=(tag,element)=>{
      paint(tag,element)
}
const paint=(tag)=>{
   PaintClear();
    document.querySelectorAll('[data-menu-tag="'+tag+'"]')[0]?.classList.add('selected-menu');

}
 export const PaintClear=()=>{
    const list=document.querySelectorAll('[data-menu-tag]');
    for (let item of list) {
        item.classList.remove('selected-menu')
    }
}

export function BuilderBsrMenu() {
    return (
        <>

            <MenuItem content={text('test')} tag={`1-1`} onClick={clickMenu}></MenuItem>
            <MenuItem content={text('test')} tag={`1-2`} onClick={clickMenu}></MenuItem>
            <MenuItem content={text('test')} tag={`1-3`} onClick={clickMenu}></MenuItem>
            <MenuItem content={text('test')} tag={`1-4`} onClick={clickMenu}></MenuItem>
            <MenuItem content={text('test')} tag={`1-5`} onClick={clickMenu}></MenuItem>


        </>
    );

}