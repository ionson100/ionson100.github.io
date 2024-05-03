import {MrfMenu,MrfOrm} from "./index";

export function PainterMenu(mode, tag) {


    if (mode === 'bsrmenu') {
        const menu = document.querySelector(`[data-memu-poopup="bsrmenu"]`)
        if (menu.style.visibility === "hidden") {
            MrfMenu.Open()
        }
    }
    if (mode === 'bsrorm') {
        const menu = document.querySelector(`[data-memu-poopup="bsrorm"]`)
        if (menu.style.visibility === "hidden") {
            MrfOrm.Open();
        }
    }

    const list = document.querySelectorAll('[data-menu-tag]');
    for (let item of list) {
        item.classList.remove('selected-menu')
    }
    const s = `[data-menu-tag="${tag}"]`
    document.querySelector(s)?.classList.add('selected-menu')


}