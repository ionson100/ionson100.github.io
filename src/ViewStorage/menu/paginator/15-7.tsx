import {useEffect, useRef, useState} from "react";
import {Paginator} from "bsr-paginator";
import 'bsr-paginator/dist/index.css'
import {CodeSnippetJavaScript} from "../../codeSnippetJavaScript";

const code=`import {useEffect, useRef, useState} from "react";
import {Paginator} from "bsr-paginator";
import 'bsr-paginator/dist/index.css'

export function App() {
    const [myClick, setMyClick] = useState('');
    const [myFetch, setMyFetch] = useState('');
    const refPaginator = useRef<Paginator>(null)
    useEffect(() => {
         /*fetching: SetState(totalRows, pageSize,currentPage,callback) */
        refPaginator.current!.SetState(100, 5, 1, () => WriteFetch())
    }, []);
    function WriteFetch() {
        const str = "totalRows: "+refPaginator!.current!.State.TotalRows+ 
            " pageSize: "+refPaginator.current!.State.PageSize+
            " currentPage: "+refPaginator.current!.State.CurrentPage+
            " range: "+refPaginator.current!.State.Range+
            " mode: "+refPaginator.current!.State.Mode
        setMyFetch(str)
    }
    return (
        <div>
            <div>{myClick}</div>
            <div style={{display: "flex"}}>
                <button onClick={() => refPaginator.current!.SetState(800, 5, 1, () => WriteFetch())}>
                    Fetch 800 rows
                </button>
                <button onClick={() => refPaginator.current!.SetState(undefined, 10, 1, () => WriteFetch())}>
                    Page size 10
                </button>
                <button onClick={() => refPaginator.current!.SetState(undefined, 5, 1, () => WriteFetch())}>
                    Page size 5
                </button>
                <button onClick={() => refPaginator.current!.SetCurrentPageAndClick(6, () => WriteFetch())}>
                    Got to page 6 and click
                </button>
                <button
                    onClick={() => refPaginator.current!.SetCurrentPageAndClick(refPaginator.current!.State.PagesCount, () => WriteFetch())}>
                    Go to last page and click
                </button>
                <button
                    onClick={() => refPaginator.current!.SetState(0, undefined, undefined, () => WriteFetch())}>
                    hidde
                </button>
                <button onClick={() => refPaginator.current!.SetRange(10, () => WriteFetch())}>
                    range 10
                </button>
                <button onClick={() => refPaginator.current!.SetRange(7, () => WriteFetch())}>
                    range 7
                </button>
                <select onChange={(value) => {
                    refPaginator.current!.SetMode(value.target.value as 'base' | 'richBase' | 'showEllipsis', () => WriteFetch())
                }}>
                    <option value="base" >base</option>
                    <option value="richBase" selected={true}>richBase</option>
                    <option value="showEllipsis">showEllipsis</option>
                </select>
            </div>
            <div>{myFetch}</div>
            <Paginator
                range={5}
                ref={refPaginator}
                mode={'richBase'}
                ellipsis={'..'}
                previous={'<'}
                next={'>'}
                first={'<<'}
                last={'>>'}
                onChange={(page) => {
                    setMyClick("Click page " + page + "  of " + refPaginator.current!.State.PagesCount)
                }}
            />
        </div>
    )
}`













export default function P15_7() {
    const [myClick, setMyClick] = useState('');
    const [myFetch, setMyFetch] = useState('');
    const refPaginator = useRef<Paginator>(null)
    useEffect(() => {
        refPaginator.current!.SetState(100, 5, 1, () => WriteFetch())
    }, []);

    function WriteFetch() {
        const str = "totalRows: "+refPaginator!.current!.State.TotalRows+
            " pageSize: "+refPaginator.current!.State.PageSize+
            " currentPage: "+refPaginator.current!.State.CurrentPage+
            " range: "+refPaginator.current!.State.Range+
            " mode: "+refPaginator.current!.State.Mode
        setMyFetch(str)
    }

    return (
        <div>


            <div style={{display: "flex"}}>
                <button onClick={() => refPaginator.current!.SetState(800, 5, 1, () => WriteFetch())}>
                    Fetch 800 rows
                </button>
                <button onClick={() => refPaginator.current!.SetState(undefined, 10, 1, () => WriteFetch())}>
                    Page size 10
                </button>
                <button onClick={() => refPaginator.current!.SetState(undefined, 5, 1, () => WriteFetch())}>
                    Page size 5
                </button>
                <button onClick={() => refPaginator.current!.SetCurrentPageAndClick(6, () => WriteFetch())}>
                    Got to page 6 and click
                </button>
                <button
                    onClick={() => refPaginator.current!.SetCurrentPageAndClick(refPaginator.current!.State.PagesCount, () => WriteFetch())}>
                    Go to last page and click
                </button>
                <button
                    onClick={() => refPaginator.current!.SetState(0, undefined, undefined, () => WriteFetch())}>
                    hidde
                </button>
                <button onClick={() => refPaginator.current!.SetRange(10, () => WriteFetch())}>
                    range 10
                </button>
                <button onClick={() => refPaginator.current!.SetRange(7, () => WriteFetch())}>
                    range 7
                </button>
                <select onChange={(value) => {
                    refPaginator.current!.SetMode(value.target.value as 'base' | 'richBase' | 'showEllipsis', () => WriteFetch())
                }}>
                    <option value="base">base</option>
                    <option value="richBase" selected={true}>richBase</option>
                    <option value="showEllipsis">showEllipsis</option>
                </select>
            </div>
            <div style={{height:30}}>{myFetch}</div>
            <div style={{height:30}}>{myClick}</div>

            <Paginator
                range={5}
                ref={refPaginator}
                mode={'richBase'}
                ellipsis={'..'}
                previous={'<'}
                next={'>'}
                first={'<<'}
                last={'>>'}
                onChange={(page) => {
                    setMyClick("Click page " + page + "  of " + refPaginator.current!.State.PagesCount)
                }}
            />
            <br/>
            <br/>
            <CodeSnippetJavaScript code={code}/>
        </div>
    )
}