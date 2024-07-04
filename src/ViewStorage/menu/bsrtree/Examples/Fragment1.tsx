import React, {useRef} from "react";
import {MenuItem, TreeMenu} from "bsr-tree-virtual";
import {MdOutlineSubdirectoryArrowRight} from "react-icons/md";
import {FaRegMinusSquare, FaRegPlusSquare} from "react-icons/fa";
import {GetSimpleCollection} from "../ItemFactory";

import { FcViewDetails } from "react-icons/fc";




export default  function Fragment1(){
    const menu = useRef<InstanceType<typeof TreeMenu>>(null)
    const label = useRef<HTMLDivElement>(null)
    const input = useRef<HTMLInputElement>(null)
    return(
        <div style={{display: "flex",width:"100%",height:"100%",padding:5}}>
            <TreeMenu

                style={{marginTop:10}}
                useCheckBox={false}
                ref={menu}
                marginItem={20}
                callbackVirtualSize={() => {
                    return {
                        wight: 600,
                        height: 250
                    }
                }}
                itemSize={30}

                iconTree={<MdOutlineSubdirectoryArrowRight color={"black"} size={20}/>}
                iconClose={<FaRegPlusSquare  color={"black"} size={20}/>}
                iconOpen={<FaRegMinusSquare  color={"black"} size={20}/>}

                items={GetSimpleCollection(4,<FcViewDetails/>)}
                onClickMenuItem={(menu, obj) => {
                    label.current!.innerText = JSON.stringify({
                        id: obj.item?.id,
                        text: obj.item?.content,
                        isOpen: obj.item?.isOpen,
                        url: obj.item?.url
                    })
                    input.current!.value = obj.item!.id
                }}

            />
            <div style={{width: "100%", height: "100%", padding: 10, display: "block"}}>

                <button onClick={() => {
                    menu.current!.Expand()
                }}>
                    Expand
                </button>
                <button onClick={() => {
                    menu.current!.Collapse()
                }}>
                    Collapse
                </button>

                <button onClick={() => {
                    const m = new MenuItem('Addin');
                    m.style = {color: "red", fontWeight: "bold"}
                    m.AddItem(new MenuItem('sub_test')
                        .AddItem(new MenuItem('sub_sub_test')
                            .AddItem(new MenuItem('final')
                                .AddItem(new MenuItem('sub_final')
                                    .AddItem(new MenuItem('45'))))));
                    menu.current!.AddItems(m)
                }}>
                    Add item
                </button>

                <button onClick={() => {
                    if (input.current!.value && input.current!.value.length > 10) {
                        menu.current!.DeleteItem(input.current!.value)
                        input.current!.value = ''
                        label.current!.innerText = ''

                    } else {
                        alert("id empty")
                    }

                }}>
                    Delete by id
                </button>

                <button onClick={() => {
                    if (input.current!.value && input.current!.value.length > 10) {
                        menu.current!.OpenMenuItemAndClick(input.current!.value)
                    } else {
                        alert("id empty")
                    }

                }}>
                    Find by id and click
                </button>
                <br/> <br/>
                <input ref={input} type={"text"} style={{width: 400}}/>
                <br/> <br/>
                <div style={{width: "100%"}} ref={label}></div>


            </div>

        </div>


    )
}
