import React from 'react'
import "./Footer.css"
import AbstractDesign from "./assets/AbstractDesign1.png"
function Footer() {
  return (
    <>
    <div className="CtaSection">
    <div className="AbstractDesign"><img src={AbstractDesign} alt="" /></div>
    <div className="TextContainer">
        <div className="Heading">
            <span className="heading-white">Start your financial journey with </span>
            <span className="heading-yellow">YourBank today!</span>
        </div>
        <div className="Paragraph">Lorem ipsum dolor sit amet consectetur. Blandit odio semper risus pellentesque elit. Pellentesque eget ut imperdiet nulla penatibus. Nascetur viverra arcu sed amet cursus purus.</div>
    </div>
    <div className="Button-1">
        <div className="Text">Open Account</div>
    </div>
</div>

</>
  )
}

export default Footer
