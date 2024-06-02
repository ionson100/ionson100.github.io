import React from "react";
import {ShowBsrDialog} from "bsr-modaldialog";
import 'bsr-modaldialog/dist/index.css'
import { FaReact } from "react-icons/fa6";
export default function SimpleNotModal ({callback}){

    return(
        <button onClick={()=>{
            callback('')
            ShowBsrDialog({
                modal:false,
                icon:<FaReact/>,
                header:<span style={{paddingLeft:10}}>Dialog</span>,
                body:<div style={{padding: 10}}>Body</div>,
                bodyStyle:{padding:20},
                buttons:[<button data-mode={-1} data-focus={1} className={'button-10'}>close</button>]
            }).then(a=>{
                callback(JSON.stringify(a))
            })
        }}>
            Simple  dialog
        </button>
    )

}