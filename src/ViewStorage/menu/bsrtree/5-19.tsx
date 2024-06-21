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
        sub_m.content = "sub_item:1"
        m.items?.push(sub_m)
    }
    {
        const sub_m = new MenuItem();
        sub_m.content = "sub_item:2"
        m.items?.push(sub_m)
    }

    listItem.push(m)
    return listItem;
}

export default function P5_19() {
    const mRefTree = useRef<InstanceType<typeof TreeMenu>>(null);
   
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
                    console.log('clicked: '+o.item!.id)
                }}
            />
            <br/>
            <br/>
            <button onClick={()=>{
                const listItem=mRefTree.current!.GetListItems()
                const m=CreateItem({content:"add"})
                listItem!.push(m)
                mRefTree.current!.RefreshMenu()

            }}>Add Items manual</button>
            <button onClick={()=>{
                mRefTree.current!.DeleteAllItems()
            }}>Delete all items</button>

            <button onClick={()=>{
               const newList:MenuItem[]=getListItem();
               mRefTree.current!.RewriteItems(...newList)
            }}>Replaces list to now list</button>
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
        sub_m.content = "sub_item:1"
        m.items?.push(sub_m)
    }
    {
        const sub_m = new MenuItem();
        sub_m.content = "sub_item:2"
        m.items?.push(sub_m)
    }

    listItem.push(m)
    return listItem;
}

export default function P5_19() {
    const mRefTree = useRef<InstanceType<typeof TreeMenu>>(null);

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
                    console.log('clicked: '+o.item!.id)
                }}
            />
            <br/>
            <button onClick={()=>{
                const listItem=mRefTree.current!.GetListItems()
                const m=CreateItem({content:"add"})
                listItem!.push(m)
                mRefTree.current!.RefreshMenu()

            }}>Add Items manual</button>
            <button onClick={()=>{
                mRefTree.current!.DeleteAllItems()
            }}>Delete all items</button>

            <button onClick={()=>{
               const newList:MenuItem[]=getListItem();
               mRefTree.current!.RewriteItems(...newList)
            }}>Replaces list to now list</button>
            <br/>
            <div>
                <CodeSnippetJavaScript code={code}/>
            </div>
        </div>
    )
}

