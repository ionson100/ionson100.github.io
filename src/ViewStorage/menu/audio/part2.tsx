import {BsrAudio} from 'bsr-audio'
import 'bsr-audio/dist/index.css'
import {CodeSnippetDotNet} from "../../codeSnippetJavaScript";
import React from "react";


export default function Part2(){
    return (
        <div style={{display: 'flex',gridGap:'20px'}}>
            <div>
                <div style={{padding:10}}>
                    <BsrAudio
                        url={'https://rmvoz.ru/lib/fonoteka/mat/Corelli/Sonate_da_Camera_op_4/02.MP3'}
                        useButtonRandom={true}
                        useButtonOpenPrevNext={true}
                        useButtonClose={true}
                        onClose={()=>{}}
                        onPrevEvent={()=>{}}
                        onNextEvent={()=>{}}
                        onVolumeChange={event => {
                            // @ts-ignore
                            console.log(event.target.volume)
                        }}
                        onRandomChange={state => {
                            console.log(state)
                        }}
                        label={'track1'}
                        style={{width:'500px'}} />
                </div>
                <br/>
                <div style={{padding:10}}>
                    <BsrAudio
                        mode={'mode2'}
                        useButtonRandom={true}
                        useButtonOpenPrevNext={true}
                        onPrevEvent={()=>{}}
                        onNextEvent={()=>{}}
                        onVolumeChange={event => {
                            // @ts-ignore
                            console.log(event.target.volume)
                        }}
                        onRandomChange={state => {
                            console.log(state)
                        }}
                        url={'https://rmvoz.ru/lib/fonoteka/mat/Corelli/Sonate_da_Camera_op_4/02.MP3'}
                        style={{width:'900px'}} />
                </div>
            </div>

            <details>
                <summary style={{cursor:"pointer"}}>Use button: prev, next, close (only mode1), label (only mode1)</summary>
                <div>
                    <CodeSnippetDotNet code={`import {BsrAudio} from 'bsr-audio'
import 'bsr-audio/dist/index.css'

export default function App(){
    return (
              <div>
                <div style={{padding:10}}>
                    <BsrAudio
                        url={'https://cdn.pixabay.com/audio/2025/04/11/audio_b29a3dec6f.mp3'}
                        useButtonRandom={true}
                        useButtonOpenPrevNext={true}
                        useButtonClose={true}
                        onClose={()=>{}}
                        onPrevEvent={()=>{}}
                        onNextEvent={()=>{}}
                        onVolumeChange={event => {
                            // @ts-ignore
                            console.log(event.target.volume)
                        }}
                        onRandomChange={state => {
                            console.log(state)
                        }}
                        label={'track1'}
                        style={{width:'500px'}} />
                </div>
                <br/>
                <div style={{padding:10}}>
                    <BsrAudio
                        mode={'mode2'}
                        useButtonRandom={true}
                        useButtonOpenPrevNext={true}
                        onPrevEvent={()=>{}}
                        onNextEvent={()=>{}}
                        onVolumeChange={event => {
                            // @ts-ignore
                            console.log(event.target.volume)
                        }}
                         onRandomChange={state => {
                            console.log(state)
                        }}
                        url={'https://rmvoz.ru/lib/fonoteka/mat/Corelli/Sonate_da_Camera_op_4/02.MP3'}
                        style={{width:'900px'}} />
                </div>
    )
}`}/>
                </div>
            </details>

        </div>
    )
}