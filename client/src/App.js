import logo from './logo.svg';
import './App.css';
import Auction from './components/Auction/Auction';
import Navbar from './components/Navbar/Navbar';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignUp from './components/SignUp/SignUp';
import Login from './components/Login/Login';

function App() {
  return (
<>
<BrowserRouter>
     <Navbar/>
      <Routes>
      <Route exact path="/auction" element={<Auction/>}/>      
      <Route exact path="/login" element={<Login/>}/>      
      <Route exact path="/signup" element={<SignUp/>}/>


   
      </Routes>
    </BrowserRouter>

</>
  );
}

export default App;
