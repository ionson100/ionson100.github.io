import {ReactElement} from "react";
import {BaseBodyDialog, ShowBsrDialog} from "bsr-modaldialog";
import {FaUserSecret} from "react-icons/fa";

class ConfirmDialog extends BaseBodyDialog {


    getData(mode: string | undefined): object | undefined {
        return undefined;
    }

    validate(mode: string | undefined): boolean | undefined {
        return true
    }

    render() {
        return (
                <div style={{textAlign: "center", padding: 10}}>
                    Close me<br/>
                    <button onClick={() => {
                        this.selfClose("333")
                    }}>
                        selfClose
                    </button>
                </div>
        )
    }

}

export async function ConfirmDialogF() {
    const but: ReactElement[] = []
    but.push(< button className={'button-10'} data-mode={-1} data-focus={true}>close</button>)
    return (
        await ShowBsrDialog({
            position: 'top',
            style:{width:300},
            icon: <FaUserSecret/>,
            header: (<span style={{paddingLeft: 30}}>Close me:</span>),
            body: <ConfirmDialog/>,
            buttons: but
        })
    )
}