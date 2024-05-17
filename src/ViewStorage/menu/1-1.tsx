import React from "react";
import {MenuItem} from "bsr-menu";
import {FaRegFolderOpen, FaRegFolderClosed} from "react-icons/fa6";
import {RiFolderDownloadLine} from "react-icons/ri";
import {IoMdCheckboxOutline} from "react-icons/io";
import {FaWpforms} from "react-icons/fa6";
import {BsUiRadios} from "react-icons/bs";

import {FaAnglesRight} from "react-icons/fa6";
import {FaAnglesDown} from "react-icons/fa6";
import { GiAbstract039 } from "react-icons/gi";
import { FaArrowAltCircleRight } from "react-icons/fa";
import { RxDropdownMenu } from "react-icons/rx";

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

function Middle() {
    const d = 10;
    const as = [];
    for (let i = 0; i < 10; i++) {

        as.push(<MenuItem style={{width: 120}} className={'sub-menu-example'} content={Content({message: 'item'})}/>)
        as.push(<Band/>)

    }
    return as;
}

function FormBox() {
    return <div onClick={(e) => {
        e.stopPropagation()
    }
    }>
        <div style={{padding: 10, background: "#d7d4d4", width: 180}}>
            <label>
                Firs Name:
                <input type="text" name="name"/>
            </label>
            <br/>
            <label>
                Last Name:
                <input type="text" name="name"/>
            </label>
            <br/>
            <br/>
            <button onClick={() => {
                MenuItem.CloseMenu()
            }
            }>Close
            </button>
        </div>
    </div>
}

