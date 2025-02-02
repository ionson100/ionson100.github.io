import {Menu, MenuItem} from "bsr-horizontal-menu";
import 'bsr-horizontal-menu/dist/index.css'
import {CodeSnippetDotNet} from "../../codeSnippetJavaScript";
import { AiFillCaretRight } from "react-icons/ai";
import { AiFillCaretDown } from "react-icons/ai";
import {useRef} from "react";


const code=`import {Menu, MenuItem} from "bsr-horizontal-menu";
import 'bsr-horizontal-menu/dist/index.css'
import { AiFillCaretRight } from "react-icons/ai";
import { AiFillCaretDown } from "react-icons/ai";
import {useRef} from "react";

const st={
    color:"#FFF",
    marginRight:10,
    marginLeft:20
}
export default function App(){
    const refMenu=useRef<InstanceType<typeof Menu>>(null);
    const refLabel=useRef<HTMLDivElement>(null);
    const refMenuItem = useRef<InstanceType<typeof MenuItem>>(null);

    const click =(item:MenuItem )=>{
        if(refLabel.current)
          refLabel.current.innerText=item.id

    }

     return (
         <>
             <Menu ref={refMenu}>
                 <MenuItem id={'menu1'} href={"#id-1"} content={'menu:1'} onClick={click}/>
                 <MenuItem content={'menu:2'}
                           ref={refMenuItem}
                           iconClose={<AiFillCaretRight style={st}/>}
                           iconOpen={<AiFillCaretDown style={st}/>}>
                     <MenuItem id={'menu21'} content={'menu:2-1'} onClick={click}/>
                     <MenuItem content={'menu:2-2'}
                               dropPosition={'right'}
                               iconClose={<AiFillCaretRight style={st}/>}
                               iconOpen={<AiFillCaretDown style={st}/>}>
                         <MenuItem id={'menu1cat'} content={'menu1: cat on the couch'} onClick={click}/>
                         <MenuItem id={'menu2'} content={'menu2'} onClick={click}/>
                         <MenuItem id={'menu3'} href={"#id-22"} content={'menu3'} onClick={click}/>
                     </MenuItem>
                 </MenuItem>
                 <MenuItem id={'manuUrl'} href={"#id-23"} content={'menu:url'} onClick={click}/>
             </Menu>
             <div ref={refLabel}></div>
             <div>
                 <button onClick={() => {
                     refMenuItem.current?.DeleteItemById("menu21")
                 }}>delete dy id (menu21)
                 </button>
                 <button onClick={() => {
                     refMenu.current?.DeleteItemById("menu1")
                 }}>delete dy id (menu1)
                 </button>
                 <br/>
                 <button onClick={() => {
                     refMenuItem.current?.AddIMenuItems(<MenuItem content={"add SubMenu"}/>)
                 }}>add subMenu (menu:2)
                 </button>
                 <br/>

                 <button onClick={() => {
                    refMenu.current?.AddMenuItems(<MenuItem content={"add Menu"} onClick={click}/>)
                 }}>add Item Menu
                 </button>
                 <br/>
                 <button onClick={() => {
                     refMenuItem.current?.ClearItems()
                 }}>Clear sub Menu (menu:2)
                 </button>
                 <br/>
                 <button onClick={() => {
                     refMenu.current?.ClearItems()
                     if(refLabel.current)
                           refLabel.current.innerText=''
                 }}>Clear Menu
                 </button>
                 <br/>
             </div>
         </>
     )
}`





















const st={
    color:"#FFF",
    marginRight:10,
    marginLeft:20
}
export default function P21_3(){
    const refMenu=useRef<InstanceType<typeof Menu>>(null);
    const refLabel=useRef<HTMLDivElement>(null);
    const refMenuItem = useRef<InstanceType<typeof MenuItem>>(null);

    const click =(item:MenuItem )=>{
        if(refLabel.current)
          refLabel.current.innerText=item.id

    }

     return (
         <>
             <Menu ref={refMenu}>
                 <MenuItem id={'menu1'} href={"#id-1"} content={'menu:1'} onClick={click}/>
                 <MenuItem content={'menu:2'}
                           ref={refMenuItem}
                           iconClose={<AiFillCaretRight style={st}/>}
                           iconOpen={<AiFillCaretDown style={st}/>}>
                     <MenuItem id={'menu21'} content={'menu:2-1'} onClick={click}/>
                     <MenuItem content={'menu:2-2'}
                               dropPosition={'right'}
                               iconClose={<AiFillCaretRight style={st}/>}
                               iconOpen={<AiFillCaretDown style={st}/>}>
                         <MenuItem id={'menu1cat'} content={'menu1: cat on the couch'} onClick={click}/>
                         <MenuItem id={'menu2'} content={'menu2'} onClick={click}/>
                         <MenuItem id={'menu3'} href={"#id-22"} content={'menu3'} onClick={click}/>
                     </MenuItem>
                 </MenuItem>
                 <MenuItem id={'manuUrl'} href={"#id-23"} content={'menu:url'} onClick={click}/>
             </Menu>
             <div ref={refLabel}></div>
             <div>
                 <button onClick={() => {
                     refMenuItem.current?.DeleteItemById("menu21")
                 }}>delete dy id (menu21)
                 </button>
                 <button onClick={() => {
                     refMenu.current?.DeleteItemById("menu1")
                 }}>delete dy id (menu1)
                 </button>
                 <br/>
                 <button onClick={() => {
                     refMenuItem.current?.AddIMenuItems(<MenuItem content={"add subMenu"}/>)
                 }}>add sub Menu (menu:2)
                 </button>
                 <br/>

                 <button onClick={() => {
                     refMenu.current?.AddMenuItems(<MenuItem content={"add Menu"} onClick={click}/>)
                 }}>add Item Menu
                 </button>
                 <br/>
                 <button onClick={() => {
                     refMenuItem.current?.ClearItems()
                 }}>Clear sub Menu (menu:2)
                 </button>
                 <br/>
                 <button onClick={() => {
                     refMenu.current?.ClearItems()
                     if(refLabel.current)
                         refLabel.current.innerText=''
                 }}>Clear Menu
                 </button>
                 <br/>
             </div>
             <CodeSnippetDotNet code={code}/>

         </>
     )
}