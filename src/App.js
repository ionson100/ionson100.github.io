import {HtmlDialog, HtmlMenu, HtmlOrm, HtmlSau, HtmlTree, MenuFactory} from "./menuFactory";
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
                  HtmlTree.close()
                  HtmlMenu.setShow(true)
                  HtmlOrm.setShow(true)
                  HtmlSau.setShow(true)
                  HtmlDialog.setShow(true)
                  HtmlTree.setShow(true)

              }}/>
          </div>



      </>

  );
}

export default App;
