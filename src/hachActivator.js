
import {ContentFactory} from "./contentFactory";



export function RunListenerHash() {

        window.addEventListener("hashchange", (event) => {
             BuildContent(event.newURL)
        });



}

export function BuildContent(urlString, isStart) {
    let myUrl = new URL(urlString.replace(/#/g, "?"));
    const mode = myUrl.searchParams.get("mode");
    if (mode) {
        if (isStart) {

            setTimeout(() => {
                switch (mode) {
                    case "1": {
                        document.getElementById('drop1')?.click()
                        break
                    }
                    case "2": {
                        document.getElementById('drop2')?.click()
                        break
                    }
                    default:{
                        break
                    }
                }
            }, 200)

        }
    }
    const tag = myUrl.searchParams.get("page");
    if (tag) {
        if (isStart === true) {
            setTimeout(() => {
                const s = `[data-menu-tag='${tag}']`
                document.querySelector(s)?.click()
            }, 400)

        }
        ContentFactory(tag)
    }
}