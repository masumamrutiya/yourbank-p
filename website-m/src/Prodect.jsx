import React from 'react'
import "./Prodect.css"
import icon from './assets/Icon-2.png'
import icon2 from './assets/Icon-4.png'
import icon3 from './assets/Union.png'
function Prodect() {
  return (
    <div className="container-1">
    <div className="prodect-name">
        <div className="header-Prodect">
            <div className="header-text-Prodect">
                <h1 className="title-Prodect">Our <span className="highlight-Prodect">Products</span></h1>

            </div>
            <div className="subtitle">
                Discover a range of comprehensive and customizable banking products at YourBank, designed to suit your
                unique financial needs and aspirations.
            </div>
        </div>
        <div className="buttons">
            <div className="button-wrapper">
                <div className="button-normal">
                    <div className="button-highlight">
                        <div className="button-text-1 ">For Individuals</div>
                    </div>
                    <div className="button-text-1 ">For Businesses</div>
                </div>
            </div>
        </div>
    </div>
    <div className="products">
        <div className="product-card">
            <div className="product-icon">
                <div className="icon-container">
                    <div className="icon-inner">
                        <div className="icon-background"></div>
                        <div className="icon-foreground"><img src={icon} alt="" /></div>
                    </div>
                </div>
            </div>
            <div className="product-details">
                <div className="product-title">Checking Accounts</div>
                <div className="product-description">
                    Enjoy easy and convenient access to your funds with our range of checking account options.
                    Benefit from features such as online and mobile banking, debit cards, and free ATM access.
                </div>
            </div>
        </div>
        <div className="divider"></div>
        <div className="product-card">
            <div className="product-icon">
                <div className="icon-container">
                    <div className="icon-inner">
                        <div className="icon-background"></div>
                        <div className="icon-foreground"><img src={icon2} alt="" /></div>
                    </div>
                </div>
            </div>
            <div className="product-details">
                <div className="product-title">Savings Accounts</div>
                <div className="product-description">
                    Build your savings with our competitive interest rates and flexible savings account options.
                    Whether you're saving for a specific goal or want to grow your wealth over time, we have the
                    right account for you.
                </div>
            </div>
        </div>
        <div className="divider"></div>
        <div className="product-card">
            <div className="product-icon">
                <div className="icon-container">
                    <div className="icon-inner">
                        <div className="icon-background"></div>
                        <div className="icon-foreground"><img src={icon3} alt="" /></div>
                    </div>
                </div>
            </div>
            <div className="product-details">
                <div className="product-title">Loans and Mortgages</div>
                <div className="product-description">
                    Realize your dreams with our flexible loan and mortgage options. From personal loans to home
                    mortgages, our experienced loan officers are here to guide you through the application process
                    and help you secure the funds you need.
                </div>
            </div>
        </div>
    </div>
</div>
  )
}

export default Prodect
