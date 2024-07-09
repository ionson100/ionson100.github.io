import React from "react";


export default function IndexBsrSidebar() {


    return (
        <>
            <table style={{width: "80%"}}>
                <caption>
                    props bsr-left-sidebar
                </caption>
                <tbody>
                <tr>
                    <th style={{width: "20%"}}>Name</th>
                    <th style={{width: "40%"}}>Type</th>
                    <th style={{width: "20%"}}>Default</th>
                    <th style={{width: "20%"}}>Description</th>
                </tr>
                <tr>
                    <td data-d={1}><a href="#page=5-2">width</a></td>
                    <td>number</td>
                    <td>200</td>
                    <td>Default menu bar width</td>
                </tr>

                <tr>
                    <td data-d={1}><a href="#page=5-4">minWidth</a></td>
                    <td>number</td>
                    <td>50</td>
                    <td>Collapsed menu bar width</td>
                </tr>

                <tr>
                    <td data-d={1}><a href="#page=5-4">items</a></td>
                    <td>MenuItem[]</td>
                    <td>[]</td>
                    <td>Array ItemMenu</td>
                </tr>

                <tr>
                    <td data-d={1}><a href="#page=5-4">header</a></td>
                    <td>ReactElement</td>
                    <td>undefined</td>
                    <td>Top of the menu bar</td>
                </tr>

                <tr>
                    <td data-d={1}><a href="#page=5-4">footer</a></td>
                    <td>ReactElement</td>
                    <td>undefined</td>
                    <td>Bottom of menu bar</td>
                </tr>

                <tr>
                    <td data-d={1}><a href="#page=5-4">style</a></td>
                    <td>React.CSSProperties</td>
                    <td>undefined</td>
                    <td>Menu style</td>
                </tr>

                <tr>
                    <td data-d={1}><a href="#page=5-4">style</a></td>
                    <td>React.CSSProperties</td>
                    <td>undefined</td>
                    <td>Menu style</td>
                </tr>

                <tr>
                    <td data-d={1}><a href="#page=5-4">className</a></td>
                    <td>string</td>
                    <td>undefined</td>
                    <td>Menu css class style</td>
                </tr>

                <tr>
                    <td data-d={1}><a href="#page=5-4">iconToggle</a></td>
                    <td>any</td>
                    <td>undefined</td>
                    <td>Icon button toggle menu</td>
                </tr>


                <tr>
                    <td data-d={1}><a href="#page=5-5">paddingItem</a></td>
                    <td>number</td>
                    <td>20</td>
                    <td>Padding value for child item</td>
                </tr>

                <tr>
                    <td data-d={1}><a href="#page=5-6">iconOpen</a></td>
                    <td>any</td>
                    <td>undefined</td>
                    <td>Icon for open item</td>
                </tr>
                <tr>
                    <td data-d={1}><a href="#page=5-7">iconClose</a></td>
                    <td>any</td>
                    <td>undefined</td>
                    <td>Icon for close item</td>
                </tr>
                <tr>
                    <td data-d={1}><a href="#page=5-8">iconTree</a></td>
                    <td>any</td>
                    <td>undefined</td>
                    <td>Icon for child item</td>
                </tr>
                <tr>
                    <td data-d={1}><a href="#page=5-9">onClickMenuItem</a></td>
                    <td>
                        <pre>((sender: LeftMenu, obj: ParamsClick))=&rang;void <br/>
                         ParamsClick = &#123; <br/>
                            &nbsp;&nbsp;path: MenuItem[] <br/>
                            &nbsp;&nbsp;items: MenuItem <br/>
                            &nbsp;&nbsp;element: HTMLAnchorElement <br/>
                            &#125; <br/>
                        </pre>
                    </td>
                    <td>undefined</td>
                    <td>Item click event</td>
                </tr>

                <tr>
                    <td data-d={1}><a href="#page=5-10">onChangeMenuWidth</a></td>
                    <td>(width: number) =&rang; void</td>
                    <td>undefined</td>
                    <td>Event of changing the width of the menu bar by dragging the mouse</td>
                </tr>

                <tr>
                    <td data-d={1}><a href="#page=5-11">onClickToggle</a></td>
                    <td>
                        <pre>(state:boolean)=&rang;void</pre>
                    </td>
                    <td>undefined</td>
                    <td>Event toggle menu</td>
                </tr>
                </tbody>
            </table>
            <br/>


            <table style={{width: "80%"}}>
                <caption>
                    Instance LeftMenu functions
                </caption>
                <tbody>
                <tr>
                    <th style={{width: "20%"}}>Name</th>
                    <th style={{width: "30%"}}>Type</th>
                    <th style={{width: "50%"}}>Description</th>
                </tr>
                <tr>
                    <td data-d={1}><a href="#page=5-12">Expand</a></td>
                    <td>()=&rang;void</td>
                    <td>Expand tree</td>
                </tr>
                <tr>
                    <td data-d={1}><a href="#page=5-13">Collapse</a></td>
                    <td>void</td>
                    <td>Collapse tree</td>
                </tr>

                <tr>
                    <td data-d={1}><a href="#page=5-14">AddItems</a></td>
                    <td>(...MenuItem)=&rang;void</td>
                    <td>Add items</td>
                </tr>

                <tr>
                    <td data-d={1}><a href="#page=5-14">DeleteItem</a></td>
                    <td>(id)=&rang;void</td>
                    <td>Delete item by id</td>
                </tr>

                <tr>
                    <td data-d={1}><a href="#page=5-16">OpenMenuItemOnly</a></td>
                    <td>(string)=&rang;void</td>
                    <td>Open only tree menu by id </td>
                </tr>
                <tr>
                    <td data-d={1}><a href="#page=5-17">OpenMenuItemAndClick</a></td>
                    <td>(string)=&rang;void</td>
                    <td>Open tree menu by id and click </td>
                </tr>
                <tr>
                    <td data-d={1}><a href="#page=5-18">GetPath</a></td>
                    <td>(string)=&rang;void</td>
                    <td>Get tree menu path</td>
                </tr>



                <tr>
                    <td data-d={1}><a href="#page=5-19">GetMenuItems</a></td>
                    <td>(string)=&rang;MenuItem</td>
                    <td>Getting a reference to an object MenuItem by id</td>
                </tr>
                <tr>
                    <td data-d={1}><a href="#page=5-20">DeleteAllItems</a></td>
                    <td>()=&rang;void</td>
                    <td>Clears the list MenuItem</td>
                </tr>
                <tr>
                    <td data-d={1}><a href="#page=5-21">RewriteItems</a></td>
                    <td>(array MenuItem)=&rang;void</td>
                    <td>Replaces a list with a new list MenuItem</td>
                </tr>
                <tr>
                    <td data-d={1}><a href="#page=5-22">RefreshMenu</a></td>
                    <td>(string)=&rang;void</td>
                    <td>Redraws the panel tree</td>
                </tr>
                </tbody>
            </table>

            <br/>

            <table style={{width: "80%"}}>
                <caption>
                    Props MenuItem
                </caption>
                <tbody>
                <tr>

                    <th style={{width: "20%"}}>Name</th>
                    <th style={{width: "40%"}}>Type</th>
                    <th style={{width: "20%"}}>Default</th>
                    <th style={{width: "20%"}}>Description</th>

                </tr>
                <tr>
                    <td data-d={1}><a href="#page=5-30">id</a></td>
                    <td>string</td>
                    <td>required</td>
                    <td>Unique identifier, required</td>
                </tr>

                <tr>
                    <td data-d={1}><a href="#page=5-31">content</a></td>
                    <td>any</td>
                    <td>undefined</td>
                    <td>Menu content</td>
                </tr>

                <tr>
                    <td data-d={1}><a href="#page=5-32">title</a></td>
                    <td>string</td>
                    <td>undefined</td>
                    <td>The title global attribute  contains text representing advisory information</td>
                </tr>

                <tr>
                    <td data-d={1}><a href="#page=5-33">icon</a></td>
                    <td>any</td>
                    <td>undefined</td>
                    <td>Item icon ( use optional)</td>
                </tr>
                <tr>
                    <td data-d={1}><a href="#page=5-34">items</a></td>
                    <td>Array:MenuItem</td>
                    <td>[]</td>
                    <td>children items ( use optional)</td>
                </tr>

                <tr>
                    <td data-d={1}><a href="#page=5-35">isOpen</a></td>
                    <td>boolean</td>
                    <td>false</td>
                    <td>Status open submenu</td>
                </tr>
                <tr>
                    <td data-d={1}><a href="#page=5-36">url</a></td>
                    <td>string</td>
                    <td>undefined</td>
                    <td>url link (use optional)</td>
                </tr>
                <tr>
                    <td data-d={1}><a href="#page=5-37">style</a></td>
                    <td>React.CSSProperties</td>
                    <td>undefined</td>
                    <td>Style item</td>
                </tr>
                <tr>
                    <td data-d={1}><a href="#page=5-38">className</a></td>
                    <td>string</td>
                    <td>'tree-menu-item-v'</td>
                    <td>Css class name</td>
                </tr>
                <tr>
                    <td data-d={1}><a href="#page=5-39">dataUser</a></td>
                    <td>string</td>
                    <td>undefined</td>
                    <td>Spend attribute user data</td>
                </tr>
                <tr>
                    <td data-d={1}><a href="#page=5-40">target</a></td>
                    <td>string</td>
                    <td>undefined</td>
                    <td>Target link item as link</td>
                </tr>

                <tr>
                    <td data-d={1}><a href="#page=5-41">selected</a></td>
                    <td>boolean</td>
                    <td>undefined</td>
                    <td>checked item (only use checkBox)</td>
                </tr>
                <tr>
                    <td data-d={1}><a href="#page=5-42">accessKey</a></td>
                    <td>string</td>
                    <td>undefined</td>
                    <td>keyboard shortcut for quick menu access (Alt+ Shift+keys)</td>
                </tr>

                </tbody>
            </table>
        </>
    )
}







