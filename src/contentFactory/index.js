import ReactDOM from "react-dom/client";
import React from "react";


import {IndexBsrMenu} from "../ViewStorage/menu/bsrMenu";
import {P1_1} from "../ViewStorage/menu/1-1";


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
        case '1-1':{
            data=<P1_1/>
            break
        }
    }



 ContentHub.content.render(

     <div>{data}</div>
 );

}