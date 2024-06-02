import React from "react";
import {ShowBsrDialog} from "bsr-modaldialog";
import { FaReact } from "react-icons/fa6";
export default function SimpleModalClickPage ({callback}){

    return(
        <button onClick={()=>{
            callback('')
            ShowBsrDialog({
                icon:<FaReact/>,
                closeModalDialogClickForeignArea:true,
                header:<span style={{paddingLeft:10}}>Modal Dialog</span>,
                body:<div style={{padding: 10}}>Body, click page or Esc</div>,
                bodyStyle:{padding:20},
                buttons:[<button data-mode={-1} data-focus={1} className={'button-10'}>close</button>]
            }).then(a=>{
                callback(JSON.stringify(a))
            })
        }}>
            Simple modal dialog 2
        </button>
    )

}
