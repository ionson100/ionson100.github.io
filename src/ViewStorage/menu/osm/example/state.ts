import {BsrMap} from "bsr-osm";

import {Feature} from "ol";
class MyState{
    public bsrMap:BsrMap|undefined
    public visibleButtons?:(v:boolean,bsrMap:BsrMap)=>void
    public actionListFeatures?:(f:Feature[])=>void
    public selectRowTable?:(id:string)=>void
}
export const myState=new MyState()
