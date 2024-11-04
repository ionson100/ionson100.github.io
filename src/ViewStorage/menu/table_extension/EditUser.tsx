import {BaseBodyDialog, ShowBsrDialog} from "bsr-modaldialog";
import 'bsr-modaldialog/dist/index.css'
import {User} from "./19-9";
import {FaReact} from "react-icons/fa6";
import React from "react";

export const codeEdit=`import {BaseBodyDialog, ShowBsrDialog} from "bsr-modaldialog";
import 'bsr-modaldialog/dist/index.css'
import {User} from "./19-9";
import {FaReact} from "react-icons/fa6";
import React from "react";

type EditUserProps = {
    user: User;
}

class EditUserBody extends BaseBodyDialog<EditUserProps> {

    private refFirstName = React.createRef<HTMLInputElement>()
    private refLastName = React.createRef<HTMLInputElement>()

    validate(mode: string | undefined): boolean | undefined {
        if (mode === '2') {
            // fetch post to server
            //if ok
            setTimeout(() => {
                this.props.user.firstName = this.refFirstName.current!.value
                this.props.user.lastName = this.refLastName.current!.value
                this.selfClose('200')
            })
            return false
        }
        return true
    }

    getData(mode: string | undefined) {
        return undefined
    }

    componentDidMount() {
        this.refFirstName.current?.select()
        this.refFirstName.current!.focus();
    }

    render() {
        return (
            <div style={{padding: 20}}>
                <div style={{fontSize: 15, color: "#464545"}}>first name:</div>
                <input ref={this.refFirstName} type={"text"} defaultValue={this.props.user.firstName}/>
                <div style={{fontSize: 15, color: "#464545", marginTop: 10}}>last name:</div>
                <input ref={this.refLastName} type={"text"} defaultValue={this.props.user.lastName}/>

            </div>
        );
    }
}

export function EditUserDialog(user: User) {
    return ShowBsrDialog({
        position: "top",
        icon: <FaReact color={"red"} size={20}/>,
        header: (<span style={{paddingLeft: 10}}>Edit User </span>),
        body: <EditUserBody user={user}/>,
        buttons: [<button data-mode={2}>Save</button>, <button data-mode={-1}>Cancel</button>]
    })
}`















type EditUserProps = {
    user: User;
}

class EditUserBody extends BaseBodyDialog<EditUserProps> {

    private refFirstName = React.createRef<HTMLInputElement>()
    private refLastName = React.createRef<HTMLInputElement>()

    validate(mode: string | undefined): boolean | undefined {
        if (mode === '2') {
            // fetch post to server
            //if ok
            setTimeout(() => {
                this.props.user.firstName = this.refFirstName.current!.value
                this.props.user.lastName = this.refLastName.current!.value
                this.selfClose('200')
            })
            return false
        }
        return true
    }

    getData(mode: string | undefined) {
        return undefined
    }

    componentDidMount() {
        this.refFirstName.current?.select()
        this.refFirstName.current!.focus();
    }

    render() {
        return (
            <div style={{padding: 20}}>
                <div style={{fontSize: 15, color: "#464545"}}>first name:</div>
                <input ref={this.refFirstName} type={"text"} defaultValue={this.props.user.firstName}/>
                <div style={{fontSize: 15, color: "#464545", marginTop: 10}}>last name:</div>
                <input ref={this.refLastName} type={"text"} defaultValue={this.props.user.lastName}/>

            </div>
        );
    }
}

export function EditUserDialog(user: User) {
    return ShowBsrDialog({
        position: "top",
        icon: <FaReact color={"red"} size={20}/>,
        header: (<span style={{paddingLeft: 10}}>Edit User </span>),
        body: <EditUserBody user={user}/>,
        buttons: [<button data-mode={2}>Save</button>, <button data-mode={-1}>Cancel</button>]
    })
}