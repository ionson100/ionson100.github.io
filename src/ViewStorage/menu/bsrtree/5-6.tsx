import React from "react";
import {MenuItem, TreeMenu} from "bsr-tree-virtual";
import {MdOutlineSubdirectoryArrowRight} from "react-icons/md";
import {FaRegMinusSquare, FaRegPlusSquare} from "react-icons/fa";
import {CodeSnippetJavaScript} from "../../codeSnippetJavaScript";

import { FaRegFolderOpen,FaRegFolderClosed } from "react-icons/fa6";
import { FaRegFile } from "react-icons/fa";

import { TbPointFilled } from "react-icons/tb";
import { FaAnglesRight,FaAnglesDown } from "react-icons/fa6";

/**----------------------------------------**/
const code = `
import React from "react";
import {MenuItem, TreeMenu} from "bsr-tree-virtual";
import "bsr-tree-virtual/dist/index.css"

import {MdOutlineSubdirectoryArrowRight} from "react-icons/md";
import {FaRegMinusSquare, FaRegPlusSquare} from "react-icons/fa";

import { FaRegFolderOpen,FaRegFolderClosed } from "react-icons/fa6";
import { FaRegFile } from "react-icons/fa";

import { TbPointFilled } from "react-icons/tb";
import { FaAnglesRight,FaAnglesDown } from "react-icons/fa6";

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

export default function P5_6() {
    return (
        <div style={{width: 600}}>

            <TreeMenu
                style={{marginTop:10}}
                height={150}
                iconTree={<MdOutlineSubdirectoryArrowRight color={"black"} size={20}/>}
                iconClose={<FaRegPlusSquare color={"black"} size={20}/>}
                iconOpen={<FaRegMinusSquare color={"black"} size={20}/>}
                items={getListItem()}
            />
            <br/>
            <TreeMenu
                style={{marginTop:10}}
                height={150}
                iconTree={<TbPointFilled color={"black"} size={20}/>}
                iconClose={<FaAnglesRight color={"black"} size={20}/>}
                iconOpen={<FaAnglesDown color={"black"} size={20}/>}
                items={getListItem()}
            />
            <br/>
            <TreeMenu
                style={{marginTop:10}}
                height={150}
                iconTree={<FaRegFile color={"black"} size={15}/>}
                iconClose={<FaRegFolderClosed color={"black"} size={20}/>}
                iconOpen={<FaRegFolderOpen color={"black"} size={20}/>}
                items={getListItem()}
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

export default function P5_6() {
    return (
        <div style={{width: 600}}>


            <TreeMenu
                style={{marginTop:5}}
                height={150}
                iconTree={<MdOutlineSubdirectoryArrowRight color={"black"} size={20}/>}
                iconClose={<FaRegPlusSquare color={"black"} size={20}/>}
                iconOpen={<FaRegMinusSquare color={"black"} size={20}/>}
                items={getListItem()}
            />

            <br/>
            <TreeMenu
                style={{marginTop:5}}
                height={150}
                iconTree={<TbPointFilled color={"black"} size={20}/>}
                iconClose={<FaAnglesRight color={"black"} size={20}/>}
                iconOpen={<FaAnglesDown color={"black"} size={20}/>}
                items={getListItem()}
            />
            <br/>
            <TreeMenu
                style={{marginTop:5}}
                height={150}
                iconTree={<FaRegFile color={"black"} size={15}/>}
                iconClose={<FaRegFolderClosed color={"black"} size={20}/>}
                iconOpen={<FaRegFolderOpen color={"black"} size={20}/>}
                items={getListItem()}
            />
            <br/>
            <div>
                <CodeSnippetJavaScript code={code}/>
            </div>
        </div>
    )
}

