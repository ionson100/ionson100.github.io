import {Paginator} from 'bsr-paginator'
import './index.css'
import 'bsr-paginator/dist/index.css'
import {useEffect, useRef, useState} from "react";
import {CodeSnippetJavaScript} from "../../codeSnippetJavaScript";


const code=`import {Paginator} from 'bsr-paginator'
import 'bsr-paginator/dist/index.css'
import {useEffect, useRef, useState} from "react";

export function P15_2() {
    const [name, setName] = useState('');
    const refPaginator = useRef<Paginator>(null)
    useEffect(() => {
        /*fetching*/
        refPaginator.current!.SetState(100, 10, 1)
    }, [])

    return (
        <div className={'container'} >
            <div style={{textAlign: "center"}}>{name}</div>
            <Paginator
                ref={refPaginator}
                isVisibleSide={false}
                onButtonClick={(page, pages) => {
                    setName("page:"+ page +" of" +pages)
                }}
            />
        </div>
    )
}`

export function P15_4() {
    const [name, setName] = useState('');
    const refPaginator = useRef<Paginator>(null)
    useEffect(() => {
        refPaginator.current!.SetState(100, 10, 1)
    }, [])

    return (
        <div className={'container'} style={{textAlign:"center"}} >
            <div >{name}</div>
            <div style={{display:"flex",justifyContent:"center"}}>
                <CodeSnippetJavaScript  code={code}/>
            </div>

            <Paginator

                isVisibleSide={false}
                className={'bsr-wrapper-paginator-core'}
                ref={refPaginator}
                onButtonClick={(page, pages) => {
                    setName(`${page} page of ${pages}`)
                }}
            />
        </div>
    )
}