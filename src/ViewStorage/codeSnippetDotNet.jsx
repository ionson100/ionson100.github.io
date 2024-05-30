
import Highlight from 'react-highlight';
import 'highlight.js/styles/hybrid.css'



const CodeSnippetJava = ({code}) => {
    return (
        <Highlight className='language-csharp'>
            {code}
        </Highlight>
    );
};

export default CodeSnippetJava