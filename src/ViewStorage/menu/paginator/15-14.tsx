import {Paginator} from 'bsr-paginator'
import 'bsr-paginator/dist/index.css'
import {useEffect, useRef, useState} from "react";
import {CodeSnippetJavaScript} from "../../codeSnippetJavaScript";


const code=`import {Paginator} from 'bsr-paginator'
import 'bsr-paginator/dist/index.css'
import {useEffect, useRef, useState} from "react";

export function App() {
    const [myState, setMyState] = useState('');
    const refPaginator = useRef<Paginator>(null)
    useEffect(() => {
          /*fetching* SetState(totalRows, pageSize,currentPage)*/
        refPaginator.current!.SetState(100, 10, 1)
    }, [])

    return (
        <div  style={{textAlign:"center",width:"fit-content"}} >
            <div>{myState}</div>
            <div style={{display:"flex",justifyContent:"center"}}>
                 <Paginator
                    isHidingNavigate={true}
                    range={5}
                    ref={refPaginator}
                    mode={'richBase'}
                    ellipsis={'...'}
                    previous={'previous'}
                    next={'next'}
                    onChange={(page) => {
                        setMyState("Click " + page + " page of " + refPaginator.current!.State.PagesCount)
                    }}
                />
            </div>

        </div>
    )
}`

export default function P15_4() {
    const [myState, setMyState] = useState('');
    const refPaginator = useRef<Paginator>(null)
    useEffect(() => {
        refPaginator.current!.SetState(100, 10, 1)
    }, [])

    return (
        <div style={{textAlign: "center", width: "fit-content"}}>

            <div style={{display: "flex", justifyContent: "center"}}>
                <CodeSnippetJavaScript code={code}/>
            </div>
            <div style={{textAlign:"center",height:30}}>{myState}</div>
            <div style={{display: "flex", justifyContent: "center"}}>
                <Paginator
                    isHidingNavigate={true}
                    range={5}
                    ref={refPaginator}
                    mode={'richBase'}
                    ellipsis={'...'}
                    previous={'previous'}
                    next={'next'}
                    onChange={(page) => {
                        setMyState("Click " + page + " page of " + refPaginator.current!.State.PagesCount)
                    }}
                />
            </div>

        </div>
    )
}