export function P1_1() {
    return (
        <>
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
                        <MenuItem
                            className='sub-menu-example'
                            contentLeft={' '}
                            content={'Download'}
                            positionPopup={'middleRight5'}
                            popupClassName={'popup-123-form'}
                            contentRight={<RiFolderDownloadLine/>}>

                            {
                                Middle()
                            }
                        </MenuItem>
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
                        <MenuItem positionPopup={'downRight'}
                                  popupClassName={'popup-123-form'}
                                  className='sub-menu-example' contentLeft={' '} content={'Form'}
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
                    <BandVertical/>
                    <MenuItem contentLeft={<RxDropdownMenu/>} className='menu-example' style={{width:30}}>

                    </MenuItem>
                    <div style={{width: 400}}></div>
                    <div style={{display: "flex"}}>
                        <MenuItem className='menu-example' behavior={'click'} contentLeft={'File'} style={{width: 50}}>
                            <BandWait/>
                            <MenuItem className='sub-menu-example'

                                      contentLeft={' '} positionPopup={'downLeft'} content={'Open'}
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
                                      positionPopup={'downLeft'}
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
                            <MenuItem className='sub-menu-example' contentLeft={' '} content={'Download'} positionPopup={'middleLeft5'}
                                      contentRight={<RiFolderDownloadLine/>}>
                                {Middle()}
                            </MenuItem>
                            <BandWait/>
                        </MenuItem>
                        <BandVertical/>
                        <MenuItem className='menu-example' behavior={'click'} contentLeft={'Form'} style={{width: 50}}>
                            <BandWait/>
                            <MenuItem className='sub-menu-example' contentLeft={' '} positionPopup={'downLeft'}
                                      content={'CheckBox'} contentRight={<IoMdCheckboxOutline/>}>
                                <MenuItem
                                    className='sub-menu-example'
                                    content={<Content message={'Simple'}/>}
                                    style={{width: 200}}

                                    contentRight={<CheckBoex/>}/>
                            </MenuItem>
                            <Band/>
                            <MenuItem positionPopup={'downLeft'}
                                      popupClassName={'popup-123-form'}
                                      className='sub-menu-example' contentLeft={' '} content={'Form'}
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
                </div>
                <Band/>
            </div>
            <div style={{height: 100}}></div>
            <div style={{width: 200}}>
                <MenuItem
                    content={<Content message={'drop'}/>}
                    iconDropOpen={<FaAnglesDown size={15}/>}
                    iconDropClose={<FaAnglesRight size={15}/>}
                    positionPopup={'dropDown'}>
                    <BandWait/>
                    <MenuItem contentLeft={<GiAbstract039/>} content={<Content message={"fantastic place"}/>} contentRight={<FaArrowAltCircleRight/>}/>

                    <Band/>
                    <MenuItem contentLeft={<GiAbstract039/>} content={<Content message={"fantastic place"}/>} contentRight={<FaArrowAltCircleRight/>}/>

                    <Band/>
                    <MenuItem contentLeft={<GiAbstract039/>} content={<Content message={"fantastic place"}/>} contentRight={<FaArrowAltCircleRight/>}/>

                    <Band/>
                    <MenuItem contentLeft={' '}
                              title={'El Médano is a fantastic destination for those whose idea of a perfect holiday is to never get out of the water.'}
                              content={<Content message={"El Médano is a fantastic destination for those whose idea of a perfect holiday is to never get out of the water."}/>} contentRight={<FaArrowAltCircleRight/>}/>

                    <MenuItem contentLeft={' '} content={<Content message={"fantastic place"}/>} contentRight={<FaArrowAltCircleRight/>}/>

                    <Band/>
                    <MenuItem contentLeft={<GiAbstract039/>} content={<Content message={"fantastic place"}/>} contentRight={<FaArrowAltCircleRight/>}/>

                    <BandWait/>

                </MenuItem>
                <MenuItem content={<Content message={'Test'}/>}></MenuItem>
                <Band/>
                <MenuItem content={<Content message={'Test'}/>}></MenuItem>
                <Band/>

                <MenuItem content={<Content message={'Test'}/>}></MenuItem>
                <Band/>
                <MenuItem content={<Content message={'Test'}/>}></MenuItem>
                <Band/>

            </div>
            <div style={{height: 100}}></div>

            <div>
                <Band/>
                <div style={{display: 'flex'}}>
                    <MenuItem positionPopup={'top'} className='menu-example' behavior={'click'} contentLeft={'File'}
                              style={{width: 50}}>
                        <BandWait/>
                        <MenuItem className='sub-menu-example'

                                  contentLeft={' '} positionPopup={'topRight'} content={'Open'}
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
                                  positionPopup={'topRight'}
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
                        <MenuItem
                            className='sub-menu-example'
                            contentLeft={' '}
                            content={'Download'}
                            positionPopup={'middleRight'}
                            popupClassName={'popup-123-form'}
                            contentRight={<RiFolderDownloadLine/>}>

                            {
                                Middle()
                            }
                        </MenuItem>
                        <BandWait/>
                    </MenuItem>
                    <BandVertical/>
                    <MenuItem positionPopup={'top'} className='menu-example' behavior={'click'} contentLeft={'Form'}
                              style={{width: 50}}>
                        <BandWait/>
                        <MenuItem className='sub-menu-example' contentLeft={' '} positionPopup={'topRight'}
                                  content={'CheckBox'} contentRight={<IoMdCheckboxOutline/>}>
                            <MenuItem
                                className='sub-menu-example'
                                content={<Content message={'Simple'}/>}
                                style={{width: 200}}

                                contentRight={<CheckBoex/>}/>
                        </MenuItem>
                        <Band/>
                        <MenuItem positionPopup={'topRight'}
                                  popupClassName={'popup-123-form'}
                                  className='sub-menu-example' contentLeft={' '} content={'Form'}
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
                    <div style={{width: 400}}></div>
                    <div style={{display: "flex"}}>
                        <MenuItem positionPopup={'top'} className='menu-example' behavior={'click'} contentLeft={'File'}
                                  style={{width: 50}}>
                            <BandWait/>
                            <MenuItem className='sub-menu-example'

                                      contentLeft={' '} positionPopup={'topLeft'} content={'Open'}
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
                                      positionPopup={'topLeft'}
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
                                      contentRight={<RiFolderDownloadLine/>} positionPopup={'middleLeft5'}>
                                {
                                    Middle()
                                }


                            </MenuItem>
                            <BandWait/>
                        </MenuItem>
                        <BandVertical/>
                        <MenuItem positionPopup={'top'} className='menu-example' behavior={'click'} contentLeft={'Form'}
                                  style={{width: 50}}>
                            <BandWait/>
                            <MenuItem className='sub-menu-example' contentLeft={' '} positionPopup={'topLeft'}
                                      content={'CheckBox'} contentRight={<IoMdCheckboxOutline/>}>
                                <MenuItem
                                    className='sub-menu-example'
                                    content={<Content message={'Simple'}/>}
                                    style={{width: 200}}

                                    contentRight={<CheckBoex/>}/>
                            </MenuItem>
                            <Band/>
                            <MenuItem positionPopup={'topLeft'}
                                      popupClassName={'popup-123-form'}
                                      className='sub-menu-example' contentLeft={' '} content={'Form'}
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
                </div>
                <Band/>
            </div>
        </>
    )


}
