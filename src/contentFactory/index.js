import ReactDOM from "react-dom/client";
import React from "react";
import {myState} from "../state";
import {PageBsrMenu, PageBsrOrm} from "../pages/page_bsr_menu";

const ContentHub = {
    content: undefined
}

export function ContentFactory(tag) {
    if (!ContentHub.content) {

        ContentHub.content = ReactDOM.createRoot(document.getElementById('content'));
    }

    switch (tag.trim()){

        case myState.dropMenuLabel:{
            ContentHub.content.render(
                <PageBsrMenu/>
            );
            break
        }
        case myState.dropOrmLabel:{

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