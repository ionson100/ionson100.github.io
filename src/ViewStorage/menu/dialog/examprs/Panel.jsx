import React from "react";
import {ShowBsrDialog} from "bsr-modaldialog";
import {FcOk} from "react-icons/fc";
export default function AlertPanel ({callback}){

    return(
        <button onClick={()=>{
            callback('')
            ShowBsrDialog({
                className: 'main-dialog-alert',
                modal: false,
                timeOut: 2000,
                classNameTopStripe: "none",
                classNameBottomStripe: "none",
                classNameBody: "m-body-alert",

                body: <div className={'body-test'}>
                    <FcOk size={50}/>
                    <div style={{paddingLeft: 20}}>Simple alert  2000 ms</div>
                </div>,

            }).then(a=>{
                callback(JSON.stringify(a))
            })
        }}>
            Panel
        </button>
    )

}
