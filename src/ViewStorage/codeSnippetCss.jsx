
import Highlight from 'react-highlight';
import 'highlight.js/styles/stackoverflow-dark.css'



const CodeSnippetCss = ({code}) => {
    return (
        <div style={{width:"fit-content"}}>
            <Highlight  className='language-css'>
                {code}
            </Highlight>
        </div>

    );
};

export default CodeSnippetCss

