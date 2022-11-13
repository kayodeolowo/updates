import React from "react";
import Mycount from "./Mycount";
import { Contact } from "./pages/Contact";
import Navbar from "./pages/Navbar";


import Reducer from "./Reducer";


function App() {
  return (
    <div>
     
      {/* <Navbar/> */}
      
      <Mycount/>
      <Reducer/>
      <Contact/> 
     
    </div>
  );
}

export default App;
