import React, {useRef} from "react";
import {MenuItem, TreeMenu} from "bsr-tree-virtual";

import { FaAngleDoubleRight } from "react-icons/fa";
import { FaAngleDoubleDown } from "react-icons/fa";
import { FcViewDetails } from "react-icons/fc";

let list:Array<MenuItem>=[]
const m= new MenuItem('test');
m.style={color:"green",fontWeight:"bold"}
m.AddItem(new MenuItem('sub_test',<FcViewDetails/>)
    .AddItem(new MenuItem('sub_sub_test',<FcViewDetails/>)
        .AddItem(new MenuItem('final',<FcViewDetails/>)
            .AddItem(new MenuItem('sub_final',<FcViewDetails/>)
                .AddItem(new MenuItem('45',<FcViewDetails/>))))));

m.AddItem(new MenuItem('sub_test',<FcViewDetails/>)
    .AddItem(new MenuItem('sub_sub_test',<FcViewDetails/>)
        .AddItem(new MenuItem('final',<FcViewDetails/>)
            .AddItem(new MenuItem('sub_final')
                .AddItem(new MenuItem('45'))))));

m.AddItem(new MenuItem('sub_test',<FcViewDetails/>)
    .AddItem(new MenuItem('sub_sub_test',<FcViewDetails/>)
        .AddItem(new MenuItem('final',<FcViewDetails/>)
            .AddItem(new MenuItem('sub_final',<FcViewDetails/>)
                .AddItem(new MenuItem('45',<FcViewDetails/>))))));
m.accessKey="22"
m.icon=<FcViewDetails/>
list.push(m);


export default  function Fragment1(){
    const menu = useRef<InstanceType<typeof TreeMenu>>(null)
    const label = useRef<HTMLDivElement>(null)
    const input = useRef<HTMLInputElement>(null)
    return(
        <div style={{display: "flex",background:"#efedb3",width:"100%",height:"100%",padding:5}}>
            <TreeMenu
                style={{marginTop:10}}
                useCheckBox={true}
                ref={menu}
                marginItem={20}
                callbackVirtualSize={() => {
                    return {
                        wight: 600,
                        height: 250
                    }
                }}
                itemSize={33}


                iconClose={<FaAngleDoubleRight  color={"black"} size={15}/>}
                iconOpen={<FaAngleDoubleDown  color={"black"} size={15}/>}

                items={list}
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
