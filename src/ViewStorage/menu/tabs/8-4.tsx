import React, {useRef} from "react";
import {Tab, Tabs} from "bsr-tabs"
import {CodeSnippetJavaScript} from "../../codeSnippetJavaScript";


export default function P8_4() {
    const mRefTabs = useRef<Tabs>(null)
    return (
        <>
            <br/>
            <Tabs ref={mRefTabs} style={{width:"50%"}}>
                <Tab title={'tab1'} select={true}>
                    <div>Tab1</div>
                </Tab>
                <Tab title={'tab2'} id={'id-tab-312'}>
                    <div>Tab2 id-tab-312</div>
                </Tab>
            </Tabs>
            <br/>
            <button onClick={() => {
                mRefTabs.current!.SelectTabById('id-tab-312')
            }}>
                select tab2
            </button>
            <br/>
            <div>
                <CodeSnippetJavaScript code={`import React, {useRef} from "react";
import {Tab, Tabs} from "bsr-tabs"
import 'bsr-tabs/dist/index.css'

export default function P8_4() {
    
 const mRefTabs = useRef<Tabs>(null)
 return (
        <>
            <Tabs ref={mRefTabs}>
                <Tab title={'tab1'} select={true}>
                    <div>Tab1</div>
                </Tab>
                <Tab title={'tab2'} id={'id-tab-312'}>
                    <div>Tab2 id-tab-312</div>
                </Tab>
            </Tabs>
            <br/>
            <button onClick={() => {
                mRefTabs.current!.SelectTabById('id-tab-312')
            }}>
                select tab3
            </button>
        </>
  )
}`}/>
            </div>
        </>

    )
}
