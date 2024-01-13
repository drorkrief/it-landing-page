import "./style/App.css";

// import { Drawer, Box, Typography, IconButton } from '@mui/material'
import { useState, useEffect } from "react";
// import MenuIcon from '@mui/icons-material/Menu'
import Drawer from "./Components/Drawer";
import Header from "./Components/Header";
import BodySec from "./Components/BodySec";
import { Footer } from "./Components/Footer";
import { UserDetected } from "./Components/UserDetected";
function App() {
  const searchParams = new URLSearchParams(document.location.search);
  // const [count, setCount] = useState(0);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [query, setQuery] = useState(false);
  
  // const [openBar, setOpenBar] = useState(false);
  useEffect(() => {
    if (searchParams.get("tutorial")) {
      setQuery(searchParams.get("tutorial"))
     
    }
    
    }, [])
  
  return (
    <>
      <Header isDrawerOpen={isDrawerOpen} setIsDrawerOpen={setIsDrawerOpen} />
      <Drawer openBar={isDrawerOpen} />
      <BodySec query={query}/>
      {query && <UserDetected query={query}/>}
      <Footer/>
      {/* <h2>jsdncjnsd</h2> */}
      {/* <div>Tutorial: {searchParams.get("tutorial")}</div>
      <p>{btoa("dror@krief.com") }</p>
      <p>{searchParams.get("tutorial")?searchParams.get("tutorial"):"not ok"}</p>
      {atob(btoa(searchParams.get("tutorial")))} */}
    </>
  );
}

export default App;
