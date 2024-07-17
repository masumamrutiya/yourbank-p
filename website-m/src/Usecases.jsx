import React from 'react'
import "./Usecases.css"
import Fame from "./assets/Frame.png"
import Future from "./assets/Future.png"
import Homeonership from "./assets/Homeonership.png"
import Education from "./assets/Education.png"
import Startups from "./assets/Startups.png"
import Union from "./assets/Union.png"
import Businness from "./assets/Businness.png"
import payment from "./assets/payment.png"
function Usecases() {
  return (
    <div className="container-use">
    <div className="header-usecases">
      <div className="title">Use Cases</div>
      <div className="description">At YourBank, we cater to the diverse needs of individuals and businesses alike, offering
        a wide range of financial solutions</div>
    </div>
    <div className="content">
      <div className="use-cases">
        <div className="use-case">
          <div className="icon-container">
            <div className="icon-bg">
              <div className="icon">
                <div className="icon-shape personal-finance"><img src={Fame} alt="" /></div>
              </div>
            </div>
          </div>
          <div className="text">Managing Personal Finances</div>
        </div>
        <div className="use-case">
          <div className="icon-container">
            <div className="icon-bg">
              <div className="icon">
                <div className="icon-shape future-saving"><img src={Future} alt="" /></div>
              </div>
            </div>
          </div>
          <div className="text">Saving for the Future</div>
        </div>
        <div className="use-case">
          <div className="icon-container">
            <div className="icon-bg">
              <div className="icon">
                <div className="icon-shape homeownership"><img src={Homeonership} alt="" /></div>
              </div>
            </div>
          </div>
          <div className="text">Homeownership</div>
        </div>
        <div className="use-case">
          <div className="icon-container">
            <div className="icon-bg">
              <div className="icon">
                <div className="icon-shape education-funding"><img src={Education} alt="" /></div>
              </div>
            </div>
          </div>
          <div className="text">Education Funding</div>
        </div>
      </div>
      <div className="details">
        <div className="individuals">
          <div className="title">For Individuals</div>
          <div className="description">For individuals, our mortgage services pave the way to homeownership, and our
            flexible personal loans provide vital support during various life milestones. We also prioritize retirement
            planning, ensuring a financially secure future for our customers</div>
        </div>
        <div className="stats">
          <div className="stat">
            <div className="percentage">78%</div>
            <div className="description">Secure Retirement Planning</div>
          </div>
          <div className="divider"></div>
          <div className="stat">
            <div className="percentage">63%</div>
            <div className="description">Manageable Debt Consolidation</div>
          </div>
          <div className="divider"></div>
          <div className="stat">
            <div className="percentage">91%</div>
            <div className="description">Reducing financial burdens</div>
          </div>
        </div>
        <div className="button">Learn More</div>
      </div>
    </div>
    <div className="content">
      <div className="details">
        <div className="business">
          <div className="title">For Business</div>
          <div className="description">For businesses, we empower growth with working capital solutions that optimize cash
            flow, and our tailored financing options fuel business expansion. Whatever your financial aspirations,
            YourBank is committed to providing the right tools and support to achieve them</div>
        </div>
        <div className="stats">
          <div className="stat">
            <div className="percentage">65%</div>
            <div className="description">Cash Flow Management</div>
          </div>
          <div className="divider"></div>
          <div className="stat">
            <div className="percentage">70%</div>
            <div className="description">Drive Business Expansion</div>
          </div>
          <div className="divider"></div>
          <div className="stat">
            <div className="percentage">45%</div>
            <div className="description">Streamline payroll processing</div>
          </div>
        </div>
        <div className="button">Learn More</div>
      </div>
      <div className="use-cases">
        <div className="use-case">
          <div className="icon-container">
            <div className="icon-bg">
              <div className="icon">
                <div className="icon-shape startup"><img src={Startups} alt="" /></div>
              </div>
            </div>
          </div>
          <div className="text">Startups and Entrepreneurs</div>
        </div>
        <div className="use-case">
          <div className="icon-container">
            <div className="icon-bg">
              <div className="icon">
                <div className="icon-shape capital"><img src={Union} alt="" /></div>
              </div>
            </div>
          </div>
          <div className="text">Cash Flow Management</div>
        </div>
        <div className="use-case">
          <div className="icon-container">
            <div className="icon-bg">
              <div className="icon">
                <div className="icon-shape capital"><img src={Businness} alt="" /></div>
              </div>
            </div>
          </div>
          <div className="text">Business Expansion</div>
        </div>
        <div className="use-case">
          <div className="icon-container">
            <div className="icon-bg">
              <div className="icon">
                <div className="icon-shape capital"><img src={payment} alt="" /></div>
              </div>
            </div>
          </div>
          <div className="text">Payment Solutions</div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Usecases
