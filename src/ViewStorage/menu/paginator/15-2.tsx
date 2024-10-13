import {Paginator} from 'bsr-paginator'
import 'bsr-paginator/dist/index.css'
import {useEffect, useRef, useState} from "react";
import {CodeSnippetJavaScript} from "../../codeSnippetJavaScript";


const code=`import {useEffect, useRef, useState} from "react";
import {Paginator} from 'bsr-paginator'
import 'bsr-paginator/dist/index.css'

export function App() {
     const [myState, setMyState] = useState('');
    const refPaginator = useRef<Paginator>(null)
    useEffect(() => {
           /*fetching SetState(totalRows, pageSize,currentPage)*/
        refPaginator.current!.SetState(500, 10, 1)
    }, [])

    return (
        <div  style={{textAlign:"center",width:"fit-content"}} >
            <div>{myState}</div>
                <Paginator
                    range={10}
                    ref={refPaginator}
                    previous={'<'}
                    next={'>'}
                    first={'<<'}
                    last={'>>'}
                    onChange={ (page) => {
                        setMyState(page + " page of " + refPaginator.current!.State.PagesCount)
                    }}
                />
        </div>
    )
}`

export default function P15_2() {
    const [myState, setMyState] = useState('');
    const refPaginator = useRef<Paginator>(null)
    useEffect(() => {
        /*fetching* SetState(totalRows, pageSize,currentPage)*/
        refPaginator.current!.SetState(500, 10, 1)
    }, [])

    return (
        <div style={{textAlign: "center", width: "fit-content"}}>
            <div style={{display: "flex", justifyContent: "center"}}>
                <CodeSnippetJavaScript code={code}/>
            </div>
            <div style={{height:20}}>{myState}</div>
            <div style={{display: "flex", justifyContent: "center"}}>
                <Paginator

                    range={10}
                    ref={refPaginator}
                    previous={'<'}
                    next={'>'}
                    first={'<<'}
                    last={'>>'}
                    onChange={ (page) => {
                        setMyState(page + " page of " + refPaginator.current!.State.PagesCount)
                    }}
                />
            </div>

        </div>
    )
}