import {CodeSnippetJavaScript} from "../codeSnippetJavaScript";
import React from "react";
const code=`<form method="dialog">
 <button>Close Dialog</button>
</form>
`
export function P4_14(){
    return(
        <p>
            1. The code to close the form doesn't work<br/>
            <div>
                <CodeSnippetJavaScript code={code}/>
            </div>
            2. Mode values  reserved:<br/>
            "-1" - click for the cross and for the close or cancel button.<br/>
            "-2" - for burying the Esc button and clicking on the backdrop for the modal dialog.<br/>
        </p>
    )
}