import {TreeMenu} from "bsr-tree-virtual";
import {MdOutlineSubdirectoryArrowRight} from "react-icons/md";
import {FaRegMinusSquare, FaRegPlusSquare} from "react-icons/fa";
import {GetSimpleCollection} from "./ItemFactory";
import {FcViewDetails} from "react-icons/fc";
import React from "react";


export default function P5_112() {
    return (
        <div style={{width:"fit-content"}}>
            <label className={'label-then'}  style={{margin:10}}>ruleOpen=false</label>
            <TreeMenu
                style={{marginTop: 10}}
                useCheckBox={false}
                marginItem={20}
                callbackVirtualSize={() => {
                    return {
                        wight: 600,
                        height: 250
                    }
                }}
                itemSize={30}
                iconTree={<MdOutlineSubdirectoryArrowRight color={"black"} size={20}/>}
                iconClose={<FaRegPlusSquare color={"black"} size={20}/>}
                iconOpen={<FaRegMinusSquare color={"black"} size={20}/>}

                items={GetSimpleCollection(4, <FcViewDetails/>)}
            />
            <label  className={'label-then'} style={{margin:10}}>ruleOpen=true</label>
            <TreeMenu
                ruleOpen={true}
                style={{marginTop: 10}}
                useCheckBox={false}
                marginItem={20}
                callbackVirtualSize={() => {
                    return {
                        wight: 600,
                        height: 250
                    }
                }}
                itemSize={30}
                iconTree={<MdOutlineSubdirectoryArrowRight color={"black"} size={20}/>}
                iconClose={<FaRegPlusSquare color={"black"} size={20}/>}
                iconOpen={<FaRegMinusSquare color={"black"} size={20}/>}

                items={GetSimpleCollection(4, <FcViewDetails/>)}
            />
            <br/>
        </div>


    )
}