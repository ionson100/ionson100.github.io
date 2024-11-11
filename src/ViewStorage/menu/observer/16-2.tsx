import React, {ReactElement} from "react";
//import {observer} from 'bsr-observer-location'
import {CodeSnippetJavaScript} from "../../codeSnippetJavaScript";

const code=`import React, {ReactElement} from "react";
import {observer} from 'bsr-observer-location'

export default class App extends React.Component<any, ReactElement> {
    private key = ''

    constructor(props: Readonly<any>) {
        super(props);
        this.state = <div>none</div>
    }

    action(loc: Location) {
        this.setState(<div>{loc.toString()}</div>)
    }

    componentDidMount() {
        this.key = observer.AddEventForClass(loc => {
            this.action(loc)
        })
    }

    componentWillUnmount() {
        observer.RemoveEvent(this.key)
    }

    render() {
        return <div style={{padding: 20}}>
            <button onClick={() => {
                window.history.pushState(null, 'test', window.location.href + "&d=test")
            }}>add test
            </button>
            <div style={{padding: 10}}>
                {
                    this.state
                }
            </div>
        </div>
    }
}`















export default class P16_2 extends React.Component<any, ReactElement> {
    private key = ''

    constructor(props: Readonly<any>) {
        super(props);
        this.state = <div>none</div>
    }

    action(loc: Location) {
        this.setState(<div>{loc.toString()}</div>)
    }

    componentDidMount() {
        // this.key = observer.AddEventForClass(loc => {
        //     this.action(loc)
        // })
    }

    componentWillUnmount() {
        //observer.RemoveEvent(this.key)
    }

    render() {
        return <div style={{padding: 20}}>
            <button onClick={() => {
                window.history.pushState(null, 'test', window.location.href + "&d=test")
            }}>add test
            </button>
            <div style={{padding: 10}}>
                {
                    this.state
                }
            </div>
            <CodeSnippetJavaScript code={code}/>
        </div>
    }
}
