import {MrfMenu, MrfOrm, MrfSau} from "./index";

export function PainterMenu(mode, tag,state) {


    if (mode === 'bsrmenu') {
        const menu = document.querySelector(`[data-memu-popup="bsrmenu"]`)
        if (menu.style.visibility === "hidden") {
            if(state!=='false'){
                MrfMenu.open()
            }

        }
    }
    if (mode === 'bsrorm') {
        const menu = document.querySelector(`[data-memu-popup="bsrorm"]`)
        if (menu.style.visibility === "hidden") {
            if(state!=='false'){
                MrfOrm.open();
            }

        }
    }
    if (mode === 'bsrsau') {
        const menu = document.querySelector(`[data-memu-popup="bsrsau"]`)
        if (menu.style.visibility === "hidden") {
            if(state!=='false'){
                MrfSau.open();
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