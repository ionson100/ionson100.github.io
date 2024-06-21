import React, {useRef} from "react";
import {MenuItem, TreeMenu} from "bsr-tree-virtual";
import {MdOutlineSubdirectoryArrowRight} from "react-icons/md";
import {FaRegMinusSquare, FaRegPlusSquare} from "react-icons/fa";
import {CodeSnippetJavaScript} from "../../codeSnippetJavaScript";

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
export default function P5_12() {
    const mRefTree = useRef<InstanceType<typeof TreeMenu>>(null);
    return (
        <div >
            <TreeMenu
                ref={mRefTree}
                style={{marginTop:5}}
                iconTree={<MdOutlineSubdirectoryArrowRight color={"black"} size={20}/>}
                iconClose={<FaRegPlusSquare color={"black"} size={20}/>}
                iconOpen={<FaRegMinusSquare color={"black"} size={20}/>}
                items={getListItem()}
            />
            <br/>
            <button onClick={()=>{
                mRefTree.current!.Expand()
            }}> Expand</button>
            <button onClick={()=>{
                mRefTree.current!.Collapse()
            }}> Collapse</button>
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

export default function P5_12() {
    const mRefTree = useRef<InstanceType<typeof TreeMenu>>(null);
    return (
        <div style={{width:600}} >
            <TreeMenu
                ref={mRefTree}
                style={{marginTop:5}}
                iconTree={<MdOutlineSubdirectoryArrowRight color={"black"} size={20}/>}
                iconClose={<FaRegPlusSquare color={"black"} size={20}/>}
                iconOpen={<FaRegMinusSquare color={"black"} size={20}/>}
                items={getListItem()}
            />
            <br/>
            <button onClick={()=>{
                mRefTree.current!.Expand()
            }}> Expand</button>
            <button onClick={()=>{
                mRefTree.current!.Collapse()
            }}> Collapse</button>
            <br/>
            <div>
                <CodeSnippetJavaScript code={code}/>
            </div>
        </div>
    )
}

