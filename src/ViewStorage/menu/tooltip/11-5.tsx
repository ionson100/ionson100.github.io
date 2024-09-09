import React from "react";
import {ToolTip} from 'bsr-tooltip'
import 'bsr-tooltip/dist/index.css'
import {CodeSnippetJavaScript} from "../../codeSnippetJavaScript";


const code=`import React from "react";
import {ToolTip} from 'bsr-tooltip'
import 'bsr-tooltip/dist/index.css'

export default class P11_5 extends React.Component<any, any>{
    private tooltip?:ToolTip
    private mRefButton=React.createRef<HTMLButtonElement>()

    componentDidMount() {
        this.tooltip=new ToolTip({
            target:this.mRefButton.current!,
            body:'simple button',
            options:{
                style:{backgroundColor:'green',padding:"5px"}
            }
        })
    }
    
    componentWillUnmount() {
        this.tooltip?.ContextMenuWillUnmount();
    }
    
    render() {
        return(
            <div style={{padding:100}}>
                <button ref={this.mRefButton}>button</button>
            </div>
        )
    }
}`













export default class P11_5 extends React.Component<any, any>{
    private tooltip?:ToolTip
    private mRefButton=React.createRef<HTMLButtonElement>()

    componentDidMount() {
        this.tooltip=new ToolTip({
            target:this.mRefButton.current!,
            body:'simple button',
            options:{
                style:{backgroundColor:'green',padding:"5px"}
            }
        })
    }

    componentWillUnmount() {
        this.tooltip?.ContextMenuWillUnmount();
    }

    render() {
        return(
            <>
                <div style={{padding: 100}}>
                    <button ref={this.mRefButton}>button</button>
                </div>
                <CodeSnippetJavaScript code={code}/>
            </>

        )
    }
}
