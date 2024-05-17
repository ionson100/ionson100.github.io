import React, { useEffect } from "react";
import Prism from "prismjs";
import "prismjs/themes/prism-tomorrow.css";
import "prismjs/themes/prism-tomorrow.min.css";


export default function Code({ code, language }:{code:any,language:any}) {
    useEffect(() => {
        Prism.highlightAll();
    }, []);
    return (
        <div style={{width:"fit-content"}}>
        <pre>
            <code className={`language-${language}`}>{code}</code>
    </pre>
    </div>
);
}