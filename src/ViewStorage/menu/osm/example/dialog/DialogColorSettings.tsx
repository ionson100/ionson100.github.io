import React from "react";
import {ShowBsrDialog,BaseBodyDialog} from "bsr-modaldialog";
import 'bsr-modaldialog/dist/index.css'
import {BsrMap, StyleSettings} from 'bsr-osm'
import {formDialogColor} from "./colorDialog";
type settingsProps={
    style:StyleSettings
    map:BsrMap
}
class DialogColorSettings extends BaseBodyDialog<settingsProps>{
    private colorDiv=React.createRef<HTMLButtonElement>()
    private fillDiv=React.createRef<HTMLButtonElement>()
    getData(mode: string | undefined): any {
        return null
    }

    validate(mode: string | undefined): boolean | undefined {
        return true
    }
    render() {
        return (
            <div style={{padding:20}}>

                <button ref={this.colorDiv} onClick={()=>{
                    formDialogColor(this.props.style.colorPolygon??'#7ae31c','Color Polygon').then(r=>{
                        if(r.mode==='2'){
                            this.props.style.colorPolygon=r.dataBody.color;
                            this.colorDiv.current!.style.backgroundColor=r.dataBody.color
                            this.props.map.RefreshStyleSettings()
                            this.props.map.RefreshStyleFeatures()
                        }
                    })

                }} style={{backgroundColor:this.props.style.colorPolygon??'#7ae31c',padding:20,color:"white"}}>

                    Color polygon
                </button>

                <button ref={this.fillDiv} onClick={()=>{
                    formDialogColor(this.props.style.fillPolygon??"#8fe56d","Fill Polygon").then(r=>{
                        if(r.mode==='2'){
                            this.props.style.fillPolygon=r.dataBody.color;
                            this.fillDiv.current!.style.backgroundColor=r.dataBody.color
                            this.props.map.RefreshStyleSettings()
                            this.props.map.RefreshStyleFeatures()
                        }
                    })

                }} style={{backgroundColor:this.props.style.fillPolygon??"#8fe56d",padding:20,color:"white",marginLeft:10}}>
                    Fill polygon
                </button>
            </div>

        )
    }
}
export function DialogColorSettingsF( settings:StyleSettings, map:BsrMap){
      ShowBsrDialog({
        header:(<span style={{paddingLeft:10}}>Color Settings polygon</span>),
        body:<DialogColorSettings style={settings} map={map}/>,
        buttons: [

            <button className={'bt-bsr'} data-mode={-1}>close</button>]
    }).then()
}