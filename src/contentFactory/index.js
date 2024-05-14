import ReactDOM from "react-dom/client";
import React from "react";


import {IndexBsrMenu} from "../htmlStorage/bsrMenu";


const ContentHub = {
    content: undefined
}

export function ContentFactory(tag) {
    if(tag.length===0) return;
    if (!ContentHub.content) {

        ContentHub.content = ReactDOM.createRoot(document.getElementById('content'));
    }

    let data=tag;
    switch (tag.trim()){

        case 'bsrmenu':{
          data=  <IndexBsrMenu/>
            break;
        }
    }



 ContentHub.content.render(

     <div>{data}</div>
 );

}