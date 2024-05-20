import ReactDOM from "react-dom/client";
import React from "react";


import {IndexBsrMenu} from "../ViewStorage/menu/bsrMenu";
import {P1_1} from "../ViewStorage/menu/1-1";
import {P1_2} from "../ViewStorage/menu/1-2";
import {P1_3} from "../ViewStorage/menu/1-3";
import {P1_4} from "../ViewStorage/menu/1-4";
import {P1_5} from "../ViewStorage/menu/1-5";
import {P1_6} from "../ViewStorage/menu/1-6";
import {P1_7} from "../ViewStorage/menu/1-7";
import {P1_8} from "../ViewStorage/menu/1-8";
import {P1_9} from "../ViewStorage/menu/1-9";
import {P1_10_} from "../ViewStorage/menu/1-10_";
import {P1_11} from "../ViewStorage/menu/1-11";
import {P1_13} from "../ViewStorage/menu/1-13";
import {P1_12} from "../ViewStorage/menu/1-12";
import {P1_14} from "../ViewStorage/menu/1-14";
import {P1_15} from "../ViewStorage/menu/1-15";
import {P1_16} from "../ViewStorage/menu/1-16";
import {P1_17} from "../ViewStorage/menu/1-17";



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
        case '1-2':{
            data=<P1_2/>
            break
        }
        case '1-3':{
            data=<P1_3/>
            break
        }
        case '1-4':{
            data=<P1_4/>
            break
        }
        case '1-5':{
            data=<P1_5/>
            break
        }
        case '1-6':{
            data=<P1_6/>
            break
        }
        case '1-7':{
            data=<P1_7/>
            break
        }
        case '1-8':{
           data=<P1_8/>
            break
        }
        case '1-9':{
            data=<P1_9/>
            break
        }
        case '1-10':{
            data=<P1_10_/>
            break
        }
        case '1-11':{
            data=<P1_11/>
            break
        }
        case '1-13':{
            data=<P1_13/>
            break
        }
        case '1-12':{
            data=<P1_12/>
            break
        }
        case '1-14':{
            data=<P1_14/>
            break
        }
        case '1-15':{
            data=<P1_15/>
            break
        }
        case '1-16':{
            data=<P1_16/>
            break
        }
        case '1-17':{
            data=<P1_17/>
            break
        }
    }



 ContentHub.content.render(

     <div>{data}</div>
 );

}