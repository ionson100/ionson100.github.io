import React from "react";
import {ShowBsrDialog} from "bsr-modaldialog";
import {FaUserSecret} from "react-icons/fa";
import {MyForm} from "../../registerForm";
import {ConfirmDialogF} from "../../confirmDialog";
export default function FormRegister ({callback}){
    const but=[]
    but.push(<a style={{fontSize:20}} href="https://medium.com/@ericapantojacs/react-registration-form-d298b3b7e75d">Visit source code</a>)
    but.push(<button className={'button-10'} data-mode={100} onClick={()=>{
        ConfirmDialogF()
    }
    }>showModal</button>)
    but.push(<button className={'button-10'} data-mode={1}>register</button>)
    but.push(< button className={'button-10'} data-mode={-1} data-focus={true}>close</button>);
    return(
        <button onClick={()=>{
            callback('')
            ShowBsrDialog({
                style: {width: 520},
                position: 'center',
                icon: <FaUserSecret/>,
                header: (<span style={{paddingLeft: 30}}>User registration:</span>),
                body: <MyForm/>,
                buttons: but
            }).then(a=>{
                callback(JSON.stringify(a))
            })
        }}>
            User registration
        </button>
    )

}
