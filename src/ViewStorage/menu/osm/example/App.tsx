import {BsrMap, OptionOSM, ProxyMenuDialog, StyleSettings} from 'bsr-osm'
import 'bsr-osm/dist/index.css'
import {Feature} from 'ol';
import {Geometry} from 'ol/geom';
import {menuMap, RewriteLocalStorage} from "./menuMap";
import {menuFeature} from "./menuFeature";
import {myState} from "./state";

import {useEffect, useRef} from "react";
import {controlList} from "./controlList/proxyListControl";
import './index.css'

const styleSettings: StyleSettings = {
    widthCircle: 2,
    colorPolygon: "#52a309",
    fillPolygon: "#8fe56d",
    radiusPoint: 10,
    radiusPointSelect:10
}

export default function AppExample() {
    const refBsrMap = useRef<BsrMap>(null)
    useEffect(() => {
        const REF = refBsrMap.current!
        const content = document.getElementById("content")
        myState.bsrMap = refBsrMap.current!
        if (content) {
            content.style.paddingLeft = "0px"
        }


        setTimeout(() => {
            refBsrMap.current?.GetMap().addControl(controlList)
        })


        const key = refBsrMap.current?.AddEventStateCreatingFeature((state: boolean, f?: Feature) => {
            if (myState.visibleButtons) {
                myState.visibleButtons(state, myState.bsrMap!)
            }

        })
        refBsrMap.current?.GetVectorSource().clear()


        const json = localStorage.getItem('123-1')

        if (json) {
            try {
                refBsrMap.current?.AddFeature(json)
            } catch (e) {

            }
        }

        if (myState.actionListFeatures) {
            myState.actionListFeatures!(myState.bsrMap.GetFeatures(undefined))

        }


        return () => {
            content!.style.paddingLeft = "30px"
            REF!.RemoveEventStateCreatingFeature(key!)
        }

    })

    const option: OptionOSM = {
        style: styleSettings,
        useSynchronizationUrl: true,
        useDrawBox: true,
        onShowContextMenu: (map: BsrMap, feature: Feature<Geometry> | undefined, e: MouseEvent) => {
            setTimeout(() => {
                if (map.IsCreate) return
                if (feature) {
                    ProxyMenuDialog(e, menuFeature(map, feature))
                } else {
                    ProxyMenuDialog(e, menuMap(map))
                }
            })


        },

        onClick: (map, feature, e) => {


            console.log(feature)
            if (!feature||map.IsCreate) return

            map.EndEditFeature()
            map.SelectFeature(feature)
            const id=feature.get("row")

            myState.selectRowTable!(id)
        },
        onDrawEnd: (map: BsrMap, feature: Feature) => {
            console.log('onDrawEnd:', feature)
            RewriteLocalStorage(map)
        },
        onModifyEnd: (map: BsrMap, feature: Feature<Geometry>) => {
            console.log("onModifyEnd", feature)
            RewriteLocalStorage(map)
        },
        onDrawBoxEnd: (map: BsrMap, features: Feature<Geometry>[], extend: Array<number>) => {
            console.log('onDrawBoxEnd', features, extend)
            map.SelectFeatures(features)
        },
        onDragEnd: (map: BsrMap, feature: Feature) => {
            console.log('onDragEnd', feature)
            RewriteLocalStorage(map)
        }


    }


    return <BsrMap id={'12-bsr=map'} ref={refBsrMap} option={option} style={{width: "100%", height: "100%"}}/>
}
