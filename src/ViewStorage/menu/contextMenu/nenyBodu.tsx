import * as diagnostics_channel from "node:diagnostics_channel";

export function Body1(text:string){
    return(
        <div style={{width:200}}>
            <div>{text}:1</div>
            <div>{text}:2</div>
            <div>{text}:3</div>
            <div>{text}:4</div>
        </div>
    )
}
