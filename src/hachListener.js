import {ContentFactory} from "./contentFactory";
import {PainterMenu} from "./menuFactory/painterMenu";

let guarder = false;

export function RunListenerHash() {
    window.addEventListener("hashchange", (event) => {
        if(guarder===false){
            guarder=true;
            BuildContent(event.newURL)
            guarder=false;
        }

    });
}

 export function BuildContent(urlString) {

    let myUrl = new URL(urlString.replace(/#/g, "?"));

    const mode = myUrl.searchParams.get("mode");
    if (mode) {

    }
    const tag = myUrl.searchParams.get("page");

     const state = myUrl.searchParams.get("state");
    if (mode && tag) {
        PainterMenu(mode, tag,state)
        ContentFactory(tag);

    }


}