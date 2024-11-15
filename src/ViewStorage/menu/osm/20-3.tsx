//360696.26/5197153.08
import {BsrMap} from 'bsr-osm'
import 'bsr-osm/dist/index.css'
import {CodeSnippetDotNet} from "../../codeSnippetJavaScript";


const code = `import {BsrMap} from 'bsr-osm'
import 'bsr-osm/dist/index.css'

export default function App(){
    return <BsrMap
                option={{
                    center: [360696.26, 5197153.08],
                    zoom: 15,
                }}
            />
}`


export default function P20_3() {
    return (
        <>
            <BsrMap
                option={{
                    center: [352139.91,5199448.67],
                    zoom: 14,
                }}
                style={{width: "95%", height: 400}}/>
            <CodeSnippetDotNet code={code}/>
        </>
    )

}
