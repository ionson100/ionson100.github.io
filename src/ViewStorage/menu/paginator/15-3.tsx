import {Paginator} from 'bsr-paginator'
import './index.css'
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

export function P15_2() {
    const [name, setName] = useState('');
    const refPaginator = useRef<Paginator>(null)
    useEffect(() => {
        /*fetching*/
        refPaginator.current!.SetState(200, 10, 1)
    }, [])

    return (
        <div className={'container'} >
            <div style={{textAlign: "center"}}>{name}</div>
            <Paginator
                ref={refPaginator}
                range={9}
                ellipsis={<FaEllipsisH/>}
                styleButton={{borderRadius: 0,width:30,padding:5}}
                previous={<BsCaretLeft color={'green'} title={'previous'}/>}
                next={<BsCaretRight color={'green'} title={'next'}/>}
                first={<BsCaretLeftFill color={'green'} title={'to first page'}/>}
                last={<BsCaretRightFill color={'green'}  title={'to last page'}/>}
                onButtonClick={(page, pages) => {
                    setName("page:"+ page +" of" +pages)
                }}
            />
        </div>
    )
}`

export function P15_3() {
    const [name, setName] = useState('');
    const refPaginator = useRef<Paginator>(null)
    useEffect(() => {
        refPaginator.current!.SetState(200, 10, 1)
    }, [])

    return (
        <div className={'container'} style={{textAlign: "center"}}>
            <div>{name}</div>
            <div style={{display: "flex", justifyContent: "center"}}>
                <CodeSnippetJavaScript code={code}/>
            </div>

            <Paginator

                range={9}
                className={'bsr-wrapper-paginator-core'}
                ref={refPaginator}
                styleButton={{borderRadius: 0,width:30,padding:5}}
                ellipsis={<FaEllipsisH/>}
                style={{border:0,background:"transparent"}}
                previous={<BsCaretLeft color={'green'} title={'previous'}/>}
                next={<BsCaretRight color={'green'} title={'next'}/>}
                first={<BsCaretLeftFill color={'green'} title={'to first page'}/>}
                last={<BsCaretRightFill color={'green'} title={'to last page'}/>}
                onButtonClick={(page, pages) => {
                    setName(`${page} page of ${pages}`)
                }}
            />
        </div>
    )
}