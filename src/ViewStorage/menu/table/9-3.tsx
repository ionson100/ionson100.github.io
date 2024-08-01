import React, {ReactElement, useRef} from "react";
import {Table, Column, ICell,} from "bsr-table";

import "./table-123.css"
import {CodeSnippetJavaScript} from "../../codeSnippetJavaScript";




function getDataTable(): Array<Array<string | ReactElement | ICell>> {
    const list: Array<Array<string | ReactElement | ICell>> = [];
    list.push(['cell1', 'cell2', 'cell3', 'cell4'])
    list.push(['cell1', 'cell2', 'cell3', 'cell4'])
    list.push(['cell1', 'cell2', 'cell3', 'cell4'])
    list.push(['cell1', 'cell2', 'cell3', 'cell4'])
    return list;
}


export default function P9_3() {
    const mRefLabel = useRef<HTMLLabelElement>(null)
    const mRefLabelCell = useRef<HTMLLabelElement>(null)
    return <div id={'table-12'} style={{paddingTop: 10}}>
        <label className={'label-then'} ref={mRefLabel}></label>
        <br/>
        <label className={'label-then'} ref={mRefLabelCell}></label>
        <Table
            id={'my-table'}
            onClickColumn={(id, index) => {
                mRefLabelCell.current!.innerText = ''
                mRefLabel.current!.innerText = ["Click Header Column  - id Table:" ,id,"  Index column:",index].join('')
            }}
            onClickRow={(id, index) => {
                mRefLabel.current!.innerText = ["Click Row - id Table:",id,"  Index row:",index].join('');
            }}

            onClickCell={(id, row, column) => {
                mRefLabelCell.current!.innerText = ["Click Cell  - id Table:",id,"  Index row:",row,"  Index cell of row:",column].join('');
            }}
            rowItems={getDataTable()}
            style={{width: "700px"}}>
            <Column>Column:1</Column>
            <Column>Column:2</Column>
            <Column>Column:3</Column>
            <Column>Column:4</Column>
        </Table>
        <br/>
        <div>
            <CodeSnippetJavaScript code={`import React, {ReactElement, useRef} from "react";
import {Table, Column, ICell,} from "bsr-table";
import "bsr-table/dist/index.css"


export default function P9_3() {
    const mRefLabel = useRef<HTMLLabelElement>(null)
    const mRefLabelCell = useRef<HTMLLabelElement>(null)
    function getDataTable(): Array<Array<string | ReactElement | ICell>> {
    const list: Array<Array<string | ReactElement | ICell>> = [];
        list.push(['cell1', 'cell2', 'cell3', 'cell4'])
        list.push(['cell1', 'cell2', 'cell3', 'cell4'])
        list.push(['cell1', 'cell2', 'cell3', 'cell4'])
        list.push(['cell1', 'cell2', 'cell3', 'cell4'])
    return list;
}
    
    return <div id={'table-12'} style={{paddingTop: 10}}>
        <label className={'label-then'} ref={mRefLabel}></label>
        <br/>
        <label className={'label-then'} ref={mRefLabelCell}></label>
        <Table
            id={'my-table'}
            onClickColumn={(id, index) => {
                mRefLabelCell.current!.innerText = ''
                mRefLabel.current!.innerText = ["Click Header Column  - id Table:" ,id,"  Index column:",index].join('')
            }}
            onClickRow={(id, index) => {
                mRefLabel.current!.innerText = ["Click Row - id Table:",id,"  Index row:",index].join('');
            }}

            onClickCell={(id, row, column) => {
                mRefLabelCell.current!.innerText = ["Click Cell  - id Table:",id,"  Index row:",row,"  Index cell of row:",column].join('');
            }}
            rowItems={getDataTable()}
            style={{width: "700px"}}>
            <Column>Column:1</Column>
            <Column>Column:2</Column>
            <Column>Column:3</Column>
            <Column>Column:4</Column>
        </Table>
    </div>
}`}/>
        </div>
    </div>
}