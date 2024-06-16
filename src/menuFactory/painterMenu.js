import {HtmlDialog, HtmlMenu, HtmlOrm, HtmlSau, HtmlTree} from "./index";

export function PainterMenu(mode, tag, state) {


    HtmlMenu.setShow(false)
    HtmlOrm.setShow(false)
    HtmlSau.setShow(false)
    HtmlDialog.setShow(false)
    HtmlTree.setShow(false)


    switch (mode) {
        case 'bsrmenu': {
            HtmlMenu.setShow(true)
            const menu = document.querySelector(`[data-memu-popup="bsrmenu"]`)

            if (menu.style.visibility === "hidden") {
                if (state !== 'false') {
                    HtmlMenu.open()
                }
            }
            break
        }
        case 'bsrorm': {
            HtmlOrm.setShow(true)
            const menu = document.querySelector(`[data-memu-popup="bsrorm"]`)
            if (menu.style.visibility === "hidden") {
                if (state !== 'false') {
                    HtmlOrm.open();
                }
            }
            break
        }
        case 'bsrsau': {
            HtmlSau.setShow(true)
            const menu = document.querySelector(`[data-memu-popup="bsrsau"]`)
            if (menu.style.visibility === "hidden") {
                if (state !== 'false') {
                    HtmlSau.open();
                }
            }
            break
        }
        case 'bsrdialog': {
            HtmlDialog.setShow(true)
            const menu = document.querySelector(`[data-memu-popup="bsrdialog"]`)
            if (menu.style.visibility === "hidden") {
                if (state !== 'false') {
                    HtmlDialog.open();
                }
            }
            break
        }

        case 'bsrtree': {
            HtmlTree.setShow(true)
            const menu = document.querySelector(`[data-memu-popup="bsrtree"]`)
            if (menu.style.visibility === "hidden") {
                if (state !== 'false') {
                    HtmlTree.open();
                }
            }
            break
        }
        default:{
            HtmlMenu.setShow(true)
            HtmlOrm.setShow(true)
            HtmlSau.setShow(true)
            HtmlDialog.setShow(true)
            HtmlTree.setShow(true)
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
