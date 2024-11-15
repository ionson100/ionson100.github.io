import ReactDOM from "react-dom/client";
import React, {lazy, Suspense} from "react";
import {storage} from "../utils";
import Orm from "../ViewStorage/menu/orm";
import IndexBsrSidebar from "../ViewStorage/menu/sidebar";
import IndexTabs from "../ViewStorage/menu/tabs";
import IndexTable from "../ViewStorage/menu/table";
import IndexBsrTable from "../ViewStorage/menu/table-ex";
import P20_1 from "../ViewStorage/menu/osm/20-1";
import P20_2 from "../ViewStorage/menu/osm/20-2";
import P20_3 from "../ViewStorage/menu/osm/20-3";
import P20_4 from "../ViewStorage/menu/osm/20-4";
import AppExample from "../ViewStorage/menu/osm/example/App";
import P20_6 from "../ViewStorage/menu/osm/20-6";



const P19_1 = lazy(() => import("../ViewStorage/menu/table_extension/19-1"));
const P19_2 = lazy(() => import("../ViewStorage/menu/table_extension/19-2"));
const P19_3 = lazy(() => import("../ViewStorage/menu/table_extension/19-3"));
const P19_4 = lazy(() => import("../ViewStorage/menu/table_extension/19-4"));
const P19_5 = lazy(() => import("../ViewStorage/menu/table_extension/19-5"));
const P19_6 = lazy(() => import("../ViewStorage/menu/table_extension/19-6"));
const P19_7 = lazy(() => import("../ViewStorage/menu/table_extension/19-7"));
const P19_8 = lazy(() => import("../ViewStorage/menu/table_extension/19-8"));
const  P19_9= lazy(() => import("../ViewStorage/menu/table_extension/19-9"));
const P19_10 = lazy(() => import("../ViewStorage/menu/table_extension/19-10"));
const P19_11 = lazy(() => import("../ViewStorage/menu/table_extension/19-11"));



