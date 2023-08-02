import pic1 from "../images/man-1459246_960_720.png";
import { BiSupport } from "react-icons/bi";
import { GiHamburgerMenu } from "react-icons/gi";
import '../style/Header.css'
function Header(props) {
  return (
    <header className="headBar">
      <ul className="headBar">
        <li className="headBar">
          <div className="iconpic">
            <img width={"100%"} src={pic1}></img>
          </div>
          <div style={{ display: "inline-block" }}>
            <span className="psagot">
              <span style={{ color: "blueviolet" }}>p</span>sagot
            </span>
            <br />
            <span className="icontxt">שירותי מחשוב ואבטחה</span>
          </div>
        </li>
        <li className="navButns headBar"><a href="#">ראשי</a></li>
        <li className="navButns headBar"><a href="#">פתרונות מחשוב לעסקים</a></li>
        <li className="navButns headBar"><a href="#">שירותי ענן</a></li>
        <li className="navButns headBar"><a href="#">שירותי IT</a></li>
        <li className="navButns headBar"><a href="#">אודות</a></li>
        <li className="navButns headBar"><a href="#">צור קשר</a></li>
        <li className="btn headBar">
          פתח קריאת שירות{" "}
          <span style={{ verticalAlign: "-5px", fontSize: "22px" }}>
            <BiSupport />
          </span>
        </li>
        <li
          className="burger"
          onClick={() => props.setIsDrawerOpen(!props.isDrawerOpen)}
        >
          <GiHamburgerMenu />
        </li>
        {/* <li>
  <IconButton size="large" edge="start" color="inherit" aria-label="logo" onClick={() => setIsDrawerOpen(true)} >
    <MenuIcon/>
  </IconButton>
    <Drawer
      anchor="left"
      open={isDrawerOpen}
      onClose={() => setIsDrawerOpen(false)}
    >
      <Box p={2} width="250px" textAlign='center'>
        <Typography variant='h6' component='div'></Typography>
      </Box>
    </Drawer>
  </li> */}
      </ul>
    </header>
  );
}

export default Header;
