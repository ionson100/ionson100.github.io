import React from "react";
import {RadioCheck} from "bsr-radiocheck";
import 'bsr-radiocheck/dist/index.css'
import {CodeSnippetJavaScript} from "../../codeSnippetJavaScript";

// @ts-ignore
const code=`import React from "react";
import {RadioCheck} from "bsr-radiocheck";
import 'bsr-radiocheck/dist/index.css'

export default function P12_1(){
    return <div >
        <div style={{padding:10}}>
            <RadioCheck
                id={"check-1"}
                checked={true}
                labelContent={'Simple CheckBox'}
                onChange={(t,r)=>{
                    console.log("id: "+t.getAttribute('id')+" checked: "+r)
                }}
            />
        </div>
        <div style={{padding:10,background:"#dcd9d9",width:"fit-content"}}>
            <RadioCheck type={"radio"} name={"group1"} labelContent={"Radio1"} checked={true}/>
            <RadioCheck type={"radio"} name={"group1"} labelContent={"Radio2"} />
        </div>
        <div style={{padding:10,background:"#dcd9d9",width:"fit-content",marginTop:5}}>
            <RadioCheck position={"left"} type={"radio"} name={"group2"} labelContent={"Radio1"} checked={true}/>
            <RadioCheck position={"left"} type={"radio"} name={"group2"} labelContent={"Radio2"} />
        </div>
    </div>
}`




export default function P12_1(){
    return <div >
        <div style={{padding:10}}>
            <RadioCheck
                id={"check-1"}
                checked={true}
                labelContent={'Simple CheckBox'}
                onChange={(t,r)=>{
                    console.log("id: "+t.getAttribute('id')+" checked: "+r)
                }}
            />
        </div>
        <div style={{padding:10,background:"#dcd9d9",width:"fit-content"}}>
            <RadioCheck type={"radio"} name={"group1"} labelContent={"Radio1"} checked={true}/>
            <RadioCheck type={"radio"} name={"group1"} labelContent={"Radio2"} />
        </div>
        <div style={{padding:10,background:"#dcd9d9",width:"fit-content",marginTop:5}}>
            <RadioCheck position={"left"} type={"radio"} name={"group2"} labelContent={"Radio1"} checked={true}/>
            <RadioCheck position={"left"} type={"radio"} name={"group2"} labelContent={"Radio2"} />
        </div>


        <CodeSnippetJavaScript code={code}/>
    </div>
}