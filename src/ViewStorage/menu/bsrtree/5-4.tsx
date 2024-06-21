import React from "react";
import {MenuItem, TreeMenu} from "bsr-tree-virtual";
import {MdOutlineSubdirectoryArrowRight} from "react-icons/md";
import {FaRegMinusSquare, FaRegPlusSquare} from "react-icons/fa";
import {CodeSnippetJavaScript} from "../../codeSnippetJavaScript";

/**----------------------------------------**/
const code = `
import React from "react";
import {MenuItem, TreeMenu} from "bsr-tree-virtual";
import "bsr-tree-virtual/dist/index.css"

import {MdOutlineSubdirectoryArrowRight} from "react-icons/md";
import {FaRegMinusSquare, FaRegPlusSquare} from "react-icons/fa";

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

export default function P5_4() {
   return(
        <div style={{width:600}}>
            <label className={'label-then'}>height:250</label>
            <br/>
            <TreeMenu
                style={{marginTop:5}}
                wight={300}
                height={250}
                itemSize={30}
                iconTree={<MdOutlineSubdirectoryArrowRight color={"black"} size={20}/>}
                iconClose={<FaRegPlusSquare color={"black"} size={20}/>}
                iconOpen={<FaRegMinusSquare color={"black"} size={20}/>}
                items={getListItem()}
            />
            <br/>
            <label className={'label-then'}>height:500</label>
            <br/>
            <TreeMenu
                style={{marginTop:5}}
                wight={300}
                height={500}
                itemSize={30}
                iconTree={<MdOutlineSubdirectoryArrowRight color={"black"} size={20}/>}
                iconClose={<FaRegPlusSquare color={"black"} size={20}/>}
                iconOpen={<FaRegMinusSquare color={"black"} size={20}/>}
                items={getListItem()}
            />
            <br/>
            <div>
                <CodeSnippetJavaScript code={code}/>
            </div>
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

export default function P5_4() {
    return(
        <div style={{width:600}}>
            <label className={'label-then'}>height:250</label>
            <br/>
            <TreeMenu
                style={{marginTop:5}}
                wight={300}
                height={250}
                itemSize={30}
                iconTree={<MdOutlineSubdirectoryArrowRight color={"black"} size={20}/>}
                iconClose={<FaRegPlusSquare color={"black"} size={20}/>}
                iconOpen={<FaRegMinusSquare color={"black"} size={20}/>}
                items={getListItem()}
            />
            <br/>
            <label className={'label-then'}>height:500</label>
            <br/>
            <TreeMenu
                style={{marginTop:5}}
                wight={300}
                height={500}
                itemSize={30}
                iconTree={<MdOutlineSubdirectoryArrowRight color={"black"} size={20}/>}
                iconClose={<FaRegPlusSquare color={"black"} size={20}/>}
                iconOpen={<FaRegMinusSquare color={"black"} size={20}/>}
                items={getListItem()}
            />
            <br/>
            <div>
                <CodeSnippetJavaScript code={code}/>
            </div>
        </div>
    )
}

