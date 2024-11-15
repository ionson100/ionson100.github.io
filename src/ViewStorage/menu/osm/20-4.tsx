//360696.26/5197153.08
import {BsrMap} from 'bsr-osm'
import 'bsr-osm/dist/index.css'
import {Feature} from "ol";
import {Polygon,Point} from "ol/geom";
import {CodeSnippetDotNet} from "../../codeSnippetJavaScript";
import {useEffect, useRef} from "react";


const code = `import {BsrMap} from 'bsr-osm'
import 'bsr-osm/dist/index.css'
import {Feature} from "ol";
import {Polygon,Point} from "ol/geom";
import {useEffect, useRef} from "react";

export default function P20_4() {

    const refMap=useRef<BsrMap>(null)
    useEffect(()=>{
        const featurePoint= new Feature({
            geometry:new Point([350154.5638573601,5199749.787958095])
        })
        refMap.current!.AddFeatures([featurePoint])
    })
    const geoJsonLineString='{"type":"LineString","coordinates":[[348100.2921903724,5200309.119352572],' +
        '[347785.0326771218,5199688.769987788],[349096.919038713,5200441.324954902],' +
        '[348334.1944098809,5200766.754129871],[350337.61776827974,5200939.638379073]]}'
    const featurePolygon=new Feature({

        geometry:new Polygon([[
            [348659.62358484924,5199759.957619812],
            [349757.9470503674,5199800.636266683],
            [349422.3482136813,5198976.893667544],
            [349137.597685584,5198895.536373802],
            [348191.81914583227,5198631.12516914],
            [347947.747264606,5199251.474533924],
            [348659.62358484924,5199759.957619812]]])
    })
    return (
         <BsrMap
                ref={refMap}
                features={[featurePolygon]}
                featuresAsJson={geoJsonLineString}
                option={{
                    center: [352139.91,5199448.67],
                    zoom: 14,
                }}/>
    )
}`



export default function P20_4() {

    const refMap=useRef<BsrMap>(null)
    useEffect(()=>{
        const featurePoint= new Feature({
            geometry:new Point([350154.5638573601,5199749.787958095])
        })
        refMap.current!.AddFeatures([featurePoint])
    })
    const geoJsonLineString='{"type":"LineString","coordinates":[[348100.2921903724,5200309.119352572],' +
        '[347785.0326771218,5199688.769987788],[349096.919038713,5200441.324954902],' +
        '[348334.1944098809,5200766.754129871],[350337.61776827974,5200939.638379073]]}'
    const featurePolygon=new Feature({

        geometry:new Polygon([[
            [348659.62358484924,5199759.957619812],
            [349757.9470503674,5199800.636266683],
            [349422.3482136813,5198976.893667544],
            [349137.597685584,5198895.536373802],
            [348191.81914583227,5198631.12516914],
            [347947.747264606,5199251.474533924],
            [348659.62358484924,5199759.957619812]]])
    })
    return (
        <>
            <BsrMap
                ref={refMap}
                features={[featurePolygon]}
                featuresAsJson={geoJsonLineString}
                option={{
                    center: [352139.91,5199448.67],
                    zoom: 14,
                }}
                style={{width: "95%", height: 400}}/>
            <CodeSnippetDotNet code={code}/>
        </>
    )
}