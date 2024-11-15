import {BsrMap} from "bsr-osm";
import {Feature} from "ol";
import {RewriteLocalStorage} from "./menuMap";


export function menuFeature(bsrMap: BsrMap, feature: Feature) {

    return <div id="nav">
        <ul>
            <li>
                <div onClick={() => {
                    bsrMap.DeleteFeature(feature)
                    RewriteLocalStorage(bsrMap)
                }}>Delete Feature
                </div>
            </li>
            <li style={{display:bsrMap.IsEdit?"none":"block"}} >
                <div onClick={() => {
                    bsrMap.StartEditFeature(feature)
                }}>Edit Feature
                </div>
            </li>
            <li >
                <div style={{display:!bsrMap.IsEdit?"none":"block"}} onClick={() => {
                    bsrMap.EndEditFeature()
                }}>End Edit
                </div>
            </li>
            <li>
                <div onClick={() => {
                    alert(bsrMap.GetCenterFeature(feature))
                }}>Center Feature
                </div>
            </li>
            <li>
                <div onClick={() => {
                    alert(bsrMap.GetCoordinateFeature(feature))
                }}>Coordinate Feature
                </div>
            </li>


        </ul>
    </div>
}