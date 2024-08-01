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
    list.push([<a href="#page=9-2">rowItems</a>, 'Array<Array<string|ReactElement|ICell|undefined|null>>', 'undefined', 'Array of table rows'])
    list.push(['onClickRow', '(id:string,index:number)=>void', 'undefined', 'Table row click events'])
    list.push(['onClickColumn', '(id:string,index:number)=>void', 'undefined', 'Click events on the table column header'])
    list.push(['onClickCell', '(id:string,row:number,column:number)=>void', 'undefined', 'Table cell click events'])
    list.push(['useInnerHTML', 'boolean', 'undefined', 'Possibility of dangerous cell string insertion like\n' +
    'dangerouslySetInnerHTML={{__html: str}}'])
    return list;
}
// className?: string;
// style?: React.CSSProperties | undefined,
//     children?:string|React.ReactNode;
function getDataTable3(): Array<Array<string | ReactElement | ICell>> {
    const list: Array<Array<string | ReactElement | ICell>> = [];
    list.push([<a href="#page=9-2">className</a>, 'string', 'undefined', 'CSS class name for Column'])
    list.push([<a href="#page=9-2">style</a>, 'React.CSSProperties', 'undefined', 'style element Column'])
    list.push(['children', 'string|React.ReactNode', 'undefined', 'children element of Column'])
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
        rowItems={[['Refresh','Refresh(callback:()=>void)','Redrawing a table']]}
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

    </div>


}