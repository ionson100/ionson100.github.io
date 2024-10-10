import {Paginator} from 'bsr-paginator'
import './index.css'
import 'bsr-paginator/dist/index.css'
import {useEffect, useRef, useState} from "react";
import {CodeSnippetJavaScript} from "../../codeSnippetJavaScript";


const code=`import {Paginator} from 'bsr-paginator'
import 'bsr-paginator/dist/index.css'
import {useEffect, useRef, useState} from "react";

export function P15_5() {
    const refPaginator = useRef<Paginator>(null)
    useEffect(() => {
        refPaginator.current!.SetState(100, 10, 1)
    }, [])

    return (
        <div className={'container'} style={{textAlign:"center"}} >
            <div style={{textAlign:"center"}}>It is allowed to click the button more than once.</div>
            <div style={{display:"flex",justifyContent:"center"}}>
                <CodeSnippetJavaScript  code={code}/>
            </div>

            <Paginator
                useDoubleSending={true} /*It is allowed to click the button more than once*/
                className={'bsr-wrapper-paginator-core'}
                ref={refPaginator}
                onButtonClick={(page, pages) => {
                    alert('bitton click:'+page)
                }}
            />
        </div>
    )
}`

export function P15_5() {
    const refPaginator = useRef<Paginator>(null)
    useEffect(() => {
        refPaginator.current!.SetState(100, 10, 1)
    }, [])

    return (
        <div className={'container'} style={{textAlign:"center"}} >
            <div style={{textAlign:"center"}}>It is allowed to click the button more than once.</div>
            <div style={{display:"flex",justifyContent:"center"}}>
                <CodeSnippetJavaScript  code={code}/>
            </div>

            <Paginator
                useDoubleSending={true} /*It is allowed to click the button more than once*/
                className={'bsr-wrapper-paginator-core'}
                ref={refPaginator}
                onButtonClick={(page, pages) => {
                    alert('bitton click:'+page)
                }}
            />
        </div>
    )
}