import {myState} from "../state";

// export const ClickMenu = (tag, element) => {
//
//
//     switch (tag) {
//         case myState.dropOrmLabel.toString(): {
//             PaintClear()
//             break;
//         }
//         case myState.dropMenuLabel.toString(): {
//
//             PaintClear()
//             break
//         }
//         default: {
//
//             paint(tag, element)
//         }
//     }
//     factoryUrl(tag)
//
// }

// function factoryUrl(tag) {
//     tag = tag.trim();
//     let url = window.location.protocol + "//" + window.location.host + window.location.pathname
//     if (tag === myState.dropMenuLabel.toString() || tag === myState.dropOrmLabel) {
//         window.location.href = url+`#page=${tag}`;
//     } else {
//         if (tag.startsWith('1')) {
//             url = `${url}#mode=1&page=${tag}`
//         }
//         if (tag.startsWith('2')) {
//             url = `${url}#mode=2&page=${tag}`
//         }
//         if (url.includes('#')) {
//             window.location.href = url;
//         }
//
//     }
//
// }

const paint = (tag, element) => {

    PaintClear();
    element.classList.add('selected-menu')
    //document.querySelectorAll('[data-menu-tag="'+tag+'"]')[0]?.;

}
export const PaintClear = () => {
    const list = document.querySelectorAll('[data-menu-tag]');
    for (let item of list) {
        item.classList.remove('selected-menu')
    }
}