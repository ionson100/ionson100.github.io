import {MenuFactory} from "./menuFactory";

function App( ) {

  return (
      <>
          <div className='left-menu not-select' style={{fontSize:17}}>
              <MenuFactory/>
          </div>
          <div id='content'>
              asas
          </div>
      </>

  );
}

export default App;
