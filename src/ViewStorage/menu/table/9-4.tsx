import {Table, Column, ICell,} from "bsr-table";
import React, {ReactElement} from "react";
import "./table-123.css"

import {CodeSnippetJavaScript} from "../../codeSnippetJavaScript";


function getDataTable(): Array<Array<string | ReactElement | ICell>> {
    const list: Array<Array<string | ReactElement | ICell>> = [];
    list.push(['cell1', '(id:string)  =>  void\n' +
    'simple callback\nfunction      (js)'])

    return list;
}


export default function P9_4() {

    return <div id={'table-12'} style={{paddingTop: 10}}>

        <Table
            id={"table_123"}
            caption={'useInnerHTML - false'}
            rowItems={getDataTable()}
            style={{width: "700px"}}>
            <Column style={{width: "100px"}}>Column:1</Column>
            <Column>Column:2</Column>

        </Table>

        <Table
            id={"table_1234"}
            useInnerHTML={true}
            caption={'useInnerHTML - true'}
            rowItems={getDataTable()}
            style={{width: "700px"}}>
            <Column style={{width: "100px"}}>Column:1</Column>
            <Column>Column:2</Column>

        </Table>
        <p>If you are not interested in hover, action events, you need to override the default styles file<br/>
            (import "bsr-table/dist/index.css")</p>
        <div>
            <CodeSnippetJavaScript code={`import React, {ReactElement, useRef} from "react";
import {Table, Column, ICell,} from "bsr-table";
import "bsr-table/dist/index.css"

function getDataTable(): Array<Array<string | ReactElement | ICell>> {
    const list: Array<Array<string | ReactElement | ICell>> = [];
    list.push(['cell1', '(id:string)  =>  void\\n' +
    'simple callback\\nfunction      (js)'])

    return list;
}
export default function P9_4() {
    
    return <div id={'table-12'} style={{paddingTop: 10}}>

        <Table
            id={"table_123"}
            caption={'useInnerHTML - false'}
            rowItems={getDataTable()}
            style={{width: "700px"}}>
            <Column style={{width: "100px"}}>Column:1</Column>
            <Column>Column:2</Column>

        </Table>

        <Table
            id={"table_1234"}
            useInnerHTML={true}
            caption={'useInnerHTML - true'}
            rowItems={getDataTable()}
            style={{width: "700px"}}>
            <Column style={{width: "100px"}}>Column:1</Column>
            <Column>Column:2</Column>

        </Table>
        </div>
}`}/>
        </div>

    </div>
}