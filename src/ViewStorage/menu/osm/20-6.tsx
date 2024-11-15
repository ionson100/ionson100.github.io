import {BsrMap, ProxyMenuDialog} from 'bsr-osm'
import 'bsr-osm/dist/index.css'
import {Geometry, Point} from "ol/geom";
import {Feature} from "ol";
import './example/index.css'
import {CodeSnippetDotNet} from "../../codeSnippetJavaScript";

const code=`import {BsrMap, ProxyMenuDialog} from 'bsr-osm'
import 'bsr-osm/dist/index.css'
import {Geometry, Point} from "ol/geom";
import {Feature} from "ol";
import './example/index.css'

export default function App() {
    return (
        <div>
            <BsrMap
                features={[new Feature<Geometry>({geometry: new Point([352139.91, 5199448.67])})]}
                option={{
                    center: [352139.91, 5199448.67],
                    zoom: 14,
                    onShowContextMenu: (map: BsrMap, feature: Feature<Geometry> | undefined, e: MouseEvent) => {
                        if (map.IsCreate) return
                        if (feature) {
                            ProxyMenuDialog(e, menuFeature(map, feature))
                        } else {
                            ProxyMenuDialog(e, menuMap(map))
                        }
                    },
                    onClick: (map, feature, e) => {
                        if (!feature) return
                        map.EndEditFeature()
                        map.SelectFeature(feature)
                    },
                }}/>
        </div>
    )
}

function menuFeature(bsrMap: BsrMap, feature: Feature) {
    return <div id="nav">
        <ul>
            <li>
                <div onClick={() => {
                    bsrMap.DeleteFeature(feature)
                }}>Delete Feature
                </div>
            </li>
            <li style={{display: bsrMap.IsEdit ? "none" : "block"}}>
                <div onClick={() => {
                    bsrMap.StartEditFeature(feature)
                }}>Edit Feature
                </div>
            </li>
            <li>
                <div style={{display: !bsrMap.IsEdit ? "none" : "block"}} onClick={() => {
                    bsrMap.EndEditFeature()
                }}>End Edit
                </div>
            </li>
        </ul>
    </div>

}

function menuMap(bsrMap: BsrMap) {
    return (
        <div id="nav">
            <ul>
                <li>
                    <div onClick={() => {
                        bsrMap.DeleteAllFeatures()
                    }}>Delete all features
                    </div>
                </li>
                <li>
                    <div onClick={() => {
                        bsrMap.CreateFeature('Polygon').then(r => {
                            console.log(r.feature)
                        })
                    }}>Create Polygon
                    </div>
                </li>
            </ul>
        </div>
    )
}
`












export default function P20_6() {
    return (
        <div>
            <BsrMap
                features={[new Feature<Geometry>({geometry: new Point([352139.91, 5199448.67])})]}
                option={{
                    center: [352139.91, 5199448.67],
                    zoom: 14,
                    onShowContextMenu: (map: BsrMap, feature: Feature<Geometry> | undefined, e: MouseEvent) => {
                        if (map.IsCreate) return
                        if (feature) {
                            ProxyMenuDialog(e, menuFeature(map, feature))
                        } else {
                            ProxyMenuDialog(e, menuMap(map))
                        }
                    },
                    onClick: (map, feature, e) => {
                        if (!feature) return
                        map.EndEditFeature()
                        map.SelectFeature(feature)
                    },
                }}
                style={{width: "95%", height: 400}}/>

            <CodeSnippetDotNet code={code}/>
        </div>
    )
}

function menuFeature(bsrMap: BsrMap, feature: Feature) {
    return <div id="nav">
        <ul>
            <li>
                <div onClick={() => {
                    bsrMap.DeleteFeature(feature)
                }}>Delete Feature
                </div>
            </li>
            <li style={{display: bsrMap.IsEdit ? "none" : "block"}}>
                <div onClick={() => {
                    bsrMap.StartEditFeature(feature)
                }}>Edit Feature
                </div>
            </li>
            <li>
                <div style={{display: !bsrMap.IsEdit ? "none" : "block"}} onClick={() => {
                    bsrMap.EndEditFeature()
                }}>End Edit
                </div>
            </li>
        </ul>
    </div>

}

function menuMap(bsrMap: BsrMap) {
    return (
        <div id="nav">
            <ul>
                <li>
                    <div onClick={() => {
                        bsrMap.DeleteAllFeatures()
                    }}>Delete all features
                    </div>
                </li>
                <li>
                    <div onClick={() => {
                        bsrMap.CreateFeature('Polygon').then(r => {
                            console.log(r.feature)
                        })
                    }}>Create Polygon
                    </div>
                </li>
            </ul>
        </div>
    )
}