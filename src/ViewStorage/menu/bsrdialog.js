import React from "react";

export default function IndexBsrDialog() {


    return (
        <>
            <table style={{width: "80%"}}>
                <caption>
                    props bsr-menu
                </caption>
                <tbody>
                <tr>
                    <th style={{width: "20%"}}>Name</th>
                    <th style={{width: "30%"}}>Type</th>
                    <th style={{width: "20%"}}>Default</th>
                    <th style={{width: "30%"}}>Description</th>
                </tr>
                <tr>


                    <td data-d={1}><a href="#page=4-2">closeModalDialogClickForeignArea</a></td>
                    <td>boolean | undefined</td>
                    <td>undefined</td>
                    <td>Closing a modal dialog by clicking an empty area</td>
                </tr>
                <tr>

                    <td data-d={1}><a href="#page=4-3">refDialog</a></td>
                    <td>React.RefObject&lt;InstanceType&lt;typeof ModalDialog&gt;&gt; | null</td>
                    <td>null</td>
                    <td>A reference to the modal dialog object. Will be useful for closing the dialog programmatically
                    </td>
                </tr>
                <tr>
                    <td data-d={1}><a href="#page=4-4">icon</a></td>
                    <td>any</td>
                    <td>undefined</td>
                    <td>Dialogue head icon</td>
                </tr>

                <tr>
                    <td data-d={1}><a href="#page=4-5">header</a></td>
                    <td>any</td>
                    <td>undefined</td>
                    <td>Dialogue title content</td>
                </tr>
                <tr>
                    <td data-d={1}><a href="#page=4-5">body</a></td>
                    <td>any</td>
                    <td>undefined</td>
                    <td>Dialogue body content</td>

                </tr>
                <tr>
                    <td data-d={1}><a href="#page=4-5">buttons</a></td>
                    <td>ReactElement[] | undefined</td>
                    <td>undefined</td>
                    <td>Array of dialog buttons</td>
                </tr>
                <tr>
                    <td data-d={1}><a href="#page=4-6">style</a></td>
                    <td>React.CSSProperties | undefined</td>
                    <td>undefined</td>
                    <td>Dialogue styles</td>
                </tr>

                <tr>
                    <td data-d={1}><a href="#page=4-6">styleHeader</a></td>
                    <td>React.CSSProperties | undefined</td>
                    <td> undefined</td>
                    <td>Dialog Title Styles</td>
                </tr>

                <tr>
                    <td data-d={1}> <a href="#page=4-6">styleFooter</a></td>
                    <td>React.CSSProperties | undefined</td>
                    <td>undefined</td>
                    <td>Dialog Footer Styles</td>
                </tr>

                <tr>
                    <td data-d={1}> <a href="#page=4-6">styleBody</a></td>
                    <td>React.CSSProperties | undefined</td>
                    <td>undefined</td>
                    <td>Dialog Body Styles</td>
                </tr>

                <tr>
                    <td data-d={1}><a href="#page=4-5">positions</a></td>
                    <td>'center'</td>
                    <td>'center'|'top'</td>
                    <td>Position of dialogue on screen</td>
                </tr>
                <tr>
                    <td data-d={1}>modal</td>
                    <td>boolean</td>
                    <td>true</td>
                    <td>Dialogue type, modal or non-modal</td>
                </tr>
                <tr>
                    <td data-d={1}>onCancel</td>
                    <td>(d:HTMLDivElement| undefined)=&gt;boolean</td>
                    <td>()=&gt; return true</td>
                    <td>The event occurs before the modal dialog is closed using the Esc button</td>
                </tr>
                <tr>

                    <td data-d={1}><a href="#page=4-7">onClose</a></td>
                    <td>(dialog: HTMLDivElement | undefined) =&gt; void</td>
                    <td>undefined</td>
                    <td>Event when closing a dialog</td>
                </tr>
                <tr>
                    <td data-d={1}><a href="#page=4-7">onShow</a></td>
                    <td>(dialog: HTMLDivElement | undefined) =&gt; void</td>
                    <td>undefined</td>
                    <td>Only for menu where positionPopup='dropDown'.</td>
                </tr>
                <tr>
                    <td data-d={1}><a href="#page=4-9">timeOut</a></td>
                    <td>number | undefined</td>
                    <td>undefined</td>
                    <td>Time in milliseconds until the dialog is automatically closed if the dialog is used as an
                        alert
                    </td>
                </tr>
                <tr>
                    <td data-d={1}>__container</td>
                    <td>__container</td>
                    <td></td>
                    <td>for private use</td>
                </tr>
                <tr>
                    <td data-d={1}>_id</td>
                    <td>__container</td>
                    <td></td>
                    <td>for private use</td>
                </tr>
                <tr>
                    <td data-d={1}>_promise</td>
                    <td>__container</td>
                    <td></td>
                    <td>for private use</td>
                </tr>
                <tr>
                    <td data-d={1}>className</td>
                    <td>string | undefined</td>
                    <td>'main-dialog'</td>
                    <td>dialogue style class</td>
                </tr>
                <tr>
                    <td data-d={1}>classNameHeader</td>
                    <td>string | undefined</td>
                    <td>'m-header'</td>
                    <td>dialogue header style class</td>
                </tr>
                <tr>
                    <td data-d={1}>classNameBody</td>
                    <td>string | undefined</td>
                    <td>'m-body'</td>
                    <td>dialogue body style class</td>
                </tr>
                <tr>
                    <td data-d={1}>classNameFooter</td>
                    <td>string | undefined</td>
                    <td>'m-footer'</td>
                    <td>dialogue footer style class</td>
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
                    <td data-d={1}>CloseDialog</td>
                    <td>()=&rang;void</td>
                    <td>Closing a dialog programmatically</td>
                </tr>
                </tbody>

            </table>
        </>
    )
}