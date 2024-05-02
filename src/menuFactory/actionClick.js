

export function ClickMenu(tag,element){
    const list = document.querySelectorAll('[data-menu-tag]');
    for (let item of list) {
        item.classList.remove('selected-menu')
    }
    element.classList.add('selected-menu')
}

