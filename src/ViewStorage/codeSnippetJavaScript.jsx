
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { coldarkDark as myStyle } from 'react-syntax-highlighter/dist/esm/styles/prism';



const CodeSnippetJavaScript = ({code}) => {
    return (

        <div style={{width:"fit-content"}}>
            <SyntaxHighlighter language="jsx" style={myStyle}  >
                {code}
            </SyntaxHighlighter>
        </div>

    );
};
const CodeSnippetCss = ({code}) => {
    return (
        <div style={{width:"fit-content"}}>
            <SyntaxHighlighter language="css" style={myStyle} >
                {code}
            </SyntaxHighlighter>
        </div>
    );
};

const CodeSnippetDotNet = ({code}) => {
    return (

        <div style={{width:"fit-content"}}>
            <SyntaxHighlighter language="csharp" style={myStyle} >
                {code}
            </SyntaxHighlighter>
        </div>
    );
};
export {
    CodeSnippetJavaScript,CodeSnippetCss,CodeSnippetDotNet
}



