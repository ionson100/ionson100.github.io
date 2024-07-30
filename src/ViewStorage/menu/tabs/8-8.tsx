import React, {useRef} from "react";
import {Tab, Tabs} from "bsr-tabs"
import {CodeSnippetJavaScript} from "../../codeSnippetJavaScript";


export default function P8_8() {
    const mRefTabs = useRef<Tabs>(null)
    const mRefDiv=useRef<HTMLDivElement>(null);
    return (
        <>
            <div ref={mRefDiv}></div>
            <br/>
            <Tabs ref={mRefTabs} style={{width:"50%"}} onSelect={(key,id)=>{
                mRefDiv.current!.innerText=`onSelect  eventKey:`+key+'  '+`id:`+id;
            }}>
                <Tab key={'1'} title='tab1' select={true} eventKey='keyTab1' >
                    <div>Tab1</div>
                </Tab>
                <Tab key={2} title='tab2' id='id-tab-312' eventKey='keyTab2'>
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

export default function P8_8() {
  const mRefTabs = useRef<Tabs>(null)
    const mRefDiv=useRef<HTMLDivElement>(null);
    return (
        <>
            <div ref={mRefDiv}></div>
            <br/>
            <Tabs ref={mRefTabs} style={{width:"50%"}} onSelect={(key,id)=>{
                mRefDiv.current.innerText=\`onSelect  eventKey:\`+key+'  '+\`id:\`+id;
            }}>
                <Tab title='tab1' select={true} eventKey='keyTab1' id='id-tab-312-1'>
                    <div>Tab1</div>
                </Tab>
                <Tab title='tab2' id='id-tab-312' eventKey='keyTab2'>
                    <div>Tab2 id-tab-312</div>
                </Tab>
            </Tabs>
            <br/>
            <button onClick={() => {
                mRefTabs.current.SelectTabById('id-tab-312')
            }}>
                select tab2
            </button>
        </>
  )
}`}/>
            </div>
        </>

    )
}
