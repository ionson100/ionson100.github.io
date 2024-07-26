import {Tab, Tabs} from "bsr-tabs"
import {FiArrowLeftCircle} from "react-icons/fi";


export default function P8_1() {
    return (
        <>
            <div id={'123'} style={{width: "fit-content"}}>
                <Tabs>
                    <Tab title={'tab1'} icon={<FiArrowLeftCircle size={20} color={'#5c5a5a'}/>} isOpen={true}
                         width={150}>
                        <div style={{width:200,background:"#fadddd"}}> eorioer</div>
                    </Tab>
                    <Tab title={'The tab is wider than a regular tab (tab2)'} width={400}>
                        <div style={{width:400,background:"#fadddd"}}> eorioer</div>
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
            </div>
            <br/>
            <div id={'123'} style={{width: "100%"}}>

                <br/>
            </div>
        </>


    )
}