import React, {ReactElement} from "react";
import {Table, Column, ICell, HeaderGroup} from "bsr-table";
import {CodeSnippetJavaScript} from "../../codeSnippetJavaScript";


function rowHeader(index: number): ICell {
    return {
        isVisible: true,
        rawContent: <th style={{cursor: "pointer"}} onClick={() => {
            alert(index)
        }}>{'row:' + index}</th>
    }
}

function getRows(): Array<Array<string | ReactElement | ICell | null>> {
    const list: Array<Array<string | ReactElement | ICell | null>> = [];
    for (let i = 0; i < 10; i++) {
        list.push([rowHeader(i), "2", "3", "4", "5"]);
    }
    return list
}


export default function P9_11() {
    return <div id={'tgr'}>
        <Table
            style={{width: "50%"}}
            rowItems={getRows()}
            caption={'ColumnGroup:'}>
            <Column style={{width: 150}}>Column1</Column>
            <HeaderGroup
                style={{cursor:"pointer"}}
                title={'group1'}
                eventKey={'eventKey group1'}
                onClick={(key) => {
                    alert(key)
                }}>
                <Column>Column2</Column>
                <Column>Column3</Column>
            </HeaderGroup>

            <HeaderGroup
                style={{cursor:"pointer",backgroundColor:'yellow'}}
                title={'group2'}
                eventKey={'eventKey group2'}
                onClick={(key) => {
                    alert(key)
                }}>
                <Column>Column4</Column>
                <Column>Column5</Column>
            </HeaderGroup>
        </Table>
        <br/>
        <CodeSnippetJavaScript code={`import React, {ReactElement} from "react";
import {Table, Column, ICell, HeaderGroup} from "bsr-table";
import "bsr-table/dist/index.css"

function rowHeader(index: number): ICell {
    return {
        isVisible: true,
        rawContent: <th style={{cursor: "pointer"}} onClick={() => {
            alert(index)
        }}>{'row:' + index}</th>
    }
}

function getRows(): Array<Array<string | ReactElement | ICell | null>> {
    const list: Array<Array<string | ReactElement | ICell | null>> = [];
    for (let i = 0; i < 10; i++) {
        list.push([rowHeader(i), "2", "3", "4", "5"]);
    }
    return list
}


export default function P9_11() {
    return <div id={'tgr'}>
        <Table
            style={{width: "50%"}}
            rowItems={getRows()}
            caption={'ColumnGroup:'}>
            <Column style={{width: 150}}>Column1</Column>
            <HeaderGroup
                style={{cursor:"pointer"}}
                title={'group1'}
                eventKey={'eventKey group1'}
                onClick={(key) => {
                    alert(key)
                }}>
                <Column>Column2</Column>
                <Column>Column3</Column>
            </HeaderGroup>

            <HeaderGroup
                style={{cursor:"pointer",backgroundColor:'yellow'}}
                title={'group2'}
                eventKey={'eventKey group2'}
                onClick={(key) => {
                    alert(key)
                }}>
                <Column>Column4</Column>
                <Column>Column5</Column>
            </HeaderGroup>
        </Table>
    </div>
}
`}/>
    </div>
}
