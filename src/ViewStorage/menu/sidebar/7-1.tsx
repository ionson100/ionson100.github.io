import {LeftMenu, MenuItem, CreateItem} from "bsr-left-sidebar";
import React, {ReactElement, useRef} from "react";
import {TbPointFilled} from "react-icons/tb";
import {FaCaretDown, FaCaretRight} from "react-icons/fa";
import {RiMenuFill} from "react-icons/ri";
import { FcAssistant } from "react-icons/fc";
import { FcBusinesswoman } from "react-icons/fc";
import { FcGallery } from "react-icons/fc";
import {CodeSnippetJavaScript} from "../../codeSnippetJavaScript";

const iconsStyle={
    paddingLeft: "0.3rem",
}
function getItems():MenuItem[]{
    const ListItem:MenuItem[]=[];
    {
        const m=CreateItem({content:"Item1",icon:<FcAssistant size={25} style={iconsStyle} />})
        m.items?.push(CreateItem({content:"subItem1"}))
        m.items?.push(CreateItem({content:"subItem2"}))
        ListItem.push(m);
    }
    {
        const menuBand=new MenuItem();
        menuBand.band=<div data-band={1} style={{color:"#4f4e4e",fontSize:15,textAlign:"center",backgroundColor:"black"}}>band</div>
        ListItem.push(menuBand)

    }

    ListItem.push(CreateItem({content:"Item2",icon:<FcBusinesswoman  size={25} style={iconsStyle}/>}))
    {
        const m=CreateItem({content:"Item3",icon:<FcAssistant size={25} style={iconsStyle} />})
        const sm=CreateItem({content:"subItem1"});
        sm.items?.push(CreateItem({content:"sub_subItem1"}))
        sm.items?.push(CreateItem({content:"sub_subItem2"}))
        m.items?.push(sm)
        m.items?.push(CreateItem({content:"subItem2"}))
        ListItem.push(m);
    }
    ListItem.push(CreateItem({content:"Item4",icon:<FcGallery  size={25} style={iconsStyle}/>}))
    ListItem.push(CreateItem({content:"test"}))
    return  ListItem
}
const styleHeader={
    padding:10,backgroundColor:"#212020"
}

