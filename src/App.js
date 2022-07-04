import './App.css'
import { AllRoutes } from './components/AllRoutes';
import { InitialFocus, ModelEdit } from './components/Model';

import { ShowData } from './components/TodoShow';

function App() {
  return (
    <div className="App">
     {/* <TodoInput/>
     <ShowData/> */}
   <AllRoutes/>
   {/* <InitialFocus/> */}
   {/* <ModelEdit/> */}
    </div>
  );
}

export default App;