const P15_2 = lazy(() => import("../ViewStorage/menu/paginator/15-2"));
const P15_3 = lazy(() => import("../ViewStorage/menu/paginator/15-3"));
const P15_4 = lazy(() => import("../ViewStorage/menu/paginator/15-14"));
const P15_5 = lazy(() => import("../ViewStorage/menu/paginator/15-5"));
const P15_6 = lazy(() => import("../ViewStorage/menu/paginator/15-6"));
const P15_7 = lazy(() => import("../ViewStorage/menu/paginator/15-7"));
const P15_1 = lazy(() => import("../ViewStorage/menu/paginator/15-1"));
const P9_14 = lazy(() => import("../ViewStorage/menu/table/9-14"));
const P5_112 = lazy(() => import("../ViewStorage/menu/bsrtree/5-112"));
const P12_1 = lazy(() => import("../ViewStorage/menu/radiocheck/12-1"));
const P11_1 = lazy(() => import("../ViewStorage/menu/tooltip/11-1"));
const P11_2 = lazy(() => import("../ViewStorage/menu/tooltip/11-2"));
const P11_3 = lazy(() => import("../ViewStorage/menu/tooltip/11-3"));
const P11_4 = lazy(() => import("../ViewStorage/menu/tooltip/11-4"));
const P11_5 = lazy(() => import("../ViewStorage/menu/tooltip/11-5"));
const P11_6 = lazy(() => import("../ViewStorage/menu/tooltip/11-6"));
const P11_41 = lazy(() => import("../ViewStorage/menu/tooltip/11-41"));
const P10_1 = lazy(() => import("../ViewStorage/menu/contextMenu/10-1"));
const P10_2 = lazy(() => import("../ViewStorage/menu/contextMenu/10-2"));
const P10_3 = lazy(() => import("../ViewStorage/menu/contextMenu/10-3"));
const P10_4 = lazy(() => import("../ViewStorage/menu/contextMenu/10-4"));
const P9_19 = lazy(() => import("../ViewStorage/menu/table/9-10"));
const P9_11 = lazy(() => import("../ViewStorage/menu/table/9-11"));
const P9_12 = lazy(() => import("../ViewStorage/menu/table/9-12"));
const P9_1 = lazy(() => import("../ViewStorage/menu/table/9-1"));
const P9_2 = lazy(() => import("../ViewStorage/menu/table/9-2"));
const P9_3 = lazy(() => import("../ViewStorage/menu/table/9-3"));
const P9_4 = lazy(() => import("../ViewStorage/menu/table/9-4"));
const P9_5 = lazy(() => import("../ViewStorage/menu/table/9-5"));
const P8_1 = lazy(() => import("../ViewStorage/menu/tabs/8-1"));
const P8_2 = lazy(() => import("../ViewStorage/menu/tabs/8-2"));
const P8_4 = lazy(() => import("../ViewStorage/menu/tabs/8-4"));
const P8_5 = lazy(() => import("../ViewStorage/menu/tabs/8-5"));
const P8_6 = lazy(() => import("../ViewStorage/menu/tabs/8-6"));
const P8_8 = lazy(() => import("../ViewStorage/menu/tabs/8-8"));
const P8_10 = lazy(() => import("../ViewStorage/menu/tabs/8-10"));
const P8_14 = lazy(() => import("../ViewStorage/menu/tabs/8-14"));
const P8_20 = lazy(() => import("../ViewStorage/menu/tabs/8-20"));
const P7_1 = lazy(() => import("../ViewStorage/menu/sidebar/7-1"));
const P7_2 = lazy(() => import("../ViewStorage/menu/sidebar/7-2"));
const P6_14 = lazy(() => import("../ViewStorage/menu/orm/6-14"));
const P6_15 = lazy(() => import("../ViewStorage/menu/orm/6-15"));
const P6_16 = lazy(() => import("../ViewStorage/menu/orm/6-16"));
const MyMap = lazy(() => import("../ViewStorage/menu/orm/6-17-1"));
const P6_18 = lazy(() => import("../ViewStorage/menu/orm/6-18"));
const P6_19 = lazy(() => import("../ViewStorage/menu/orm/6-19"));
const P6_1 = lazy(() => import("../ViewStorage/menu/orm/6-1"));
const P6_2 = lazy(() => import("../ViewStorage/menu/orm/6-2"));
const P6_3 = lazy(() => import("../ViewStorage/menu/orm/6-3"));
const P6_4 = lazy(() => import("../ViewStorage/menu/orm/6-4"));
const P6_5 = lazy(() => import("../ViewStorage/menu/orm/6-5"));
const P6_6 = lazy(() => import("../ViewStorage/menu/orm/6-6"));
const P6_7 = lazy(() => import("../ViewStorage/menu/orm/6-7"));
const P6_8 = lazy(() => import("../ViewStorage/menu/orm/6-8"));
const P6_9 = lazy(() => import("../ViewStorage/menu/orm/6-9"));
const P6_10 = lazy(() => import("../ViewStorage/menu/orm/6-10"));
const P6_11 = lazy(() => import("../ViewStorage/menu/orm/6-11"));
const P6_12 = lazy(() => import("../ViewStorage/menu/orm/6-12"));
const P5_2 = lazy(() => import("../ViewStorage/menu/bsrtree/5-2"));
const P5_3 = lazy(() => import("../ViewStorage/menu/bsrtree/5-3"));
const P5_4 = lazy(() => import("../ViewStorage/menu/bsrtree/5-4"));
const P5_5 = lazy(() => import("../ViewStorage/menu/bsrtree/5-5"));
const P5_6 = lazy(() => import("../ViewStorage/menu/bsrtree/5-6"));
const P5_9 = lazy(() => import("../ViewStorage/menu/bsrtree/5-9"));
const P5_10 = lazy(() => import("../ViewStorage/menu/bsrtree/5-10"));
const P5_12 = lazy(() => import("../ViewStorage/menu/bsrtree/5-12"));
const P5_14 = lazy(() => import("../ViewStorage/menu/bsrtree/5-14"));
const P5_16 = lazy(() => import("../ViewStorage/menu/bsrtree/5-16"));
const P5_19 = lazy(() => import("../ViewStorage/menu/bsrtree/5-19"));
const P5_30 = lazy(() => import("../ViewStorage/menu/bsrtree/5-30"));
const P5_111 = lazy(() => import("../ViewStorage/menu/bsrtree/p5_111"));
const IndexBsrTree = lazy(() => import("../ViewStorage/menu/bsrtree"));
const IndexBsrMenu = lazy(() => import("../ViewStorage/menu/bsrMenu"));
const IndexBsrSau = lazy(() => import("../ViewStorage/menu/bsrSau"));
const IndexBsrDialog = lazy(() => import("../ViewStorage/menu/bsrdialog"));
const P1_1 = lazy(() => import("../ViewStorage/menu/menuCore/1-1"));
const P1_2 = lazy(() => import("../ViewStorage/menu/menuCore/1-2"));
const P1_3 = lazy(() => import("../ViewStorage/menu/menuCore/1-3"));
const P1_4 = lazy(() => import("../ViewStorage/menu/menuCore/1-4"));
const P1_5 = lazy(() => import("../ViewStorage/menu/menuCore/1-5"));
const P1_6 = lazy(() => import("../ViewStorage/menu/menuCore/1-6"));
const P1_7 = lazy(() => import("../ViewStorage/menu/menuCore/1-7"));
const P1_8 = lazy(() => import("../ViewStorage/menu/menuCore/1-8"));
const P1_9 = lazy(() => import("../ViewStorage/menu/menuCore/1-9"));
const P1_10_ = lazy(() => import("../ViewStorage/menu/menuCore/1-10_"));
const P1_11 = lazy(() => import( "../ViewStorage/menu/menuCore/1-11"));
const P1_13 = lazy(() => import("../ViewStorage/menu/menuCore/1-13"));
const P1_12 = lazy(() => import("../ViewStorage/menu/menuCore/1-12"));
const P1_14 = lazy(() => import("../ViewStorage/menu/menuCore/1-14"));
const P1_15 = lazy(() => import("../ViewStorage/menu/menuCore/1-15"));
const P1_16 = lazy(() => import("../ViewStorage/menu/menuCore/1-16"));
const P1_17 = lazy(() => import("../ViewStorage/menu/menuCore/1-17"));
const P3_1 = lazy(() => import('../ViewStorage/menu/sau/3-1'));
const P3_2 = lazy(() => import("../ViewStorage/menu/sau/3-2"));
const P3_3 = lazy(() => import("../ViewStorage/menu/sau/3-3"));
const P3_4 = lazy(() => import("../ViewStorage/menu/sau/3-4"));
const P3_5 = lazy(() => import("../ViewStorage/menu/sau/3-5"));
const P3_6 = lazy(() => import("../ViewStorage/menu/sau/3-6"));
const P3_7 = lazy(() => import("../ViewStorage/menu/sau/3-7"));
const P3_8 = lazy(() => import("../ViewStorage/menu/sau/3-8"));
const P3_9 = lazy(() => import("../ViewStorage/menu/sau/3-9"));
const P3_10 = lazy(() => import("../ViewStorage/menu/sau/3-10"));
const P4_1 = lazy(() => import("../ViewStorage/menu/dialog/4-1"));
const P4_2 = lazy(() => import("../ViewStorage/menu/dialog/4-2"));
const P4_3 = lazy(() => import("../ViewStorage/menu/dialog/4-3"));
const P4_4 = lazy(() => import("../ViewStorage/menu/dialog/4-4"));
const P4_5 = lazy(() => import("../ViewStorage/menu/dialog/4-5"));
const P4_6 = lazy(() => import("../ViewStorage/menu/dialog/4-6"));
const P4_7 = lazy(() => import("../ViewStorage/menu/dialog/4-7"));
const P4_8 = lazy(() => import('../ViewStorage/menu/dialog/4-8'));
const P4_9 = lazy(() => import('../ViewStorage/menu/dialog/4-9'));
const P4_10 = lazy(() => import('../ViewStorage/menu/dialog/4-10'));
const P4_11 = lazy(() => import('../ViewStorage/menu/dialog/4-11'));
const P4_12 = lazy(() => import('../ViewStorage/menu/dialog/4-12'));
const P4_14 = lazy(() => import('../ViewStorage/menu/dialog/4-14'));
const P4_15 = lazy(() => import('../ViewStorage/menu/dialog/4-15'));
const P4_16 = lazy(() => import('../ViewStorage/menu/dialog/4-16'));
const P5_1 = lazy(() => import('../ViewStorage/menu/bsrtree/5-1'));


