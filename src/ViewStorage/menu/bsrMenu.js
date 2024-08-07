import React from "react";

export default function IndexBsrMenu() {


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
                    <td data-d={1}>accessKey</td>
                    <td>string | undefined</td>
                    <td>undefined</td>
                    <td>The accesskey global attribute provides a hint for generating a keyboard shortcut for the
                        current element. The attribute value must consist of a single printable character (which
                        includes accented and other characters that can be generated by the keyboard).
                    </td>
                </tr>
                <tr>
                    <td data-d={1}><a href="#page=1-3">behavior</a></td>
                    <td>'move' | 'click'</td>
                    <td>''move</td>
                    <td>mouse behavior for opening submenus: move - hover the mouse cursor, click - click on the menu
                    </td>
                </tr>
                <tr>
                    <td data-d={1}>className</td>
                    <td>string | undefined</td>
                    <td>'menu-123-item'</td>
                    <td>The className property of the Element interface gets and sets the value of the class attribute
                        of the specified element.
                    </td>
                </tr>
                <tr>
                    <td data-d={1}>popupClassName</td>
                    <td>string</td>
                    <td>'popup-123'</td>
                    <td>css class for submenu panel</td>
                </tr>
                <tr>
                    <td data-d={1}>dataUser</td>
                    <td>string | undefined</td>
                    <td>undefined</td>
                    <td>Data that the user can insert into a menu attribute. [data-user='value']</td>
                </tr>
                <tr>
                    <td data-d={1}>style</td>
                    <td>React.CSSProperties | undefined</td>
                    <td>undefined</td>
                    <td>The style global attribute contains CSS styling declarations to be applied to the div Menu.
                        Note that it is recommended for styles to be defined in a separate file or files.
                        This attribute and the style element have mainly the purpose of allowing for quick styling, for
                        example for testing purposes.
                    </td>
                </tr>
                <tr>
                    <td data-d={1}>popupStyle</td>
                    <td>React.CSSProperties | undefined</td>
                    <td>undefined</td>
                    <td>The style global attribute contains CSS styling declarations to be applied to the div PopUp
                        Menu.
                        Note that it is recommended for styles to be defined in a separate file or files.
                        This attribute and the style element have mainly the purpose of allowing for quick styling, for
                        example for testing purposes.
                    </td>
                </tr>
                <tr>
                    <td data-d={1}>children</td>
                    <td>ReactNode | undefined</td>
                    <td> undefined</td>
                    <td>Represents all of the things React can render.
                        Where ReactElement only represents JSX, ReactNode represents everything that can be rendered.
                    </td>
                </tr>
                <tr>
                    <td data-d={1}><a href="#page=1-11">contentLeft</a></td>
                    <td>any</td>
                    <td>undefined</td>
                    <td>The visual content of the menu consists of three horizontal areas: contentLeft - content -
                        contentRight. Can be determined individually.
                    </td>
                </tr>
                <tr>
                    <td data-d={1}><a href="#page=1-11">content</a></td>
                    <td>any</td>
                    <td>undefined</td>
                    <td>The visual content of the menu consists of three horizontal areas: contentLeft - content -
                        contentRight. Can be determined individually.
                    </td>
                </tr>
                <tr>
                    <td data-d={1}><a href="#page=1-11">contentRight</a></td>
                    <td>any</td>
                    <td>undefined</td>
                    <td>The visual content of the menu consists of three horizontal areas: contentLeft - content -
                        contentRight. Can be determined individually.
                    </td>
                </tr>
                <tr>
                    <td data-d={1}><a href="#page=1-4">disabled</a></td>
                    <td>bool</td>
                    <td>false</td>
                    <td>Indicates that the element is perceivable but disabled, so it is not editable or otherwise
                        operable.
                    </td>
                </tr>
                <tr>
                    <td data-d={1}>id</td>
                    <td>string | undefined</td>
                    <td>undefined</td>
                    <td>The id global attribute defines an identifier (ID) which must be unique in the whole document.
                        Its purpose is to identify the element when linking (using a fragment identifier ), scripting,
                        or styling (with CSS ).
                    </td>
                </tr>
                <tr>

                    <td data-d={1}><a href="#page=1-5">iconDropOpen</a></td>
                    <td>any</td>
                    <td>undefined</td>
                    <td>Only for menu where positionPopup='dropDown'.</td>
                </tr>
                <tr>
                    <td data-d={1}><a href="#page=1-5">iconDropClose</a></td>
                    <td>any | undefined</td>
                    <td>undefined</td>
                    <td>Only for menu where positionPopup='dropDown'.</td>
                </tr>
                <tr>
                    <td data-d={1}><a href="#page=1-12">onClick</a></td>
                    <td>((e: InstanceType&#60;typeof MenuItem&#62;) =&#62; void) | undefined</td>
                    <td>undefined</td>
                    <td>Mouse click menu</td>
                </tr>
                <tr>
                    <td data-d={1}><a href="#page=1-14">onVisible</a></td>
                    <td>((e: InstanceType&#60;typeof MenuItem&#62;) =&#62; void) | undefined</td>
                    <td>undefined</td>
                    <td>Event visible popup menu.</td>
                </tr>
                <tr>
                    <td data-d={1}>positionPopup</td>
                    <td>: 'down' | 'top' | 'downLeft' | 'downRight' | 'topRight' | 'topLeft' | 'dropDown' | 'middleLeft'
                        | 'middleLeft3' | 'middleLeft4' | 'middleLeft5' | 'middleRight' | 'middleRight3' |
                        'middleRight4' | 'middleRight5'
                    </td>
                    <td>'down'</td>
                    <td>Position of the sub menu panel (popup), can take value: ['down', ... ,'middleRight5'].
                        Default:'down'
                    </td>
                </tr>
                <tr>
                    <td data-d={1}>tabIndex</td>
                    <td>number | undefined</td>
                    <td>undefined</td>
                    <td>The tabindex global attribute indicates that its element can be focused, and where it
                        participates in sequential keyboard navigation (usually with the Tab key, hence the name).
                    </td>
                </tr>
                <tr>
                    <td data-d={1}>title</td>
                    <td>string | undefined</td>
                    <td>undefined</td>
                    <td>The title global attribute contains text representing advisory information related to the
                        element it belongs to.
                        Some typical uses:
                    </td>
                </tr>
                <tr>
                    <td data-d={1}>tag</td>
                    <td>string | undefined</td>
                    <td></td>
                    <td>user data</td>
                </tr>
                <tr>
                    <td data-d={1}>url</td>
                    <td>string | undefined</td>
                    <td>undefined</td>
                    <td>The HTMLAnchorElement.href property is a stringifier that returns a USVString containing the
                        whole URL, and allows the href to be updated.
                    </td>
                </tr>
                <tr>
                    <td data-d={1}><a href="#page=1-15">buildContent</a></td>
                    <td>

                        ( (&#123;<br/>
                        &nbsp;&nbsp;&nbsp; contentLeft?&#59; any;<br/>
                        &nbsp;&nbsp;&nbsp; contentCenter?&#59; any;<br/>
                        &nbsp;&nbsp;&nbsp; contentRight?&#59; any;<br/>
                        &nbsp;&nbsp;&nbsp; iconDropOpen?&#59; any;<br/>
                        &nbsp;&nbsp;&nbsp; iconDropClose?&#59; any;<br/>
                        &nbsp;&nbsp;&nbsp; isOpenDrop?&#59; boolean;<br/>
                        &nbsp;&nbsp;&nbsp; id?&#59; string;<br/>
                        &nbsp;&nbsp;&nbsp; tag?&#59; any;<br/>
                        &#125;)=&#62;any) | undefined<br/>
                    </td>
                    <td>undefined</td>
                    <td>User rendering content menu</td>
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
                    <td data-d={1}><a href="#page=1-6">open()</a></td>
                    <td>()=&#62;void</td>
                    <td>Open menu (positionPopup: dropDown)</td>
                </tr>
                <tr>
                    <td data-d={1}><a href="#page=1-6">close()</a></td>
                    <td>()=&#62;void</td>
                    <td>Open menu (positionPopup: dropDown)</td>
                </tr>
                <tr>
                    <td data-d={1}><a href="#page=1-8">menu</a></td>
                    <td>get menu(): HTMLDivElement | null</td>
                    <td>Return element (div) nemu</td>
                </tr>
                <tr>
                    <td data-d={1}><a href="#page=1-8">popUp</a></td>
                    <td>get popUp(): HTMLDivElement | null</td>
                    <td>Return element (div) popup menu</td>
                </tr>
                <tr>
                    <td data-d={1}><a href="#page=1-8">wrapper</a></td>
                    <td>get wrapper(): HTMLAnchorElement | null</td>
                    <td>Return element (a) composition menu</td>
                </tr>
                <tr>
                    <td data-d={1}><a href="#page=1-7">setShow(boolean)</a></td>
                    <td>(a:boolean)=&#62;void</td>
                    <td>Show menu ( true - show, false - not show)</td>
                </tr>
                <tr>

                    <td data-d={1}><a href="#page=1-4">setDisabled(boolean)</a></td>
                    <td>(a:boolean)=&#62;void</td>
                    <td>Set disable menu</td>
                </tr>
                <tr>
                    <td data-d={1}><a href="#page=1-10">setContent( any,any,any)</a></td>
                    <td>(contentLeft?: any, content?: any, contentRich?: any): void</td>
                    <td>Changing menu content</td>
                </tr>
                <tr>
                    <td data-d={1}>setUrl(string)</td>
                    <td>(url: string | undefined): void</td>
                    <td>Changing menu url</td>
                </tr>
                <tr>
                    <td data-d={1}>setTag(string)</td>
                    <td>(tag: any | undefined): void</td>
                    <td>Changing menu tag</td>
                </tr>
                </tbody>

            </table>

            <table style={{width: "80%"}}>
                <caption>
                    Static functions
                </caption>
                <tbody>
                <tr>
                    <th style={{width: "20%"}}>Name</th>
                    <th style={{width: "30%"}}>Type</th>
                    <th style={{width: "50%"}}>Description</th>
                </tr>
                <tr>


                    <td data-d={1}><a href="#page=1-9">CloseMenu(callback?)</a></td>
                    <td>(callback:(()=&#62;void) | undefined)=&#62;void</td>
                    <td>Closes the menu chain</td>
                </tr>
                </tbody>
            </table>
        </>


    )

}
