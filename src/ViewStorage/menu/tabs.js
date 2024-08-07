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
                    <td data-d={1}><a href="#page=8-8">onSelect</a></td>
                    <td> (eventKey: string, id: string) =&#62; void</td>
                    <td>undefined</td>
                    <td>selected Tab event</td>
                </tr>

                <tr>
                    <td data-d={1}><a href="#page=8-2">className</a></td>
                    <td>string</td>
                    <td>undefined</td>
                    <td>CSS class name for the Tabs panel wrapper</td>
                </tr>

                <tr>
                    <td data-d={1}><a href="#page=8-2">id</a></td>
                    <td>string</td>
                    <td>undefined</td>
                    <td>Id Tabs wrapper</td>
                </tr>

                <tr>
                    <td data-d={1}><a href="#page=8-2">style</a></td>
                    <td>React.CSSProperties</td>
                    <td>undefined</td>
                    <td>Style Tabs wrapper</td>
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
                    <td data-d={1}><a href="#page=8-4">SelectTabsById</a></td>
                    <td>SelectTabsById(id:string,callback?:()=&#62; void)</td>
                    <td>Select Tab by Id</td>
                </tr>
                <tr>
                    <td data-d={1}><a href="#page=8-5">SetDisabledTabById</a></td>
                    <td>SetDisabledTabById(id: string, value: boolean,callback?:()=&#62; void)</td>
                    <td>Disable Tab by Id</td>
                </tr>
                <tr>
                    <td data-d={1}><a href="#page=8-6">SetVisibilitiesTabById</a></td>
                    <td>SetVisibilitiesTabById(id: string, value: boolean,callback?:()=&#62; void)</td>
                    <td>Visible or Hidden Tab by Id</td>
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
                    <td data-d={1}><a href="#page=8-8">eventKey</a></td>
                    <td>string</td>
                    <td>undefined</td>
                    <td>Marker select tab for onSelect event</td>
                </tr>

                <tr>
                    <td data-d={1}><a href="#page=8-10">title</a></td>
                    <td>string | ReactElement</td>
                    <td>undefined</td>
                    <td>undefined</td>
                </tr>

                <tr>
                    <td data-d={1}><a href="#page=8-11">icon</a></td>
                    <td>ReactElement</td>
                    <td>undefined</td>
                    <td>Tab Icon</td>
                </tr>
                <tr>
                    <td data-d={1}><a href="#page=8-12">select</a></td>
                    <td>boolean</td>
                    <td>undefined</td>
                    <td>Default select tab (first load)</td>
                </tr>
                <tr>
                    <td data-d={1}><a href="#page=8-9">id</a></td>
                    <td>string</td>
                    <td>undefined</td>
                    <td>Unique identificator Tab</td>
                </tr>

                <tr>
                    <td data-d={1}><a href="#page=8-13">width</a></td>
                    <td>number</td>
                    <td>undefined</td>
                    <td>Head width label Tab</td>
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
                <td data-d={1}><a href="#page=8-14">SelectTab</a></td>
                <td>SelectTab(callback?:()=&#62; void)</td>
                <td>Select Tab</td>
            </tr>
            <tr>
                <td data-d={1}><a href="#page=8-14">SetVisibilities</a></td>
                <td>SetVisibilities(boolean)</td>
                <td>Show or Hidden Tab</td>
            </tr>
            <tr>
                <td data-d={1}><a href="#page=8-14">SetDisabled</a></td>
                <td>SetDisabled(value:boolean)</td>
                <td>Management disabled</td>
            </tr>
            </tbody>
        </table>
        </>


    )
}







