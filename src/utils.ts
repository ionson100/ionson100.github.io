import {LeftMenu} from "bsr-left-sidebar";

type storageMenu={
    menu:(()=>InstanceType<typeof LeftMenu>|null)|undefined,
    isManualClick:boolean;
}
export const storage:storageMenu={
    menu:undefined,
    isManualClick:false

}
