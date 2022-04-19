import "./App.css";
// import Header from "./components/Navigation/Header";

// import FooterDown from "./components/Footer/FooterDown";
// import FooterMiddle from "./components/Footer/FooterMiddle";
// import FooterTop from "./components/Footer/FooterTop";
import { BrowserRouter, Route, Routes } from "react-router-dom";

// import Help from "./components/Footer/FooterPages/Help";
import Home from "./components/Home/Home";
// import Home from "./components/Main/Home";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        {/* <Header></Header> */}
        <Routes>
          {/* <Route path="/" element={<Home />} />
          <Route path="/help" element={<Help />} /> */}

          <Route  path = "/" element = {<Home/>}/>
        </Routes>
        {/* <FooterTop />
        <FooterMiddle />
        <FooterDown /> */}
      </BrowserRouter>
    </div>
  );
}

export default App;
