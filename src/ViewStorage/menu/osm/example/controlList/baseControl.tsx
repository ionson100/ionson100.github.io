import {myState} from "../state";
import {useEffect, useRef} from "react";
import {Table, Column, DataRow} from 'bsr-table-extension'
import 'bsr-table-extension/dist/index.css'
import {Feature} from "ol";
import {BsrMap} from "bsr-osm";
import {FaEdit} from "react-icons/fa";
import {RiDeleteBin6Line} from "react-icons/ri";
import {RewriteLocalStorage} from "../menuMap";

type fe = {
    geometry: string
    feature: Feature
}


const list: DataRow<fe, any>[] = []

export function BaseControl() {
    const refDivButtons = useRef<HTMLDivElement>(null)
    const refTable = useRef<Table>(null)
    const refTableHost = useRef<HTMLDivElement>(null)
    useEffect(() => {


        myState.actionListFeatures = (f: Feature[]) => {

            refresh(f)

        }
        refDivButtons.current!.style.visibility = 'hidden'
        myState.visibleButtons = (v: boolean, bsrMap: BsrMap) => {
            if (v) {

                refDivButtons.current!.style.visibility = 'visible'
            } else {

                refDivButtons.current!.style.visibility = 'hidden'
            }
        }
    })
    const compareF=(a:Feature,b:Feature)=>{
        const a1=a.get('index') as number
        const b1=b.get('index') as number
        if(a1>b1 ){
            return 1
        }else if(a1===b1){
            return 0
        }else {
            return -1
        }
    }
    const refresh = (f: Feature[]) => {
        if (!f || f.length == 0) {
            list.length = 0;
            refTable.current!.Refresh()
            refTableHost.current!.style.display = "none"
            return

        }
        refTableHost.current!.style.display = "block"

        list.length = 0
        f.sort(compareF).forEach(c => {
            if (c.getGeometry()!.getType().toString().includes('Collec')) {
                return
            }
            list.push({
                onClick: () => {
                    myState.bsrMap?.EndEditFeature()
                    myState.bsrMap?.SelectFeature(c)
                },
                tag: {
                    feature: c,
                    geometry: c.getGeometry()!.getType().toString(),

                },
                getView: () => {
                    return {
                        b1: <div onClick={e => {e.stopPropagation()}}><FaEdit color={"green"} onClick={(e) => {
                            myState.bsrMap?.EndEditFeature()
                            myState.bsrMap?.SelectFeature(c)
                            setTimeout(() => {
                                myState.bsrMap?.StartEditFeature(c)
                            }, 100)

                        }
                        }/></div>,
                        b2:<div onClick={e => {e.stopPropagation()}}><RiDeleteBin6Line color={"green"} onClick={() => {
                            myState.bsrMap?.DeleteFeature(c)
                            RewriteLocalStorage(myState.bsrMap!)
                        }}/></div> ,
                        geometry: c.getGeometry()!.getType().toString(),

                    }
                }
            })
        })
        refTable.current!.Refresh()
    }
    return (

        <div style={{width: "fit-content"}}>
            <div ref={refTableHost} style={{display:'none'}}>
                <Table ref={refTable} style={{width: 300}} rowItems={list}>
                    <Column nameProperty={'b1'} style={{width: 10}}></Column>
                    <Column nameProperty={'b2'} style={{width: 10}}></Column>
                    <Column nameProperty={'geometry'} style={{width: 170}}>Geometry</Column>

                </Table>
            </div>
            <div ref={refDivButtons}>
                <button onClick={() => {
                    myState.bsrMap?.Undo()
                }} className={'bt-bsr'}> undo
                </button>
                <button onClick={() => {
                    myState.bsrMap?.CancelCreate()
                }} className={'bt-bsr'}> Cancel create
                </button>
            </div>

        </div>


    )
}