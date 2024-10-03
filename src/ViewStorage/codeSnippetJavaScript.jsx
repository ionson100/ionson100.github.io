
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vs as myStyleNet } from 'react-syntax-highlighter/dist/esm/styles/prism';



const CodeSnippetJavaScript = ({code}) => {
    return (

        <div style={{width:"fit-content"}}>
            <SyntaxHighlighter language="jsx" style={myStyleNet}  >
                {code}
            </SyntaxHighlighter>
        </div>

    );
};
const CodeSnippetCss = ({code}) => {
    return (
        <div style={{width:"fit-content"}}>
            <SyntaxHighlighter language="css" style={myStyleNet} >
                {code}
            </SyntaxHighlighter>
        </div>
    );
};

const CodeSnippetDotNet = ({code}) => {
    return (

        <div style={{width:"fit-content"}}>
            <SyntaxHighlighter language="csharp" style={myStyleNet} >
                {code}
            </SyntaxHighlighter>
        </div>
    );
};

const CodeSnippetSql = ({code}) => {
    return (

        <div style={{width:"fit-content"}}>
            <SyntaxHighlighter language="sql" style={myStyleNet} >
                {code}
            </SyntaxHighlighter>
        </div>
    );
};

const CodeSnippetJson = ({code}) => {
    return (

        <div style={{width:"fit-content"}}>
            <SyntaxHighlighter language="json" style={myStyleNet} >
                {code}
            </SyntaxHighlighter>
        </div>
    );
};
export {
    CodeSnippetJavaScript,CodeSnippetCss,CodeSnippetDotNet,CodeSnippetSql,CodeSnippetJson
}



