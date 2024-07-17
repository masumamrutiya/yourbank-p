import React from 'react'
import "./Testimonials.css"
import text from "./assets/Text.png"
import Button from "./assets/Button.png"
import Button1 from "./assets/Button1.png"
function Testimonials() {
  return (
    <div className="TestimonialsSection">
    <div className="SubContainer">
        <div className="TextContainer">
            <div className="Heading">
                <span className="heading-white">Our</span><span className="heading-yellow"> Testimonials</span>
            </div>
            <div className="Paragraph">Discover how YourBank has transformed lives with innovative digital solutions and personalized customer service. See why our clients trust us for a secure and prosperous financial journey</div>
        </div>
        <div className="Tabs">
            <div className="Button active">
                <div className="Text">For Individuals</div>
            </div>
            <div className="Button">
                <div className="Text">For Businesses</div>
            </div>
        </div>
    </div>
    <div className="Container">
        <div className="Button">
            <div className="Icon">
                <div className="Vector"><img src={Button} alt="" /></div>
            </div>
        </div>
        <div className="ItemsContainer">
            <div className="Card">
                <div className="Container">
                    <div className="Line"></div>
                    <div className="Icon">
                        <div className="Text icon-text"><img src={text} alt="" /></div>
                    </div>
                    <div className="Line"></div>
                </div>
                <div className="Paragraph">YourBank has been my trusted financial partner for years. Their personalized service and innovative digital banking solutions have made managing my finances a breeze.</div>
                <div className="Name">Sara T</div>
            </div>
            <div className="Card">
                <div className="Container">
                    <div className="Line"></div>
                    <div className="Icon">
                        <div className="Text icon-text"><img src={text} alt="" /></div>
                    </div>
                    <div className="Line"></div>
                </div>
                <div className="Paragraph">I recently started my own business, and YourBank has been instrumental in helping me set up my business accounts and secure the financing I needed. Their expert guidance and tailored solutions have been invaluable.</div>
                <div className="Name">John D</div>
            </div>
            <div className="Card">
                <div className="Container">
                    <div className="Line"></div>
                    <div className="Icon">
                        <div className="Text icon-text"><img src={text} alt="" /></div>
                    </div>
                    <div className="Line"></div>
                </div>
                <div className="Paragraph">I love the convenience of YourBank's mobile banking app. It allows me to stay on top of my finances and make transactions on the go. The app is user-friendly and secure, giving me peace of mind.</div>
                <div className="Name">Emily G</div>
            </div>
            <div className="FadeOutLeft"></div>
            <div className="FadeOutRight"></div>
        </div>
        <div className="Button">
            <div className="Icon">
                <div className="Vector rotated"><img src={Button1} alt="" /></div>
            </div>
        </div>
    </div>
</div>
  )
}

export default Testimonials
