import React from "react";


export default function P21_1() {


    return (
        <>
            <table style={{width: "80%"}}>
                <caption>
                    props Menu
                </caption>
                <tbody>
                <tr>
                    <th style={{width: "20%"}}>Name</th>
                    <th style={{width: "40%"}}>Type</th>
                    <th style={{width: "20%"}}>Default</th>
                    <th style={{width: "20%"}}>Description</th>
                </tr>
                <tr>
                    <td data-d={1}>className</td>
                    <td>string|undefined</td>
                    <td>undefined</td>
                    <td>Menu css class style</td>
                </tr>

                <tr>
                    <td data-d={1}>style</td>
                    <td>React.CSSProperties|undefined</td>
                    <td>undefined</td>
                    <td>Menu style</td>
                </tr>
                <tr>
                    <td data-d={1}>Id</td>
                    <td>string|undefined</td>
                    <td>undefined</td>
                    <td>The id global attribute defines an identifier (ID) which must be unique in the whole document.
                        Its purpose is to identify the element when linking (using a fragment identifier ), scripting, or styling (with CSS ).</td>
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
                    <td data-d={1}>className</td>
                    <td>string|undefined</td>
                    <td>undefined</td>
                    <td>Tag th css class style</td>
                </tr>
                <tr>
                    <td data-d={1}>style</td>
                    <td>React.CSSProperties|undefined</td>
                    <td>undefined</td>
                    <td>Tag th css style</td>
                </tr>
                <tr>
                    <td data-d={1}>Id</td>
                    <td>string|undefined</td>
                    <td>undefined</td>
                    <td>The id global attribute defines an identifier (ID) which must be unique in the whole document.
                        Its purpose is to identify the element when linking (using a fragment identifier ), scripting,
                        or styling (with CSS ).
                    </td>
                </tr>
                <tr>
                    <td data-d={1}>href</td>
                    <td>string|undefined</td>
                    <td>undefined</td>
                    <td>
                        Specifies the URL of the page the link goes to
                    </td>
                </tr>
                <tr>
                    <td data-d={1}>content</td>
                    <td>string | ReactNode|undefined</td>
                    <td>undefined</td>
                    <td>
                        Text displayed in the menu
                    </td>
                </tr>
                <tr>
                    <td data-d={1}>dropPosition</td>
                    <td>'left' | 'middle' | 'right'</td>
                    <td>'middle'</td>
                    <td>
                        Submenu panel dropdown position
                    </td>
                </tr>
                <tr>
                    <td data-d={1}>iconClose</td>
                    <td>eactNode | undefined</td>
                    <td>undefined</td>
                    <td>
                        Icon for closed submenu
                    </td>
                </tr>
                <tr>
                    <td data-d={1}>iconOpen</td>
                    <td>eactNode | undefined</td>
                    <td>undefined</td>
                    <td>
                        Icon for open submenu
                    </td>
                </tr>

                <tr>
                    <td data-d={1}>onClick</td>
                    <td>
                        <pre>
                            (item: MenuItem) =&#62; void | undefined
                        </pre>
                    </td>
                    <td>undefined</td>
                    <td>MenuItem Click Event</td>
                </tr>
                </tbody>
            </table>

            <br/>


            <table style={{width: "80%"}}>
                <caption>
                    Menu, MenuItems: Instance methods
                </caption>
                <tbody>
                <tr>
                    <th style={{width: "20%"}}>Name</th>
                    <th style={{width: "40%"}}>Type</th>
                    <th style={{width: "40%"}}>Description</th>
                </tr>
                <tr>
                    <td data-d={1}>AddMenuItems</td>
                    <td>
                        <pre>
                              AddMenuItems(...item:ReactElement&#8249;MenuItem&#8250;[]):void
                        </pre>

                    </td>
                    <td>Add MenuItem</td>
                </tr>
                <tr>
                    <td data-d={1}>ClearItems</td>
                    <td>
                        <pre>
                             ClearItems():void
                        </pre>

                    </td>
                    <td>Clear all Items</td>
                </tr>

                <tr>
                    <td data-d={1}>DeleteItemById</td>
                    <td>
                        <pre>
                             DeleteItemById (id:string):void
                        </pre>

                    </td>
                    <td>Delete item by id</td>
                </tr>

                <tr>
                    <td data-d={1}>SpliceItems</td>
                    <td>
                        <pre>
                             SpliceItems(start:number,count?:number):void
                        </pre>

                    </td>
                    <td>Delete item by range</td>
                </tr>


                </tbody>
            </table>
        </>
    )
}