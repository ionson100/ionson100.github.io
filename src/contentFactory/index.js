import ReactDOM from "react-dom/client";
import React from "react";

import {PageBsrMenu, PageBsrOrm} from "../pages/page_bsr_menu";

const ContentHub = {
    content: undefined
}

export function ContentFactory(tag) {
    if(tag.length===0) return;
    if (!ContentHub.content) {

        ContentHub.content = ReactDOM.createRoot(document.getElementById('content'));
    }

    switch (tag.trim()){

        case 'bsrmenu':{
            ContentHub.content.render(
                <PageBsrMenu/>
            );
            break
        }
        case 'bsrorm':{

            ContentHub.content.render(
                <PageBsrOrm/>
            );
            break
        }
        default:{
            ContentHub.content.render(
                <div>{tag}</div>
            );
            break
        }
    }
 // ContentHub.content.render(
 //
 //     <div>{tag}</div>
 // );

}