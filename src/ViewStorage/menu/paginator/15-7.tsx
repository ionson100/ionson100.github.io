import {useEffect, useRef, useState} from "react";
import {Paginator} from "bsr-paginator";
import {CodeSnippetJavaScript} from "../../codeSnippetJavaScript";

export function P15_7() {
    const [myClick, setMyClick] = useState('');
    const [myFetch, setMyFetch] = useState('');
    const refPaginator = useRef<Paginator>(null)
    useEffect(() => {
        /*fetching* SetState(totalRows, pageSize,currentPage)*/
        refPaginator.current!.SetState(100, 10, 1)
    }, [])

    return (
        <div  style={{textAlign:"center",width:"fit-content"}} >

            <div>{myClick}</div>
            <div>{myClick}</div>
            <div style={{display:"flex",justifyContent:"center"}}>
                <CodeSnippetJavaScript  code={``}/>
            </div>

            <div style={{display:"flex",justifyContent:"center"}}>
                <Paginator
                    range={5}
                    ref={refPaginator}
                    mode={'richBase'}
                    ellipsis={'..'}
                    previous={'previous'}
                    next={'next'}
                    onButtonClick={(page, pages) => {
                        setMyClick("Click "+page+" page of "+pages)
                    }}
                />
            </div>

        </div>
    )
}