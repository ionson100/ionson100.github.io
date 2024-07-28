import React from "react";
import {Tab, Tabs} from "bsr-tabs"
import {CodeSnippetJavaScript} from "../../codeSnippetJavaScript";


export default function P8_2() {
    return (
        <>
            <br/>
            <Tabs className={'tab-123'} id={'123'} style={{width: "50%",  background: "transparent"}}>
                <Tab title={'tab1'} select={true}>
                    <div>Tab1</div>
                </Tab>
                <Tab title={'tab2'}>
                    <div>Tab2</div>
                </Tab>
            </Tabs>
            <br/>
            <div>
                <CodeSnippetJavaScript code={`import React from "react";
import {Tab, Tabs} from "bsr-tabs"
import 'bsr-tabs/dist/index.css'

export default function P8_2() {
    return (
        <>
             <Tabs className={'tab-123'} id={'123'} style={{width: "50%",  background: "transparent"}}>
                <Tab title={'tab1'} select={true}>
                    <div>Tab1</div>
                </Tab>
                <Tab title={'tab2'}>
                    <div>Tab2</div>
                </Tab>
            </Tabs>
        </>
    )
}`}/>
            </div>
        </>

    )
}
