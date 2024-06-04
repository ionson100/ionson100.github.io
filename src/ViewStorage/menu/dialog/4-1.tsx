import React, {useRef} from "react";
import {ModalDialog} from "bsr-modaldialog";

import SimpleModal from "./examprs/SimpleDialog";
import SimpleModalClickPage from "./examprs/SinpleModalClickPage";
import SimpleNotModal from "./examprs/SimpleNotModal";
import ConfirmDialog from "./examprs/ConfirmDialog";
import SimpleConfirm from "./examprs/PromtDialog";
import FormRegister from "./examprs/FormRegister";
import AlertPanel from "./examprs/Panel";
import InnerScroll from "./examprs/InnerScroll";
import OuterScroll from "./examprs/OuterScroll";

let dialog:HTMLDivElement|undefined=undefined;

export default function P4_1(){
    const mRefLabel=useRef<HTMLLabelElement>(null);
    const mRefDialog:React.RefObject<InstanceType<typeof ModalDialog>> | null=React.useRef<InstanceType<typeof ModalDialog>>(null)
    return (
        <>
            <label className={'label-then'} ref={mRefLabel}></label>
            <br/><br/>
            <div style={{display: "flex"}}>
                <SimpleModal callback={(s: string) => {
                    mRefLabel.current!.innerText = s;
                }}/>
                <SimpleModalClickPage callback={(s: string) => {
                    mRefLabel.current!.innerText = s;
                }}/>
                <SimpleNotModal callback={(s: string) => {
                    if(mRefLabel.current)
                        mRefLabel.current.innerText = s;
                }}/>
                <ConfirmDialog callback={(s: string) => {
                    if(mRefLabel.current)
                        mRefLabel.current.innerText = s;
                }}/>
                <SimpleConfirm callback={(s: string) => {
                    if(mRefLabel.current)
                        mRefLabel.current.innerText = s;
                }}/>
                <FormRegister callback={(s: string) => {
                    if(mRefLabel.current)
                        mRefLabel.current.innerText = s;
                }}/>
                <AlertPanel callback={(s: string) => {
                    if(mRefLabel.current)
                        mRefLabel.current.innerText = s;
                }}/>

            </div>
            <br/>
            <div style={{display: "flex"}}>
                <InnerScroll callback={(s: string) => {
                    if(mRefLabel.current)
                        mRefLabel.current.innerText = s;
                }}/>
                <OuterScroll callback={(s: string) => {
                    if(mRefLabel.current)
                        mRefLabel.current.innerText = s;
                }}/>
            </div>
        </>

    )
}
