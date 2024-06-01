import {HtmlDialog, HtmlMenu, HtmlOrm, HtmlSau, MenuFactory} from "./menuFactory";
import { RiMenuFill } from "react-icons/ri";

function App( ) {

  return (
      <>
          <div className='left-menu not-select' style={{fontSize: 17}}>
              <MenuFactory/>
          </div>
          <div id='content'>

          </div>

          <div className={'show-all-menu'}>
              <RiMenuFill size={30}    onClick={() => {
                  HtmlMenu.close()
                  HtmlOrm.close()
                  HtmlSau.close()
                  HtmlDialog.close()
                  HtmlMenu.setShow(true)
                  HtmlOrm.setShow(true)
                  HtmlSau.setShow(true)
                  HtmlDialog.setShow(true)

              }}/>
          </div>



      </>

  );
}

export default App;
