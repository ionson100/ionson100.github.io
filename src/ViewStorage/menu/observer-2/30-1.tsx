import {INotifyPropertyChanged,GetRandomStrings} from "bsr-observer"
import React, {useEffect, useState} from "react";
import {CodeSnippetJavaScript} from "../../codeSnippetJavaScript";


const temp=`import {INotifyPropertyChanged,GetRandomStrings} from "bsr-observer"
import {useEffect, useState} from "react";

class MSettings extends INotifyPropertyChanged {
    public count=0;
    increment(){
        this.count++
        this.OnPropertyChanged("increment")
    }
}
const settings=new MSettings()


export default function App() {


    const [, setUpdate] = useState("")
    useEffect(()=>{
        const  id=settings.___addAction((s:string|undefined)=>{
            console.log("func "+s);
            setUpdate(GetRandomStrings(10))
        });
        return () => {settings.___removeAction(id)}
    },[])

    return (
        <>
            <div>
                <button onClick={() => settings.increment()}>+1
                    count is {settings.count}
                </button>
            </div>
        </>
    )
}`


class MSettings extends INotifyPropertyChanged {
    public count=0;
    increment(){
        this.count++
        this.OnPropertyChanged("increment")
    }
}
const settings=new MSettings()


export default function App() {


    const [, setUpdate] = useState("")
    useEffect(()=>{
        const  id=settings.___addAction((s:string|undefined)=>{
            console.log(`func ${s}`);
            setUpdate(GetRandomStrings(10))
        });
        return () => {settings.___removeAction(id)}
    },[])

    return (
        <>
            <div>
                <button onClick={() => settings.increment()}>+1
                    count is {settings.count}
                </button>
            </div>
            <CodeSnippetJavaScript code={temp}/>
        </>
    )
}