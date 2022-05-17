import { NavBar } from './components/navbar/navbar';
import { Outlet} from "react-router-dom";

import './App.css';

function App() {
  return (
    <div className='app'>
      <nav>
        <NavBar />
      </nav>
      <Outlet />
    </div>
  );
}

export default App;
