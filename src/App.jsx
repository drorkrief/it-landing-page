// import { useState } from "react";
import "./style/App.css";
// import { Drawer, Box, Typography, IconButton } from '@mui/material'
import { useState } from "react";
// import MenuIcon from '@mui/icons-material/Menu'
import Drawer from "./Components/Drawer";
import Header from "./Components/Header";
import BodySec from "./Components/BodySec";
function App() {
  const searchParams = new URLSearchParams(document.location.search);
  // const [count, setCount] = useState(0);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  // const [openBar, setOpenBar] = useState(false);
  return (
    <>
      <Header isDrawerOpen={isDrawerOpen} setIsDrawerOpen={setIsDrawerOpen} />
      <Drawer openBar={isDrawerOpen} />
      <BodySec />
      {/* <h2>jsdncjnsd</h2> */}
      {/* <div>Tutorial: {searchParams.get("tutorial")}</div>
      <p>{atob(btoa("dror@krief.com")) }</p>
      {atob(btoa(searchParams.get("tutorial")))} */}
    </>
  );
}

export default App;
