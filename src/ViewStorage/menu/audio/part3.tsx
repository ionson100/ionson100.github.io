import {BsrAudio} from 'bsr-audio'
import 'bsr-audio/dist/index.css'
import {CodeSnippetDotNet} from "../../codeSnippetJavaScript";
import React, {useEffect, useRef} from "react";


export default function Part3(){
    const audio=useRef<BsrAudio>(null)
    let audioTag:HTMLAudioElement
    useEffect(()=>{
        audioTag = audio.current!.GerAudioTag()!

    },[])
    return (
        <div style={{display: 'flex',gridGap:'20px'}}>

            <div>
                <div style={{padding:10}}>
                    <BsrAudio
                        url={'https://rmvoz.ru/lib/fonoteka/mat/Corelli/Sonate_da_Camera_op_4/02.MP3'}
                        ref={audio}
                        style={{width:'500px'}} />
                </div>
                <div style={{padding:10}}>
                    <button onClick={() => {audio.current?.SetPlay()}}>Play</button>
                    <button onClick={() => {audio.current?.SetPause()}}>Pause</button>
                    <button onClick={() => {audio.current?.SetVolume(0.3)}}>Volume 0.3</button>
                    <button onClick={() => {audio.current?.SetTimer(40)}}>Timer 40 sek</button>
                </div>
            </div>







            <details>
                <summary style={{cursor:"pointer"}}>Using external buttons, GerAudioTag</summary>
                <div>
                    <CodeSnippetDotNet code={`import {BsrAudio} from 'bsr-audio'
import 'bsr-audio/dist/index.css'
import React, {useEffect, useRef} from "react";

export default function App(){
    const audio=useRef<BsrAudio>()
    let audioTag:HTMLAudioElement
    useEffect(()=>{
        audioTag = audio.current!.GerAudioTag()!
    },[])
    return (
           <div>
                <div style={{padding:10}}>
                    <BsrAudio 
                          ref={audio}
                          url={'https://cdn.pixabay.com/audio/2025/04/11/audio_b29a3dec6f.mp3'}
                          style={{width:'500px'}} />
                </div>
                <div style={{padding:10}}>
                    <button onClick={() => {audio.current?.SetPlay()}}>Play</button>
                    <button onClick={() => {audio.current?.SetPause()}}>Pause</button>
                    <button onClick={() => {audio.current?.SetVolume(0.3)}}>Volume 0.3</button>
                    <button onClick={() => {audio.current?.SetTimer(40)}}>Timer 40 sek</button>
                </div>
            </div>
    )
}`}/>
                </div>
            </details>

        </div>
    )
}