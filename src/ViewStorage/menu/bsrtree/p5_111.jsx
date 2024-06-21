import React from 'react';
import {MdOutlineSubdirectoryArrowRight} from "react-icons/md";
import {FaRegPlusSquare, FaRegMinusSquare} from "react-icons/fa";
import {TreeMenu, MenuItem} from "bsr-tree-virtual"
import {CodeSnippetJavaScript} from "../../codeSnippetJavaScript";

const code=`

import React from 'react';
import {MdOutlineSubdirectoryArrowRight} from "react-icons/md";
import {FaRegPlusSquare, FaRegMinusSquare} from "react-icons/fa";
import {TreeMenu, MenuItem} from "bsr-tree-virtual"
import "bsr-tree-virtual/dist/index.css"

const listItem = []

const m = new MenuItem('Root');
m.AddItem(new MenuItem('sub_root')
    .AddItem(new MenuItem('sub_sub_root')
        .AddItem(new MenuItem('sub_sub_sub_root')
            .AddItem(new MenuItem('pre_final')
                .AddItem(new MenuItem('final'))))));
listItem.push(m)

export default function P5_111() {
    return (

        <div>
            asas
            ererer
            <TreeMenu
                iconTree={<MdOutlineSubdirectoryArrowRight size={20}/>}
                iconClose={<FaRegPlusSquare size={20}/>}
                iconOpen={<FaRegMinusSquare size={20}/>}
                wight={500}
                height={250}
                items={listItem}
                marginItem={20}
                itemSize={33}
                onClickMenuItem={(tree,ob)=>{
                    console.log({
                        text:ob.item.content,
                        id:ob.item.id,
                        isOpen:ob.item.isOpen,
                        isFinal:!ob.item.items||ob.item.items.length===0
                    })
                }}
            />
            <br/>
            <div>
                <CodeSnippetJavaScript code={code}/>
            </div>
        </div>


    );
}
`

const listItem = []

const m = new MenuItem('Root');
m.AddItem(new MenuItem('sub_root')
    .AddItem(new MenuItem('sub_sub_root')
        .AddItem(new MenuItem('sub_sub_sub_root')
            .AddItem(new MenuItem('pre_final')
                .AddItem(new MenuItem('final'))))));
listItem.push(m)

export default function P5_111() {
    return (

        <div>
            asas
            ererer
            <TreeMenu
                iconTree={<MdOutlineSubdirectoryArrowRight size={20}/>}
                iconClose={<FaRegPlusSquare size={20}/>}
                iconOpen={<FaRegMinusSquare size={20}/>}
                wight={500}
                height={250}
                items={listItem}
                marginItem={20}
                itemSize={33}
                onClickMenuItem={(tree,ob)=>{
                    console.log({
                        text:ob.item.content,
                        id:ob.item.id,
                        isOpen:ob.item.isOpen,
                        isFinal:!ob.item.items||ob.item.items.length===0
                    })
                }}
            />
            <br/>
            <div>
                <CodeSnippetJavaScript code={code}/>
            </div>
        </div>


    );
}
