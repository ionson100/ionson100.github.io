import {Table, Column, ICell,} from "bsr-table";
import React, {ReactElement, useRef} from "react";
import "./table-123.css"

function Button(str: string) {
    return <button onClick={(e) => {
        e.stopPropagation()
        alert(str)
    }
    }>Button</button>
}

function Button2(str: string): ICell {
    return {
        style: {background: "white"},
        id: "dsd",
        content: Button(str),
        isVisible: true
    }
}

function Input(str: string): ReactElement {
    return <input type={"text"} style={{width: "200px", outline: "none"}} placeholder={'Append text'}/>
}

function getDataTable(): Array<Array<string | ReactElement | ICell>> {
    const list: Array<Array<string | ReactElement | ICell>> = [];
    list.push(['className', 'string', 'undefined', 'CSS class name of Table'])
    list.push([Button('string1'), 'string1', 'undefined', 'id element Table'])
    list.push([Button2('string2'), 'string2', 'undefined', '((sender: LeftMenu, obj: ParamsClick))=>void \n' +
    'ParamsClick = { \n' +
    '  path: MenuItem[] \n' +
    '  items: MenuItem \n' +
    '  element: HTMLAnchorElement \n' +
    '} '])
    list.push([Input('string3'), 'string3', 'undefined', 'Editable row'])
    return list;
}


export default function P9_1() {
    const mRefLabel = useRef<HTMLLabelElement>(null)
    const mRefLabelCell = useRef<HTMLLabelElement>(null)
    return <div id={'table-12'} style={{paddingTop: 10}}>
        <label className={'label-then'} ref={mRefLabel}></label>
        <br/>
        <label className={'label-then'} ref={mRefLabelCell}></label>
        <Table
            onClickColumn={(id, index) => {
                mRefLabelCell.current!.innerText = ''
                mRefLabel.current!.innerText = "Click Header Column  - id Table:" + id + "  Index column:" + index;
            }}
            onClickRow={(id, index) => {
                mRefLabel.current!.innerText = "Click Row - id Table:" + id + "  Index row:" + index;
            }}

            onClickCell={(id, row, column) => {
                mRefLabelCell.current!.innerText = "Click Cell  - id Table:" + id + "  Index row:" + row + "  Index cell of row:" + column;
            }}
            useInnerHTML={true}
            rowItems={getDataTable()}
            style={{width: "90&"}}>
            <Column>Column:1</Column>
            <Column>Column:2</Column>
            <Column>Column:3</Column>
            <Column>Column:4</Column>
        </Table>

    </div>
}