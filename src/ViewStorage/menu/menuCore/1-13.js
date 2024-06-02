import React  from "react";
import {CodeSnippetCss} from "../../codeSnippetJavaScript";


const code=`

:root{
    --hover: rgb(230, 230, 228);
    --root-selectr: rgb(220, 220, 218);

}

/* styles menu core*/
.menu-123-item {
    height: 30px;
    width: 150px;
    cursor: pointer;
}
.menu-123-item:hover{
    background: var(--hover);
}
.menu-123-item:active{
    background: var(--root-selectr);
}
/*style disabled menu*/
div[disabled]
{
    pointer-events: none;
    opacity: 0.5;
}
/* override text */
.t-over{
    white-space:nowrap;
    overflow:hidden;
    text-overflow:ellipsis;
}
/*style panel popup submenu*/
.popup-123{
    border: 1px solid #d6d6d6;
    width: min-content;
    background: white;
    box-shadow: rgba(50, 50, 93, 0.25) 0 13px 27px -5px, rgba(0, 0, 0, 0.3) 0 8px 16px -8px;
}

.container-123 {
    height: 100%;
    position: relative;
}

/*contents*/
.content-123-left-15{
    text-align: center;
    width: fit-content;
}

.content-123-right-15{
    text-align: center;
    width: fit-content;
}
.content-123-center-100{
 width: 100%;
}

.content-123-left-100{
}

.content-123-right-100{
}
/*contents*/




.vertical-center-123 {
    width: 100%;
    display: flex;
    margin: 0;
    position: absolute;
    top: 50%;
    -ms-transform: translateY(-50%);
    transform: translateY(-50%);
}
/*usage only left or right container content  */
.center-icon-123 {
    margin: 0;
    position: absolute;
    top: 50%;
    left: 50%;
    -ms-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
}
/*background selected root menu */
.root-123-selected{
    background: var(--root-selectr);
}
/*background selected not root menu */
.item-123-selected{
    background: var(--hover);
}

.box-123 {
    display: flex;
    height: 100%;
    align-content: space-around;
    align-items: center;
    flex-direction:row;
    justify-content: center;
}
/*background menu dropDow*/
.drop-123-open{
    background: #c5c3c3;
}
a[data-wrapper]:hover, a[data-wrapper]:visited, a[data-wrapper]:link, a[data-wrapper]:active
{
    text-decoration: none;
    color: black;
}



`


export default  function P1_13() {

    return (
      <CodeSnippetCss code={code}/>
    )
}