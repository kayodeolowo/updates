import React from "react";
import Header from './components/Header'
import Mycount from "./Mycount";
import { Contact } from "./pages/Contact";
import Navbar from "./pages/Navbar";


import Reducer from "./Reducer";


function App() {
  return (
    <div>
     
      {/* <Navbar/> */}
      <Header/>
      <Mycount/>
      <Reducer/>
      <Contact/> 
     
    </div>
  );
}

export default App;
