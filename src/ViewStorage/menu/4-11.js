import React, {useRef} from "react";
import {ShowBsrDialog, BaseBodyDialog} from "bsr-modaldialog";
import 'bsr-modaldialog/dist/index.css'
import {CodeSnippetJavaScript} from "../codeSnippetJavaScript";

/*-------------------------------------*/
const code = `
import React, {useRef} from "react";
import {ShowBsrDialog,BaseBodyDialog} from "bsr-modaldialog";
import 'bsr-modaldialog/dist/index.css'

class BodyDialog extends BaseBodyDialog {
    constructor(props) {
        super(props);
    }

    /**
     * Checking the completion of data, making a decision to continue
     * @param mode data-mode attribute value
     * @returns {boolean} true - continue false break
     */
    validate(mode) {
        alert(mode)
        return false; //Prevent closing dialog
    }


    /**
     * Receiving data from a dialog to pass it outside
     * @param mode data-mode attribute value
     * @returns {object} data body
     */
    getData(mode) {

        return {
            data: 'self close',
            mode: mode
        }

    }

    selfClose(mode) {
        super.selfClose(mode);
    }


    render() {
        return (
            <button onClick={() => {
                this.selfClose('123')
            }}> Self Close (mode:123)</button>
        )
    }
}

`
const code2 = `

export function P4_11() {
    const mRefLabel = useRef();

    return (
        <>
            <label ref={mRefLabel}></label>
            <br/>

            <button onClick={() => {
                mRefLabel.current.innerText = ''
                
                ShowBsrDialog({
                    modal: true,
                    header: (<span style={{paddingLeft: 10}}>Dialog SelfClose</span>),
                    body: <BodyDialog/>,
                    styleBody: {padding: 20},
                    buttons: [
                        (<button data-mode={1}>ok</button>),
                        (<button data-mode={-1}>close</button>)
                    ]
                }).then(a => {
                    mRefLabel.current.innerText = JSON.stringify(a)
                })
                
            }}>show
            </button>
        </>
    )
}
`


/*-------------------------------------*/
class BodyDialog extends BaseBodyDialog {
    constructor(props) {
        super(props);
    }

    /**
     * Checking the completion of data, making a decision to continue
     * @param mode data-mode attribute value
     * @returns {boolean} true - continue false break
     */
    validate(mode) {
        alert(mode)
        return false; //Prevent closing dialog
    }


    /**
     * Receiving data from a dialog to pass it outside
     * @param mode data-mode attribute value
     * @returns {object} data body
     */
    getData(mode) {

        return {
            data: 'self close',
            mode: mode
        }

    }

    selfClose(mode) {
        super.selfClose(mode);
    }


    render() {
        return (
            <button onClick={() => {
                this.selfClose('123')
            }}> Self Close (mode:123)</button>
        )
    }
}

export default function P4_11() {
    const mRefLabel = useRef();

    return (
        <>
            <p>
                Self close:<br/>
                1. call SelfClose.<br/>
                2. call getData.<br/>
                3. Formation of a promise.<br/>
                4. Closing the dialogue.<br/>
            </p>
            <label ref={mRefLabel}></label>

            <br/> <br/>

            <button onClick={() => {
                mRefLabel.current.innerText = ''
                ShowBsrDialog({
                    modal: true,
                    header: (<span style={{paddingLeft: 10}}>Dialog SelfClose</span>),
                    body: <BodyDialog/>,
                    styleBody: {padding: 20},
                    buttons: [
                        (<button data-mode={1}>ok</button>),
                        (<button data-mode={-1}>close</button>)
                    ]
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
                <CodeSnippetJavaScript code={code2}/>
            </div>
        </>
    )
}

