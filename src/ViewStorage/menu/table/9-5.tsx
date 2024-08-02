import {Table, Column, ICell,} from "bsr-table";
import React, {ReactElement} from "react";
import {CodeSnippetJavaScript} from "../../codeSnippetJavaScript";

function getDataTable(): Array<Array<string | ReactElement | ICell|null>> {
    const list: Array<Array<string | ReactElement | ICell|null>> = [];
    list.push(['cell1', 'cell2'])
    list.push(['cell1', <button onClick={()=>alert("cell2")}>Button</button>])
    list.push(['cell1', {id:"cell_id_2",style:{background:"yellow"},content:'cell ICell',isVisible:true}])
    list.push(['cell1', {id:"cell_id_2",style:{background:"cadetblue"},content:'cell ICell user data',isVisible:true},{content:'inner user data'}])
    list.push(['cell1', <input type={"text"} style={{width: "200px", outline: "none"}} placeholder={'Append text'}/>])
    list.push(['cell1', null])
    list.push([<></>, 'cell2'])
    return list;
}


export default function P9_5() {
    return <div id={'table-12'}>
        <div>
            <CodeSnippetJavaScript code={`export interface ICell{
    id?:string
    className?:string
    style?: React.CSSProperties | undefined
    content?:string|ReactElement; //<td>...<td/>
    rawContent?:string|ReactElement; //I'm waiting as <th>...<th/>
    isVisible?:boolean // is visible or use inner user data
    /*--css input--*/
    input[type="text"]{
     border: none;
     outline: none;
     background: transparent;
    }
    input[type="text"]:focus{
     border: 1px black solid;
     outline: none;
     background: white;
    }
}`}/>
        </div>
        <Table
            style={{width: 500}}
            caption={'ICell'}
            rowItems={getDataTable()}

        >
            <Column>Column:1</Column>
            <Column>Column:2</Column>
        </Table>
        <div>
            <CodeSnippetJavaScript code={`import React, {ReactElement, useRef} from "react";
import {Table, Column, ICell,} from "bsr-table";
import "bsr-table/dist/index.css"

function getDataTable(): Array<Array<string | ReactElement | ICell>> {
    const list: Array<Array<string | ReactElement | ICell>> = [];
    list.push(['cell1', 'cell2'])
    list.push(['cell1', <button onClick={()=>alert("cell2")}>Button</button>])
    list.push(['cell1', {id:"cell_id_2",style:{background:"yellow"},content:'cell ICell',isVisible:true}])
    list.push(['cell1', {id:"cell_id_2",style:{background:"cadetblue"},content:'cell ICell user data',isVisible:true},{content:'inner user data'}])
    list.push(['cell1', <input type={"text"} style={{width: "200px"}} placeholder={'Append text'}/>])
    list.push(['cell1', null])
    list.push([<></>, 'cell2'])
    return list;
}

  <Table
   style={{width: 500}}
   caption={'ICell'}
   rowItems={getDataTable()}
   >
   <Column>Column:1</Column>
   <Column>Column:2</Column>
  </Table>
`}/>
        </div>
    </div>
}

