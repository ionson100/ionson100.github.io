import {LeftMenu, MenuItem, CreateItem} from "bsr-left-sidebar";
import {useEffect, useRef} from "react";
import {TbPointFilled} from "react-icons/tb";
import {FaCaretDown, FaCaretRight} from "react-icons/fa";
import {RiMenuFill} from "react-icons/ri";
import { FcAssistant } from "react-icons/fc";
import { FcBusinesswoman } from "react-icons/fc";
import { FcEngineering } from "react-icons/fc";
import { FcGallery } from "react-icons/fc";

const iconsStyle={
    paddingLeft: "0.3rem",
}

export default function P7_1(){
    const mRefMenu = useRef<InstanceType<typeof LeftMenu>>(null)
    const ListItem:MenuItem[]=[];
    ListItem.push(CreateItem({content:"Item1",icon:<FcAssistant size={25} style={iconsStyle}/>}));
    ListItem.push(CreateItem({content:"Item2",icon:<FcBusinesswoman  size={25} style={iconsStyle}/>}))
    ListItem.push(CreateItem({content:"Item3",icon:<FcEngineering  size={25} style={iconsStyle}/>}))
    ListItem.push(CreateItem({content:"Item4",icon:<FcGallery  size={25} style={iconsStyle}/>}))
    ListItem.push(CreateItem({content:"test"}))
    useEffect(()=>{
        mRefMenu.current!.RefreshSize()
    },[])

    return(
        <div style={{display:"flex",width:"100%",height:"100%"}}>

                <LeftMenu
                    style={{height:"100%"}}
                    ref={mRefMenu}
                    // header={header(() => {
                    //     return mRefMenu.current
                    // })}
                    header={<div style={{height:100}}></div>}
                    iconTree={<TbPointFilled size={12}/>}
                    paddingItem={15}
                    minWidth={55}
                    width={350}
                    items={ListItem}
                    iconClose={<FaCaretRight color={"#6c6b6b"}/>}
                    iconOpen={<FaCaretDown/>}
                    iconToggle={<RiMenuFill size={30} color={"yellow"}/>}
                    footer={<div style={{height: 40, borderTop: "1px solid #6c6b6b"}}></div>}

                    // onClickMenuItem={() => {
                    //     storage.isManualClick = true;
                    // }
                    //}
                    // onClickToggle={(state) => {
                    //     if(state){
                    //
                    //         let myUrl = new URL(document.URL.replace(/#/g, "?"));
                    //         const tag = myUrl.searchParams.get("page");
                    //         if(tag){
                    //             mRefMenu.current!.OpenMenuItemOnly(tag)
                    //         }
                    //     }
                    // }
                    //}

                />



            <div style={{height:"100%",width:"fit-content",background:"green"}}></div>
        </div>
    )
}
