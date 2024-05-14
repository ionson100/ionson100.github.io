
import React from "react";

export function IndexBsrMenu(){
    return (<table style={{width:"80%"}}>
            <tr >
                <th style={{width:"20%"}}>Name</th>
                <th style={{width:"30%"}}>Type</th>
                <th style={{width:"20%"}}>Default</th>
                <th style={{width:"30%"}}>Description</th>
            </tr>
            <tr  >
                <td data-1>tag</td>
                <td>string|element|number|fun</td>
                <td>undefined</td>
                <td>param event click</td>
            </tr>
            <tr >
                <td data-1>iconDropClose</td>
                <td>element|fun</td>
                <td>undefined</td>
                <td>icon close menu only for drobBox</td>
            </tr>
            <tr  >
                <td data-1>iconDropOpen</td>
                <td>element|fun</td>
                <td>undefined</td>
                <td>icon open menu only for drobBox</td>
            </tr>
            <tr>
                <td data-1>contentLeft</td>
                <td>string|element|number|fun</td>
                <td>undefined</td>
                <td>content menu width:10%</td>
            </tr>
            <tr>
                <td data-1>content</td>
                <td >string|element|number|fun</td>
                <td>undefined</td>
                <td>content menu</td>
            </tr>
            <tr>
                <td data-1>contentRight</td>
                <td>string|element|number|fun</td>
                <td>undefined</td>
                <td>content menu width:10%</td>
            </tr>
            <tr>
                <td data-1>positionPopup</td>
                <td>string (['down','top', 'downLeft', 'downRight', 'topRight', 'topLeft','dropDown'])</td>
                <td> 'down' </td>
                <td>Position  panel submenu (dropDown only vertical menu)</td>
            </tr>
            <tr>
                <td data-1>behavior</td>
                <td>string (['move', 'click'])</td>
                <td>'click'</td>
                <td>initializer for opening a submenu.
                    move - mouse over, click - click on menu</td>
            </tr>
            <tr>
                <td data-1>disabled</td>
                <td>bool</td>
                <td>false</td>
                <td>State disable menu</td>
            </tr>
            <tr>
                <td data-1>className</td>
                <td>string</td>
                <td>'menu-123-item'</td>
                <td>css class menu</td>
            </tr>
            <tr>
                <td data-1>popupClassName</td>
                <td>string</td>
                <td>'popup-123' </td>
                <td>css class for submenu panel</td>
            </tr>
            <tr>
                <td data-1>SetDisabled(bool)</td>
                <td>MenuItem type object function</td>
                <td></td>
                <td>disabled state switching function</td>
            </tr>
            <tr>
                <td data-1>CloseMenu(callback)</td>
                <td>function</td>
                <td></td>
                <td>close all open menu</td>
            </tr>
            <tr>
                <td data-1>buildContent</td>
                <td>function</td>
                <td></td>
                <td>menu content building function params:</td>
            </tr>
        </table>
    )

}