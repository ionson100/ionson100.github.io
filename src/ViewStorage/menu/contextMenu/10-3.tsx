import React from "react";
import {ContextMenu} from "bsr-context-menu";
import 'bsr-context-menu/dist/index.css'
import {CodeSnippetJavaScript} from "../../codeSnippetJavaScript";


const code=`import React from "react";
import {ContextMenu} from "bsr-context-menu";
import 'bsr-context-menu/dist/index.css'

function Body(text:string){
    return(
        <div style={{width:200,cursor:"pointer"}}>
            <div>{text}:1</div>
            <div>{text}:2</div>
            <div>{text}:3</div>
            <div>{text}:4</div>
        </div>
    )
}
export default class P10_3 extends React.Component<any, any>{
    private mRefMenu1=React.createRef<HTMLDivElement>()
    private mRefMenu2=React.createRef<HTMLDivElement>()
    private menu1?:ContextMenu
    private menu2?:ContextMenu
    constructor(props:Readonly<any>) {
        super(props);
    }
    componentDidMount() {
        this.menu1=new ContextMenu({target:this.mRefMenu1.current!,body:Body("Menu1")})
        this.menu2=new ContextMenu({target:this.mRefMenu2.current!,body:Body("Menu2")})
    }
    componentWillUnmount() {
        this.menu1?.ContextMenuWillUnmount()
        this.menu2?.ContextMenuWillUnmount()
    }
    render() {
        return (
            <>
                <div style={{display: "flex"}}>
                    <div ref={this.mRefMenu1} style={{width: 100, height: 100, background: "#9cee98", margin: 10}}/>
                    <div ref={this.mRefMenu2} style={{width: 100, height: 100, background: "#8994f2", margin: 10}}/>
                </div>
            </>
        );
    }
}`












function Body(text:string){
    return(
        <div style={{width:200,cursor:"pointer"}}>
            <div>{text}:1</div>
            <div>{text}:2</div>
            <div>{text}:3</div>
            <div>{text}:4</div>
        </div>
    )
}
export default class P10_3 extends React.Component<any, any>{
    private mRefMenu1=React.createRef<HTMLDivElement>()
    private mRefMenu2=React.createRef<HTMLDivElement>()
    private menu1?:ContextMenu
    private menu2?:ContextMenu
    constructor(props:Readonly<any>) {
        super(props);
    }
    componentDidMount() {
        this.menu1=new ContextMenu({target:this.mRefMenu1.current!,body:Body("Menu1")})
        this.menu2=new ContextMenu({target:this.mRefMenu2.current!,body:Body("Menu2")})
    }
    componentWillUnmount() {
        this.menu1?.ContextMenuWillUnmount()
        this.menu2?.ContextMenuWillUnmount()
    }
    render() {
        return (
            <>
                <div style={{display: "flex"}}>
                    <div ref={this.mRefMenu1} style={{width: 100, height: 100, background: "#9cee98", margin: 10}}/>
                    <div ref={this.mRefMenu2} style={{width: 100, height: 100, background: "#8994f2", margin: 10}}/>
                </div>
                <CodeSnippetJavaScript code={code}/>
            </>
        );
    }
}
