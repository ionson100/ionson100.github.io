import {useEffect, useRef, useState} from "react";
import {Paginator} from "bsr-paginator";
import {CodeSnippetJavaScript} from "../../codeSnippetJavaScript";


const code=`import {useEffect, useRef, useState} from "react";
import {Paginator} from "bsr-paginator";

export function P15_6() {
    const refPaginator1 = useRef<Paginator>(null)
    const refPaginator2 = useRef<Paginator>(null)
    const refPaginator3 = useRef<Paginator>(null)
    useEffect(() => {
        /*fetching* SetState(totalRows, pageSize,currentPage)*/
        refPaginator1.current!.SetState(100, 10, 1)
        refPaginator2.current!.SetState(100, 7, 1)
        refPaginator3.current!.SetState(100, 5, 1)
    }, [])

    return (
        <>
            <h5>base</h5>
            <Paginator
                style={{background:"#eceaea"}}
                range={5}
                ref={refPaginator1}
                mode={'base'} /*default*/
                ellipsis={'...'}
                previous={'<'}
                next={'>'}
            />
            
            <h5>richBase</h5>
            <Paginator
                style={{background:"#eceaea"}}
                range={5}
                ref={refPaginator2}
                mode={'richBase'}
                ellipsis={'...'}
                previous={'<'}
                next={'>'}
            />
            
            <h5>showEllipsis</h5>
            <Paginator
                style={{background:"#eceaea"}}
                range={5}
                ref={refPaginator3}
                mode={'showEllipsis'}
                ellipsis={'...'}
                previous={'<'}
                next={'>'}
            />
        </>
    )
}`













export function P15_6() {
    const refPaginator1 = useRef<Paginator>(null)
    const refPaginator2 = useRef<Paginator>(null)
    const refPaginator3 = useRef<Paginator>(null)
    useEffect(() => {
        /*fetching* SetState(totalRows, pageSize,currentPage)*/
        refPaginator1.current!.SetState(100, 10, 1)
        refPaginator2.current!.SetState(100, 7, 1)
        refPaginator3.current!.SetState(100, 5, 1)
    }, [])

    return (
        <div style={{paddingBottom:20}}>
            <CodeSnippetJavaScript code={code}/>
            <h5>base</h5>
            <Paginator
                style={{background:"#eceaea"}}
                range={5}
                ref={refPaginator1}
                mode={'base'} /*default*/
                ellipsis={'...'}
                previous={'<'}
                next={'>'}
            />

            <h5>richBase</h5>
            <Paginator
                style={{background:"#eceaea"}}
                range={5}
                ref={refPaginator2}
                mode={'richBase'}
                ellipsis={'...'}
                previous={'<'}
                next={'>'}
            />

            <h5>showEllipsis</h5>
            <Paginator
                style={{background:"#eceaea"}}
                range={5}
                ref={refPaginator3}
                mode={'showEllipsis'}
                ellipsis={'...'}
                previous={'<'}
                next={'>'}
            />
        </div>
    )
}