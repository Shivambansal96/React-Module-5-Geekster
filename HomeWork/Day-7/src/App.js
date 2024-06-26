import { useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch, Routes } from "react-router-dom";
import LandingPage from "./components/screens/LandingPage.jsx";
import QuoteScreen from "./components/screens/QuoteScreen.jsx";
import RestaurantPage from "./components/screens/RestaurantPage.jsx";
import FoodsPage from "./components/screens/FoodsPage.jsx";
import ContactPage from "./components/screens/ContactPage.jsx";

function App() {

  // const [page, setPage] = useState(1);
  // function which will get a ID

  return (
    
    // <div className="App">
      
    //   <LandingPage />
    //   <QuoteScreen />

    //  <RestaurantPage />

    // </div>  
    


    <Router>
    <div className="App">
      <Routes>
        <Route path="/" element={<LandingPage/>}/>
        <Route path="/quote" element={<QuoteScreen/>} />
        <Route path="/restaurant" element={<RestaurantPage/>} />
        <Route path="/foods" element={<FoodsPage/>} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </div>
  </Router>
  );
}



export default App;
  