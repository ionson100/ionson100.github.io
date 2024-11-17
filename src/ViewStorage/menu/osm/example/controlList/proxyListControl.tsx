import {createRoot} from "react-dom/client";
import {BaseControl} from "./baseControl";
import {Control} from "ol/control";


 function ProxyListControl(){
     const div = document.createElement("div");
     div.className= "proxy-list";
     const innerRoot = createRoot(div);
     document.body.appendChild(div)
     innerRoot.render(<BaseControl />)
    return div

}




 export class ControlList extends Control {
    /**
     * @param {Object} [opt_options] Control options.
     */
    constructor(opt_options: any) {
        const options = opt_options || {};
        super({
            element: ProxyListControl(),
            target: options.target,
        });
    }


}

export const controlList = new ControlList({})