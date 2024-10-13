import React from "react";


export default function P15_1() {


    return (
        <>
            <table style={{width: "80%"}}>
                <caption>
                    props bsr-paginator
                </caption>
                <tbody>
                <tr>
                    <th style={{width: "20%"}}>Name</th>
                    <th style={{width: "40%"}}>Type</th>
                    <th style={{width: "20%"}}>Default</th>
                    <th style={{width: "20%"}}>Description</th>
                </tr>
                <tr>

                    <td data-d={1}><a href="#page=15-1">first</a></td>
                    <td><pre>string | ReactElement | undefined | null</pre>
                        </td>
                    <td>undefined</td>
                    <td>Contents of the button first.</td>
                </tr>
                <tr>
                    <td data-d={1}><a href="#page=15-2">last</a></td>
                    <td><pre>string | ReactElement | undefined | null</pre>
                        </td>
                    <td>undefined</td>
                    <td>Contents of the button last.</td>
                </tr>

                <tr>
                    <td data-d={1}><a href="#page=15-2">previous</a></td>
                    <td><pre>string | ReactElement | undefined | null</pre>
                        </td>
                    <td>undefined</td>
                    <td>Contents of the button previous.</td>
                </tr>
                <tr>
                    <td data-d={1}><a href="#page=15-2">next</a></td>
                    <td><pre>string | ReactElement | undefined | null</pre>
                        </td>
                    <td>undefined</td>
                    <td>Contents of the button next.</td>
                </tr>
                <tr>
                    <td data-d={1}><a href="#page=15-2">ellipsis</a></td>
                    <td><pre>string | ReactElement | undefined | null</pre>
                        </td>
                    <td>undefined</td>
                    <td>Contents of the button ellipsis.</td>
                </tr>

                <tr>
                    <td data-d={1}>styleButton</td>
                    <td><pre>React.CSSProperties | undefined</pre>
                        </td>
                    <td>undefined</td>
                    <td>Page Buttons Styles.</td>
                </tr>

                <tr>
                    <td data-d={1}>styleEllipsis</td>
                    <td><pre>React.CSSProperties | undefined</pre>
                        </td>
                    <td>undefined</td>
                    <td>Ellipsis Buttons Styles.</td>
                </tr>

                <tr>
                    <td data-d={1}>styleNavigate</td>
                    <td><pre>React.CSSProperties | undefined</pre>
                        </td>
                    <td>undefined</td>
                    <td>Quick Navigation Button Styles.</td>
                </tr>
                <tr>
                    <td data-d={1}>style</td>
                    <td><pre>React.CSSProperties | undefined</pre>
                        </td>
                    <td>undefined</td>
                    <td>Div paginator style.</td>
                </tr>
                <tr>
                    <td data-d={1}>id</td>
                    <td><pre>string | undefined</pre>
                        </td>
                    <td>undefined</td>
                    <td>Div paginator id.</td>
                </tr>
                <tr>
                    <td data-d={1}>className</td>
                    <td><pre>string | undefined</pre>
                        </td>
                    <td>undefined</td>
                    <td>Div paginator css class.</td>
                </tr>
                <tr>
                    <td data-d={1}><a href="#page=15-5">range</a></td>
                    <td><pre>number</pre>

                    </td>
                    <td>4</td>
                    <td>Range of display of the number of buttons, minimum value 4.</td>
                </tr>
                <tr>
                    <td data-d={1}><a href="#page=15-5">isMoreSends</a></td>
                    <td><pre>boolean|undefined</pre>

                    </td>
                    <td>false</td>
                    <td>Enables the generation of a button click event when the button is clicked again.</td>
                </tr>
                <tr>
                    <td data-d={1}><a href="#page=15-4">isHidingNavigate</a></td>
                    <td><pre>boolean|undefined</pre>

                    </td>
                    <td>false</td>
                    <td>Use hide navigation buttons if range goes out of visibility.</td>
                </tr>


                <tr>
                    <td data-d={1}>accessKeyFirst</td>
                    <td><pre>string | undefined</pre>
                        </td>
                    <td>undefined</td>
                    <td>The accesskey global attribute provides a hint for generating a keyboard shortcut for the
                        current element.
                    </td>
                </tr>
                <tr>
                    <td data-d={1}>accessKeyPrevious</td>
                    <td><pre>string | undefined</pre>
                       </td>
                    <td>undefined</td>
                    <td>The accesskey global attribute provides a hint for generating a keyboard shortcut for the
                        current element.
                    </td>
                </tr>
                <tr>
                    <td data-d={1}>accessKeyNext</td>
                    <td><pre>string | undefined</pre>
                        </td>
                    <td>undefined</td>
                    <td>The accesskey global attribute provides a hint for generating a keyboard shortcut for the
                        current element.
                    </td>
                </tr>
                <tr>
                    <td data-d={1}>accessKeyLast</td>
                    <td><pre>string | undefined</pre>
                       </td>
                    <td>undefined</td>
                    <td>The accesskey global attribute provides a hint for generating a keyboard shortcut for the
                        current element.
                    </td>
                </tr>
                <tr>
                    <td data-d={1}><a href="#page=15-6">mode</a></td>
                    <td><pre>string:'base' | 'richBase' | 'showEllipsis'</pre>
                        </td>
                    <td>base</td>
                    <td>Paginator display types.</td>
                </tr>
                <tr>
                    <td data-d={1}><a href="#page=15-2">onChange</a></td>
                    <td>
                        <pre>(page: number, sender?:HTMLButtonElement) =&#62; void</pre>

                    </td>
                    <td>undefined</td>
                    <td>Event of transition to a new page.</td>
                </tr>
                </tbody>
            </table>
            <br/>




            <table style={{width: "80%"}}>
                <caption>
                    Instance functions
                </caption>
                <tbody>
                <tr>
                    <th style={{width: "20%"}}>Name</th>
                    <th style={{width: "30%"}}>Type</th>
                    <th style={{width: "50%"}}>Description</th>
                </tr>
                <tr>
                    <td data-d={1}><a href="#page=15-2">SetState</a>
                    </td>
                    <td>
                        <pre>SetState(<br/>
                            totalRows?: number,<br/>
                            pageSize?: number,<br/>
                            currentPage?: number,<br/>
                            callback?: () =&#62; void): void
                        </pre>

                    </td>
                    <td>Setting up basic parameters</td>
                </tr>
                <tr>
                    <td data-d={1}><a href="#page=15-7">State</a>
                    </td>
                    <td>
                       <pre>State():&#123;<br/>
                           readonly PageSize: number<br/>
                           readonly PagesCount: number<br/>
                           readonly TotalRows: number<br/>
                           readonly CurrentPage: number<br/>
                           readonly Range: number<br/>
                           readonly Mode:string<br/>
                           &#125;<br/>
                       </pre>
                    </td>
                    <td>Getting parameters</td>
                </tr>
                <tr>
                    <td data-d={1}><a href="#page=15-7">SetRange</a>
                    </td>
                    <td>
                       <pre>SetRange(value: number, callback?: () =&#62; void): void
                       </pre>
                    </td>
                    <td>Setting the range parameter</td>
                </tr>

                <tr>
                    <td data-d={1}><a href="#page=15-7">SetMode</a>
                    </td>
                    <td>
                       <pre>
                         SetMode(value: 'base' | 'richBase' | 'showEllipsis', callback?: () =&#62; void): void
                       </pre>
                    </td>
                    <td>Setting the mode parameter</td>
                </tr>
                <tr>
                    <td data-d={1}>Paginator</td>
                    <td>
                       <pre>
                         Paginator =&#62; HTMLDivElement
                       </pre>
                    </td>
                    <td>Returns the paginator div, can be used to set additional attributes</td>
                </tr>
                <tr>
                    <td data-d={1}><a href="#page=15-7">SetCurrentPageAndClick</a></td>
                    <td>
                       <pre>SetCurrentPageAndClick(page: number, callback?: () =&#62; void): void

                       </pre>
                    </td>
                    <td>Go to destination page and click event</td>
                </tr>
                </tbody>
            </table>
            <br/>
        </>

    )
}
