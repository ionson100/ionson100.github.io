import React from "react";
import {BaseBodyDialog, ShowBsrDialog} from "bsr-modaldialog";
import {FiSettings} from "react-icons/fi";
import { SketchPicker } from 'react-color';

export class ColorDialog extends BaseBodyDialog {
    constructor(props) {
        super(props);
        this.state =
            {
                background: props.data.color,
                validated: false
            }
        // eslint-disable-next-line no-undef
        global.refform = this;
        this.validate.bind(this)
        this.getData.bind(this)
    }

    handleChangeComplete(color){
        this.setState({ background: color.hex });
    }

    validate() {
        return true;
    }
    getData (){
        return {
            color:this.state.background
        };
    }
    componentDidMount() {
    }

    render() {
        return (
            <div style={{padding:10}} >
                <SketchPicker
                    color={ this.state.background }
                    onChangeComplete={ this.handleChangeComplete.bind(this) }
                />
            </div>
        )
    }
}

export function formDialogColor(color,name) {
    const p={color:color}
    const _body = <ColorDialog data={p} />
    const s = [
        <button className={'bt-bsr'} key={2} data-mode={2}>Save</button>,
        <button className={'bt-bsr'} key={-1} data-mode={-1} data-focus={1}>Cancel</button>,
       ];

    return ShowBsrDialog({
        style:{width:"fit-content"},
        header: <div style={{paddingLeft:10}}>{name??'Select Color'}</div>,
        icon:<FiSettings  size={20}/>,
        body: _body,
        buttons: s,
    })
}
