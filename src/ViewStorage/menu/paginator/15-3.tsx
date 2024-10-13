import {Paginator} from 'bsr-paginator'
import 'bsr-paginator/dist/index.css'
import {useEffect, useRef, useState} from "react";
import {BsCaretLeftFill} from "react-icons/bs";
import {BsCaretRightFill} from "react-icons/bs";
import {BsCaretLeft} from "react-icons/bs";
import {BsCaretRight} from "react-icons/bs";
import { FaEllipsisH } from "react-icons/fa";
import {CodeSnippetJavaScript} from "../../codeSnippetJavaScript";


const code = `import {Paginator} from 'bsr-paginator'
import 'bsr-paginator/dist/index.css'
import {useEffect, useRef, useState} from "react";
import {BsCaretLeftFill} from "react-icons/bs";
import {BsCaretRightFill} from "react-icons/bs";
import {BsCaretLeft} from "react-icons/bs";
import {BsCaretRight} from "react-icons/bs";
import { FaEllipsisH } from "react-icons/fa";

export function App() {
    const [myState, setMyState] = useState('');
    const refPaginator = useRef<Paginator>(null)
    useEffect(() => {
        /*fetching SetState(totalRows, pageSize,currentPage)*/
        refPaginator.current!.SetState(200, 8, 1)
    }, [])

    return (
        <div  >
            <div>{myState}</div>
             <Paginator
                    ref={refPaginator}
                    range={5}
                    mode={"showEllipsis"}
                    ellipsis={<FaEllipsisH/>}
                    previous={<BsCaretLeft color={'green'} title={'previous'}/>}
                    next={<BsCaretRight color={'green'} title={'next'}/>}
                    first={<BsCaretLeftFill color={'green'} title={'to first page'}/>}
                    last={<BsCaretRightFill color={'green'} title={'to last page'}/>}
                    onChange={(page) => {
                        setMyState(page + " page of " + refPaginator.current!.State.PagesCount)
                    }}
                />
        </div>
    )
}`

export default function P15_3() {
    const [myState, setMyState] = useState('');
    const refPaginator = useRef<Paginator>(null)
    useEffect(() => {
        refPaginator.current!.SetState(200, 8, 1)
    }, [])

    return (
        <div style={{width: "fit-content"}}>

            <div style={{display: "flex", justifyContent: "center"}}>
                <CodeSnippetJavaScript code={code}/>
            </div>
            <div style={{textAlign:"center",height:30}}>{myState}</div>
            <div style={{display: "flex", justifyContent: "center"}}>
                <Paginator
                    ref={refPaginator}
                    range={5}
                    mode={"showEllipsis"}
                    ellipsis={<FaEllipsisH/>}
                    previous={<BsCaretLeft color={'green'} title={'previous'}/>}
                    next={<BsCaretRight color={'green'} title={'next'}/>}
                    first={<BsCaretLeftFill color={'green'} title={'to first page'}/>}
                    last={<BsCaretRightFill color={'green'} title={'to last page'}/>}
                    onChange={(page) => {
                        setMyState(page + " page of " + refPaginator.current!.State.PagesCount)
                    }}
                />
            </div>


        </div>
    )
}