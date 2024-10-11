import {Paginator} from 'bsr-paginator'
import './index.css'
import 'bsr-paginator/dist/index.css'
import {useEffect, useRef, useState} from "react";
import {CodeSnippetJavaScript} from "../../codeSnippetJavaScript";


const code=`import {Paginator} from 'bsr-paginator'
import 'bsr-paginator/dist/index.css'
import {useEffect, useRef, useState} from "react";

export function P15_5() {
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
                    useDoubleSending={true}
                    range={5}
                    ref={refPaginator}
                    mode={'richBase'}
                    ellipsis={'...'}
                    previous={'previous'}
                    next={'next'}
                    onButtonClick={(page, pages) => {
                        const str=page+" page of "+pages
                        setMyState(str)
                        alert('Click: '+str)
                    }}
                />
            </div>
        </div>
    )
}`

export function P15_5() {
    const [myState, setMyState] = useState('');
    const refPaginator = useRef<Paginator>(null)
    useEffect(() => {
        refPaginator.current!.SetState(100, 10, 1)
    }, [])

    return (
        <div  style={{textAlign:"center",width:"fit-content"}} >
            <div>{myState}</div>
            <div style={{display:"flex",justifyContent:"center"}}>
                <CodeSnippetJavaScript  code={code}/>
            </div>

            <div style={{display:"flex",justifyContent:"center"}}>
                <Paginator
                    useDoubleSending={true}
                    range={5}
                    ref={refPaginator}
                    mode={'richBase'}
                    ellipsis={'...'}
                    previous={'previous'}
                    next={'next'}
                    onButtonClick={(page, pages) => {

                        const str=page+" page of "+pages
                        setMyState(str)
                        alert('Click: '+str)
                    }}
                />
            </div>
        </div>
    )
}