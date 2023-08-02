import React from 'react'
import imgSrc from "../images/backgroundImg.jpg";

function ImgBackground() {
  return (
    <div
        className="imgCon"
        style={{
          backgroundImage: `url(${imgSrc})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "100vw",
        }}
      >
        {/* <img src={imgSrc} /> */}
        <h2 className="subHeader">כל פתרונות המחשוב במקום אחד</h2>
      </div>
  )
}

export default ImgBackground