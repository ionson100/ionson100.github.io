import {BsrMap} from 'bsr-osm'
import 'bsr-osm/dist/index.css'
import {CodeSnippetDotNet} from "../../codeSnippetJavaScript";


const code = `import {BsrMap} from 'bsr-osm'
import 'bsr-osm/dist/index.css'

export default function App(){
    return <BsrMap/>
}`







export default function P20_1() {
    return (
        <>
            <BsrMap style={{width: "95%", height: 400}}/>
            <CodeSnippetDotNet code={code}/>
        </>
    )

}