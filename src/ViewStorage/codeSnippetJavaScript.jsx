
import Highlight from 'react-highlight';
import 'highlight.js/styles/hybrid.css'



const CodeSnippetJavaScript = ({code}) => {
    return (
        <div style={{width:"fit-content"}}>
            <Highlight  className='language-javascript'>
                {code}
            </Highlight>
        </div>

    );
};

export default CodeSnippetJavaScript

