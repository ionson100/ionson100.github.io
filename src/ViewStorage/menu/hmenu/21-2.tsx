import {Menu, MenuItem} from "bsr-horizontal-menu";
import 'bsr-horizontal-menu/dist/index.css'
export default function P21_2(){
    return(
        <Menu>
            <MenuItem  href={"#id-1"} content={'menu:1'}/>
            <MenuItem  content={'menu:2'}>
                <MenuItem content={'menu:2-1'}/>
                <MenuItem content={'menu:2-2'} dropPosition={'right'}>
                    <MenuItem content={'menu1 simple'}/>
                    <MenuItem content={'menu2'}/>
                    <MenuItem href={"#id-2-2"} content={'menu3'}/>
                </MenuItem>
            </MenuItem>
            <MenuItem  href={"#id-12"} content={'menu:3'}/>
            <MenuItem  href={"#id-13"} content={'menu:4'}/>
            <MenuItem  href={"#id-14"} content={'menu:5'}/>
            <MenuItem  href={"#id-15"} content={'menu:6'}/>
        </Menu>

    )
}