import React from "react";


export default function IndexBsrTable() {


    return (
        <>
            <table style={{width: "80%"}}>
                <caption>
                    props Table
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
                    <td>Table container css class style</td>
                </tr>

                <tr>
                    <td data-d={1}><a href="#page=19-2">style</a></td>
                    <td>React.CSSProperties|undefined</td>
                    <td>undefined</td>
                    <td>Table container style</td>
                </tr>


                <tr>
                    <td data-d={1}>styleHeader</td>
                    <td>React.CSSProperties|undefined</td>
                    <td>undefined</td>
                    <td>Table Header Style</td>
                </tr>

                <tr>
                    <td data-d={1}>styleBody</td>
                    <td>React.CSSProperties|undefined</td>
                    <td>undefined</td>
                    <td>Table Body Style</td>
                </tr>

                <tr>
                    <td data-d={1}>styleCaption</td>
                    <td>React.CSSProperties|undefined</td>
                    <td>undefined</td>
                    <td>Table Caption Style</td>
                </tr>
                <tr>
                    <td data-d={1}>styleHeaderGroup</td>
                    <td>React.CSSProperties|undefined</td>
                    <td>undefined</td>
                    <td>Table header croup Style</td>
                </tr>

                <tr>
                    <td data-d={1}><a href="#page=19-6">caption</a></td>
                    <td>string|ReactElement|undefined</td>
                    <td>undefined</td>
                    <td>Table Caption</td>
                </tr>

                <tr>
                    <td data-d={1}><a href="#page=19-8">rowItems</a></td>
                    <td>DataRow[]|undefined</td>
                    <td>undefined</td>
                    <td>Array of data to display table rows</td>
                </tr>

                <tr>
                    <td data-d={1}><a href="#page=19-8">onClickRow</a></td>
                    <td>
                        <pre>
                            (dataRow:DataRow,e: HTMLTableRowElement)=&#62;void|undefined
                        </pre>
                    </td>
                    <td>undefined</td>
                    <td>Table Row Click Event</td>
                </tr>

                <tr>
                    <td data-d={1}><a href="#page=19-8">onClickColumn</a></td>
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
                    <td data-d={1}><a href="#page=19-8">onClickCell</a></td>
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
                    <td data-d={1}><a href="#page=19-8">useRowSelection</a></td>
                    <td>boolean|undefined</td>
                    <td>false</td>
                    <td>Enables selection and multi selection of a table row and generates click events</td>
                </tr>

                <tr>
                    <td data-d={1}>classNameSelection</td>
                    <td>string</td>
                    <td>undefined</td>
                    <td>Class css selected row</td>
                </tr>

                <tr>
                    <td data-d={1}><a href="#page=19-8">onSelect</a></td>
                    <td><pre>
                        (map:Map&#60;number,DataRow&#62;)=&#62;void
                    </pre>
                    </td>
                    <td>undefined</td>
                    <td>Event of multiple selection of table rows</td>
                </tr>
                <tr>
                    <td data-d={1}><a href="#page=19-3">height</a></td>
                    <td>number|undefined</td>
                    <td>undefined</td>
                    <td>Sets the height of the table body, adding the ability to scroll rows</td>
                </tr>
                </tbody>
            </table>
            <br/>


            <table style={{width: "80%"}}>
                <caption>
                    Props Column
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
                    <td data-d={1}><a href="#page=19-10">style</a></td>
                    <td>React.CSSProperties|undefined</td>
                    <td>undefined</td>
                    <td>Tag th css  style</td>
                </tr>
                <tr>
                    <td data-d={1}><a href="#page=19-2">nameProperty</a></td>
                    <td>string</td>
                    <td>Required</td>
                    <td>Map projection property object view</td>
                </tr>

                <tr>
                    <td data-d={1}>eventKey</td>
                    <td>string|undefined</td>
                    <td>undefined</td>
                    <td>Value to display on click on tag: th</td>
                </tr>


                </tbody>
            </table>

            <br/>

            <table style={{width: "80%"}}>
                <caption>
                    Props HeaderGroup
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
                    <td>Tag th css style</td>
                </tr>
                <tr>
                    <td data-d={1}><a href="#page=19-4">style</a></td>
                    <td>React.CSSProperties|undefined</td>
                    <td>undefined</td>
                    <td>Tag th css  style</td>
                </tr>
                <tr>
                    <td data-d={1}>eventKey</td>
                    <td>string|undefined</td>
                    <td>undefined</td>
                    <td>Value to display on click on tag: th</td>
                </tr>
                <tr>
                    <td data-d={1}><a href="#page=19-4">caption</a></td>
                    <td>string|ReactElement|undefined</td>
                    <td>undefined</td>
                    <td>Contents of the tag: th</td>
                </tr>

                <tr>
                    <td data-d={1}>onClick</td>
                    <td><pre>
                        (eventKey?:string)=&#62;void
                    </pre></td>
                    <td>undefined</td>
                    <td>Click event on table header</td>
                </tr>


                </tbody>
            </table>






            <table style={{width: "80%"}}>
                <caption>
                    Props ColumnGroup
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
                    <td>Tag td table css style</td>
                </tr>
                <tr>
                    <td data-d={1}><a href="#page=19-11">style</a></td>
                    <td>React.CSSProperties|undefined</td>
                    <td>undefined</td>
                    <td>Tag td table css  style</td>
                </tr>

                </tbody>
            </table>

            <table style={{width: "80%"}}>
                <caption>
                    Props RowFooter
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
                    <td>Tag tr table tfoot css style</td>
                </tr>
                <tr>
                    <td data-d={1}><a href="#page=19-4">style</a></td>
                    <td>React.CSSProperties|undefined</td>
                    <td>undefined</td>
                    <td>Tag tr table tfoot css  style</td>
                </tr>

                </tbody>
            </table>

            <table style={{width: "80%"}}>
                <caption>
                    Props CellFooter
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
                    <td>Tag td table tfoot css style</td>
                </tr>
                <tr>
                    <td data-d={1}><a href="#page=19-4">style</a></td>
                    <td>React.CSSProperties|undefined</td>
                    <td>undefined</td>
                    <td>Tag td table tfoot css  style</td>
                </tr>
                <tr>
                    <td data-d={1}><a href="#page=19-4">colspan</a></td>
                    <td>number|undefined</td>
                    <td>undefined</td>
                    <td>Sets the number of cells to be merged horizontally.</td>
                </tr>

                </tbody>
            </table>
            <table style={{width: "80%"}}>
                <caption>
                    Table: Instance methods
                </caption>
                <tbody>
                <tr>
                    <th style={{width: "20%"}}>Name</th>
                    <th style={{width: "40%"}}>Type</th>
                    <th style={{width: "40%"}}>Description</th>
                </tr>
                <tr>
                    <td data-d={1}>GetListSelect</td>
                    <td>GetListSelect():DataRow[]</td>
                    <td>Get list of selected rows as DataRow</td>
                </tr>
                <tr>
                    <td data-d={1}>GetDataRowByIndex</td>
                    <td>GetDataRowByIndex(index: number): DataRow | undefined</td>
                    <td>Get  rows as DataRow by index</td>
                </tr>
                <tr>
                    <td data-d={1}>SelectRowByIdAndClick</td>
                    <td>SelectRowByIdAndClick(id: string):void</td>
                    <td>Select  row by id and click</td>
                </tr>
                <tr>
                    <td data-d={1}>SelectRowById</td>
                    <td>SelectRowById(id: string[]):void</td>
                    <td>Select  rows by id array </td>
                </tr>

                <tr>
                    <td data-d={1}>SelectRowByIndex</td>
                    <td>SelectRowByIndex(indices: number[]):void</td>
                    <td>Select  rows by indices </td>
                </tr>

                <tr>
                    <td data-d={1}>SelectRowByIndexAndClick</td>
                    <td>SelectRowByIndexAndClick(index: number):void</td>
                    <td>Select  row by index  and click</td>
                </tr>
                <tr>
                    <td data-d={1}>GetItemsRow</td>
                    <td>GetItemsRow():DataRow[]</td>
                    <td>Get current fill rowItems table</td>
                </tr>
                <tr>
                    <td data-d={1}>SetItemsRow</td>
                    <td>SetItemsRow(items:DataRow[]):void</td>
                    <td>Change the current rowItems of the table</td>
                </tr>
                <tr>
                    <td data-d={1}>Refresh</td>
                    <td>Refresh(callback?: () =&#62; void):void</td>
                    <td>Refreshing table contents, required when contents change</td>
                </tr>
                <tr>
                    <td data-d={1}>height</td>
                    <td>height: number | undefined</td>
                    <td>Sets the size of the scrollable area of the table.</td>
                </tr>

                </tbody>
            </table>
        </>
    )
}







