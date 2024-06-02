import React from "react";
import {ShowBsrDialog} from "bsr-modaldialog";
import { FaReact } from "react-icons/fa6";
export default function ConfirmDialog ({callback}){

    return(
        <button onClick={()=>{
            callback('')
            ShowBsrDialog({
                icon:<FaReact/>,
                header:<span style={{paddingLeft:10}}>Confirm dialog</span>,
                body:<div style={{padding: 10}}>Body, click Esc</div>,
                bodyStyle:{padding:20},
                buttons: [
                    <button data-mode={1}  className={'button-10'}>mode 1</button>,
                    <button data-mode={2}  className={'button-10'}>mode 2</button>,
                    <button data-mode={3}  className={'button-10'}>mode 3</button>,
                    <button data-mode={-1} data-focus={1} className={'button-10'}>close</button>
                ]
            }).then(a => {
                callback(JSON.stringify(a))
            })
        }}>
            Confirm dialog
        </button>
    )

}
