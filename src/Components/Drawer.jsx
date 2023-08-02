import "../style/Drawer.css";
function Drawer(props) {
  return (
    <div id="nav" className={`${props.openBar ? "active" : ""}`}>
      <ul className="nav1">
        {/* <li className='nav1'>
            <a target="_blank" href="https://github.com/FlorezAdam-FS/SimpleCodes">
               text
            </a></li>
        <li className='nav1'>
            <a target="_blank" href="https://www.instagram.com/hardbeingwoke/">
                sample
            </a>
        </li> */}
        <li className="nav1">ראשי</li>
        <li className="nav1">פתרונות מחשוב לעסקים</li>
        <li className="nav1">שירותי ענן</li>
        <li className="nav1">שירותי IT</li>
        <li className="nav1">אודות</li>
        <li className="nav1">צור קשר</li>
      </ul>
    </div>
  );
}

export default Drawer;
