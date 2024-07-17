import React from 'react'
import "./Frequently.css"
import Vector9 from "./assets/Vector9.png"
function Frequently() {
  return (
    <div className="container-Frequently ">
    <div className="header-Frequently">
      <div className="header-title-Frequently ">
        <span className="highlight">Frequently</span><span> Asked Questions</span>
      </div>
      <div className="header-subtitle">
        Still you have any questions? Contact our Team via support@yourbank.com
      </div>
    </div>
    <div className="faq-section">
      <div className="faq-column">
        <div className="faq-card">
          <div className="faq-question">How do I open an account with YourBank?</div>
          <div className="divider"></div>
          <div className="faq-answer">Opening an account with YourBank is easy. Simply visit our website and click on the "Open an Account" button. Follow the prompts, provide the required information, and complete the application process. If you have any questions or need assistance, our customer support team is available to help.</div>
        </div>
        <div className="faq-card">
          <div className="faq-question">What documents do I need to provide to apply for a loan?</div>
          <div className="divider"></div>
          <div className="faq-answer">The documents required for a loan application may vary depending on the type of loan you are applying for. Generally, you will need to provide identification documents (such as a passport or driver's license), proof of income (such as pay stubs or tax returns), and information about the collateral (if applicable). Our loan officers will guide you through the specific requirements during the application process.</div>
        </div>
      </div>
      <div className="faq-column">
        <div className="faq-card">
          <div className="faq-question">How can I access my accounts online?</div>
          <div className="divider"></div>
          <div className="faq-answer">Accessing your accounts online is simple and secure. Visit our website and click on the "Login" button. Enter your username and password to access your accounts. If you haven't registered for online banking, click on the "Enroll Now" button and follow the registration process. If you need assistance, our customer support team is available to guide you.</div>
        </div>
        <div className="faq-card">
          <div className="faq-question">Are my transactions and personal information secure?</div>
          <div className="divider"></div>
          <div className="faq-answer">At YourBank, we prioritize the security of your transactions and personal information. We employ industry-leading encryption and multi-factor authentication to ensure that your data is protected. Additionally, we regularly update our security measures to stay ahead of emerging threats. You can bank with confidence knowing that we have robust security systems in place.</div>
        </div>
      </div>
    </div>
    <div className="faq-footer">
      <div className="load-faq">
        <div>Load All FAQ’s</div>
        <div className="arrow"><img src={Vector9} alt="" /></div>
      </div>
    </div>
  </div>
  )
}

export default Frequently
