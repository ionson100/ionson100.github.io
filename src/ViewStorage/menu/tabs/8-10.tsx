import React from "react";
import {Tab, Tabs} from "bsr-tabs"
import { RiAlignItemBottomFill } from "react-icons/ri";
import {CodeSnippetJavaScript} from "../../codeSnippetJavaScript";


export default function P8_10() {
    return (
        <>
            <br/>
            <Tabs className={'tab-123'} id={'123'} style={{width: "50%",  background: "transparent"}}>
                <Tab
                    icon={<RiAlignItemBottomFill size={20}/>}
                    title={'tab1'}
                    select={true}
                    id={'121'}>
                    <div>Tab1</div>
                </Tab>
                <Tab
                    title={<div style={{width:200,background:"grey",padding:5,fontSize:16,color:"white"}}>Tab2</div>}
                    id={'122'}>
                    <div>Tab2</div>
                </Tab>
                <Tab
                    width={150}
                    title={'tab3'}
                    id={'123'}>
                    <div>Tab3</div>
                </Tab>
            </Tabs>
            <br/>
            <div>
                <CodeSnippetJavaScript code={`import React from "react";
import {Tab, Tabs} from "bsr-tabs"
import 'bsr-tabs/dist/index.css'

export default function P8_10() {
    return (
        <>
             <Tabs className={'tab-123'} id={'123'} style={{width: "50%",  background: "transparent"}}>
                <Tab
                    icon={<RiAlignItemBottomFill size={20}/>}
                    title={'tab1'}
                    select={true}
                    id={'121'}>
                    <div>Tab1</div>
                </Tab>
                <Tab
                    title={<div style={{width:200,background:"grey",padding:5,fontSize:16,color:"white"}}>Tab2</div>}
                    id={'122'}>
                    <div>Tab2</div>
                </Tab>
                <Tab
                    width={150}
                    title={'tab3'}
                    id={'123'}>
                    <div>Tab3</div>
                </Tab>
            </Tabs>
        </>
    )
}`}/>
            </div>
        </>

    )
}
