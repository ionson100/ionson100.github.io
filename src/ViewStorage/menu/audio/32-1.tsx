import React from "react";

export default function P32_1() {


    return (
        <>
            <table style={{width: "80%"}}>
                <caption>
                    props bsr-audio
                </caption>
                <tbody>
                <tr>
                    <th style={{width: "20%"}}>Name</th>
                    <th style={{width: "20%"}}>Type</th>
                    <th style={{width: "20%"}}>Default</th>
                    <th style={{width: "40%"}}>Description</th>
                </tr>
                <tr>
                    <td data-d={1}>url</td>
                    <td>string</td>
                    <td>require</td>
                    <td>The URL of the audio to embed.</td>
                </tr>
                <tr>
                    <td data-d={1}>autoPlay</td>
                    <td>boolean</td>
                    <td>false</td>
                    <td>A Boolean attribute: if specified, the audio will automatically begin playback as soon as it can do so,
                        without waiting for the entire audio file to finish downloading.</td>
                </tr>
                <tr>
                    <td data-d={1}>loop</td>
                    <td>boolean</td>
                    <td>false</td>
                    <td>A Boolean attribute: if specified, the audio player will automatically
                        seek back to the start upon reaching the end of the audio.</td>
                </tr>
                <tr>
                    <td data-d={1}>preload</td>
                    <td>'none'|'metadata'|'auto'|''</td>
                    <td>auto</td>
                    <td>This enumerated attribute is intended to provide a hint to the browser about what the author
                        thinks will lead to the best user experience. It may have one of the following values:

                        none: Indicates that the audio should not be preloaded.
                        metadata: Indicates that only audio metadata (e.g., length) is fetched.
                        auto: Indicates that the whole audio file can be downloaded, even if the user is not expected to use it.
                        empty string: A synonym of the auto value.
                        The default value is different for each browser. The spec advises it to be set to metadata.</td>
                </tr>

                <tr>
                    <td data-d={1}>label</td>
                    <td>string|ReactElement|null|undefined</td>
                    <td>undefined</td>
                    <td>Custom Label.</td>
                </tr>
                <tr>
                    <td data-d={1}>onError</td>
                    <td>(error: any) =&#62; void|undefined</td>
                    <td>undefined</td>
                    <td>Playback error event.</td>
                </tr>
                <tr>
                    <td data-d={1}>onPlay</td>
                    <td>() =&#62; void</td>
                    <td>undefined</td>
                    <td>Play start event.</td>
                </tr>
                <tr>
                    <td data-d={1}>onPause</td>
                    <td>() =&#62; void</td>
                    <td>undefined</td>
                    <td>Pause start event.</td>
                </tr>

                <tr>
                    <td data-d={1}>onEnded</td>
                    <td>() =&#62; void</td>
                    <td>undefined</td>
                    <td>Playback end event.</td>
                </tr>

                <tr>
                    <td data-d={1}>onPrevEvent</td>
                    <td>() =&#62; void</td>
                    <td>undefined</td>
                    <td>Button click event previous.</td>
                </tr>

                <tr>
                    <td data-d={1}>onNextEvent</td>
                    <td>() =&#62; void</td>
                    <td>undefined</td>
                    <td>Button click event next.</td>
                </tr>

                <tr>
                    <td data-d={1}>onClose</td>
                    <td>() =&#62; void</td>
                    <td>undefined</td>
                    <td>Close button click event.</td>
                </tr>

                <tr>
                    <td data-d={1}>useButtonClose</td>
                    <td>boolean</td>
                    <td>false</td>
                    <td>Show close button.</td>
                </tr>

                <tr>
                    <td data-d={1}>useButtonOpenPrevNext</td>
                    <td>boolean</td>
                    <td>false</td>
                    <td>Show buttons previous next.</td>
                </tr>

                <tr>
                    <td data-d={1}>useButtonRandom</td>
                    <td>boolean</td>
                    <td>false</td>
                    <td>Show switch buttons random.</td>
                </tr>

                <tr>
                    <td data-d={1}>random</td>
                    <td>boolean</td>
                    <td>false</td>
                    <td>The initial state of the switch is random.</td>
                </tr>

                <tr>
                    <td data-d={1}>volume</td>
                    <td>number</td>
                    <td>0.5</td>
                    <td>Initial state of playback sound level (0-1).</td>
                </tr>

                <tr>
                    <td data-d={1}>onVolumeChange</td>
                    <td>(event:SyntheticEvent)=&#62; void</td>
                    <td>undefined</td>
                    <td>Volume change event.</td>
                </tr>

                <tr>
                    <td data-d={1}>onLoadDurationTrack</td>
                    <td>(time:number) =&#62;void</td>
                    <td>undefined</td>
                    <td>Metadata loading end event (time-Play time).</td>
                </tr>

                <tr>
                    <td data-d={1}>onRandomChange</td>
                    <td>(state:boolean)=&#62;void</td>
                    <td>undefined</td>
                    <td>Switching event is ray.</td>
                </tr>

                <tr>
                    <td data-d={1}>mode</td>
                    <td>(state:boolean)=&#62;void</td>
                    <td>undefined</td>
                    <td>Switching event is ray.</td>
                </tr>

                <tr>
                    <td data-d={1}>onRandomChange</td>
                    <td>'mode1'|'mode2'</td>
                    <td>'mode''</td>
                    <td>Changing the layout of player elements.</td>
                </tr>


                </tbody>
            </table>
            <br/>
        </>
    )
}
