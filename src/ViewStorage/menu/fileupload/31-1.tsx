import React from "react";

export default function P31_1() {











    return (
        <>
            <table style={{width: "80%"}}>
                <caption>
                    props bsr-fileupload
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
                    <td>Address target upload value.</td>
                </tr>

                <tr>
                    <td data-d={1}>style</td>
                    <td>CSSProperties</td>
                    <td>undefined</td>
                    <td>Css container styles.</td>
                </tr>
                <tr>
                    <td data-d={1}>buttonStyle</td>
                    <td>CSSProperties</td>
                    <td>undefined</td>
                    <td>Css buttons styles.</td>
                </tr>

                <tr>
                    <td data-d={1}>className</td>
                    <td>string</td>
                    <td>undefined</td>
                    <td>Container class attribute.</td>
                </tr>

                <tr>
                    <td data-d={1}>classNameDropZone</td>
                    <td>string</td>
                    <td>undefined</td>
                    <td>Drop Zone class attribute.</td>
                </tr>

                <tr>
                    <td data-d={1}>classNameButton</td>
                    <td>string</td>
                    <td>undefined</td>
                    <td>Buttons class attribute.</td>
                </tr>

                <tr>
                    <td data-d={1}>heightZone</td>
                    <td>number</td>
                    <td>200</td>
                    <td>Height drop zone.</td>
                </tr>

                <tr>
                    <td data-d={1}>dropZoneContent</td>
                    <td>string|ReactElement</td>
                    <td>undefined</td>
                    <td>User Content drop zone.</td>
                </tr>

                <tr>
                    <td data-d={1}>dropZoneContent</td>
                    <td>string|ReactElement</td>
                    <td>undefined</td>
                    <td>User Content drop zone.</td>
                </tr>

                <tr>
                    <td data-d={1}>buttonFileUploadContent</td>
                    <td>string|ReactElement</td>
                    <td>undefined</td>
                    <td>User Content button upload.</td>
                </tr>

                <tr>
                    <td data-d={1}>buttonSelectFilesContent</td>
                    <td>string|ReactElement</td>
                    <td>undefined</td>
                    <td>User Content button select file.</td>
                </tr>

                <tr>
                    <td data-d={1}>buttonAbortContent</td>
                    <td>string|ReactElement</td>
                    <td>undefined</td>
                    <td>User Content button abort.</td>
                </tr>

                <tr>
                    <td data-d={1}>useHiddenButtonUpload</td>
                    <td>boolean</td>
                    <td>false</td>
                    <td>Hide the upload button from display.</td>
                </tr>

                <tr>
                    <td data-d={1}>useHiddenButtonSelectFile</td>
                    <td>boolean</td>
                    <td>false</td>
                    <td>Hide the select file button from display.</td>
                </tr>

                <tr>
                    <td data-d={1}>useHiddenButtonAbort</td>
                    <td>boolean</td>
                    <td>false</td>
                    <td>Hide the abort button from display.</td>
                </tr>

                <tr>
                    <td data-d={1}>onPreUpload</td>
                    <td>(formData:FormData, xhr:XMLHttpRequest) =&#62;boolean</td>
                    <td>undefined</td>
                    <td>Event is called before sending data to the destination, return true - continue sending, false - cancel.</td>
                </tr>

                <tr>
                    <td data-d={1}>onError</td>
                    <td>(response:ResponseUpload) =&#62;boolean</td>
                    <td>undefined</td>
                    <td>The event occurs when an error occurs on the server or client.</td>
                </tr>

                <tr>
                    <td data-d={1}>onSuccess</td>
                    <td>(response:ResponseUpload) =&#62;boolean</td>
                    <td>undefined</td>
                    <td>Event occurs when sending is successful.</td>
                </tr>
                <tr>
                    <td data-d={1}>onAbort</td>
                    <td>(response:ResponseUpload) =&#62;boolean</td>
                    <td>undefined</td>
                    <td>The event occurs when the abort button is pressed.</td>
                </tr>

                <tr>
                    <td data-d={1}>onValidateFiles</td>
                    <td>(files:File[]) =&#62;string|undefined</td>
                    <td>undefined</td>
                    <td>The event is called when adding files,
                        return string (error description) - files are not added.</td>
                </tr>

                <tr>
                    <td data-d={1}>onEventFilePresenceChange</td>
                    <td>(presence:boolean) =&#62;string|undefined</td>
                    <td>undefined</td>
                    <td>The event occurs when the number of files changes
                        (true - there are files, false - there are no files).</td>
                </tr>

                <tr>
                    <td data-d={1}>onEventFileUploadStatus</td>
                    <td>(status:boolean) =string|undefined</td>
                    <td>undefined</td>
                    <td>The event occurs when data is loaded onto the server
                        (true - uploading is in progress, false - no uploading).</td>
                </tr>


                <tr>
                    <td data-d={1}>addingUserData</td>
                    <td><code>() =&#62; &#123;&#91;key&#58; string&#93;: string&#125;</code></td>
                    <td>undefined</td>
                    <td>Adding custom data to a request: (key-value)</td>
                </tr>

                <tr>
                    <td data-d={1}>addingHeader</td>
                    <td><code>() =&#62; &#123;&#91;key&#58; string&#93;: string&#125;</code></td>
                    <td>undefined</td>
                    <td>Adding data to the request header: (key-value)</td>
                </tr>

                <tr>
                    <td data-d={1}>renderFileItem</td>
                    <td>(file:File) =&#62;ReactElement</td>
                    <td>undefined</td>
                    <td>Ability to custom display the downloaded file</td>
                </tr>

                <tr>
                    <td data-d={1}>modeAppendFiles</td>
                    <td>'batch'|'portion'|undefined</td>
                    <td>'batch'</td>
                    <td>Method type adding files for uploading</td>
                </tr>

                <tr>
                    <td data-d={1}>useModeMultipleFiles</td>
                    <td>boolean</td>
                    <td>false</td>
                    <td>When the true , the file input allows the user to select more than one file.</td>
                </tr>

                <tr>
                    <td data-d={1}>accept</td>
                    <td>string</td>
                    <td>undefined</td>
                    <td>The accept attribute takes as its value a comma-separated list of one or more file types,
                        or unique file type specifiers, describing which file types to allow.</td>
                </tr>

                <tr>
                    <td data-d={1}>modeAutoUpload</td>
                    <td>boolean</td>
                    <td>false</td>
                    <td>Automatically upload a file to the server without pressing a button upload</td>
                </tr>

                </tbody>
            </table>
            <br/>
        </>
    )
}
