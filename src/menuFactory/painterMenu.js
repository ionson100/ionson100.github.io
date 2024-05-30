import {HtmlDialog, HtmlMenu, HtmlOrm, HtmlSau} from "./index";

export function PainterMenu(mode, tag,state) {


    if (mode === 'bsrmenu') {
       const as=document.querySelectorAll(`[data-memu-popup]`)
        console.log(as)
        const menu = document.querySelector(`[data-memu-popup="bsrmenu"]`)
        if (menu.style.visibility === "hidden") {
            if(state!=='false'){
                HtmlMenu.open()
            }

        }
    }
    if (mode === 'bsrorm') {
        const menu = document.querySelector(`[data-memu-popup="bsrorm"]`)
        if (menu.style.visibility === "hidden") {
            if(state!=='false'){
                HtmlOrm.open();
            }

        }
    }
    if (mode === 'bsrsau') {
        const menu = document.querySelector(`[data-memu-popup="bsrsau"]`)
        if (menu.style.visibility === "hidden") {
            if(state!=='false'){
                HtmlSau.open();
            }

        }
    }

    if (mode === 'bsrdialog') {
        const menu = document.querySelector(`[data-memu-popup="bsrdialog"]`)
        if (menu.style.visibility === "hidden") {
            if(state!=='false'){
                HtmlDialog.open();
            }

        }
    }

    const list = document.querySelectorAll('[data-menu-tag]');
    for (let item of list) {
        item.classList.remove('selected-menu')
    }
    const s = `[data-menu-tag="${tag}"]`
    document.querySelector(s)?.classList.add('selected-menu')


}