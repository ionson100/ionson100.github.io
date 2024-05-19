
import Highlight from 'react-highlight';
import 'highlight.js/styles/a11y-dark.css'



const CodeSnippetJava = ({code}) => {
    return (
        <Highlight className='language-csharp'>
            {code}
        </Highlight>
    );
};

export default CodeSnippetJava