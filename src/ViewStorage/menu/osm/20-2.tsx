import {BsrMap} from 'bsr-osm'
import 'bsr-osm/dist/index.css'
import {CodeSnippetDotNet} from "../../codeSnippetJavaScript";


const code = `import {BsrMap} from 'bsr-osm'
import 'bsr-osm/dist/index.css'

export default function App(){
    return <BsrMap option={{
                useSynchronizationUrl:true,
            }}/>
}`







export default function P20_2() {
    return (
        <>
            <BsrMap option={{
                useSynchronizationUrl:true,
            }} style={{width: "95%", height: 400}}/>
            <CodeSnippetDotNet code={code}/>
        </>
    )

}