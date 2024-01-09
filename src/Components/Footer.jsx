import React from 'react'
import "../style/Footer.css";
import { CssBaseline } from '@mui/material';
export const Footer = () => {
  return (
    <div className='footer'>
        <div className='flex-wrapper-footer'>
            <div>
                <ul>
                    {/* <li>לדגנ</li> */}
                    <li><b><u>שירותי מחשוב</u></b></li>
                    <li>מחשוב ענן | שירותי מחשוב – אדום</li>
                    <li>פרופיל חברה</li>
                    <li>שותפים עסקיים</li>
                    <li>בלוג שירותי מחשוב</li>
                    <li>תמיכה בהשתלטות מרחוק</li>
                    <li>טופס קריאת שרות</li>
                    <li>תמיכת מחשבים</li>
                    <li>צור קשר</li>

                    </ul></div>
            <div><ul>
                    {/* <li>לדגנ</li> */}
                    <li><b><u>מחשוב ענן</u></b></li>
                    <li>מחשוב ענן | שירותי מחשוב – אדום</li>

                    <li>Office 365 – פתרונות ענן</li>
                    <li>גיבוי בענן</li>
                    <li>שירותי מחשוב ענן לעסקים</li>
                    <li>שיתוף קבצים</li>
                    <li>תשתיות ענן</li>
                    <li>שירותי ענן</li>
                    <li>השכרת שרתים</li>

                    </ul></div>
            <div>
              <ul>
                <li><b><u>תמיכה לרשתות מחשבים</u></b></li>
                <li>מחשבים אישיים</li>
                <li>ניהול פרויקטים</li>
                <li>רשתות מחשבים</li>
                <li>שירותי ה – HELP DESK</li>
                <li>השמת כוח אדם</li>
                <li>שירותי תמיכה “בנק שעות”</li>
                <li>שירותי תמיכה “ריטיינר”</li>
              </ul>
            </div>
            <div style={{display:"flex",justifyContent:"center",alignItems:"center"}}>
              <div style={{ display: "inline-block" }}>
                <span className="psagot">
                  <span style={{ color: "blueviolet" }}>p</span>sagot
                </span>
                <br />
                <span className="icontxt">שירותי מחשוב ואבטחה</span>
              </div>  
            </div>
        </div>
    </div>
  )
}
