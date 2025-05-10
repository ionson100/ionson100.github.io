import {INotifyPropertyChanged} from "bsr-observer"
import React from "react";
import {CodeSnippetJavaScript} from "../../codeSnippetJavaScript";

const temp=`import {INotifyPropertyChanged} from "bsr-observer"
import React from "react";


class MSettings extends INotifyPropertyChanged {
    public count=0;
    increment(){
        this.count++
        this.OnPropertyChanged("increment",this.count)
    }
    decrement(){
        this.count--
        this.OnPropertyChanged("decrement",this.count)
    }
}
const settings=new MSettings()

export default class App extends React.Component {
    private mSettings=settings
    private id=''
    private action:string|undefined

    componentDidMount() {
        this.id= this.mSettings.___addAction((s:string|undefined,count:number)=>{
            this.action=s;
            this.setState({count:count})
        })
    }
    componentWillUnmount() {
        this.mSettings.___removeAction(this.id)
    }
    render() {
        return (
            <>
                <label>{this.action}</label>
                <div style={{display:"flex"}} >
                    <button onClick={() =>this.mSettings.increment()}>
                        +1 count is {this.mSettings.count}
                    </button>

                    <button onClick={() => this.mSettings.decrement()}>
                        -1 count is {this.mSettings.count}
                    </button>
                </div>
            </>
        );
    }
}`

class MSettings extends INotifyPropertyChanged {
    public count=0;
    increment(){
        this.count++
        this.OnPropertyChanged("increment",this.count)
    }
    decrement(){
        this.count--
        this.OnPropertyChanged("decrement",this.count)
    }
}
const settings=new MSettings()

export default class App extends React.Component {
    private mSettings=settings
    private id=''
    private action:string|undefined

    componentDidMount() {
        this.id= this.mSettings.___addAction((s:string|undefined,count:number)=>{
            this.action=s;
            this.setState({count:count})
        })
    }
    componentWillUnmount() {
        this.mSettings.___removeAction(this.id)
    }
    render() {
        return (
            <>
                <label>{this.action}</label>
                <div style={{display:"flex"}} >
                    <button onClick={() =>this.mSettings.increment()}>
                        +1 count is {this.mSettings.count}
                    </button>

                    <button onClick={() => this.mSettings.decrement()}>
                        -1 count is {this.mSettings.count}
                    </button>
                </div>
                <CodeSnippetJavaScript code={temp}/>
            </>
        );
    }
}