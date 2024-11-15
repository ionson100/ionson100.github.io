import {BsrMap} from 'bsr-osm'
import {myState} from "./state";
import {DialogColorSettingsF} from "./dialog/DialogColorSettings";

 export function RewriteLocalStorage(bstMap:BsrMap){
     setTimeout(()=>{
         const f= bstMap.GetFeatures(undefined)
         const json=bstMap.FeaturesToJson(f)
         localStorage.setItem("123-1",json)
         if(myState.actionListFeatures){
             myState.actionListFeatures(f)
         }
     })

}

export function menuMap(bsrMap:BsrMap) {
    return <div id="nav">
        <ul>
            <li>
                <div onClick={() => {
                    bsrMap.DeleteAllFeatures(()=>{
                        RewriteLocalStorage(bsrMap)
                    })

                }}>Delete all features
                </div>
            </li>
            <li>
                <div onClick={() => {
                    bsrMap.CreateFeature('Point').then(r=>{if(r)r.feature?.set('index',new Date().getTime())})
                }}>Create Point
                </div>
            </li>
            <li>
                <div onClick={() => {
                    bsrMap.CreateFeature('Polygon').then(r=>{if(r)r.feature?.set('index',new Date().getTime())})
                }}>Create Polygon
                </div>
            </li>
            <li>
                <div onClick={() => {
                    bsrMap.CreateFeature('LineString').then(r=>{if(r)r.feature?.set('index',new Date().getTime())})
                }}>Create Linestring
                </div>
            </li>
            <li>
                <div onClick={() => {

                    bsrMap.CreateFeature('Circle').then(r=>{if(r)r.feature?.set('index',new Date().getTime())})
                }}>Create Circle
                </div>
            </li>


            <li>
                <div onClick={() => {
                    bsrMap.GoTo([0, 0])
                }}>Goto 0
                </div>
            </li>
            <li>
                <div onClick={() => {
                    bsrMap.GoTo([351321.43,5191492.33], 12.7)
                }}>Goto home
                </div>
            </li>
            <li>
                <div onClick={() => {
                   console.log('bound',bsrMap.GetBound(true))
                }}>GetBound as json
                </div>
            </li>

            <li>
                <div onClick={() => {
                    console.log('bound',bsrMap.GetBound())
                }}>GetBound as object
                </div>
            </li>
            <li>
                <div onClick={() => {
                    bsrMap.Rotation(.2)
                }}>Rotation .2
                </div>
            </li>
            <li>
                <div onClick={() => {
                    bsrMap.Rotation(0)
                }}>Rotation 0
                </div>
            </li>

            <li>
                <div onClick={() => {

                    DialogColorSettingsF(bsrMap.GetOptions().style!, bsrMap)
                }}>Settings Color
                </div>
            </li>
            <li>
                <div onClick={() => {
                    bsrMap.Dispose()
                }}>Dispose
                </div>
            </li>
        </ul>
    </div>
}