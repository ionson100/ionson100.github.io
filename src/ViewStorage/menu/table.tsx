import {Table, Column, ICell,} from "bsr-table";
import React, {ReactElement} from "react";


//     useInnerHTML?:boolean

function getDataTable1(): Array<Array<string | ReactElement | ICell>> {
    const list: Array<Array<string | ReactElement | ICell>> = [];
    list.push([<a href="#page=9-2">className</a>, 'string', 'undefined', 'CSS class name for Table'])
    list.push([<a href="#page=9-2">id</a>, 'string', 'undefined', 'id element Table'])
    list.push([<a href="#page=9-2">style</a>, 'React.CSSProperties', 'undefined', 'style element Table'])
    list.push([<a href="#page=9-2">caption</a>, 'string|ReactElement', 'undefined', 'caption for Table'])

    list.push(['children', 'string|React.ReactNode', 'undefined', 'children element for Table'])
    list.push([<a
        href="#page=9-2">rowItems</a>, 'Array<Array<string|number|boolean|ReactElement|ICell|undefined|null>>|RowProperty[]', 'undefined', 'Array of table rows'])
    list.push(['onClickRow', '(id:string,index:number)=>void', 'undefined', 'Table row click events'])
    list.push(['onClickColumn', '(id:string,index:number)=>void', 'undefined', 'Click events on the table column header'])
    list.push(['onClickCell', '(id:string,row:number,column:number)=>void', 'undefined', 'Table cell click events'])
    list.push(['useInnerHTML', 'boolean', 'undefined', 'Possibility of dangerous cell string insertion like\n' +
    'dangerouslySetInnerHTML={{__html: str}}'])
    return list;
}

function getRowProperty(): Array<Array<string | ReactElement | ICell>>{
    const list: Array<Array<string | ReactElement | ICell>> = [];
    list.push([<a href="#page=9-14">className</a>, 'string', 'undefined', 'CSS class name for tr'])
    list.push([<a href="#page=9-14">id</a>, 'string', 'undefined', 'id element tr'])
    list.push([<a href="#page=9-14">style</a>, 'React.CSSProperties', 'undefined', 'style element tr'])
    list.push([<a href="#page=9-14">color</a>, 'string', 'undefined', 'color for tr'])
    list.push([<a href="#page=9-14">CellItems</a>, 'Array<string|number|boolean|ReactElement|ICell|undefined|null>', 'require', 'list cell for row'])
    list.push([<a href="#page=9-14">onClick</a>, '()=>void', 'undefined', 'click event for tr'])
    list.push([<a href="#page=9-14">onSelect</a>, '()=>void', 'undefined', 'select event for tr'])
    return list

}


function getDataTable3(): Array<Array<string | ReactElement | ICell>> {
    const list: Array<Array<string | ReactElement | ICell>> = [];
    list.push([<a href="#page=9-2">className</a>, 'string', 'undefined', 'CSS class name for Column'])
    list.push([<a href="#page=9-2">style</a>, 'React.CSSProperties', 'undefined', 'style element Column'])
    list.push(['children', 'string|React.ReactNode', 'undefined', 'children element of Column'])
    return list
}

function getColumnGroupTable(): Array<Array<string | ReactElement | ICell>> {
    const list: Array<Array<string | ReactElement | ICell>> = [];
    list.push([<a href="#page=9-10">className</a>, 'string', 'undefined', 'CSS class name of Table'])
    list.push([<a href="#page=9-10">id</a>, 'string', 'undefined', 'id element Table'])
    list.push([<a href="#page=9-10">style</a>, 'React.CSSProperties', 'undefined', 'style element Table'])

    return list
}

// id?:string;
// title?:string|ReactElement
// className?: string;
// style?: React.CSSProperties | undefined,
//     children?:string|React.ReactNode;
// eventKey?:string
// onClick?:(eventKey?:string)=>void

function getHeaderGroupTable(): Array<Array<string | ReactElement | ICell>> {
    const list: Array<Array<string | ReactElement | ICell>> = [];
    list.push([<a href="#page=9-11">className</a>, 'string', 'undefined', 'CSS class name of Table'])
    list.push([<a href="#page=9-11">id</a>, 'string', 'undefined', 'id element Table'])
    list.push([<a href="#page=9-11">style</a>, 'React.CSSProperties', 'undefined', 'style element Table'])
    list.push([<a href="#page=9-11">title</a>, 'string|ReactElement', 'undefined', 'Name  of group'])
    list.push([<a href="#page=9-11">eventKey</a>, 'string', 'undefined', 'Marker for defining an event \nfor clicking on the group header'])
    list.push([<a href="#page=9-11">onClick</a>,  '(eventKey?:string)=>void','undefined', 'Group head click event'])

    return list
}


export default function IndexTable() {
    return <div>
        <Table
            useInnerHTML={true}
            rowItems={getDataTable1()}
            caption={'Props Table'}
            style={{width: "80%"}}>
            <Column style={{width: "20%"}}>Name</Column>
            <Column style={{width: "40%"}}>Type</Column>
            <Column style={{width: "20%"}}>Default</Column>
            <Column style={{width: "20%"}}>Description</Column>
        </Table>
        <br/>
        <Table
            caption={'Instance Table functions'}
            rowItems={[['Refresh', 'Refresh(callback:()=>void)', 'Redrawing a table']]}
        >

            <Column style={{width: "20%"}}>Name</Column>
            <Column style={{width: "40%"}}>Type</Column>
            <Column style={{width: "50%"}}>Description</Column>

        </Table>
        <br/>
        <Table
            useInnerHTML={true}
            rowItems={getDataTable3()}
            caption={'Props Column'}
            style={{width: "80%"}}>
            <Column style={{width: "20%"}}>Name</Column>
            <Column style={{width: "40%"}}>Type</Column>
            <Column style={{width: "20%"}}>Default</Column>
            <Column style={{width: "20%"}}>Description</Column>
        </Table>
        <br/>
        <Table
            useInnerHTML={true}
            rowItems={getColumnGroupTable()}
            caption={'Props ColumnGroup'}
            style={{width: "80%"}}>
            <Column style={{width: "20%"}}>Name</Column>
            <Column style={{width: "40%"}}>Type</Column>
            <Column style={{width: "20%"}}>Default</Column>
            <Column style={{width: "20%"}}>Description</Column>
        </Table>
        <br/>
        <Table
            useInnerHTML={true}
            rowItems={getHeaderGroupTable()}
            caption={'Props HeaderGroup'}
            style={{width: "80%"}}>
            <Column style={{width: "20%"}}>Name</Column>
            <Column style={{width: "40%"}}>Type</Column>
            <Column style={{width: "20%"}}>Default</Column>
            <Column style={{width: "20%"}}>Description</Column>
        </Table>
        <br/>

        <br/>
        <Table
            useInnerHTML={true}
            rowItems={getRowProperty()}
            caption={'RowProperty'}
            style={{width: "80%"}}>
            <Column style={{width: "20%"}}>Name</Column>
            <Column style={{width: "40%"}}>Type</Column>
            <Column style={{width: "20%"}}>Default</Column>
            <Column style={{width: "20%"}}>Description</Column>
        </Table>
        <br/>

    </div>


}
