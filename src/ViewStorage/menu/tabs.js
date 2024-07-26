import React from "react";


export default function IndexTabs() {
    return (
        <>
            <table style={{width: "80%"}}>
            <caption>
                props Tabs
            </caption>
            <tbody>
            <tr>
                <th style={{width: "20%"}}>Name</th>
                <th style={{width: "40%"}}>Type</th>
                <th style={{width: "20%"}}>Default</th>
                <th style={{width: "20%"}}>Description</th>
            </tr>
            <tr>
                <td data-d={1}><a href="#page=8-2">buttonPrefix</a></td>
                <td>string</td>
                <td>undefined</td>
                <td>Prefix Tabs instance</td>
            </tr>

            <tr>
                <td data-d={1}><a href="#page=8-3">onSelect</a></td>
                <td> (eventKey: string, id: string) =&#62; void</td>
                <td>undefined</td>
                <td>selected Tab event</td>
            </tr>


            </tbody>
        </table>
            <br/>

            <table style={{width: "80%"}}>
                <caption>
                    Instance Tabs functions
                </caption>
                <tbody>
                <tr>
                    <th style={{width: "20%"}}>Name</th>
                    <th style={{width: "40%"}}>Type</th>
                    <th style={{width: "40%"}}>Description</th>
                </tr>
                <tr>
                    <td data-d={1}><a href="#page=7-1">SelectTabsById</a></td>
                    <td>SelectTabsById(id:string,callback?:()=&#62; void)</td>
                    <td>Show or Hidden Tab</td>
                </tr>
                </tbody>
            </table>
            <br/>


            <table style={{width: "80%"}}>
                <caption>
                    props Tab
                </caption>
                <tbody>
                <tr>
                    <th style={{width: "20%"}}>Name</th>
                    <th style={{width: "40%"}}>Type</th>
                    <th style={{width: "20%"}}>Default</th>
                    <th style={{width: "20%"}}>Description</th>
                </tr>
                <tr>
                    <td data-d={1}><a href="#page=8-2">eventKey</a></td>
                    <td>string</td>
                    <td>undefined</td>
                    <td>Marker select tab for onSelect event</td>
                </tr>

                <tr>
                    <td data-d={1}><a href="#page=8-3">title</a></td>
                    <td>string | ReactElement</td>
                    <td>undefined</td>
                    <td>undefined</td>
                </tr>

                <tr>
                    <td data-d={1}><a href="#page=8-3">icon</a></td>
                    <td>ReactElement</td>
                    <td>undefined</td>
                    <td>Tab Icon</td>
                </tr>
                <tr>
                    <td data-d={1}><a href="#page=8-3">isOpen</a></td>
                    <td>boolean</td>
                    <td>undefined</td>
                    <td>Default select tab (first load)</td>
                </tr>
                <tr>
                    <td data-d={1}><a href="#page=8-3">id</a></td>
                    <td>string</td>
                    <td>undefined</td>
                    <td>Unique identificator Tab</td>
                </tr>

                <tr>
                    <td data-d={1}><a href="#page=8-3">width</a></td>
                    <td>number</td>
                    <td>undefined</td>
                    <td>Head width label Tab</td>
                </tr>
                <tr>
                    <td data-d={1}><a href="#page=8-3">onSelect</a></td>
                    <td> (eventKey?: string, id?: string) =&#62; void</td>
                    <td>undefined</td>
                    <td>select Tab event</td>
                </tr>


                </tbody>
            </table>
            <br/>

            <table style={{width: "80%"}}>
            <caption>
                Instance Tab functions
            </caption>
            <tbody>
            <tr>
                <th style={{width: "20%"}}>Name</th>
                <th style={{width: "40%"}}>Type</th>
                <th style={{width: "40%"}}>Description</th>
            </tr>
            <tr>
                <td data-d={1}><a href="#page=7-1">SelectTab</a></td>
                <td>SelectTab(callback?:()=&#62; void)</td>
                <td>Select Tab</td>
            </tr>
            <tr>
                <td data-d={1}><a href="#page=7-1">SetShow</a></td>
                <td>SetShow(boolean)</td>
                <td>Show or Hidden Tab</td>
            </tr>
            <tr>
                <td data-d={1}><a href="#page=7-1">SetDisabled</a></td>
                <td>SetDisabled(value:boolean)</td>
                <td>Management disabled</td>
            </tr>
            </tbody>
        </table>
        </>


    )
}







