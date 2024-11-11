import React, {useState} from "react";
//import {useObserverLocation} from 'bsr-observer-location'
import {CodeSnippetJavaScript} from "../../codeSnippetJavaScript";

const code=`import React, {useState} from "react";
import {useObserverLocation} from 'bsr-observer-location'

export default function App() {
    
    const [control, setControl] = useState(<div>none</div>)
     
    useObserverLocation(loc => {
       action(loc)
    })
    
    function action(loc:Location){
        setControl(<div>{loc.toString()}</div>)
    }

    return (
        <div style={{padding: 20}}>
            <button onClick={() => {
                window.history.pushState(null, 'test', window.location.href + "&d=test")
            }}>add test
            </button>
            <div style={{padding:10}}>
                {
                    control
                }
            </div>
            <CodeSnippetJavaScript code={code}/>
        </div>
    )
}`



export default function P16_1() {
    const [control, setControl] = useState(<div>none</div>)
    // useObserverLocation(loc => {
    //    action(loc)
    // })
    function action(loc:Location){
        setControl(<div>{loc.toString()}</div>)
    }

    return (
        <div style={{padding: 20}}>
            <button onClick={() => {
                window.history.pushState(null, 'test', window.location.href + "&d=test")
            }}>add test
            </button>
            <div style={{padding:10}}>
                {
                    control
                }
            </div>
            <CodeSnippetJavaScript code={code}/>
        </div>
    )
}