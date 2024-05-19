
import Highlight from 'react-highlight';
import 'highlight.js/styles/stackoverflow-dark.css'



const CodeSnippetJavaScript = ({code}) => {
    return (
        <Highlight className='language-javascript'>
            {code}
        </Highlight>
    );
};

export default CodeSnippetJavaScript