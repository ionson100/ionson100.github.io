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
    for (let i = 0; i < 1000; i++) {
       const sub_m = new MenuItem();
       sub_m.content = "sub_item:"+i
       m.items?.push(sub_m)
    }

    listItem.push(m)
    return listItem;
}

export default function P5_16() {
    const mRefTree = useRef<InstanceType<typeof TreeMenu>>(null);
    const mRefInput=useRef<HTMLInputElement>(null)
    function check(){
        if(!mRefInput.current!.value){
            alert('id is empty')
            return false;
        }
        return true;
    }
    return (
        <div style={{width:600}} >
            <TreeMenu
                ref={mRefTree}
                height={400}
                wight={600}
                style={{marginTop:5}}
                iconTree={<MdOutlineSubdirectoryArrowRight color={"black"} size={20}/>}
                iconClose={<FaRegPlusSquare color={"black"} size={20}/>}
                iconOpen={<FaRegMinusSquare color={"black"} size={20}/>}
                items={getListItem()}
                onClickMenuItem={(s,o)=>{
                    mRefInput.current!.value=o.item!.id
                    console.log('clicked: '+o.item!.id)
                }}
            />
            <br/>
            <label>id:</label>
            <input ref={mRefInput} type={'text'} style={{width:400,fontSize:18}}/>
            <br/>
            <br/>
            <button onClick={()=>{
                if(!check()) return;
                mRefTree.current!.OpenMenuItemOnly(mRefInput.current!.value)
            }}> Open menu only</button>
            <button onClick={()=>{
                if(!check()) return;
                mRefTree.current!.OpenMenuItemAndClick(mRefInput.current!.value)
            }}>Open menu and click</button>

            <button onClick={()=>{
                if(!check()) return;
                const path=mRefTree.current!.GetPath(mRefInput.current!.value)
                console.log(path)
            }}>Get Path item</button>
        </div>
    )
}


`

/**----------------------------------------**/

function getListItem() {
    const listItem: MenuItem[] = [];
    const m = new MenuItem();
    m.content = "root"
    for (let i = 0; i < 1000; i++) {
        const sub_m = new MenuItem();
        sub_m.content = "sub_item:"+i
        m.items?.push(sub_m)
    }

    listItem.push(m)
    return listItem;
}

export default function P5_16() {
    const mRefTree = useRef<InstanceType<typeof TreeMenu>>(null);
    const mRefInput=useRef<HTMLInputElement>(null)
    function check(){
        if(!mRefInput.current!.value){
            alert('id is empty')
            return false;
        }
        return true;
    }
    return (
        <div style={{width:600}} >
            <TreeMenu
                ref={mRefTree}
                height={400}
                wight={600}
                style={{marginTop:5}}
                iconTree={<MdOutlineSubdirectoryArrowRight color={"black"} size={20}/>}
                iconClose={<FaRegPlusSquare color={"black"} size={20}/>}
                iconOpen={<FaRegMinusSquare color={"black"} size={20}/>}
                items={getListItem()}
                onClickMenuItem={(s,o)=>{
                    mRefInput.current!.value=o.item!.id
                    console.log('clicked: '+o.item!.id)
                }}
            />
            <br/>
            <label className={'label-then'}>id:</label>
            <input ref={mRefInput} type={'text'} style={{width:400,fontSize:18}}/>
            <br/>
            <br/>
            <button onClick={()=>{
                if(!check()) return;
                mRefTree.current!.OpenMenuItemOnly(mRefInput.current!.value)
            }}> Open menu only</button>
            <button onClick={()=>{
                if(!check()) return;
                mRefTree.current!.OpenMenuItemAndClick(mRefInput.current!.value)
            }}>Open menu and click</button>

            <button onClick={()=>{
                if(!check()) return;
               const path=mRefTree.current!.GetPath(mRefInput.current!.value)
                console.log(path)
            }}>Get Path item</button>
            <br/>
            <div>
                <CodeSnippetJavaScript code={code}/>
            </div>
        </div>
    )
}

