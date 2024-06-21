import React from "react";
import {CreateItem, MenuItem} from "bsr-left-sidebar";

export default function IndexBsrTree() {


    return (
        <>
            <table style={{width: "80%"}}>
                <caption>
                    props bsr-tree-virtual
                </caption>
                <tbody>
                <tr>
                    <th style={{width: "20%"}}>Name</th>
                    <th style={{width: "40%"}}>Type</th>
                    <th style={{width: "20%"}}>Default</th>
                    <th style={{width: "20%"}}>Description</th>
                </tr>
                <tr>
                    <td data-d={1}><a href="#page=5-2">itemSize</a></td>
                    <td>number</td>
                    <td>35</td>
                    <td>Approximate height of element item</td>
                </tr>

                <tr>
                    <td data-d={1}><a href="#page=5-4">height</a></td>
                    <td>number</td>
                    <td>200</td>
                    <td>Tree panel height, callbackVirtualSize alternative</td>
                </tr>

                <tr>
                    <td data-d={1}><a href="#page=5-4">wight</a></td>
                    <td>number</td>
                    <td>200</td>
                    <td>Tree panel wight, callbackVirtualSize alternative</td>
                </tr>


                <tr>
                    <td data-d={1}><a href="#page=5-3">callbackVirtualSize</a></td>
                    <td>()=&rang;widht,height</td>
                    <td>undefined</td>
                    <td>Getting measurements of the tree panel</td>
                </tr>
                <tr>
                    <td data-d={1}><a href="#page=5-5">marginItem</a></td>
                    <td>number</td>
                    <td>20</td>
                    <td>Margin value for child item</td>
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
                    <td><pre>(TreeMenu,&#123;MenuItem[],MenuItem,HTMLAnchorElement&#125;)=&rang;void</pre></td>
                    <td>undefined</td>
                    <td>Item click event</td>
                </tr>

                <tr>
                    <td data-d={1}><a href="#page=5-10">useCheckbox</a></td>
                    <td>boolean</td>
                    <td>false</td>
                    <td>Use CheckBox</td>
                </tr>

                <tr>
                    <td data-d={1}><a href="#page=5-11">onChecked</a></td>
                    <td><pre>(TreeMenu,MenuItem)=&rang;void</pre></td>
                    <td>undefined</td>
                    <td>Item checked event</td>
                </tr>
                </tbody>
            </table>
            <br/>



            <table style={{width: "80%"}}>
                <caption>
                    Instance TreeMenu functions
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







