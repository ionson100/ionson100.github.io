import {LeftMenu, MenuItem, CreateItem} from "bsr-left-sidebar";
import 'bsr-left-sidebar/dist/index.css'
import React from "react";
import {TbPointFilled} from "react-icons/tb";
import {FaCaretDown, FaCaretRight} from "react-icons/fa";
import {RiMenuFill} from "react-icons/ri";
import {CodeSnippetJavaScript} from "../../codeSnippetJavaScript";

export default function P7_2(){
    const listItems:MenuItem[]=[];
    listItems.push(CreateItem({content:"menu1",icon:<RiMenuFill/>}))
    listItems.push(CreateItem({content:"menu2",icon:<RiMenuFill/>}))
    const m=new MenuItem();
    m.content="menu3"
    m.icon=<RiMenuFill/>
    m.items?.push(CreateItem({content:"subMenu"}))
    listItems.push(m)
   return(
       <div style={{display:"flex",width:"100%",height:"100%"}}>
           <LeftMenu
               iconTree={<TbPointFilled size={12}/>}
               paddingItem={15}
               minWidth={55}
               width={350}
               items={listItems}
               iconClose={<FaCaretRight color={"#6c6b6b"}/>}
               iconOpen={<FaCaretDown/>}
               iconToggle={<RiMenuFill size={30} color={"yellow"}/>}
           />
           <div style={{paddingLeft:20}}>
               <CodeSnippetJavaScript code={`import React from "react";
import {LeftMenu, MenuItem, CreateItem} from "bsr-left-sidebar";
import 'bsr-left-sidebar/dist/index.css'

import {TbPointFilled} from "react-icons/tb";
import {FaCaretDown, FaCaretRight} from "react-icons/fa";
import {RiMenuFill} from "react-icons/ri";

export default function P7_2(){
    const listItems:MenuItem[]=[];
    listItems.push(CreateItem({content:"menu1",icon:<RiMenuFill/>}))
    listItems.push(CreateItem({content:"menu2",icon:<RiMenuFill/>}))
    const m=new MenuItem();
    m.content="menu3"
    m.icon=<RiMenuFill/>
    m.items?.push(CreateItem({content:"subMenu"}))
    listItems.push(m)
   return(
       <div style={{display:"flex",width:"100%",height:"100%"}}>
           <LeftMenu
               iconTree={<TbPointFilled size={12}/>}
               paddingItem={15}
               minWidth={55}
               width={350}
               items={listItems}
               iconClose={<FaCaretRight color={"#6c6b6b"}/>}
               iconOpen={<FaCaretDown/>}
               iconToggle={<RiMenuFill size={30} color={"yellow"}/>}
           />
           <div>
              Content
           </div>

       </div>
   )
}`}/>
           </div>

       </div>
   )
}