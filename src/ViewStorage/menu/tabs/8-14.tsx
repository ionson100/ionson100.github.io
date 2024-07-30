import React, {useRef} from "react";
import {Tab, Tabs} from "bsr-tabs"
import {CodeSnippetJavaScript} from "../../codeSnippetJavaScript";


export default function P8_14() {
    const mRefTab = useRef<Tab>(null)
    return (
        <>
            <br/>
            <Tabs  style={{width:"50%"}}>
                <Tab title={'tab1'} select={true} id={'23445'}>
                    <div>Tab1</div>
                </Tab>
                <Tab ref={mRefTab} title={'tab2'} id={'id-tab-312'}>
                    <div>Tab2 id-tab-312</div>
                </Tab>
            </Tabs>
            <br/>
            <div style={{display: "flex"}}>
                <div className={'border-div'}>
                    <button onClick={()=>{
                        mRefTab.current!.SelectTab()
                    }}>
                        Select tab2
                    </button>
                </div>
                <div className={'border-div'}>
                    <input type={"checkbox"} onChange={(e) => {
                        mRefTab.current!.SetVisibilities(!e.target.checked)
                    }}/>
                    <div>Hidden tab2</div>
                </div>
                <div className={'border-div'}>
                    <input type={"checkbox"} onChange={(e) => {
                        mRefTab.current!.SetDisabled(e.target.checked)
                    }}/>
                    <div>Disable tab2</div>
                </div>
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
        <Tabs  style={{width:"50%"}}>
                <Tab title={'tab1'} select={true} id={'23445'}>
                    <div>Tab1</div>
                </Tab>
                <Tab ref={mRefTab} title={'tab2'} id={'id-tab-312'}>
                    <div>Tab2 id-tab-312</div>
                </Tab>
            </Tabs>
            <br/>
            <div style={{display: "flex"}}>
                <div className={'border-div'}>
                    <button onClick={()=>{
                        mRefTab.current.SelectTab()
                    }}>
                        Select tab2
                    </button>
                </div>
                <div className={'border-div'}>
                    <input type={"checkbox"} onChange={(e) => {
                        mRefTab.current.SetVisibilities(!e.target.checked)
                    }}/>
                    <div>Hidden tab2</div>
                </div>
                <div className={'border-div'}>
                    <input type={"checkbox"} onChange={(e) => {
                        mRefTab.current.SetDisabled(e.target.checked)
                    }}/>
                    <div>Disable tab2</div>
                </div>
            </div>
    </>
    )
}`}/>
            </div>
        </>

    )
}
