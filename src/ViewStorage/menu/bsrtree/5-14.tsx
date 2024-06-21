import React, {useRef} from "react";
import {MenuItem, TreeMenu} from "bsr-tree-virtual";
import {MdOutlineSubdirectoryArrowRight} from "react-icons/md";
import {FaRegMinusSquare, FaRegPlusSquare} from "react-icons/fa";
import {CodeSnippetJavaScript} from "../../codeSnippetJavaScript";
import {CreateItem} from "bsr-left-sidebar";
import { LiaElementor } from "react-icons/lia";

/**----------------------------------------**/
const code=`
import React, {useRef} from "react";
import {MenuItem, TreeMenu} from "bsr-tree-virtual";
import "bsr-tree-virtual/dist/index.css"
import {MdOutlineSubdirectoryArrowRight} from "react-icons/md";
import {FaRegMinusSquare, FaRegPlusSquare} from "react-icons/fa";
import {CodeSnippetJavaScript} from "../../codeSnippetJavaScript";

function getListItem() {
    const listItem: MenuItem[] = [];
    const m = new MenuItem();
    m.content = "root"
    {
        const sub_m = new MenuItem();
        sub_m.content = "sub_item"
        m.items?.push(sub_m)
    }
    {
        const sub_m = new MenuItem();
        sub_m.content = "sub_item"
        m.items?.push(sub_m)
    }

    listItem.push(m)
    return listItem;
}
export default function P5_14() {
    const mRefTree = useRef<InstanceType<typeof TreeMenu>>(null);
    const mRefInput=useRef<HTMLInputElement>(null)
    return (
        <div style={{width:600}} >
            <TreeMenu
                ref={mRefTree}
                wight={600}
                style={{marginTop:5}}
                iconTree={<MdOutlineSubdirectoryArrowRight color={"black"} size={20}/>}
                iconClose={<FaRegPlusSquare color={"black"} size={20}/>}
                iconOpen={<FaRegMinusSquare color={"black"} size={20}/>}
                items={getListItem()}
                onClickMenuItem={(s,o)=>{
                    mRefInput.current!.value=o.item!.id
                }}
            />
            <br/>
            <label>id:</label>
            <input ref={mRefInput} type={'text'} style={{width:300,fontSize:18}}/>
            <br/>
            <br/>
            <button onClick={()=>{
                const m = new MenuItem('Addin');
                m.style = {color: "red", fontWeight: "bold"}
                m.AddItem(new MenuItem('sub_test')
                    .AddItem(new MenuItem('sub_sub_test')
                        .AddItem(new MenuItem('final')
                            .AddItem(new MenuItem('sub_final')
                                .AddItem(new MenuItem('45'))))));
                mRefTree.current!.AddItems(m)
                mRefInput.current!.value=''
            }}> Add item</button>
            <button onClick={()=>{
                if(!mRefInput.current!.value){
                    alert('id is empty')
                    return
                }
                mRefTree.current!.DeleteItem(mRefInput.current!.value)
                mRefInput.current!.value=''
            }}>Delete by id</button>
        </div>
    )
}


`

/**----------------------------------------**/

function getListItem() {
    const listItem: MenuItem[] = [];
    const m = new MenuItem();
    m.content = "root"
    {
        const sub_m = new MenuItem();
        sub_m.content = "sub_item"
        m.items?.push(sub_m)
    }
    {
        const sub_m = new MenuItem();
        sub_m.content = "sub_item"
        m.items?.push(sub_m)
    }

    listItem.push(m)
    return listItem;
}

export default function P5_14() {
    const mRefTree = useRef<InstanceType<typeof TreeMenu>>(null);
    const mRefInput=useRef<HTMLInputElement>(null)
    return (
        <div style={{width:600}} >
            <TreeMenu
                ref={mRefTree}
                wight={600}
                style={{marginTop:5}}
                iconTree={<MdOutlineSubdirectoryArrowRight color={"black"} size={20}/>}
                iconClose={<FaRegPlusSquare color={"black"} size={20}/>}
                iconOpen={<FaRegMinusSquare color={"black"} size={20}/>}
                items={getListItem()}
                onClickMenuItem={(s,o)=>{
                    mRefInput.current!.value=o.item!.id
                }}
            />
            <br/>
            <label>id:</label>
            <input ref={mRefInput} type={'text'} style={{width:300,fontSize:18}}/>
            <br/>
            <br/>
            <button onClick={()=>{
                const m = new MenuItem('Addin');
                m.style = {color: "red", fontWeight: "bold"}
                m.AddItem(new MenuItem('sub_test')
                    .AddItem(new MenuItem('sub_sub_test')
                        .AddItem(new MenuItem('final')
                            .AddItem(new MenuItem('sub_final')
                                .AddItem(new MenuItem('45'))))));
                mRefTree.current!.AddItems(m)
                mRefInput.current!.value=''
            }}> Add item</button>
            <button onClick={()=>{
                if(!mRefInput.current!.value){
                    alert('id is empty')
                    return
                }
                mRefTree.current!.DeleteItem(mRefInput.current!.value)
                mRefInput.current!.value=''
            }}>Delete by id</button>
            <br/>
            <div>
                <CodeSnippetJavaScript code={code}/>
            </div>
        </div>
    )
}

