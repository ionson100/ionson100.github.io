import React from "react";
import {ShowBsrDialog,BaseBodyDialog} from "bsr-modaldialog";
import 'bsr-modaldialog/dist/index.css'
import {CodeSnippetJavaScript} from "../../codeSnippetJavaScript";

const code=`import React from "react";
import {ShowBsrDialog,BaseBodyDialog} from "bsr-modaldialog";
import 'bsr-modaldialog/dist/index.css'

type 'ModalBodyProps={
    firstName:string
    laseName:string
}

type ReturningModalBody={
    firstName:string
    laseName:string
}

class ModalBody extends BaseBodyDialog<ModalBodyProps>{

    getData(mode: string | undefined): ReturningModalBody {
        return {
            firstName:this.props.firstName,
            laseName:this.props.laseName
        }
    }
    validate(mode: string | undefined): boolean {
        return true;
    }
    render() {
        return <div>
            First Name:{this.props.firstName}<br/>
            Last Name:{this.props.laseName}<br/>
        </div>;
    }
}

export default function P4_16(){

    return (
        <div>
            <button onClick={() => {
                ShowBsrDialog({
                    header:(<span style={{paddingLeft:10}}>Dialog </span>),
                    body:<ModalBody firstName={"myForest Name"} laseName={"myLast Name"}/>,
                    buttons:[(<button data-mode={-1} data-focus={1}>Ok</button>)]
                }).then(res=>{
                    const returning=res.dataBody as ReturningModalBody
                    alert([returning.firstName,returning.laseName].join(' '))
                })
            }}>show
            </button>
        </div>
    )
}`











type ModalBodyProps={
    firstName:string
    laseName:string
}

 export type ReturningModalBody={
    firstName:string
    laseName:string
}

class ModalBody extends BaseBodyDialog<ModalBodyProps>{

    getData(mode: string | undefined): ReturningModalBody{
        return {
            firstName:this.props.firstName,
            laseName:this.props.laseName
        }
    }
    validate(mode: string | undefined): boolean  {
        return true;
    }
    render() {
        return <div style={{padding:20}}>
            First Name:{this.props.firstName}<br/>
            Last Name:{this.props.laseName}<br/>
        </div>;
    }
}

export default function P14_6(){

    return (
        <div>
            <br/>
            <button onClick={() => {
                ShowBsrDialog({
                    header:(<span style={{paddingLeft:10}}>Dialog </span>),
                    body:<ModalBody firstName={"myForest Name"} laseName={"myLast Name"}/>,
                    buttons:[(<button data-mode={-1} data-focus={1}>Ok</button>)]
                }).then(res=>{
                    const returning=res.dataBody as ReturningModalBody
                    alert([returning.firstName,returning.laseName].join(' '))
                })
            }}>show
            </button>
            <br/>
            <br/>
            <CodeSnippetJavaScript code={code}/>
        </div>
    )
}
