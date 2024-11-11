import {BsrMap} from 'bsr-osm'
import 'bsr-osm/dist/index.css'


export default function P20_1(){
    return <BsrMap option={{
        useSynchronizationUrl:true,
        useCookiesPosition:true
    }}/>
}