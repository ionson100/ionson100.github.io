import {Tab, Tabs} from "bsr-tabs"
import {FiArrowLeftCircle} from "react-icons/fi";


export default function P8_1() {
    return (
        <>

            <Tabs id={'123'} style={{width: 900}} >
                <Tab title={'tab1'}  select={true}  width={150}>

                   <div>
                       <p>
                           Lorem ipsum dolor sit amet, consectetuer adipiscing elit. <br/>
                           Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis <br/>
                           dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec,
                           pellentesque<br/>
                           eu,<br/>
                           pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel,
                           aliquet<br/>
                           nec,
                           vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo.
                           Nullam<br/>
                           dictum
                           elis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper
                           nisi.<br/>
                           Aenean
                           vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend
                           ac,<br/>
                           enim.
                           Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla
                           ut<br/>
                           metus
                           varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue.
                           Curabitur<br/>
                           ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas tempus,<br/>
                           tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing<br/>
                           sem neque sed ipsum. Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id,<br/>
                           lorem. Maecenas nec odio et ante tincidunt tempus. Donec vitae sapien ut libero<br/>
                           venenatis faucibus. Nullam quis ante. Etiam sit amet orci eget eros faucibus tincidunt.<br/>
                           Duis leo. Sed fringilla mauris sit amet nibh. Donec sodales sagittis magna. Sed<br/>
                           consequat,<br/>
                           leo eget bibendum sodales, augue velit cursus nunc,
                       </p>
                   </div>
                </Tab>
                <Tab title={'tab2'} width={200}>
                   <div>
                       <p>Tab2</p>
                   </div>
                </Tab>
                <Tab title={'tab3'}>
                    tab3
                </Tab>
                <Tab title={'tab4'}>
                    4545 65656
                </Tab>
                <Tab title={'tab5'}>
                   <Tabs>
                       <Tab title={'tab6'} >
                           tab6
                       </Tab>
                       <Tab title={'tab7'} select={true}>
                           tab7
                       </Tab>
                   </Tabs>
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
