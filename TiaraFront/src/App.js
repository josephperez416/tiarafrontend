import React, { Component } from "react";
import { Route, NavLink, Routes, HashRouter } from "react-router-dom";

import Home from "./Home";
import Header from "./Header";
import Footer from "./Footer";


class App extends Component {
render() {
  return (
    // <HashRouter>
    //   <div className="App">
    //     <h1>A Simple SPA made using React</h1>
    //     <ul className="header">
    //       <li><NavLink to="/">Home</NavLink></li>
    //     </ul>
    //     <div className="content">
    //       <Routes>
    //         <Route exact path="/" element={<Home />}></Route>
 
    //       </Routes>
    //     </div>
    //   </div>
    // </HashRouter>         
    <div className = "App">
      <Header/>
      <Footer/>
    </div>

  );
}
}
export default App;