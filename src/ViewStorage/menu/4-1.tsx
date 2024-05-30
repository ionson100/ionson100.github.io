import React from "react";
import {ShowBsrDialog,ModalDialog} from "bsr-modaldialog";
import 'bsr-modaldialog/dist/index.css'
import { FaReact } from "react-icons/fa6";

let dialog:HTMLDialogElement|undefined=undefined;

export default function P4_1(){
    const mRefDialog:React.RefObject<InstanceType<typeof ModalDialog>> | null=React.useRef<InstanceType<typeof ModalDialog>>(null)
    return (
        <div style={{display:"flex"}}>
            <button onClick={()=>{
            ShowBsrDialog({
                icon:<FaReact/>,
                header:(<span style={{paddingLeft:10}}>Dialog</span>),
                body:(<div style={{padding:20}}>Body</div>),
                styleBody:{height:100},
                buttons:[
                    (<button className={'button-10'} data-mode={1} >ok</button>),
                    (<button className={'button-10'} data-mode={-1} data-focus={1}>close</button>)]
            }).then(a=>{
                alert(JSON.stringify(a))
            })
        }}>Simple modal dialog</button>

            <button onClick={()=>{

                ShowBsrDialog({


                    refDialog:mRefDialog,
                    icon:<FaReact/>,
                    onShow:(e=>{
                        dialog=e;
                }),
                    modal:false,
                    header:(<span style={{paddingLeft:10}}>Dialog</span>),
                    body:(<div style={{padding:20}}>Body</div>),
                    styleBody:{height:100},
                    buttons:[
                        (<button className={'button-10'} data-mode={1} >ok</button>),
                        (<button className={'button-10'} data-mode={-1} data-focus={1}>close</button>)]
                }).then(a=>{
                    alert(JSON.stringify(a))
                })
            }}>Simple dialog</button>
            <button onClick={()=>{
                if(mRefDialog?.current){
                   mRefDialog.current.closeDialog('100')
                }
            }}>close</button>
        </div>
    )
}