import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Add from './components/Add';
import Search from './components/Search';
import Delete from './components/Delete';
import Viewall from './components/Viewall';
import Home from './Home';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/Add" element={<Add/>}/>
      <Route path="/Search" element={<Search/>}/>
      <Route path="/Delete" element={<Delete/>}/>
      <Route path="/Viewall" element={<Viewall/>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
