import { BrowserRouter, Route, Routes } from "react-router-dom";
import './index.css'; //tailwind.css
import Home from "./pages/Home";
import NewArrivals from "./pages/suits-tuxedos/NewArrivals";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";


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
   </Routes>
   <Footer/>
    </BrowserRouter>
    </div>
  );
}

export default App;
