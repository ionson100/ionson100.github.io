import React from "react";
import MenuItem from "bsr-menu";
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

function CheckBox() {
    return <input type={'checkbox'} name={'assa'} onClick={(e) => {
        e.stopPropagation()
    }
    }/>
}

function Middle() {
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
        <div className='FormExample'>
            <label>
                First Name:
                <input style={{width:"170px"}} type="text" name="name"/>
            </label>
            <br/>
            <label>
                Last Name:
                <input style={{width:"170px"}} type="text" name="name"/>
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
 const styleImageL={
    size:18,
     paddingLeft:5,
     paddingTop:4
}
const styleImageR={
    size:18,
    paddingRight:5,
    paddingTop:4
}

function InnerDrop({message,title}: { message: string,title?:string }) {
    return(<MenuItem
        title={title?title:undefined}
        contentLeft={<GiAbstract039 style={styleImageL}/>}
        content={<Content message={message}/>}
        contentRight={<FaArrowAltCircleRight style={styleImageR}/>}
        style={{width:250}}/> )
}

export function P1_1() {
    return (
        <>
            <div>
                <Band/>
                <div style={{display: 'flex'}}>
                    <MenuItem  className='menu-example' behavior={'click'} contentLeft={'File'} style={{width: 50}}>
                        <BandWait/>
                        <MenuItem className='sub-menu-example'

                                  contentLeft={' '} positionPopup={'downRight'} content={(<span style={{paddingLeft:5}}>Open</span>)}
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
                        <MenuItem className='sub-menu-example' contentLeft={' '} content={(<span style={{paddingLeft:5}}>Close</span>)}
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
                            content={(<span style={{paddingLeft:5}}>Download</span>)}
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
                                  content={(<span style={{paddingLeft:5}}>CheckBox</span>)} contentRight={<IoMdCheckboxOutline style={styleImageR}/>}>
                            <MenuItem
                                className='sub-menu-example'
                                content={<Content message={'Simple'}/>}
                                style={{width: 200}}

                                contentRight={<CheckBox/>}/>
                        </MenuItem>
                        <Band/>
                        <MenuItem positionPopup={'downRight'}
                                  popupClassName={'popup-123-form'}
                                  className='sub-menu-example'  content={<span style={{paddingLeft:5}}>Form</span>}
                                  contentRight={<FaWpforms style={styleImageR}/>}>
                            {
                                FormBox()
                            }
                        </MenuItem>
                        <Band/>
                        <MenuItem className='sub-menu-example' contentLeft={' '} content={(<span style={{paddingLeft:5}}>Radio</span>)}
                                  contentRight={<BsUiRadios  style={styleImageR}/>}></MenuItem>
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

                                      contentLeft={' '} positionPopup={'downLeft'} content={(<span style={{paddingLeft:5}}>Open</span>)}
                                      contentRight={<FaRegFolderOpen  style={styleImageR}/>}>
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
                            <MenuItem className='sub-menu-example' contentLeft={' '} content={(<span style={{paddingLeft:5}}>Close</span>)}
                                      positionPopup={'downLeft'}
                                      contentRight={<FaRegFolderClosed  style={styleImageR}/>}>
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
                            <MenuItem className='sub-menu-example' contentLeft={' '} content={(<span style={{paddingLeft:5}}>Download</span>)} positionPopup={'middleLeft5'}
                                      contentRight={<RiFolderDownloadLine  style={styleImageR}/>}>
                                {Middle()}
                            </MenuItem>
                            <BandWait/>
                        </MenuItem>
                        <BandVertical/>
                        <MenuItem className='menu-example' behavior={'click'} contentLeft={'Form'} style={{width: 50}}>
                            <BandWait/>
                            <MenuItem className='sub-menu-example' contentLeft={' '} positionPopup={'downLeft'}
                                      content={(<span style={{paddingLeft:5}}>CheckBox</span>)} contentRight={<IoMdCheckboxOutline style={styleImageR}/>}>
                                <MenuItem
                                    className='sub-menu-example'
                                    content={<Content message={'Simple'}/>}
                                    style={{width: 200}}

                                    contentRight={<CheckBox/>}/>
                            </MenuItem>
                            <Band/>
                            <MenuItem positionPopup={'downLeft'}
                                      popupClassName={'popup-123-form'}
                                      className='sub-menu-example'  content={(<span style={{paddingLeft:5}}>Form</span>)}
                                      contentRight={<FaWpforms  style={styleImageR}/>}>
                                {
                                    FormBox()
                                }
                            </MenuItem>
                            <Band/>
                            <MenuItem className='sub-menu-example' contentLeft={' '} content={(<span style={{paddingLeft:5}}>Radio</span>)}
                                      contentRight={<BsUiRadios  style={styleImageR}/>}></MenuItem>
                            <BandWait/>
                        </MenuItem>
                    </div>
                </div>
                <Band/>
            </div>
            <div style={{height: 100}}></div>
            <div style={{width: 200}}>
                <MenuItem

                    behavior={'click'}
                    style={{width:250}}
                    content={<Content  message={'drop'}/>}
                    iconDropOpen={<FaAnglesDown size={15} style={styleImageR}/>}
                    iconDropClose={<FaAnglesRight size={15} style={styleImageR}/>}
                    positionPopup={'dropDown'}>
                    <BandWait/>
                    <InnerDrop message={'fantastic place'}/>
                    <Band/>
                    <InnerDrop message={'fantastic place'}/>
                    <Band/>
                    <InnerDrop message={'fantastic place'}/>
                    <Band/>
                    <InnerDrop message={'El Médano is a fantastic destination for those whose idea of a perfect holiday is to never get out of the water.'}
                    title={'El Médano is a fantastic destination for those whose idea of a perfect holiday is to never get out of the water.'}/>
                    <InnerDrop message={'fantastic place'}/>
                    <Band/>
                    <InnerDrop message={'fantastic place'}/>
                    <BandWait/>

                </MenuItem>
                <Band/>
                <MenuItem  style={{width:250}} content={<Content message={'Test'}/>}></MenuItem>
                <Band/>
                <MenuItem   style={{width:250}} content={<Content message={'Test'}/>}></MenuItem>
                <Band/>

                <MenuItem style={{width:250}}  content={<Content message={'Test'}/>}></MenuItem>
                <Band/>
                <MenuItem  style={{width:250}} content={<Content message={'Test'}/>}></MenuItem>
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

                                  contentLeft={' '} positionPopup={'topRight'} content={(<span style={{paddingLeft:5}}>Open</span>)}
                                  contentRight={<FaRegFolderOpen  style={styleImageR}/>}>
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
                        <MenuItem className='sub-menu-example' contentLeft={' '} content={(<span style={{paddingLeft:5}}>Close</span>)}
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
                            content={(<span style={{paddingLeft:5}}>Download</span>)}
                            positionPopup={'middleRight'}
                            popupClassName={'popup-123-form'}
                            contentRight={<RiFolderDownloadLine  style={styleImageR}/>}>

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
                                  content={(<span style={{paddingLeft:5}}>CheckBox</span>)} contentRight={<IoMdCheckboxOutline style={styleImageR}/>}>
                            <MenuItem
                                className='sub-menu-example'
                                content={<Content message={'Simple'}/>}
                                style={{width: 200}}

                                contentRight={<CheckBox/>}/>
                        </MenuItem>
                        <Band/>
                        <MenuItem positionPopup={'topRight'}
                                  popupClassName={'popup-123-form'}
                                  className='sub-menu-example'  content={<span style={{paddingLeft:5}}>Form</span>}
                                  contentRight={<FaWpforms  style={styleImageR}/>}>
                            {
                                FormBox()
                            }
                        </MenuItem>
                        <Band/>
                        <MenuItem className='sub-menu-example' contentLeft={' '} content={(<span style={{paddingLeft:5}}>Radio</span>)}
                                  contentRight={<BsUiRadios  style={styleImageR}/>}></MenuItem>
                        <BandWait/>
                    </MenuItem>
                    <div style={{width: 400}}></div>
                    <div style={{display: "flex"}}>
                        <MenuItem positionPopup={'top'} className='menu-example' behavior={'click'} contentLeft={'File'}
                                  style={{width: 50}}>
                            <BandWait/>
                            <MenuItem className='sub-menu-example'

                                      contentLeft={' '} positionPopup={'topLeft'} content={(<span style={{paddingLeft:5}}>Open</span>)}
                                      contentRight={<FaRegFolderOpen  style={styleImageR}/>}>
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
                            <MenuItem className='sub-menu-example' contentLeft={' '} content={(<span style={{paddingLeft:5}}>Close</span>)}
                                      positionPopup={'topLeft'}
                                      contentRight={<FaRegFolderClosed  style={styleImageR}/>}>
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
                            <MenuItem className='sub-menu-example' contentLeft={' '} content={(<span style={{paddingLeft:5}}>Download</span>)}
                                      contentRight={<RiFolderDownloadLine  style={styleImageR}/>} positionPopup={'middleLeft5'}>
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
                            <MenuItem className='sub-menu-example' positionPopup={'topLeft'}
                                      content={(<span style={{paddingLeft:5}}>CheckBox</span>)} contentRight={<IoMdCheckboxOutline style={styleImageR}/>}>
                                <MenuItem
                                    className='sub-menu-example'
                                    content={<Content message={'Simple'}/>}
                                    style={{width: 200}}

                                    contentRight={<CheckBox/>}/>
                            </MenuItem>
                            <Band/>
                            <MenuItem positionPopup={'topLeft'}
                                      popupClassName={'popup-123-form'}
                                      className='sub-menu-example'  content={<span style={{paddingLeft:5}}>Form</span>}
                                      contentRight={<FaWpforms  style={styleImageR}/>}>
                                {
                                    FormBox()
                                }
                            </MenuItem>
                            <Band/>
                            <MenuItem className='sub-menu-example' contentLeft={' '} content={(<span style={{paddingLeft:5}}>Radio</span>)}
                                      contentRight={<BsUiRadios  style={styleImageR}/>}></MenuItem>
                            <BandWait/>
                        </MenuItem>
                    </div>
                </div>
                <Band/>
            </div>
        </>
    )


}
