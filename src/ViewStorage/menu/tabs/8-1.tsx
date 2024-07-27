import {Tab, Tabs} from "bsr-tabs"
import {FiArrowLeftCircle} from "react-icons/fi";


export default function P8_1() {
    return (
        <>

            <Tabs id={'123'} style={{width: 900}} >
                <Tab title={'tab1'} icon={<FiArrowLeftCircle size={20} color={'#5c5a5a'}/>} select={true}
                     width={150}>
                    <div style={{width: 150, background: "#fadddd"}}> eorioer</div>
                </Tab>
                <Tab title={'The tab  err'} width={200}>
                    <div style={{width: 200, background: "#fadddd"}}> eorioer</div>
                </Tab>
                <Tab title={'tab3'}>
                    4545 65656
                </Tab>
                <Tab title={'tab4'}>
                    4545 65656
                </Tab>
                <Tab title={'tab5'}>
                    4545 65656
                </Tab>

            </Tabs>
            <br/>

            <br/>
            <div id={'123'} style={{width: "100%"}}>

                <br/>
            </div>
        </>


    )
}
