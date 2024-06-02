import React, {useRef} from "react";
import {ShowBsrDialog} from "bsr-modaldialog";
import 'bsr-modaldialog/dist/index.css'
import {CodeSnippetCss, CodeSnippetJavaScript} from "../../codeSnippetJavaScript";
import { FcOk } from "react-icons/fc";

/*-------------------------------------*/
const code = `
import React, {useRef} from "react";
import {ShowBsrDialog} from "bsr-modaldialog";
import 'bsr-modaldialog/dist/index.css'
import { FcOk } from "react-icons/fc";

export function P4_9() {
    const mRefLabel = useRef();

    return (
        <>
            <label ref={mRefLabel}></label>

            <br/>
              <button onClick={() => {
                mRefLabel.current.innerText = ''
                ShowBsrDialog({
                    className: 'main-dialog-alert',
                    modal: false,
                    timeOut: 2000,
                    classNameTopStripe: "none",
                    classNameBottomStripe: "none",
                    classNameBody: "m-body-alert",

                    body: <div className={'body-test'}>
                        <FcOk size={50}/>
                        <div style={{paddingLeft: 20}}>Simple alert 2000 ms</div>
                    </div>,

                }).then(a => {
                    mRefLabel.current.innerText = JSON.stringify(a)
                })
            }}>show
            </button>
        </>
    )
}
`
const codeCss=`
.main-dialog-alert {
  position: absolute;
  margin: 0;
  top: 20px;
  left: 20px;
  padding: 0;


  width: 400px;
  height: fit-content;
  z-index: 2;
  background: white;
  border: thick #fdfdfd;

  border-radius: 5px;
  box-shadow: rgba(0, 0, 0, 0.19) 0 10px 20px, rgba(0, 0, 0, 0.23) 0 6px 6px;
}
.m-body-alert{

  background: rgba(22, 231, 33, 0.32);

}
.body-test{
  padding: 10px;
  display: flex;
  align-items: center;
  height: fit-content;
}

`
/*-------------------------------------*/


export default function P4_9() {
    const mRefLabel = useRef();

    return (
        <>
            <label ref={mRefLabel}></label>

            <br/> <br/>
            <button onClick={() => {
                mRefLabel.current.innerText = ''
                ShowBsrDialog({
                    className: 'main-dialog-alert',
                    modal: false,
                    timeOut: 2000,
                    classNameTopStripe: "none",
                    classNameBottomStripe: "none",
                    classNameBody: "m-body-alert",

                    body: <div className={'body-test'}>
                        <FcOk size={50}/>
                        <div style={{paddingLeft: 20}}>Simple alert 2000 ms</div>
                    </div>,

                }).then(a => {
                    mRefLabel.current.innerText = JSON.stringify(a)
                })
            }}>show
            </button>
            <br/>
            <div>
                <CodeSnippetJavaScript code={code}/>
            </div>
            <br/>
            <div>
                <CodeSnippetCss code={codeCss}/>
            </div>

        </>
    )
}

