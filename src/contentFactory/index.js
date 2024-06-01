import ReactDOM from "react-dom/client";
import React, {lazy, Suspense } from "react";



const IndexBsrMenu = lazy(() => import("../ViewStorage/menu/bsrMenu"));
const IndexBsrSau = lazy(() => import("../ViewStorage/menu/bsrSau"));
const IndexBsrDialog = lazy(() => import("../ViewStorage/menu/bsrdialog"));

const P1_1 = lazy(() => import("../ViewStorage/menu/1-1"));
const P1_2 = lazy(() => import("../ViewStorage/menu/1-2"));
const P1_3 = lazy(() => import("../ViewStorage/menu/1-3"));
const P1_4 = lazy(() => import("../ViewStorage/menu/1-4"));
const P1_5 = lazy(() => import("../ViewStorage/menu/1-5"));
const P1_6 = lazy(() => import("../ViewStorage/menu/1-6"));
const P1_7 = lazy(() => import("../ViewStorage/menu/1-7"));
const P1_8 = lazy(() => import("../ViewStorage/menu/1-8"));
const P1_9 = lazy(() => import("../ViewStorage/menu/1-9"));
const P1_10_ = lazy(() => import("../ViewStorage/menu/1-10_"));
const P1_11 = lazy(() => import( "../ViewStorage/menu/1-11"));
const P1_13 = lazy(() => import("../ViewStorage/menu/1-13"));
const P1_12 = lazy(() => import("../ViewStorage/menu/1-12"));
const P1_14 = lazy(() => import("../ViewStorage/menu/1-14"));
const P1_15 = lazy(() => import("../ViewStorage/menu/1-15"));
const P1_16 = lazy(() => import("../ViewStorage/menu/1-16"));
const P1_17 = lazy(() => import("../ViewStorage/menu/1-17"));




const P3_1 = lazy(() => import('../ViewStorage/menu/3-1'));
const P3_2 = lazy(() => import("../ViewStorage/menu/3-2"));
const P3_3 = lazy(() => import("../ViewStorage/menu/3-3"));


const P3_4 = lazy(() => import("../ViewStorage/menu/3-4"));
const P3_5 = lazy(() => import("../ViewStorage/menu/3-5"));
const P3_6 = lazy(() => import("../ViewStorage/menu/3-6"));
const P3_7 = lazy(() => import("../ViewStorage/menu/3-7"));
const P3_8 = lazy(() => import("../ViewStorage/menu/3-8"));
const P3_9 = lazy(() => import("../ViewStorage/menu/3-9"));
const P3_10 = lazy(() => import("../ViewStorage/menu/3-10"));
const P4_1 = lazy(() => import("../ViewStorage/menu/4-1"));


const P4_2 = lazy(() => import("../ViewStorage/menu/4-2"));
const P4_3 = lazy(() => import("../ViewStorage/menu/4-3"));


const P4_4 = lazy(() => import("../ViewStorage/menu/4-4"));
const P4_5 = lazy(() => import("../ViewStorage/menu/4-5"));
const P4_6 = lazy(() => import("../ViewStorage/menu/4-6"));
const P4_7 = lazy(() => import("../ViewStorage/menu/4-7"));



const P4_8 = lazy(() => import('../ViewStorage/menu/4-8'));
const P4_9 = lazy(() => import('../ViewStorage/menu/4-9'));
const P4_10 = lazy(() => import('../ViewStorage/menu/4-10'));
const P4_11 = lazy(() => import('../ViewStorage/menu/4-11'));
const P4_12 = lazy(() => import('../ViewStorage/menu/4-12'));
const P4_14 = lazy(() => import('../ViewStorage/menu/4-14'));




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
        case 'bsrdialog':{
            data=<IndexBsrDialog/>
            break
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
        case "bsrsau":{
            data=<IndexBsrSau/>
            break
        }
        case '3-1':{
            data=<P3_1/>
            break;
        }
        case '3-2':{
            data=<P3_2/>
            break
        }
        case '3-3':{
            data=<P3_3/>
            break
        }
        case '3-4':{
            data=<P3_4/>
            break
        }
        case '3-5':{
            data=<P3_5/>
            break
        }
        case '3-6':{
            data=<P3_6/>
            break
        }
        case '3-7':{
            data=<P3_7/>
            break
        }
        case '3-8':{
            data=<P3_8/>
            break
        }
        case '3-9':{
            data=<P3_9/>
            break
        }
        case '3-10':{
            data=<P3_10/>
            break
        }
        case '4-1':{
            data=<P4_1/>
            break
        }
        case '4-2':{
            data=<P4_2/>
            break
        }
        case '4-3':{
            data=<P4_3/>
            break
        }
        case '4-4':{
            data=<P4_4/>
            break
        }
        case '4-5':{
            data=<P4_5/>
            break
        }
        case '4-6':{
            data=<P4_6/>
            break
        }
        case '4-7':{
            data=<P4_7/>
            break
        }
        case '4-8':{
            data=<P4_8/>
            break
        }
        case '4-9':{
            data=<P4_9/>
            break
        }
        case '4-10':{
            data=<P4_10/>
            break
        }
        case '4-11':{
            data=<P4_11/>
            break
        }
        case '4-12':{
            data=<P4_12/>
            break
        }
        case '4-14':{
            data=<P4_14/>
            break
        }
    }



 ContentHub.content.render(
     <Suspense  fallback={<div>load page</div>}>
         <div id={'sc-123'}>{data}</div>
     </Suspense>
 );
    setTimeout(() => {
        document.getElementById('sc-123')?.scrollIntoView({ behavior: "smooth" });
    },100)


}