import { BrowserRouter, Route, Routes } from "react-router-dom";
import './index.css'; //tailwind.css
import Home from "./pages/Home";
import NewArrivals from "./pages/suits-tuxedos/NewArrivals";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Business from "./pages/suits-tuxedos/Business";
import Tuxedos from "./pages/suits-tuxedos/Tuxedos";
import FormalEvents from "./pages/suits-tuxedos/FormalEvents";
import Wedding from "./pages/suits-tuxedos/Wedding";
import GoogleMaps from "./pages/locations/GoogleMaps";
import Login from "./pages/user/Login";
import SignUp from "./pages/user/SignUp";


function App() {
  return (
    <div className="App">
    <BrowserRouter>
    <Header/>
    <Routes>
       
       <Route
           path='/'
           exact
           element={<Home/>}
       />
          <Route
           path='/suits-tuxedos/new'
           exact
           element={<NewArrivals/>}
       />
       <Route
           path='/suits-tuxedos/business'
           exact
           element={<Business/>}
       />
       <Route
           path='/suits-tuxedos/tuxedo'
           exact
           element={<Tuxedos/>}
       />
       <Route
           path='/suits-tuxedos/formal'
           exact
           element={<FormalEvents/>}
       />
       <Route
           path='/suits-tuxedos/wedding'
           exact
           element={<Wedding/>}
       />
         <Route
           path='/locations'
           exact
           element={<GoogleMaps/>}
       />
          <Route
           path='/login'
           exact
           element={<Login/>}
       />
         <Route
           path='/signup'
           exact
           element={<SignUp/>}
       />
      
   </Routes>
   <Footer/>
    </BrowserRouter>
    </div>
  );
}

export default App;
