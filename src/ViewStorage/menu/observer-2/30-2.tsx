import {INotifyPropertyChanged,CreateObserver} from "bsr-observer"
import {CodeSnippetJavaScript} from "../../codeSnippetJavaScript";
import React from "react";

const temp=`import {INotifyPropertyChanged,CreateObserver} from "bsr-observer"


class MSettings extends INotifyPropertyChanged {
    public count=0;
    increment(){
        this.count++
        this.OnPropertyChanged("increment")
    }
    decrement(){
        this.count--
        this.OnPropertyChanged("decrement")
    }
}
const settings=new MSettings()

const useSettings=CreateObserver(settings)

export default  function App() {
    const mSettings:MSettings = useSettings()

    return (
        <>
            <div style={{display:"flex"}} >
                <button onClick={() => mSettings.increment()}>
                    +1 count is {mSettings.count}
                </button>

                <button onClick={() => mSettings.decrement()}>
                    -1 count is {mSettings.count}
                </button>
            </div>
        </>
    )
}
`

class MSettings extends INotifyPropertyChanged {
    public count=0;
    increment(){
        this.count++
        this.OnPropertyChanged("increment")
    }
    decrement(){
        this.count--
        this.OnPropertyChanged("decrement")
    }
}
const settings=new MSettings()

const useSettings=CreateObserver(settings)

export default  function App() {
    const mSettings:MSettings = useSettings()

    return (
        <>
            <div style={{display:"flex"}} >
                <button onClick={() => mSettings.increment()}>
                    +1 count is {mSettings.count}
                </button>

                <button onClick={() => mSettings.decrement()}>
                    -1 count is {mSettings.count}
                </button>
            </div>
            <CodeSnippetJavaScript code={temp}/>
        </>
    )
}
