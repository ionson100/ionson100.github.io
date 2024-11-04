import React from "react";


export default function IndexBsrTable() {


    return (
        <>
            <table style={{width: "80%"}}>
                <caption>
                    props bsr-table-extension
                </caption>
                <tbody>
                <tr>
                    <th style={{width: "20%"}}>Name</th>
                    <th style={{width: "40%"}}>Type</th>
                    <th style={{width: "20%"}}>Default</th>
                    <th style={{width: "20%"}}>Description</th>
                </tr>
                <tr>
                    <td data-d={1}><a href="#page=7-1">className</a></td>
                    <td>string|undefined</td>
                    <td>undefined</td>
                    <td>Table container css class style</td>
                </tr>

                <tr>
                    <td data-d={1}><a href="#page=7-1">style</a></td>
                    <td>React.CSSProperties|undefined</td>
                    <td>undefined</td>
                    <td>Table container style</td>
                </tr>


                <tr>
                    <td data-d={1}><a href="#page=7-1">styleHeader</a></td>
                    <td>React.CSSProperties|undefined</td>
                    <td>undefined</td>
                    <td>Table Header Style</td>
                </tr>

                <tr>
                    <td data-d={1}><a href="#page=7-1">styleBody</a></td>
                    <td>React.CSSProperties|undefined</td>
                    <td>undefined</td>
                    <td>Table Body Style</td>
                </tr>

                <tr>
                    <td data-d={1}><a href="#page=7-1">styleCaption</a></td>
                    <td>React.CSSProperties|undefined</td>
                    <td>undefined</td>
                    <td>Table Caption Style</td>
                </tr>

                <tr>
                    <td data-d={1}><a href="#page=7-1">caption</a></td>
                    <td>string|ReactElement|undefined</td>
                    <td>undefined</td>
                    <td>Table Caption</td>
                </tr>

                <tr>
                    <td data-d={1}><a href="#page=7-1">rowItems</a></td>
                    <td>DataRow[]|undefined</td>
                    <td>undefined</td>
                    <td>Array of data to display table rows</td>
                </tr>

                <tr>
                    <td data-d={1}><a href="#page=7-1">onClickRow</a></td>
                    <td>
                        <pre>
                            (dataRow:DataRow,e: HTMLTableRowElement)=&#62;void|undefined
                        </pre>
                    </td>
                    <td>undefined</td>
                    <td>Table Row Click Event</td>
                </tr>

                <tr>
                    <td data-d={1}><a href="#page=7-1">onClickColumn</a></td>
                    <td>
                        <pre>
                            (nameProperty: string,<br/>
                             eventTarget: EventTarget,<br/>
                             eventKey?:string,)=&#62;void|undefined
                        </pre>
                    </td>
                    <td>undefined</td>
                    <td>Table Column Header Click Event</td>
                </tr>
                <tr>
                    <td data-d={1}><a href="#page=7-1">onClickCell</a></td>
                    <td>
                        <pre>
                            (nameProperty: string,<br/>
                            props: DataRow,<br/>
                            target: EventTarget)=&#62;void|undefined
                        </pre>
                    </td>
                    <td>undefined</td>
                    <td>Table cell click event</td>
                </tr>
                <tr>
                    <td data-d={1}><a href="#page=7-1">useRowSelection</a></td>
                    <td>boolean|undefined</td>
                    <td>false</td>
                    <td>Enables selection and multi selection of a table row and generates click events</td>
                </tr>

                <tr>
                    <td data-d={1}><a href="#page=7-1">classNameSelection</a></td>
                    <td>string</td>
                    <td>undefined</td>
                    <td>Class css selected row</td>
                </tr>

                <tr>
                    <td data-d={1}><a href="#page=7-1">onSelect</a></td>
                    <td><pre>
                        (map:Map&#60;number,DataRow&#62;)=&#62;void
                    </pre></td>
                    <td>undefined</td>
                    <td>Event of multiple selection of table rows</td>
                </tr>
                <tr>
                    <td data-d={1}><a href="#page=7-1">height</a></td>
                    <td>number|undefined</td>
                    <td>undefined</td>
                    <td>Sets the height of the table body, adding the ability to scroll rows</td>
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
                    <td data-d={1}><a href="#page=7-1">Expand</a></td>
                    <td>()=&#62;void</td>
                    <td>Expand tree</td>
                </tr>
                <tr>
                    <td data-d={1}><a href="#page=7-1">Collapse</a></td>
                    <td>()=&#62;void</td>
                    <td>Collapse tree</td>
                </tr>
                <tr>
                    <td data-d={1}><a href="#page=7-1">ButtonToggleClick</a></td>
                    <td>()=&#62;void</td>
                    <td>Menu toggle click programmatically</td>
                </tr>


                <tr>
                    <td data-d={1}><a href="#page=7-1">SetSelectedItemMenu</a></td>
                    <td>(id:string,callback: (element: HTMLAnchorElement) =&#62; void)=&#62;void</td>
                    <td>Menu by id click programmatically, callback param htmlAnchor menu item</td>
                </tr>


                <tr>
                    <td data-d={1}><a href="#page=7-1">RefreshSize</a></td>
                    <td>()=&#62;void</td>
                    <td>Rearranging menu sizes</td>
                </tr>

                <tr>
                    <td data-d={1}><a href="#page=7-1">GetListItems</a></td>
                    <td>()=&#62;MenuItem[]</td>
                    <td>Getting array MenuItems</td>
                </tr>

                <tr>
                    <td data-d={1}><a href="#page=7-1">GetHeader</a></td>
                    <td>()=&#62;HTMLDivElement | null</td>
                    <td>Get Header</td>
                </tr>

                <tr>
                    <td data-d={1}><a href="#page=7-1">GetBody</a></td>
                    <td>()=&#62;HTMLDivElement | null</td>
                    <td>Get Container MenuItems</td>
                </tr>

                <tr>
                    <td data-d={1}><a href="#page=7-1">GetFooter</a></td>
                    <td>()=&#62;HTMLDivElement | null</td>
                    <td>Get Footer</td>
                </tr>

                <tr>
                    <td data-d={1}><a href="#page=7-1">OpenMenuItemOnly</a></td>
                    <td>(string)=&#62;void</td>
                    <td>Open and select only  menu by id</td>
                </tr>
                <tr>
                    <td data-d={1}><a href="#page=7-1">OpenMenuItemAndClick</a></td>
                    <td>(string)=&#62;void</td>
                    <td>Open and select  menu by id and click</td>
                </tr>
                <tr>
                    <td data-d={1}><a href="#page=7-1">GetPath</a></td>
                    <td>(string)=&#62;MenuItem[]</td>
                    <td>Get menu path</td>
                </tr>


                <tr>
                    <td data-d={1}><a href="#page=7-1">GetMenuItem</a></td>
                    <td>(string)=&#62;MenuItem</td>
                    <td>Getting a reference to an object MenuItem by id</td>
                </tr>
                <tr>
                    <td data-d={1}><a href="#page=7-1">DeleteAllItems</a></td>
                    <td>()=&#62;void</td>
                    <td>Clears the list MenuItem</td>
                </tr>

                <tr>
                    <td data-d={1}><a href="#page=7-1">RefreshMenu</a></td>
                    <td>(callback)=&#62;void</td>
                    <td>Redraws menu</td>
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
                    <td data-d={1}><a href="#page=7-1">band</a></td>
                    <td>any</td>
                    <td>undefined</td>
                    <td>Delimiter items menu</td>
                </tr>
                <tr>
                    <td data-d={1}><a href="#page=7-1">key</a></td>
                    <td>number</td>
                    <td>undefined</td>
                    <td>Inner user data</td>
                </tr>

                <tr>
                    <td data-d={1}><a href="#page=7-1">tag</a></td>
                    <td>any</td>
                    <td>undefined</td>
                    <td>Inner user data</td>
                </tr>
                <tr>
                    <td data-d={1}><a href="#page=7-1">id</a></td>
                    <td>string</td>
                    <td>required</td>
                    <td>Unique identifier, required</td>
                </tr>

                <tr>
                    <td data-d={1}><a href="#page=7-1">content</a></td>
                    <td>any</td>
                    <td>undefined</td>
                    <td>Menu content</td>
                </tr>

                <tr>
                    <td data-d={1}><a href="#page=7-1">title</a></td>
                    <td>string</td>
                    <td>undefined</td>
                    <td>The title global attribute contains text representing advisory information</td>
                </tr>

                <tr>
                    <td data-d={1}><a href="#page=7-1">icon</a></td>
                    <td>any</td>
                    <td>undefined</td>
                    <td>Item icon ( use optional)</td>
                </tr>
                <tr>
                    <td data-d={1}><a href="#page=7-1">items</a></td>
                    <td>Array:MenuItem</td>
                    <td>[]</td>
                    <td> MenuItem[]</td>
                </tr>

                <tr>
                    <td data-d={1}><a href="#page=7-1">isShow</a></td>
                    <td>boolean</td>
                    <td>false</td>
                    <td>Showing menu</td>
                </tr>

                <tr>
                    <td data-d={1}><a href="#page=7-1">isOpen</a></td>
                    <td>boolean</td>
                    <td>false</td>
                    <td>Status open submenu</td>
                </tr>
                <tr>
                    <td data-d={1}><a href="#page=7-1">url</a></td>
                    <td>string</td>
                    <td>undefined</td>
                    <td>url link (use optional)</td>
                </tr>
                <tr>
                    <td data-d={1}><a href="#page=7-1">style</a></td>
                    <td>React.CSSProperties</td>
                    <td>undefined</td>
                    <td>Style item</td>
                </tr>
                <tr>
                    <td data-d={1}><a href="#page=7-1">className</a></td>
                    <td>string</td>
                    <td>'tree-menu-item-v'</td>
                    <td>Css class name</td>
                </tr>
                <tr>
                    <td data-d={1}><a href="#page=7-1">dataUser</a></td>
                    <td>string</td>
                    <td>undefined</td>
                    <td>Attribute user data (data-user-tree)</td>
                </tr>
                <tr>
                    <td data-d={1}><a href="#page=7-1">target</a></td>
                    <td>string</td>
                    <td>undefined</td>
                    <td>Target link item as link</td>
                </tr>
                </tbody>
            </table>
        </>
    )
}







