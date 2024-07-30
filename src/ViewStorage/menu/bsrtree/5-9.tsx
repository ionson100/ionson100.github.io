import React, {useRef} from "react";
import {MenuItem, TreeMenu} from "bsr-tree-virtual";
import {MdOutlineSubdirectoryArrowRight} from "react-icons/md";
import {FaRegMinusSquare, FaRegPlusSquare} from "react-icons/fa";
import {CodeSnippetJavaScript} from "../../codeSnippetJavaScript";

/**----------------------------------------**/
const code = `
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

export default function P5_9() {
    const mReLabel = useRef<HTMLLabelElement>(null);
    return (
        <div >
            <label ref={mReLabel} className={'label-then'}></label>
            <br/>
            <TreeMenu
                style={{marginTop:5}}
                iconTree={<MdOutlineSubdirectoryArrowRight color={"black"} size={20}/>}
                iconClose={<FaRegPlusSquare color={"black"} size={20}/>}
                iconOpen={<FaRegMinusSquare color={"black"} size={20}/>}
                items={getListItem()}
                onClickMenuItem={(s,obj)=>{
                    //s-TreeMenu
                    //ob={
                    //path?: Array<MenuItem> - array path
                    //item?: MenuItem - current item
                    //element?: HTMLAnchorElement - current html element
                    //}
                    mReLabel.current.innerText=" content item: "+obj.item.content+"  id item: "+obj.item.id+""

                }}
            />
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

export default function P5_9() {
    const mReLabel = useRef<HTMLLabelElement>(null);
    return (
        <div>
            <label ref={mReLabel} className={'label-then'}></label>
            <br/>
            <TreeMenu
                style={{marginTop:5}}
                iconTree={<MdOutlineSubdirectoryArrowRight color={"black"} size={20}/>}
                iconClose={<FaRegPlusSquare color={"black"} size={20}/>}
                iconOpen={<FaRegMinusSquare color={"black"} size={20}/>}
                items={getListItem()}
                onClickMenuItem={(s, obj) => {
                    //s-TreeMenu
                    //ob={
                    //path?: Array<MenuItem> - array path
                    //item?: MenuItem - current item
                    //element?: HTMLAnchorElement - current html element
                    mReLabel.current!.innerText = ` content item: ${obj.item!.content},    id item: ${obj.item!.id}`

                }}
            />
            <br/>
            <div>
                <CodeSnippetJavaScript code={code}/>
            </div>
        </div>
    )
}

