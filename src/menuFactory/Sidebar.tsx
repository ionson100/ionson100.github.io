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
import {TbPointFilled} from "react-icons/tb";
import {PiTreeViewDuotone} from "react-icons/pi";
import {CgMenuBoxed} from "react-icons/cg";
import {PiDatabase} from "react-icons/pi";
import { BsLayoutTextSidebar } from "react-icons/bs";
import { PiTabs } from "react-icons/pi";


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
            onClickMenuItem={() => {
                storage.isManualClick = true;
            }
            }
            onClickToggle={(state) => {
                if(state){

                   let myUrl = new URL(document.URL.replace(/#/g, "?"));
                   const tag = myUrl.searchParams.get("page");
                   if(tag){
                       mRefMenu.current!.OpenMenuItemOnly(tag)
                   }
                }
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


    {
        const m = new MenuItem();
        m.icon = <PiTreeViewDuotone size={25}/>
        m.content = "bsr-tree-virtual"
        m.id = 'bsrtree'
        m.url = '#page=bsrtree'
        const mi = new MenuItem()
        mi.url = "#page=5-300"
        mi.icon = <CgMenuBoxed/>
        mi.content = 'Menu Item'
        /**---------------menuitem-----------**/
        mi.items!.push(CreateItem({
            icon: <CgMenuBoxed size={15} color={'#b0e6f5'}/>,
            content: "id",
            url: '#page=5-30',
            id: "5-30"
        }))
        mi.items!.push(CreateItem({
            icon: <CgMenuBoxed size={15} color={'#b0e6f5'}/>,
            content: "content",
            url: '#page=5-31',
            id: "5-31"
        }))
        mi.items!.push(CreateItem({
            icon: <CgMenuBoxed size={15} color={'#b0e6f5'}/>,
            content: "title",
            url: '#page=5-32',
            id: "5-32"
        }))
        mi.items!.push(CreateItem({
            icon: <CgMenuBoxed size={15} color={'#b0e6f5'}/>,
            content: "icon",
            url: '#page=5-33',
            id: "5-33"
        }))
        mi.items!.push(CreateItem({
            icon: <CgMenuBoxed size={15} color={'#b0e6f5'}/>,
            content: "items",
            url: '#page=5-34',
            id: "5-34"
        }))
        mi.items!.push(CreateItem({
            icon: <CgMenuBoxed size={15} color={'#b0e6f5'}/>,
            content: "isOpen",
            url: '#page=5-35',
            id: "5-35"
        }))
        mi.items!.push(CreateItem({
            icon: <CgMenuBoxed size={15} color={'#b0e6f5'}/>,
            content: "url",
            url: '#page=5-36',
            id: "5-36"
        }))
        mi.items!.push(CreateItem({
            icon: <CgMenuBoxed size={15} color={'#b0e6f5'}/>,
            content: "style",
            url: '#page=5-37',
            id: "5-37"
        }))
        mi.items!.push(CreateItem({
            icon: <CgMenuBoxed size={15} color={'#b0e6f5'}/>,
            content: "className",
            url: '#page=5-38',
            id: "5-38"
        }))
        mi.items!.push(CreateItem({
            icon: <CgMenuBoxed size={15} color={'#b0e6f5'}/>,
            content: "dataUser",
            url: '#page=5-39',
            id: "5-39"
        }))
        mi.items!.push(CreateItem({
            icon: <CgMenuBoxed size={15} color={'#b0e6f5'}/>,
            content: "target",
            url: '#page=5-40',
            id: "5-40"
        }))
        mi.items!.push(CreateItem({
            icon: <CgMenuBoxed size={15} color={'#b0e6f5'}/>,
            content: "selected",
            url: '#page=5-41',
            id: "5-41"
        }))

        /**---------------menuitem-----------**/


        m.items?.push(mi)

        m.items!.push(CreateItem({content: "Use the easy way", url: '#page=5-111', id: "5-111"}))

        m.items!.push(CreateItem({content: "Examples", url: '#page=5-1', id: "5-1"}))
        m.items!.push(CreateItem({content: "itemSize", url: '#page=5-2', id: "5-2"}))
        m.items!.push(CreateItem({content: "wight", url: '#page=5-4', id: "5-4"}))
        m.items!.push(CreateItem({content: "height", url: '#page=5-4', id: "5-41"}))
        m.items!.push(CreateItem({content: "callbackVirtualSize", url: '#page=5-3', id: "5-3"}))
        m.items!.push(CreateItem({content: "marginItem", url: '#page=5-5', id: "5-5"}))
        m.items!.push(CreateItem({content: "iconOpen", url: '#page=5-6', id: "5-6"}))
        m.items!.push(CreateItem({content: "iconClose", url: '#page=5-7', id: "5-7"}))
        m.items!.push(CreateItem({content: "iconTree", url: '#page=5-8', id: "5-8"}))
        m.items!.push(CreateItem({content: "onClickMenuItem", url: '#page=5-9', id: "5-9"}))
        m.items!.push(CreateItem({content: "useCheckBox", url: '#page=5-10', id: "5-10"}))
        m.items!.push(CreateItem({content: "onChecked", url: '#page=5-11', id: "5-11"}))


        m.items!.push(CreateItem({content: "Expand", url: '#page=5-12', id: "5-12"}))
        m.items!.push(CreateItem({content: "Collapse", url: '#page=5-13', id: "5-13"}))


        m.items!.push(CreateItem({content: "add Items, delete item by id", url: '#page=5-14', id: "5-14"}))
        m.items!.push(CreateItem({content: "OpenMenuItemOnly", url: '#page=5-16', id: "5-16"}))
        m.items!.push(CreateItem({content: "OpenMenuItemAndClick", url: '#page=5-17', id: "5-17"}))
        m.items!.push(CreateItem({content: "GetPath by id", url: '#page=5-18', id: "5-18"}))

        m.items!.push(CreateItem({content: "GetMenuItems", url: '#page=5-19', id: "5-19"}))
        m.items!.push(CreateItem({content: "DeleteAllItems", url: '#page=5-20', id: "5-20"}))
        m.items!.push(CreateItem({content: "RewriteItems", url: '#page=5-21', id: "5-21"}))
        m.items!.push(CreateItem({content: "RefreshMenu", url: '#page=5-22', id: "5-22"}))
        list.push(m)


    }

    {
        const m = new MenuItem();
        m.icon = <BsLayoutTextSidebar size={25}/>
        m.content = "bsr-left-sidebar"
        m.id = 'sidebar'
        m.url = '#page=sidebar'

        m.items!.push(CreateItem({content: "Quick Start", url: '#page=7-1', id: "7-1"}))
        m.items!.push(CreateItem({content: "Simple  example", url: '#page=7-2', id: "7-2"}))

        list.push(m)
    }

    {
        const m = new MenuItem();
        m.icon = <PiTabs size={25}/>
        m.content = "bsr-tab"
        m.id = 'tabs'
        m.url = '#page=tabs'

        m.items!.push(CreateItem({content: "Example", url: '#page=8-1', id: "8-1"}))
        m.items!.push(CreateItem({content: "Tabs: buttonPrefix", url: '#page=8-2', id: "8-2"}))
        m.items!.push(CreateItem({content: "Tabs: SelectTabsById", url: '#page=8-10', id: "8-10"}))


        m.items!.push(CreateItem({content: "Tab:eventKey", url: '#page=8-3', id: "8-3"}))

        m.items!.push(CreateItem({content: " Tab: onSelect", url: '#page=8-3', id: "8-3"}))
        m.items!.push(CreateItem({content: "Tab: id", url: '#page=8-3', id: "8-3"}))

        m.items!.push(CreateItem({content: "Tab: title", url: '#page=8-4', id: "8-4"}))
        m.items!.push(CreateItem({content: "Tab: icon", url: '#page=8-4', id: "8-4"}))

        m.items!.push(CreateItem({content: "Tab: isOpen", url: '#page=8-5', id: "8-5"}))
        m.items!.push(CreateItem({content: "Tab: width", url: '#page=8-6', id: "8-6"}))

        m.items!.push(CreateItem({content: "Tab: SelectTab", url: '#page=8-7', id: "8-7"}))
        m.items!.push(CreateItem({content: "Tab: SetShow", url: '#page=8-8', id: "8-8"}))
        m.items!.push(CreateItem({content: "Tab: SetDisabled", url: '#page=8-9', id: "8-9"}))
        list.push(m)
    }






    {
        const m = new MenuItem();
        m.icon = <PiDatabase size={25}/>
        m.content = "bitnik.orm C#"
        m.id = 'orm'
        m.url = '#page=orm'

        m.items!.push(CreateItem({content: "Quick Start", url: '#page=6-1', id: "6-1"}))
        m.items!.push(CreateItem({content: "Mapping Attributes", url: '#page=6-2', id: "6-2"}))
        m.items!.push(CreateItem({content: "Transaction", url: '#page=6-4', id: "6-4"}))
        m.items!.push(CreateItem({content: "Insert Update Delete", url: '#page=6-3', id: "6-3"}))
        m.items!.push(CreateItem({content: "Link to Sql", url: '#page=6-5', id: "6-5"}))
        m.items!.push(CreateItem({content: "Free Sql", url: '#page=6-6', id: "6-6"}))
        m.items!.push(CreateItem({content: "Interface IMapAction", url: '#page=6-7', id: "6-7"}))
        m.items!.push(CreateItem({
            content: "Extension methods for post-processing results",
            title: "Extension methods for post-processing results",
            url: '#page=6-8',
            id: "6-8"
        }))
        m.items!.push(CreateItem({
            content: "Calling the constructor when creating an object from the database",
            title: "Calling the constructor when creating an object from the database",
            url: '#page=6-9',
            id: "6-9"
        }))
        m.items!.push(CreateItem({content: "Work with subclasses", url: '#page=6-10', id: "6-10"}))
        m.items!.push(CreateItem({
            content: "Working with a multi-database environment",
            title: "Working with a multi-database environment",
            url: '#page=6-11',
            id: "6-11"
        }))
        m.items!.push(CreateItem({
            content: "Example working multi-database ",
            title: "Working with a multi-database environment",
            url: '#page=6-12',
            id: "6-12"
        }))
        m.items!.push(CreateItem({content: "Working with geometry 2d model", url: '#page=6-14', id: "6-14"}))
        m.items!.push(CreateItem({content: "IGeoShape", url: '#page=6-16', id: "6-16"}))
        m.items!.push(CreateItem({content: "Example geometry", url: '#page=6-15', id: "6-15"}))
        m.items!.push(CreateItem({content: "Example map", url: '#page=6-17', id: "6-17"}))
        m.items!.push(CreateItem({content: "Source Example", url: '#page=6-18', id: "6-18"}))
        m.items!.push(CreateItem({content: "Json", url: '#page=6-19', id: "6-19"}))
        list.push(m)
    }

    return list


}

