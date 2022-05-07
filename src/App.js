import logo from './logo.svg';
import { NavBar } from './components/navbar/navbar';
import { BrowserRouter, Routes, Route, Link, Outlet} from "react-router-dom";
import { HomePage } from './pages/home';
import { ContactPage } from './pages/contact';
import { StorePage } from './pages/store';
import { AboutPage } from './pages/about';
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
