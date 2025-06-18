import {BsrAudio} from 'bsr-audio'
import 'bsr-audio/dist/index.css'
import {CodeSnippetDotNet} from "../../codeSnippetJavaScript";
import React from "react";


export default function Part1(){
    return (
        <div style={{display: 'flex',gridGap:'20px'}}>

            <div>
                <div style={{padding:10}}>
                    <BsrAudio url={'https://cdn.pixabay.com/audio/2025/04/11/audio_b29a3dec6f.mp3'}
                              style={{width:'500px'}} />
                </div>
                <br/>
                <div style={{padding:10}}>
                    <BsrAudio
                        mode={'mode2'}
                        url={'https://rmvoz.ru/lib/fonoteka/mat/Corelli/Sonate_da_Camera_op_4/02.MP3'}
                        style={{width:'900px'}} />
                </div>

            </div>







            <details>
                <summary style={{cursor:"pointer"}}>Default</summary>
                <div>
                    <CodeSnippetDotNet code={`import {BsrAudio} from 'bsr-audio'
import 'bsr-audio/dist/index.css'

export default function App(){
    return (
            <div>
                <div style={{padding:10}}>
                    <BsrAudio 
                        url={'https://cdn.pixabay.com/audio/2025/04/11/audio_b29a3dec6f.mp3'}
                        style={{width:'500px'}} />
                </div>
                <br/>
                <div style={{padding:10}}>
                    <BsrAudio
                        mode={'mode2'}
                        url={'https://cdn.pixabay.com/audio/2025/04/11/audio_b29a3dec6f.mp3'}
                        style={{width:'900px'}} />
                </div>

            </div>
    )
}`}/>
                </div>
            </details>

        </div>
    )
}