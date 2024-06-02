import React from "react";
import {ShowBsrDialog} from "bsr-modaldialog";
import { BiSolidErrorAlt } from "react-icons/bi";
export default async function  SimpleAlert (text){
           await ShowBsrDialog({
                position:"top",
                icon:<BiSolidErrorAlt color={"red"}/>,
                header:<span style={{paddingLeft:10}}>Error:</span>,
                body:<div style={{padding: 10}}>{text}</div>,
                bodyStyle:{padding:20},
                style:{width:300},
                buttons:[<button data-mode={-1} data-focus={1} className={'button-10'}>close</button>]
            })
}
