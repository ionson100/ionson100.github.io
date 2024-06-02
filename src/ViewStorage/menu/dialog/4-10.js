import React, {useRef} from "react";
import {ShowBsrDialog, BaseBodyDialog} from "bsr-modaldialog";
import {CodeSnippetJavaScript} from "../../codeSnippetJavaScript";

/*-------------------------------------*/
const code = `
import React, {useRef} from "react";
import {ShowBsrDialog,BaseBodyDialog} from "bsr-modaldialog";
import 'bsr-modaldialog/dist/index.css'

class BodyDialog extends BaseBodyDialog {
    constructor(props) {
        super(props);
        this.mRefInput = React.createRef();
    }

    /**
     * Checking the completion of data, making a decision to continue
     * @param mode data-mode attribute value
     * @returns {boolean} true - continue false break
     */
    validate(mode) {
        if(mode==="1"){
            const text=this.mRefInput.current.value;
            if(text.length===0){
                alert(" input value empty")
                return false;
            }
            return true;
        }
        return true;
    }


    /**
     * Receiving data from a dialog to pass it outside
     * @param mode data-mode attribute value
     * @returns {object} data body
     */
    getData(mode) {

        return {
            text:this.mRefInput.current.value
        }

    }
    componentDidMount() {
        this.mRefInput.current.value=this.props.text
        setTimeout(()=>{
            this.mRefInput.current.select();
            this.mRefInput.current.focus()
        },100)
    }

    render() {
        return (
            <input ref={this.mRefInput} type={"text"} style={{fontSize:20}} />
        )
    }
}

`
const code2=`

export function P4_10() {
    const mRefLabel = useRef();

    return (
        <>
            <label ref={mRefLabel}></label>
            <br/>
            
            <button onClick={() => {
                mRefLabel.current.innerText = ''
                
                ShowBsrDialog({
                    modal: true,
                    header: (<span style={{paddingLeft: 10}}>Dialog Prompt</span>),
                    body: <BodyDialog text={'default text'}/>,
                    styleBody:{padding:20},
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
        this.mRefInput = React.createRef();
    }

    /**
     * Checking the completion of data, making a decision to continue
     * @param mode data-mode attribute value
     * @returns {boolean} true - continue false break
     */
    validate(mode) {
        if(mode==="1"){
            const text=this.mRefInput.current.value;
            if(text.length===0){
                alert(" input value empty")
                return false;
            }
            return true;
        }
        return true;
    }


    /**
     * Receiving data from a dialog to pass it outside
     * @param mode data-mode attribute value
     * @returns {object} data body
     */
    getData(mode) {

        return {
            text:this.mRefInput.current.value
        }

    }
    componentDidMount() {
        this.mRefInput.current.value=this.props.text
        setTimeout(()=>{
            this.mRefInput.current.select();
            this.mRefInput.current.focus()
        },100)
    }

    render() {
        return (
            <input ref={this.mRefInput} type={"text"} style={{fontSize:20}} />
        )
    }
}

export default function P4_10() {
    const mRefLabel = useRef();

    return (
        <>
            <p>
                For complex dialogs, in order to gain full control over the contents of the body,<br/>
                the body needs to inherit from the abstract class BaseBodyDialog,<br/>
                where you need to implement the methods: validate and getData <br/>
                and rendering method.<br/>
                Event trace:<br/>
                1. Pressing a button or EDS key.<br/>
                2. Processing in the validate procedure. If the procedure returns a false result, the processing ends.<br/>
                3. Obtaining body content data, procedure getData.<br/>
                4. Formation of a response to the promise and closing the dialogue.<br/>
                <span style={{fontWeight:"bold"}}>Attention: in all procedures the mode argument, the value of the data-mode attribute<br/></span>
            </p>
            <label ref={mRefLabel}></label>

            <br/> <br/>
            <button onClick={() => {
                mRefLabel.current.innerText = ''
                ShowBsrDialog({
                    modal: true,
                    header: (<span style={{paddingLeft: 10}}>Dialog Prompt </span>),
                    body: <BodyDialog text={'default text'}/>,
                    styleBody:{padding:20},
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

