const htmlMenu = require('../htmlStorage/bsrmenu');
const htmlOrm = require('../htmlStorage/bsrorm');

 export function PageBsrMenu(){
    const template = {__html: htmlMenu};
    return(
        <div dangerouslySetInnerHTML={template}></div>
    )
}
export function PageBsrOrm(){
    const template = {__html: htmlOrm};
    return(
        <div dangerouslySetInnerHTML={template}></div>
    )
}