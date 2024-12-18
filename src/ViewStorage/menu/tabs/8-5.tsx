import React, {useRef} from "react";
import {Tab, Tabs} from "bsr-tabs"
import {CodeSnippetJavaScript} from "../../codeSnippetJavaScript";


export default function P8_5() {
    const mRefTabs = useRef<Tabs>(null)
    return (
        <>
            <br/>
            <Tabs ref={mRefTabs} style={{width:"50%"}}>
                <Tab title={'tab1'} select={true} id={'23445'}>
                    <div>Tab1</div>
                </Tab>
                <Tab title={'tab2'} id={'id-tab-312'}>
                    <div>Tab2 id-tab-312</div>
                </Tab>
            </Tabs>
            <br/>
            <div className={'border-div'}>
                <input type={"checkbox"}  onChange={(e) => {
                    mRefTabs.current!.SetVisibilitiesTabById('id-tab-312',!e.target.checked)
                }}/>
                <div>Hidden tab2</div>
            </div>
            <br/>
            <div>
                <CodeSnippetJavaScript code={`import React, {useRef} from "react";
import {Tab, Tabs} from "bsr-tabs"
import 'bsr-tabs/dist/index.css'

export default function Tabs() {
    
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
           <label>
               <input type={"checkbox"}  onChange={(e) => {
                    mRefTabs.current.SetVisibilitiesTabById('id-tab-312',!e.target.checked)
                }}/>
                Hidden tab2
           </label>
    </>
    )
}`}/>
            </div>
        </>

    )
}
