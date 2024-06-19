import {LeftMenu, MenuItem, CreateItem} from "bsr-left-sidebar";
import {AiOutlineMenuUnfold} from "react-icons/ai";
import {FaCaretRight, FaCaretDown} from "react-icons/fa";
import {RiMenuFill} from "react-icons/ri";
import 'bsr-left-sidebar/dist/index.css'
import {BsWindowStack} from "react-icons/bs";
import {BuildContent, RunListenerHash} from "../hachListener";
import {useRef} from "react";

import {RxAvatar} from "react-icons/rx";

import {BsArrowsCollapse, BsArrowsExpand} from "react-icons/bs";
import {storage} from "../utils";
import { TbPointFilled } from "react-icons/tb";


export function header(callback: () => (InstanceType<typeof LeftMenu>) | null) {
    return (
        <div style={{display: "flex", borderBottom: "1px solid #6c6b6b"}}>

            <BsArrowsExpand size={20} className={'header-menu-icons'} title={'expand'} onClick={() => {

                callback()?.Expand()

            }}/>

            <BsArrowsCollapse size={20} className={'header-menu-icons'} title={'collapse'}
                              onClick={() => {
                                  callback()?.Collapse()
                              }}/>
        </div>
    )
}

export function Sidebar() {

    const mRefMenu = useRef<InstanceType<typeof LeftMenu>>(null)


    try {
        return <LeftMenu
            ref={mRefMenu}
            header={header(() => {
                return mRefMenu.current
            })}
            iconTree={<TbPointFilled size={12}/>}
            paddingItem={15}
            minWidth={45}
            width={350}
            iconClose={<FaCaretRight color={"#6c6b6b"}/>}
            iconOpen={<FaCaretDown/>}
            iconToggle={<RiMenuFill size={30} color={"yellow"}/>}
            footer={<div style={{height: 40, borderTop: "1px solid #6c6b6b"}}></div>}
            items={GetItems()}
            onClickMenuItem={()=>{
                storage.isManualClick=true;
            }
            }

        />
    } finally {
        storage.menu = () => {
            return mRefMenu.current;
        }
        RunListenerHash()
        setTimeout(() => {
            if (window.location.hash) {
                const url = window.location.toString()
                BuildContent(url)
            }
        }, 100)
    }


}

function GetItems(): Array<MenuItem> {
    const list: MenuItem[] = [];
    {
        const m = new MenuItem();
        m.icon = <AiOutlineMenuUnfold size={25}/>
        m.content = "bsr-menu"
        m.id = 'bsrmenu'
        m.url = '#page=bsrmenu'
        m.items!.push(CreateItem({content: "Examples", url: '#page=1-1', id: "1-1"}))
        m.items!.push(CreateItem({content: "Quick start", url: '#page=1-2', id: "1-2"}))
        m.items!.push(CreateItem({content: "behavior", url: '#page=1-3', id: "1-3"}))
        m.items!.push(CreateItem({content: "setDisabled(boolean)", url: '#page=1-4', id: "1-4"}))
        m.items!.push(CreateItem({content: "iconDropOpen iconDropClose", url: '#page=1-5', id: "1-5"}))
        m.items!.push(CreateItem({content: "Drop open() close()", url: '#page=1-6', id: "1-6"}))
        m.items!.push(CreateItem({content: "setShow(boolean)", url: '#page=1-7', id: "1-7"}))
        m.items!.push(CreateItem({content: "menu popUp wrapper", url: '#page=1-8', id: "1-8"}))
        m.items!.push(CreateItem({content: "CloseMenu()", url: '#page=1-9', id: "1-9"}))
        m.items!.push(CreateItem({content: "setContent(amy,amy,any)", url: '#page=1-10', id: "1-10"}))
        m.items!.push(CreateItem({
            content: "contentLeft content contentRight",
            url: '#&page=1-11',
            id: "1-11"
        }))
        m.items!.push(CreateItem({content: "onClick", url: '#page=1-12', id: "1-12"}))
        m.items!.push(CreateItem({content: "onVisible", url: '#page=1-14', id: "1-14"}))
        m.items!.push(CreateItem({content: "buildContent", url: '#page=1-15', id: "1-15"}))
        m.items!.push(CreateItem({content: "add checkBox", url: '#page=1-16', id: "1-16"}))
        m.items!.push(CreateItem({content: "add any content", url: '#page=1-17', id: "1-17"}))
        m.items!.push(CreateItem({content: "default style", url: '#page=1-13', id: "1-13"}))
        list.push(m)
    }

    {
        const m = new MenuItem();
        m.icon = <RxAvatar size={25}/>
        m.content = "bsr-sau (simple avatar uploader)"
        m.url = '#page=bsrsau'
        m.id = 'bsrsau'
        m.items!.push(CreateItem({content: "selectedFile", url: '#page=3-1', id: "3-1"}))
        m.items!.push(CreateItem({content: "clientError serverError", url: '#page=3-2', id: "3-2"}))
        m.items!.push(CreateItem({content: "headerKeyValue", url: '#page=3-3', id: "3-3"}))
        m.items!.push(CreateItem({content: "callbackFormData", url: '#page=3-4', id: "3-4"}))
        m.items!.push(CreateItem({content: "preview previewAsync", url: '#page=3-5', id: "3-5"}))
        m.items!.push(CreateItem({content: "beforeUpload", url: '#page=3-6', id: "3-6"}))
        m.items!.push(CreateItem({content: "canvasSize", url: '#page=3-7', id: "3-7"}))
        m.items!.push(CreateItem({content: "clear()", url: '#page=3-8', id: "3-8"}))
        m.items!.push(CreateItem({content: "getCanvasFormData()", url: '#page=3-9', id: "3-9"}))
        m.items!.push(CreateItem({content: "Example ASP.NET Core", url: '#page=3-10', id: "3-10"}))
        list.push(m)
    }

    {
        const m = new MenuItem();
        m.icon = <BsWindowStack size={25}/>
        m.content = "bsr-modaldialog"
        m.id = 'bsrdialog'
        m.url = '#page=bsrdialog'
        m.items!.push(CreateItem({content: "Examples", url: '#page=4-1', id: "4-1"}))
        m.items!.push(CreateItem({
            content: "closeModalDialogClickForeignArea",
            url: '#page=4-2',
            id: "4-2"
        }))
        m.items!.push(CreateItem({content: "refDialog", url: '#page=4-3', id: "4-3"}))
        m.items!.push(CreateItem({content: "icon", url: '#page=4-4', id: "4-4"}))
        m.items!.push(CreateItem({content: "header body buttons", url: '#page=4-5', id: "4-5"}))
        m.items!.push(CreateItem({content: "styles", url: '#page=4-6', id: "4-6"}))
        m.items!.push(CreateItem({content: "onShow onClose", url: '#page=4-7', id: "4-7"}))
        m.items!.push(CreateItem({content: "onCancel", url: '#page=4-8', id: "4-8"}))
        m.items!.push(CreateItem({content: "timeOut", url: '#page=4-9', id: "4-9"}))
        m.items!.push(CreateItem({content: "Difficult dialogue", url: '#page=4-10', id: "4-10"}))
        m.items!.push(CreateItem({content: "Difficult dialogue SelfClose", url: '#page=4-11', id: "4-11"}))
        m.items!.push(CreateItem({content: "Close dialog from form", url: '#page=4-15', id: "4-15"}))
        m.items!.push(CreateItem({content: "Register Dialog", url: '#page=4-12', id: "4-12"}))
        m.items!.push(CreateItem({content: "Restricted use", url: '#page=4-14', id: "4-14"}))
        list.push(m)
    }

    return list
}

