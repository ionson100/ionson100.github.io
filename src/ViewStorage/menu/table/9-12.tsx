import React, {ReactElement} from "react";
import {Table, Column, ICell, ColumnGroup, HeaderGroup} from "bsr-table";

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

let visible = true;

export default function P9_12() {
    return <div id={'tgr'}>
        <Table
            style={{width: "50%"}}
            rowItems={getRows()}
            caption={'ColumnGroup && HeaderGroup:'}>
            <Column style={{width: 150}}>Column1</Column>

            <HeaderGroup
                style={{cursor: "pointer"}}
                title={'group1'}
                eventKey={'eventKey group1'}
                onClick={(key) => {
                    alert(key)
                }}>
                <Column>Column2</Column>
                <Column>Column3</Column>
            </HeaderGroup>
            <HeaderGroup
                style={{cursor: "pointer", backgroundColor: 'yellow'}}
                title={'group2'}
                eventKey={'eventKey group2'}
                onClick={(key) => {
                    alert(key)
                }}>
                <ColumnGroup id={'123456_g'} style={{background: "grey"}}>
                    <Column>Column4</Column>
                    <Column>Column5</Column>
                </ColumnGroup>
            </HeaderGroup>

        </Table>
        <button onClick={() => {
            const gr = document.getElementById('123456_g')
            if (visible) {
                gr!.style.visibility = "collapse";
                visible = false;
            } else {
                gr!.style.visibility = "visible";
                visible = true;
            }
        }}>
            visibility group
        </button>
        <CodeSnippetJavaScript code={`import React, {ReactElement} from "react";
import {Table, Column, ICell, ColumnGroup, HeaderGroup} from "bsr-table";
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

let visible = true;

export default function P9_12() {
    return <div id={'tgr'}>
        <Table
            style={{width: "50%"}}
            rowItems={getRows()}
            caption={'ColumnGroup && HeaderGroup:'}>
            <Column style={{width: 150}}>Column1</Column>

            <HeaderGroup
                style={{cursor: "pointer"}}
                title={'group1'}
                eventKey={'eventKey group1'}
                onClick={(key) => {
                    alert(key)
                }}>
                <Column>Column2</Column>
                <Column>Column3</Column>
            </HeaderGroup>
            <HeaderGroup
                style={{cursor: "pointer", backgroundColor: 'yellow'}}
                title={'group2'}
                eventKey={'eventKey group2'}
                onClick={(key) => {
                    alert(key)
                }}>
                <ColumnGroup id={'123456_g'} style={{background: "grey"}}>
                    <Column>Column4</Column>
                    <Column>Column5</Column>
                </ColumnGroup>
            </HeaderGroup>

        </Table>
        <button onClick={() => {
            const gr = document.getElementById('123456_g')
            if (visible) {
                gr!.style.visibility = "collapse";
                visible = false;
            } else {
                gr!.style.visibility = "visible";
                visible = true;
            }
        }}>
            visibility group
        </button>

    </div>
}
`}/>

    </div>
}
