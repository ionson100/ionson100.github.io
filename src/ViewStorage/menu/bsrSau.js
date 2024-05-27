import React from "react";

export function IndexBsrSau() {


    return (
        <>
            <table style={{width: "80%"}}>
                <caption>
                    props bsr-sau (simple avatar uploader)
                </caption>
                <tr>
                    <th style={{width: "20%"}}>Name</th>
                    <th style={{width: "40%"}}>Type</th>
                    <th style={{width: "20%"}}>Default</th>
                    <th style={{width: "20%"}}>Description</th>
                </tr>

                <tr>
                    <td data-d={1}><a href="#mode=bsrsau&page=3-7">canvasSize</a></td>
                    <td>number</td>
                    <td>200</td>
                    <td>Canvas size (square)</td>
                </tr>


                <tr>
                    <td data-d={1}><a href="#mode=bsrsau&page=3-1">selectedFile</a></td>
                    <td>(f: File | null | undefined) =&rang;boolean | undefined</td>
                    <td>undefined</td>
                    <td>Event selected file,if you return false, the choice will not be legal</td>
                </tr>
                <tr>

                    <td data-d={1}><a href="#mode=bsrsau&page=3-4">callbackFormData</a></td>
                    <td>object | string | undefined</td>
                    <td>undefined</td>
                    <td>User data that the user wants to send to the server along with the file</td>
                </tr>


                <tr>
                    <td data-d={1}><a href="#mode=bsrsau&page=3-10">url</a></td>
                    <td>string | undefined</td>
                    <td>undefined</td>
                    <td>Server side address where we send data</td>
                </tr>


                <tr>

                    <td data-d={1}><a href="#mode=bsrsau&page=3-1">headerKeyValue</a></td>
                    <td>([key: string]: string) | undefined</td>
                    <td>undefined</td>
                    <td>An object with key - value fields that are inserted into the request header</td>
                </tr>


                <tr>
                    <td data-d={1}><a href="#mode=bsrsau&page=3-6">beforeUpload</a></td>
                    <td>?: (() =&rang; void) | undefined</td>
                    <td>undefined</td>
                    <td>Event marker before transferring the file to the server</td>
                </tr>


                <tr>
                    <td data-d={1}><a href="#mode=bsrsau&page=3-2">clientError</a></td>
                    <td>((event: string) =&rang; void) | undefined</td>
                    <td>undefined</td>
                    <td>Browser side error event</td>
                </tr>


                <tr>

                    <td data-d={1}><a href="#mode=bsrsau&page=3-2">serverError</a></td>
                    <td>((events: string) =&rang; void) | undefined</td>
                    <td> undefined</td>
                    <td>Server side error event</td>
                </tr>


                <tr>
                    <td data-d={1}>progress</td>
                    <td>((events: ProgressEvent(XMLHttpRequestEventTarget)) =&rang;void) | undefined</td>
                    <td>undefined</td>
                    <td>Attributes for plotting download progress</td>
                </tr>


                <tr>
                    <td data-d={1}><a href="#mode=bsrsau&page=3-5">preview</a></td>
                    <td>((events: string) =&rang; void,) | undefined</td>
                    <td></td>
                    <td>Click preview</td>
                </tr>


                <tr>
                    <td data-d={1}><a href="#mode=bsrsau&page=3-5">previewAsync</a></td>
                    <td>((events: string) =&rang; void,) |</td>
                    <td>undefined</td>
                    <td>Continuous preview</td>

                </tr>
                <tr>
                    <td data-d={1}><a href="#mode=bsrsau&page=3-10">done</a></td>
                    <td>((events: any) =&rang; void) | undefined</td>
                    <td>undefined</td>
                    <td>Successful sending event to the server
                        @param events Data that the server side wants to transfer to the client
                    </td>
                </tr>


                <tr>

                    <td data-d={1}><a href="#mode=bsrsau&page=3-5">visibleLinkPreview</a></td>
                    <td>boolean | undefined</td>
                    <td>undefined</td>
                    <td>Show button Preview</td>
                </tr>
                <tr>

                    <td data-d={1}>className</td>
                    <td>string | undefined</td>
                    <td>'sau'</td>
                    <td>name class div container</td>
                </tr>
                <tr>
                    <td data-d={1}>classNameCanvas</td>
                    <td>string | undefined</td>
                    <td>'canvas-sau'</td>
                    <td>name class canvas? not usage size canvas</td>
                </tr>


            </table>
            <br/>
            <table style={{width: "80%"}}>
                <caption>
                    Instance functions
                </caption>
                <tr>
                    <th style={{width: "20%"}}>Name</th>
                    <th style={{width: "30%"}}>Type</th>
                    <th style={{width: "50%"}}>Description</th>
                </tr>

                <tr>
                    <td data-d={1}><a href="#mode=bsrsau&page=3-8">clear</a></td>
                    <td>()=&rang;void</td>
                    <td>Clear all params avatar component</td>
                </tr>

                <tr>
                    <td data-d={1}><a href="#mode=bsrsau&page=3-9">getCanvasFormData</a></td>
                    <td>()=&rang;string |undefined</td>
                    <td>Returns a link to the modified image</td>
                </tr>
            </table>
        </>
    )
}