import {Table, Column, ICell,} from "bsr-table";
import React, {ReactElement} from "react";
import "./table-123.css"

import {CodeSnippetJavaScript} from "../../codeSnippetJavaScript";


function getDataTable(): Array<Array<string | ReactElement | ICell|null>> {
    const list: Array<Array<string | ReactElement | ICell|null>> = [];
    list.push(['cell1', 'cell2', 'cell3', 'cell4'])
    list.push(['cell1', 'cell2', 'cell3', 'cell4'])
    list.push(['cell1', 'cell2', 'cell3', 'cell4'])
    list.push(['cell1', 'cell2', 'cell3', 'cell4'])
    return list;
}


export default function P9_2() {

    return <div id={'table-12'} style={{paddingTop: 10}}>

        <Table
            id={"table_123"}
            caption={'Quick stat table:'}
            rowItems={getDataTable()}
            style={{width: "700px"}}>
            <Column style={{width: "100px"}}>Column:1</Column>
            <Column>Column:2</Column>
            <Column>Column:3</Column>
            <Column>Column:4</Column>
        </Table>
        <p>If you are not interested in hover, action events, you need to override the default styles file<br/>
            (import "bsr-table/dist/index.css")</p>
        <div>
            <CodeSnippetJavaScript code={`import React, {ReactElement} from "react";
import {Table, Column, ICell,} from "bsr-table";
import "bsr-table/dist/index.css"

function getDataTable(): Array<Array<string | ReactElement | ICell>> {
    const list: Array<Array<string | ReactElement | ICell>> = [];
        list.push(['cell1', 'cell2', 'cell3', 'cell4'])
        list.push(['cell1', 'cell2', 'cell3', 'cell4'])
        list.push(['cell1', 'cell2', 'cell3', 'cell4'])
        list.push(['cell1', 'cell2', 'cell3', 'cell4'])
    return list;
}
export default function P9_2() {

    return <div id={'table-12'} style={{paddingTop: 10}}>
               <Table
                  id={"table_123"}
                  caption={'Quick stat table:'}
                  rowItems={getDataTable()}
                  style={{width: "700px"}}>
                  <Column style={{width: "100px"}}>Column:1</Column>
                  <Column>Column:2</Column>
                  <Column>Column:3</Column>
                  <Column>Column:4</Column>
               </Table>
            <div/>
}
`}/>
        </div>

    </div>
}