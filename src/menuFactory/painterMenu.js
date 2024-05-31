import {HtmlDialog, HtmlMenu, HtmlOrm, HtmlSau} from "./index";

export function PainterMenu(mode, tag, state) {


    HtmlMenu.menu.style.display="none";
    HtmlOrm.menu.style.display="none";
    HtmlSau.menu.style.display="none";
    HtmlDialog.menu.style.display="none";

    switch (mode) {
        case 'bsrmenu': {
            HtmlMenu.menu.style.display="block";
            const menu = document.querySelector(`[data-memu-popup="bsrmenu"]`)

            if (menu.style.visibility === "hidden") {
                if (state !== 'false') {
                    HtmlMenu.open()
                }
            }
            break
        }
        case 'bsrorm': {
            HtmlOrm.menu.style.display="block";
            const menu = document.querySelector(`[data-memu-popup="bsrorm"]`)
            if (menu.style.visibility === "hidden") {
                if (state !== 'false') {
                    HtmlOrm.open();
                }
            }
            break
        }
        case 'bsrsau': {
            HtmlSau.menu.style.display="block";
            const menu = document.querySelector(`[data-memu-popup="bsrsau"]`)
            if (menu.style.visibility === "hidden") {
                if (state !== 'false') {
                    HtmlSau.open();
                }
            }
            break
        }
        case 'bsrdialog': {
            HtmlDialog.menu.style.display="block";
            const menu = document.querySelector(`[data-memu-popup="bsrdialog"]`)
            if (menu.style.visibility === "hidden") {
                if (state !== 'false') {
                    HtmlDialog.open();
                }
            }
            break
        }
        default:{
            HtmlMenu.menu.style.display="block";
            HtmlOrm.menu.style.display="block";
            HtmlSau.menu.style.display="block";
            HtmlDialog.menu.style.display="block";
            break
        }
    }


    const list = document.querySelectorAll('[data-menu-tag]');
    for (let item of list) {
        item.classList.remove('selected-menu')
    }
    const s = `[data-menu-tag="${tag}"]`
    document.querySelector(s)?.classList.add('selected-menu')


}