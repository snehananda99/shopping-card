// import something from 'somewhere'
import react from 'react'
import Tophead from './component/Tophead/Tophead';
import Header from './component/Header/Header';
import Navbar from './component/Navbar/Navbar';
import Body from './component/Body/Body';
import Footer from './component/Footer/Footer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './component/Home/Home';



function App(){
  return(
    <>
    <BrowserRouter>
    
    <Routes>
      <Route path="/"element={<Home />}/>
      {/* <Route path="/cart"element={(cart)}/> */}
    </Routes>
    </BrowserRouter>
    </>
  )
}
export default App;