const ContentHub = {
    content: undefined
}

export function ContentFactory(tag) {


    if (tag.length === 0) return;
    if (!ContentHub.content) {

        ContentHub.content = ReactDOM.createRoot(document.getElementById('content'));
    }

    let data = tag;

    setTimeout(() => {
        if (storage.menu && storage.isManualClick === false) {
            const menu = storage.menu();
            menu.OpenMenuItemOnly(tag.trim())
        }
        if (storage.isManualClick === true) {
            storage.isManualClick = false;
        }
    }, 100)

    ContentHub.content.render(
        <div id={'sc-123'}>null</div>
    );
    switch (tag.trim()) {


        case 'bsrmenu': {
            data = <IndexBsrMenu/>
            break;
        }
        case 'bsrdialog': {
            data = <IndexBsrDialog/>
            break
        }
        case '1-1': {
            data = <P1_1/>
            break
        }
        case '1-2': {
            data = <P1_2/>
            break
        }
        case '1-3': {
            data = <P1_3/>
            break
        }
        case '1-4': {
            data = <P1_4/>
            break
        }
        case '1-5': {
            data = <P1_5/>
            break
        }
        case '1-6': {
            data = <P1_6/>
            break
        }
        case '1-7': {
            data = <P1_7/>
            break
        }
        case '1-8': {
            data = <P1_8/>
            break
        }
        case '1-9': {
            data = <P1_9/>
            break
        }
        case '1-10': {
            data = <P1_10_/>
            break
        }
        case '1-11': {
            data = <P1_11/>
            break
        }
        case '1-13': {
            data = <P1_13/>
            break
        }
        case '1-12': {
            data = <P1_12/>
            break
        }
        case '1-14': {
            data = <P1_14/>
            break
        }
        case '1-15': {
            data = <P1_15/>
            break
        }
        case '1-16': {
            data = <P1_16/>
            break
        }
        case '1-17': {
            data = <P1_17/>
            break
        }
        case "bsrsau": {
            data = <IndexBsrSau/>
            break
        }
        case '3-1': {
            data = <P3_1/>
            break;
        }
        case '3-2': {
            data = <P3_2/>
            break
        }
        case '3-3': {
            data = <P3_3/>
            break
        }
        case '3-4': {
            data = <P3_4/>
            break
        }
        case '3-5': {
            data = <P3_5/>
            break
        }
        case '3-6': {
            data = <P3_6/>
            break
        }
        case '3-7': {
            data = <P3_7/>
            break
        }
        case '3-8': {
            data = <P3_8/>
            break
        }
        case '3-9': {
            data = <P3_9/>
            break
        }
        case '3-10': {
            data = <P3_10/>
            break
        }
        case '4-1': {
            data = <P4_1/>
            break
        }
        case '4-2': {
            data = <P4_2/>
            break
        }
        case '4-3': {
            data = <P4_3/>
            break
        }
        case '4-4': {
            data = <P4_4/>
            break
        }
        case '4-5': {
            data = <P4_5/>
            break
        }
        case '4-6': {
            data = <P4_6/>
            break
        }
        case '4-7': {
            data = <P4_7/>
            break
        }
        case '4-8': {
            data = <P4_8/>
            break
        }
        case '4-9': {
            data = <P4_9/>
            break
        }
        case '4-10': {
            data = <P4_10/>
            break
        }
        case '4-11': {
            data = <P4_11/>
            break
        }
        case '4-12': {
            data = <P4_12/>
            break
        }
        case '4-14': {
            data = <P4_14/>
            break
        }
        case '4-15': {
            data = <P4_15/>
            break
        }
        case '4-16':{
            data=<P4_16/>
            break
        }
        case 'bsrtree': {
            data = <IndexBsrTree/>
            break
        }
        case '5-300': {
            data = <IndexBsrTree/>
            break
        }
        case '5-1': {
            data = <P5_1/>
            break
        }
        case '5-2': {
            data = <P5_2/>
            break
        }
        case '5-3': {
            data = <P5_3/>
            break
        }
        case '5-4': {
            data = <P5_4/>
            break
        }
        case '5-5': {
            data = <P5_5/>
            break
        }
        case '5-6': {
            data = <P5_6/>
            break
        }
        case '5-7': {
            data = <P5_6/>
            break
        }
        case '5-8': {
            data = <P5_6/>
            break
        }
        case '5-9': {
            data = <P5_9/>
            break
        }
        case '5-10': {
            data = <P5_10/>
            break
        }
        case '5-11': {
            data = <P5_10/>
            break
        }
        case "5-12": {
            data = <P5_12/>
            break
        }
        case "5-13": {
            data = <P5_12/>
            break
        }
        case '5-14': {
            data = <P5_14/>
            break
        }
        case '5-15': {
            data = <P5_14/>
            break
        }
        case '5-16': {
            data = <P5_16/>
            break
        }
        case '5-17': {
            data = <P5_16/>
            break
        }
        case '5-18': {

            data = <P5_16/>
            break
        }
        case '5-19': {
            data = <P5_19/>
            break
        }
        case '5-22': {
            data = <P5_19/>
            break
        }
        case '5-20': {
            data = <P5_19/>
            break
        }
        case '5-21': {
            data = <P5_19/>
            break
        }
        case '5-30': {
            data = <P5_30/>
            break
        }
        case '5-31': {
            data = <P5_30/>
            break
        }
        case '5-32': {
            data = <P5_30/>
            break
        }
        case '5-33': {
            data = <P5_30/>
            break
        }
        case '5-34': {
            data = <P5_30/>
            break
        }
        case '5-35': {
            data = <P5_30/>
            break
        }
        case '5-36': {
            data = <P5_30/>
            break
        }
        case '5-37': {
            data = <P5_30/>
            break
        }
        case '5-38': {
            data = <P5_30/>
            break
        }
        case '5-39': {
            data = <P5_30/>
            break
        }
        case '5-40': {
            data = <P5_30/>
            break
        }
        case '5-41': {
            data = <P5_30/>
            break
        }
        case '5-42': {
            data = <P5_30/>
            break
        }
        case '5-111': {
            data = <P5_111/>
            break
        }
        case 'orm': {
            data = <Orm/>
            break
        }
        case '6-1': {
            data = <P6_1/>
            break
        }
        case '6-2': {
            data = <P6_2/>
            break
        }
        case '6-3': {
            data = <P6_3/>
            break
        }
        case '6-4': {
            data = <P6_4/>
            break
        }
        case '6-5': {
            data = <P6_5/>
            break
        }
        case '6-6': {
            data = <P6_6/>
            break
        }
        case '6-7': {
            data = <P6_7/>
            break
        }
        case '6-8': {
            data = <P6_8/>
            break
        }
        case '6-9': {
            data = <P6_9/>
            break
        }
        case '6-10': {
            data = <P6_10/>
            break
        }
        case '6-11': {
            data = <P6_11/>
            break
        }
        case '6-12': {
            data = <P6_12/>
            break
        }
        case '6-14': {
            data = <P6_14/>
            break
        }
        case '6-15': {
            data = <P6_15/>
            break
        }
        case '6-16': {
            data = <P6_16/>
            break
        }
        case '6-17': {
            data = <MyMap/>
            break
        }
        case '6-18': {
            data = <P6_18/>
            break
        }
        case '6-19': {
            data = <P6_19/>
            break
        }
        case 'sidebar': {
            data = <IndexBsrSidebar/>
            break
        }
        case '7-1': {
            data = <P7_1/>
            break
        }
        case '7-2': {
            data = <P7_2/>
            break
        }
        case 'tabs': {
            data = <IndexTabs/>
            break
        }
        case '8-1': {
            data = <P8_1/>
            break
        }
        case '8-2': {
            data = <P8_2/>
            break
        }
        case '8-3': {
            data = <P8_2/>
            break
        }
        case '8-31': {
            data = <P8_2/>
            break
        }
        case '8-4': {
            data = <P8_4/>
            break
        }
        case '8-5': {
            data = <P8_5/>
            break
        }
        case '8-6': {
            data = <P8_6/>
            break
        }
        case '8-8': {
            data = <P8_8/>
            break
        }
        case '8-7': {
            data = <P8_8/>
            break
        }
        case '8-9': {
            data = <P8_8/>
            break
        }
        case '8-12': {
            data = <P8_8/>
            break
        }
        case '8-10': {
            data = <P8_10/>
            break
        }
        case '8-11': {
            data = <P8_10/>
            break
        }
        case '8-13': {
            data = <P8_10/>
            break
        }
        case '8-14': {
            data = <P8_14/>
            break
        }
        case '8-15': {
            data = <P8_14/>
            break
        }
        case '8-16': {
            data = <P8_14/>
            break
        }
        case '8-20': {
            data = <P8_20/>
            break
        }
        case 'table': {
            data = <IndexTable/>
            break
        }
        case '9-1': {
            data = <P9_1/>
            break
        }
        case '9-2': {
            data = <P9_2/>
            break
        }
        case '9-22': {
            data = <P9_2/>
            break
        }
        case '9-3': {
            data = <P9_3/>
            break
        }
        case '9-4': {
            data = <P9_4/>
            break
        }
        case '9-5': {
            data = <P9_5/>
            break
        }
        case '9-10': {
            data = <P9_19/>
            break
        }
        case '9-11': {
            data = <P9_11/>
            break
        }
        case '9-12': {
            data = <P9_12/>
            break
        }

        case '10-1': {
            data = <P10_1/>
            break
        }
        case '10-2': {
            data = <P10_2/>
            break
        }
        case '10-3': {
            data = <P10_3/>
            break
        }
        case '10-4': {
            data = <P10_4/>
            break
        }
        case '11-1': {
            data = <P11_1/>
            break
        }
        case '11-2': {
            data = <P11_2/>
            break
        }
        case '11-3': {
            data = <P11_3/>
            break
        }

        case '11-4': {
            data = <P11_4/>
            break
        }
        case '11-5': {
            data = <P11_5/>
            break
        }
        case '11-6': {
            data = <P11_6/>
            break
        }
        case '11-41': {
            data = <P11_41/>
            break
        }
        case '12-1': {
            data = <P12_1/>
            break
        }
        case '5-112': {
            data = <P5_112/>
            break
        }
        case '9-14':{
            data=<P9_14/>
            break
        }
        case '15-2':{
            data=<P15_2/>
            break
        }
        case '15-3':{
            data=<P15_3/>
            break
        }
        case '15-4':{
            data=<P15_4/>
            break
        }
        case '15-5':{
            data=<P15_5/>
            break

        }
        case '15-6':{
            data=<P15_6/>
            break
        }
        case '15-7':{
            data=<P15_7/>
            break
        }
        case '15-1':{
            data=<P15_1/>
            break
        }
        case 'table-ex':{
            data=<IndexBsrTable/>
            break
        }
        case '19-1':{
            data=<P19_1/>
            break
        }
        case '19-2':{
            data=<P19_2/>
            break
        }
        case '19-3':{
            data=<P19_3/>
            break
        }

        case '19-4':{
            data=<P19_4/>
            break
        }
        case '19-5':{
            data=<P19_5/>
            break
        }
        case '19-6':{
            data=<P19_6/>
            break
        }
        case '19-7':{
            data=<P19_7/>
            break
        }
        case '19-8':{
            data=<P19_8/>
            break
        }
        case '19-9':{
            data=<P19_9/>
            break
        }
        case '19-10':{
            data=<P19_10/>
            break
        }
        case '19-11':{
            data=<P19_11/>
            break
        }
        case '20-1':{
            data=<P20_1/>
            break
        }
        case '20-2':{
            data=<P20_2/>
            break
        }
        case '20-3':{
            data=<P20_3/>
            break
        }
        case '20-4':{
            data=<P20_4/>
            break
        }
        case '20-5':{
            data=<AppExample/>
            break
        }
        case '20-6':{
            data=<P20_6/>
            break
        }

    }


    ContentHub.content.render(
        <Suspense fallback={<div>loading page</div>}>
            <div id={'sc-123'}>{data}</div>
        </Suspense>
    );
    setTimeout(() => {
        document.getElementById('sc-123')?.scrollIntoView({behavior: "smooth"});
    }, 100)


}
