import {ContentFactory} from "./contentFactory";

let lastUrl=undefined;
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

    if(lastUrl===myUrl.toString()) return
     lastUrl=myUrl.toString();


    const tag = myUrl.searchParams.get("page");



    if (tag) {
        //PainterMenu(mode, tag)
        ContentFactory(tag);

    }



}