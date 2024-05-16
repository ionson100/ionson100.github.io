import React from "react";
import {MenuItem} from "bsr-menu";
import {FaRegFolderOpen, FaRegFolderClosed} from "react-icons/fa6";
import {RiFolderDownloadLine} from "react-icons/ri";
import {IoMdCheckboxOutline} from "react-icons/io";
import {FaWpforms} from "react-icons/fa6";
import {BsUiRadios} from "react-icons/bs";

function Band() {
    return (<div style={{height: 1, background: "#f5f1f1", marginTop: 1, marginBottom: 1}}></div>)
}

function BandWait() {
    return (<div style={{height: 0, background: "#FFFFFF", marginTop: 1, marginBottom: 1}}></div>)
}

function BandVertical() {
    return (<div style={{width: 2, background: "#d9d7d7", marginLeft: 2, marginRight: 2}}></div>)
}

function Content({message}: { message: string }) {
    return <span style={{paddingLeft: 5}}>{message}</span>
}

function FileMenu({message}: { message: string }) {
    return (<MenuItem className='sub-menu-example' content={<Content message={message}/>} style={{width: 120}}/>)
}

function CheckBoex() {
    return <input type={'checkbox'} name={'assa'} onClick={(e) => {
        e.stopPropagation()
    }
    }/>
}
function FormBox(){
    return <div onClick={(e) => {
        e.stopPropagation()
    }
    }>
        <div style={{padding:10,background:"#d7d4d4"}}>
            <label>
                Firs Name:
                <input type="text" name="name" />
            </label>
            <br/>
            <label>
                Last Name:
                <input type="text" name="name" />
            </label>
            <br/>
            <br/>
            <button onClick={()=>{
            MenuItem.CloseMenu()}
            }>Close</button>
        </div>
    </div>
}

export function P1_1() {
    return (
        <div>
            <Band/>
            <div style={{display: 'flex'}}>
                <MenuItem className='menu-example' behavior={'click'} contentLeft={'File'} style={{width: 50}}>
                    <BandWait/>
                    <MenuItem className='sub-menu-example'

                              contentLeft={' '} positionPopup={'downRight'} content={'Open'}
                              contentRight={<FaRegFolderOpen/>}>
                        <BandWait/>
                        <FileMenu message={'Open File1'}/>
                        <Band/>

                        <FileMenu message={'Open File2'}/>
                        <Band/>
                        <FileMenu message={'Open File3'}/>
                        <Band/>
                        <FileMenu message={'Open File4'}/>
                        <Band/>
                        <FileMenu message={'Open File5'}/>
                        <BandWait/>
                    </MenuItem>
                    <Band/>
                    <MenuItem className='sub-menu-example' contentLeft={' '} content={'Close'}
                              positionPopup={'downRight'}
                              contentRight={<FaRegFolderClosed/>}>
                        <BandWait/>
                        <FileMenu message={'Close File1'}/>
                        <Band/>
                        <FileMenu message={'Close File2'}/>
                        <Band/>
                        <FileMenu message={'Close File3'}/>
                        <Band/>
                        <FileMenu message={'Close File4'}/>
                        <Band/>
                        <FileMenu message={'Close File5'}/>
                        <BandWait/>


                    </MenuItem>
                    <Band/>
                    <MenuItem className='sub-menu-example' contentLeft={' '} content={'Download'}
                              contentRight={<RiFolderDownloadLine/>}></MenuItem>
                    <BandWait/>
                </MenuItem>
                <BandVertical/>
                <MenuItem className='menu-example' behavior={'click'} contentLeft={'Form'} style={{width: 50}}>
                    <BandWait/>
                    <MenuItem className='sub-menu-example' contentLeft={' '} positionPopup={'downRight'}
                              content={'CheckBox'} contentRight={<IoMdCheckboxOutline/>}>
                        <MenuItem
                            className='sub-menu-example'
                            content={<Content message={'Simple'}/>}
                            style={{width: 200}}

                            contentRight={<CheckBoex/>}/>
                    </MenuItem>
                    <Band/>
                    <MenuItem positionPopup={'downRight'} className='sub-menu-example' contentLeft={' '} content={'Form'}
                              contentRight={<FaWpforms/>}>
                        {
                            FormBox()
                        }
                    </MenuItem>
                    <Band/>
                    <MenuItem className='sub-menu-example' contentLeft={' '} content={'Radio'}
                              contentRight={<BsUiRadios/>}></MenuItem>
                    <BandWait/>
                </MenuItem>
            </div>
            <Band/>


        </div>)
}