export default function P7_1(){
    const mRefMenu = useRef<InstanceType<typeof LeftMenu>>(null)
    const mRefInput = useRef<HTMLInputElement>(null)

    function getHeader():ReactElement{
        return(
            <div style={styleHeader}>
                <button onClick={()=>{
                    mRefMenu.current!.Expand()
                }}>Expand</button>
                <button onClick={()=>{
                    mRefMenu.current!.Collapse()
                }}>Collapse</button>
                <button onClick={()=>{
                    if(!mRefInput.current?.value){
                        alert('id for click - empty')
                        return;
                    }
                    mRefMenu.current!.OpenMenuItemAndClick(mRefInput.current!.value)
                }}>Click by Id</button>
                <br/><br/>
                <input ref={mRefInput} type={'text'} style={{width:270}}/>
            </div>
        )
    }

    return(
        <div style={{display:"flex",width:"100%",height:"100%"}}>

                <LeftMenu

                    ref={mRefMenu}
                    header={getHeader()}
                    iconTree={<TbPointFilled size={12}/>}
                    paddingItem={15}
                    minWidth={55}
                    width={350}
                    items={getItems()}
                    iconClose={<FaCaretRight color={"#6c6b6b"}/>}
                    iconOpen={<FaCaretDown/>}
                    iconToggle={<RiMenuFill size={30} color={"yellow"}/>}
                    //footer={<div style={{height: 40, borderTop: "1px solid #6c6b6b"}}></div>}
                    onClickMenuItem={(a,o)=>{
                       mRefInput.current!.value= o.items!.id
                    }}
                    onClickToggle={(state)=>{
                        if(state){//open
                            if(mRefInput.current!.value){
                                mRefMenu.current!.OpenMenuItemAndClick(mRefInput.current!.value)
                            }

                        }
                        mRefMenu.current!.GetBody()?.querySelectorAll('[data-band="1"]').forEach((el) => {
                            el.classList.toggle('band-hidden');
                        })
                    }}

                    onChangeMenuWidth={(width)=>{
                        console.log(width)
                    }}

                />



            <div style={{height:"100%",width:"100%",overflowY:"auto"}}>
                <CodeSnippetJavaScript code={`import {LeftMenu, MenuItem, CreateItem} from "bsr-left-sidebar";
import 'bsr-left-sidebar/dist/index.css'
import React, {ReactElement, useRef} from "react";
import {TbPointFilled} from "react-icons/tb";
import {FaCaretDown, FaCaretRight} from "react-icons/fa";
import {RiMenuFill} from "react-icons/ri";
import { FcAssistant } from "react-icons/fc";
import { FcBusinesswoman } from "react-icons/fc";
import { FcGallery } from "react-icons/fc";


const iconsStyle={
    paddingLeft: "0.3rem",
}
function getItems():MenuItem[]{
    const ListItem:MenuItem[]=[];
    {
        const m=CreateItem({content:"Item1",icon:<FcAssistant size={25} style={iconsStyle} />})
        m.items?.push(CreateItem({content:"subItem1"}))
        m.items?.push(CreateItem({content:"subItem2"}))
        ListItem.push(m);
    }
     {
        const menuBand=new MenuItem();
        menuBand.band=<div data-band={1} style={{color:"#4f4e4e",fontSize:15,textAlign:"center",backgroundColor:"black"}}>band</div>
        ListItem.push(menuBand)

    }

    ListItem.push(CreateItem({content:"Item2",icon:<FcBusinesswoman  size={25} style={iconsStyle}/>}))
    {
        const m=CreateItem({content:"Item3",icon:<FcAssistant size={25} style={iconsStyle} />})
        const sm=CreateItem({content:"subItem1"});
        sm.items?.push(CreateItem({content:"sub_subItem1"}))
        sm.items?.push(CreateItem({content:"sub_subItem2"}))
        m.items?.push(sm)
        m.items?.push(CreateItem({content:"subItem2"}))
        ListItem.push(m);
    }
    ListItem.push(CreateItem({content:"Item4",icon:<FcGallery  size={25} style={iconsStyle}/>}))
    ListItem.push(CreateItem({content:"test"}))
    return  ListItem
}
const styleHeader={
    padding:10,backgroundColor:"#212020"
}

export default function P7_1(){
    const mRefMenu = useRef<InstanceType<typeof LeftMenu>>(null)
    const mRefInput = useRef<HTMLInputElement>(null)

    function getHeader():ReactElement{
        return(
            <div style={styleHeader}>
                <button onClick={()=>{
                    mRefMenu.current.Expand()
                }}>Expand</button>
                <button onClick={()=>{
                    mRefMenu.current.Collapse()
                }}>Collapse</button>
                <button onClick={()=>{
                    if(!mRefInput.current?.value){
                        alert('id for click - empty')
                        return;
                    }
                    mRefMenu.current.OpenMenuItemAndClick(mRefInput.current.value)
                }}>Click by Id</button>
                <br/><br/>
                <input ref={mRefInput} type={'text'} style={{width:270}}/>
            </div>
        )
    }

    return(
        <div style={{display:"flex",width:"100%",height:"100%"}}>

                <LeftMenu

                    ref={mRefMenu}
                    header={getHeader()}
                    iconTree={<TbPointFilled size={12}/>}
                    paddingItem={15}
                    minWidth={55}
                    width={350}
                    items={getItems()}
                    iconClose={<FaCaretRight color={"#6c6b6b"}/>}
                    iconOpen={<FaCaretDown/>}
                    iconToggle={<RiMenuFill size={30} color={"yellow"}/>}
                    //footer={<div style={{height: 40, borderTop: "1px solid #6c6b6b"}}></div>}
                    onClickMenuItem={(a,o)=>{
                       mRefInput.current.value= o.items.id
                    }}
                    onClickToggle={(state)=>{
                        if(state){//open
                            if(mRefInput.current.value){
                                mRefMenu.current.OpenMenuItemAndClick(mRefInput.current.value)
                            }
                        }
                         mRefMenu.current.GetBody()?.querySelectorAll('[data-band="1"]').forEach((el) => {
                            el.classList.toggle('band-hidden');
                        })
                    }}
                     onChangeMenuWidth={(width)=>{
                        console.log(width)
                    }}

                />



            <div style={{height:"100%",width:"100%",overflowY:"auto"}}>Content</div>`}/>
            </div>
        </div>
    )
}
