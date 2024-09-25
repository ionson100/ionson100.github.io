import React, {useRef} from "react";
import {MenuItem, TreeMenu} from "bsr-tree-virtual";
import {MdOutlineSubdirectoryArrowRight} from "react-icons/md";
import {FaRegMinusSquare, FaRegPlusSquare} from "react-icons/fa";
import {CodeSnippetJavaScript} from "../../codeSnippetJavaScript";
import {CreateItem} from "bsr-tree-virtual";
import {LiaElementor} from "react-icons/lia";
import {CgMenuBoxed} from "react-icons/cg";
import {v4 as uuidv4} from 'uuid';

/**----------------------------------------**/
const code = `
import React, {useRef} from "react";
import {MenuItem, TreeMenu} from "bsr-tree-virtual";
import {CreateItem} from "bsr-tree-virtual";
import "bsr-tree-virtual/dist/index.css"
import {MdOutlineSubdirectoryArrowRight} from "react-icons/md";
import {FaRegMinusSquare, FaRegPlusSquare} from "react-icons/fa";


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
export default function P5_30() {
    const mRefTree = useRef<InstanceType<typeof TreeMenu>>(null);

    return (
        <div style={{width: 600}}>
            <TreeMenu
                ref={mRefTree}
                wight={600}
                style={{marginTop: 5}}
                iconTree={<MdOutlineSubdirectoryArrowRight color={"black"} size={20}/>}
                iconClose={<FaRegPlusSquare color={"black"} size={20}/>}
                iconOpen={<FaRegMinusSquare color={"black"} size={20}/>}
                items={getListItem()}
                onClickMenuItem={(s, o) => {
                    console.log('clicked: ' + o.item.id)
                }}
            />
            <br/>
            <p>press the key Alt+Shift+2+2</p>
            <button onClick={() => {
                const menu = new MenuItem()
                menu.icon = <CgMenuBoxed color={'blue'}/>
                menu.content = <div>added</div>
                menu.id = uuidv4();
                menu.style = {color: "red",fontWeight:"bold"}
                menu.accessKey = "22"
                menu.title = 'added'
                menu.url = 'https://www.google.com/'
                menu.target = '_blank'
                menu.isOpen=true;
                menu.selected=true;
                menu.items?.push(CreateItem({content: "sub",selected:true}))
                mRefTree.current.AddItems(menu)
            }}>Add Item
            </button>
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

export default function P5_30() {
    const mRefTree = useRef<InstanceType<typeof TreeMenu>>(null);

    return (
        <div style={{width: 600}}>
            <TreeMenu
                ref={mRefTree}
                useCheckBox={true}
                wight={600}
                style={{marginTop: 5}}
                iconTree={<MdOutlineSubdirectoryArrowRight color={"black"} size={20}/>}
                iconClose={<FaRegPlusSquare color={"black"} size={20}/>}
                iconOpen={<FaRegMinusSquare color={"black"} size={20}/>}
                items={getListItem()}
                onClickMenuItem={(s, o) => {
                    console.log('clicked: ' + o.item!.id)
                }}
            />
            <br/>
            <p>press the key Alt+Shift+2+2</p>
            <button onClick={() => {
                const menu = new MenuItem()
                menu.icon = <CgMenuBoxed color={'blue'}/>
                menu.content = <div>added</div>
                menu.id = uuidv4();
                menu.style = {color: "red",fontWeight:"bold"}
                menu.accessKey = "22"
                menu.title = 'added'
                menu.url = 'https://www.google.com/'
                menu.target = '_blank'
                menu.isOpen=true;
                menu.selected=true;

                menu.items?.push(CreateItem({content: "sub",selected:true}))
                mRefTree.current!.AddItems(menu)
            }}>Add Item
            </button>

            <div>
                <CodeSnippetJavaScript code={code}/>
            </div>
        </div>
    )
}

