import {Column, Table, RowProperty} from "bsr-table";
import 'bsr-table/dist/index.css'
import React from "react";
import {CodeSnippetJavaScript} from "../../codeSnippetJavaScript";

const code = `import React from "react";
import {Column, Table, RowProperty} from "bsr-table";
import 'bsr-table/dist/index.css'


export default function P9_14() {
    const list: RowProperty[] = [];
    list.push({
        onClick: () => {
            alert('click row')
        },
        style: {background: "yellow"},
        CellItems: ["green", 34, true, {
            isVisible: true,
            rawContent: <th>hedad</th>
        }]
    })
    list.push({
          style: {background: "red",color:"white"},
        CellItems: ["green", 34, true, <div>div</div>]
    })

    return (
         <Table
              id={"table_123"}
              caption={'use RowProperty array'}
              rowItems={list}
              style={{width: "700px"}}>
              <Column style={{width: "100px"}}>Column:1</Column>
              <Column>Column:2</Column>
              <Column>Column:3</Column>
              <Column>Column:4</Column>
         </Table>   
    )
}`


export default function P9_14() {
    const list: RowProperty[] = [];
    list.push({
        onClick: () => {
            alert('click row')
        },
        style: {background: "yellow"},
        CellItems: ["green", 34, true, {
            isVisible: true,
            rawContent: <th>hedad</th>
        }]
    })
    list.push({
        style: {background: "red",color:"white"},
        CellItems: ["green", 34, true, <div>div</div>]
    })

    return (
        <>
            <Table
                id={"table_123"}
                caption={'use RowProperty array'}
                rowItems={list}
                style={{width: "700px",margin:0}}>
                <Column style={{width: "100px"}}>Column:1</Column>
                <Column>Column:2</Column>
                <Column>Column:3</Column>
                <Column>Column:4</Column>
            </Table>
            <CodeSnippetJavaScript code={code}/>
        </>
    )
}