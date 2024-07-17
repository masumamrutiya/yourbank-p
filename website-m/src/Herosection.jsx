import React from "react";
import Subtract from "./assets/Subtract.png"
import INR from "./assets/INR.png";
import USD from "./assets/USD.png";
import Currency1 from "./assets/Currency1.png";
import Currency2 from "./assets/Currency2.png";
import Currency3 from "./assets/Currency3.png";
import Currency4 from "./assets/Currency4.png";
import './Herosection.css'
function Herosection() {
  return (
    <div className="heromain" style={{width: 1440, height: 621.27, paddingTop: 60, paddingBottom: 60, paddingLeft: 80, paddingRight: 200, justifyContent: 'flex-start', alignItems: 'flex-start', gap: 100, display: 'inline-flex'}}>
      <div
        style={{
          width: 649.81,
          height: 422,
          flexDirection: "column",
          justifyContent: "flex-start",
          alignItems: "flex-start",
          gap: 40,
          display: "inline-flex",
        }}
      >
        <div
          style={{
            alignSelf: "stretch",
            height: 333,
            flexDirection: "column",
            justifyContent: "flex-start",
            alignItems: "flex-start",
            gap: 16,
            display: "flex",
          }}
        >
          <div
            style={{
              paddingTop: 8,
              paddingBottom: 8,
              paddingLeft: 8,
              paddingRight: 16,
              background: "#262626",
              borderRadius: 61,
              justifyContent: "flex-start",
              alignItems: "center",
              gap: 4,
              display: "inline-flex",
            }}
          >
            <div style={{ width: 20, height: 20, position: "relative" }}>
              {/* <div
                style={{
                  width: 16.25,
                  height: 16.25,
                  left: 1.88,
                  top: 1.88,
                  position: "absolute",
                  background: "#CAFF33",
                }}
              ></div> */}
<img src={Subtract} alt="" />
            </div>
            <div
              style={{
                color: "white",
                fontSize: 14,
                fontFamily: "Lexend",
                fontWeight: "300",
                // lineHeight: 24,
                wordWrap: "break-word",
              }}
            >
              No LLC Required, No Credit Check.
            </div>
          </div>
          <div
            style={{
              alignSelf: "stretch",
              height: 277,
              flexDirection: "column",
              justifyContent: "flex-start",
              alignItems: "flex-start",
              gap: 10,
              display: "flex",
            }}
          >
            <div style={{ alignSelf: "stretch" }}>
              <span style={{color:  "white", fontSize: 38,lineHeight : "57px", fontFamily: 'Lexend', fontWeight: '500', wordWrap: 'break-word'}}>
                Welcome to YourBank
                <br />
                Empowering Your{" "}
              </span>
              <span style={{color: '#CAFF33', fontSize: 38,lineHeight : "57px", fontFamily: 'Lexend', fontWeight: '500', wordWrap: 'break-word'}}>
                Financial <br /> Journey
              </span>

              
            </div>
            <div
              style={{
                alignSelf: "stretch",
                color: "#E4E4E7",
                fontSize: 16,
                fontFamily: "Lexend",
                fontWeight: "300",
                // lineHeight: 24,
                wordWrap: "break-word",
              }}
            >
              At YourBank, our mission is to provide comprehensive banking
              solutions that <br /> empower individuals and businesses to achieve their
              financial goals. We are <br /> committed to delivering personalized and
              innovative services that prioritize our <br /> customers' needs.
            </div>
          </div>
        </div>
        <div
          style={{
            paddingLeft: 24,
            paddingRight: 24,
            paddingTop: 14,
            paddingBottom: 14,
            background: "#CAFF33",
            borderRadius: 82,
            justifyContent: "flex-start",
            alignItems: "center",
            gap: 10,
            display: "inline-flex",
          }}
        >
          <div
            style={{
              color: "#1C1C1C",
              fontSize: 14,
              fontFamily: "Lexend",
              fontWeight: "400",
              // lineHeight: 21,
              wordWrap: "break-word",
            }}
          >
            Open Account
          </div>
        </div>
      </div>







      <div
        style={{
          width: 410.19,
          height: 430.27,
          padding: 27.55,
          background:
            "linear-gradient(0deg, #1A1A1A 0%, #1A1A1A 100%), linear-gradient(215deg, rgba(25.50, 25.50, 25.50, 0) 0%, #1A1A1A 40%)",
          borderRadius: 8.26,
          border: "0.69px rgba(202, 255, 51, 0.20) solid",
          flexDirection: "column",
          justifyContent: "flex-start",
          alignItems: "flex-start",
          gap: 20.66,
          display: "inline-flex",
          position: "relative",
        }}
      >
        <div
          style={{
            alignSelf: "stretch",
            height: 182.32,
            flexDirection: "column",
            justifyContent: "flex-start",
            alignItems: "flex-start",
            gap: 13.77,
            display: "flex",
          }}
        >
          <div
            style={{
              alignSelf: "stretch",
              color: "white",
              fontSize: 13.77,
              fontFamily: "Lexend",
              fontWeight: "500",
              wordWrap: "break-word",
            }}
          >
            Your Transactions
          </div>
          <div
            style={{
              alignSelf: "stretch",
              height: 147.55,
              flexDirection: "column",
              justifyContent: "flex-start",
              alignItems: "flex-start",
              display: "flex",
            }}
          >
            <div
              style={{
                alignSelf: "stretch",
                paddingLeft: 16.53,
                paddingRight: 16.53,
                paddingTop: 11.02,
                paddingBottom: 11.02,
                background: "#1C1C1C",
                borderRadius: 8.26,
                border: "0.69px #262626 solid",
                justifyContent: "space-between",
                alignItems: "flex-end",
                display: "inline-flex",
                zIndex: "1",
              }}
            >
              <div
                style={{
                  justifyContent: "flex-start",
                  alignItems: "center",
                  gap: 6.89,
                  display: "flex",
                }}
              >
                <div
                  style={{
                    padding: 6.89,
                    background: "#CAFF33",
                    borderRadius: 36.5,
                    justifyContent: "flex-start",
                    alignItems: "flex-start",
                    gap: 6.89,
                    display: "flex",
                  }}
                >
                  <div
                    style={{
                      width: 16.57,
                      height: 16.48,
                      position: "relative",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      height="12"
                      width="10.5"
                      viewBox="0 0 448 512"
                    >
                      <path d="M438.6 150.6c12.5-12.5 12.5-32.8 0-45.3l-96-96c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.7 96 32 96C14.3 96 0 110.3 0 128s14.3 32 32 32l306.7 0-41.4 41.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l96-96zm-333.3 352c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.3 416 416 416c17.7 0 32-14.3 32-32s-14.3-32-32-32l-306.7 0 41.4-41.4c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-96 96c-12.5 12.5-12.5 32.8 0 45.3l96 96z" />
                    </svg>
                  </div>
                </div>
                <div
                  style={{
                    flexDirection: "column",
                    justifyContent: "flex-start",
                    alignItems: "flex-start",
                    display: "inline-flex",
                  }}
                >
                  <div
                    style={{
                      color: "white",
                      fontSize: 12.4,
                      fontFamily: "Lexend",
                      fontWeight: "300",
                      wordWrap: "break-word",
                    }}
                  >
                    Transaction
                  </div>
                  <div
                    style={{
                      color: "white",
                      fontSize: 13.77,
                      fontFamily: "Lexend",
                      fontWeight: "400",
                      wordWrap: "break-word",
                    }}
                  >
                    Joel Kenley
                  </div>
                </div>
              </div>
              <div
                style={{
                  color: "white",
                  fontSize: 16.53,
                  fontFamily: "Lexend",
                  fontWeight: "500",
                  wordWrap: "break-word",
                }}
              >
                -$68.00
              </div>
            </div>
            <div
              style={{
                alignSelf: "stretch",
                height: 62.04,
                paddingLeft: 13.77,
                paddingRight: 13.77,
                opacity: 0.5,
                flexDirection: "column",
                justifyContent: "flex-start",
                alignItems: "flex-start",
                gap: 6.89,
                display: "flex",
                marginTop: "-20px",
                // zIndex : "2"
              }}
            >
              <div
                style={{
                  alignSelf: "stretch",
                  paddingLeft: 16.53,
                  paddingRight: 16.53,
                  paddingTop: 11.02,
                  paddingBottom: 11.02,
                  background: "#1C1C1C",
                  borderRadius: 8.26,
                  border: "0.69px #262626 solid",
                  justifyContent: "space-between",
                  alignItems: "flex-end",
                  display: "inline-flex",
                }}
              >
                <div
                  style={{
                    justifyContent: "flex-start",
                    alignItems: "center",
                    gap: 6.89,
                    display: "flex",
                  }}
                >
                  <div
                    style={{
                      padding: 6.89,
                      background: "#CAFF33",
                      borderRadius: 36.5,
                      justifyContent: "flex-start",
                      alignItems: "flex-start",
                      gap: 6.89,
                      display: "flex",
                    }}
                  >
                    <div
                      style={{
                        width: 16.57,
                        height: 16.48,
                        position: "relative",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        height="12"
                        width="10.5"
                        viewBox="0 0 448 512"
                      >
                        <path d="M438.6 150.6c12.5-12.5 12.5-32.8 0-45.3l-96-96c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.7 96 32 96C14.3 96 0 110.3 0 128s14.3 32 32 32l306.7 0-41.4 41.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l96-96zm-333.3 352c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.3 416 416 416c17.7 0 32-14.3 32-32s-14.3-32-32-32l-306.7 0 41.4-41.4c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-96 96c-12.5 12.5-12.5 32.8 0 45.3l96 96z" />
                      </svg>
                    </div>
                  </div>
                  <div
                    style={{
                      flexDirection: "column",
                      justifyContent: "flex-start",
                      alignItems: "flex-start",
                      display: "inline-flex",
                    }}
                  >
                    <div
                      style={{
                        color: "white",
                        fontSize: 12.4,
                        fontFamily: "Lexend",
                        fontWeight: "300",
                        wordWrap: "break-word",
                      }}
                    >
                      Transaction
                    </div>
                    <div
                      style={{
                        color: "white",
                        fontSize: 13.77,
                        fontFamily: "Lexend",
                        fontWeight: "400",
                        wordWrap: "break-word",
                      }}
                    >
                      Mark Smith
                    </div>
                  </div>
                </div>
                <div
                  style={{
                    color: "white",
                    fontSize: 16.53,
                    fontFamily: "Lexend",
                    fontWeight: "500",
                    wordWrap: "break-word",
                  }}
                >
                  -$68.00
                </div>
              </div>
            </div>
            <div
              style={{
                alignSelf: "stretch",
                height: 62.04,
                paddingLeft: 27.55,
                paddingRight: 27.55,
                opacity: 0.2,
                flexDirection: "column",
                justifyContent: "flex-start",
                alignItems: "flex-start",
                gap: 6.89,
                display: "flex",
                marginTop: "-20px",
              }}
            >
              <div
                style={{
                  alignSelf: "stretch",
                  paddingLeft: 16.53,
                  paddingRight: 16.53,
                  paddingTop: 11.02,
                  paddingBottom: 11.02,
                  background: "#1C1C1C",
                  borderRadius: 8.26,
                  border: "0.69px #262626 solid",
                  justifyContent: "space-between",
                  alignItems: "flex-end",
                  display: "inline-flex",
                }}
              >
                <div
                  style={{
                    justifyContent: "flex-start",
                    alignItems: "center",
                    gap: 6.89,
                    display: "flex",
                  }}
                >
                  <div
                    style={{
                      padding: 6.89,
                      background: "#CAFF33",
                      borderRadius: 36.5,
                      justifyContent: "flex-start",
                      alignItems: "flex-start",
                      gap: 6.89,
                      display: "flex",
                    }}
                  >
                    <div
                      style={{
                        width: 16.57,
                        height: 16.48,
                        position: "relative",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        height="12"
                        width="10.5"
                        viewBox="0 0 448 512"
                      >
                        <path d="M438.6 150.6c12.5-12.5 12.5-32.8 0-45.3l-96-96c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.7 96 32 96C14.3 96 0 110.3 0 128s14.3 32 32 32l306.7 0-41.4 41.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l96-96zm-333.3 352c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.3 416 416 416c17.7 0 32-14.3 32-32s-14.3-32-32-32l-306.7 0 41.4-41.4c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-96 96c-12.5 12.5-12.5 32.8 0 45.3l96 96z" />
                      </svg>
                    </div>
                  </div>
                  <div
                    style={{
                      flexDirection: "column",
                      justifyContent: "flex-start",
                      alignItems: "flex-start",
                      display: "inline-flex",
                    }}
                  >
                    <div
                      style={{
                        color: "white",
                        fontSize: 12.4,
                        fontFamily: "Lexend",
                        fontWeight: "300",
                        wordWrap: "break-word",
                      }}
                    >
                      Transaction
                    </div>
                    <div
                      style={{
                        color: "white",
                        fontSize: 13.77,
                        fontFamily: "Lexend",
                        fontWeight: "400",
                        wordWrap: "break-word",
                      }}
                    >
                      Lenen Roy
                    </div>
                  </div>
                </div>
                <div
                  style={{
                    color: "white",
                    fontSize: 16.53,
                    fontFamily: "Lexend",
                    fontWeight: "500",
                    wordWrap: "break-word",
                  }}
                >
                  -$68.00
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          style={{
            alignSelf: "stretch",
            height: 243.2,
            flexDirection: "column",
            justifyContent: "flex-start",
            alignItems: "flex-end",
            gap: 19.97,
            display: "flex",
          }}
        >
          <div
            style={{
              alignSelf: "stretch",
              color: "white",
              fontSize: 13.77,
              fontFamily: "Lexend",
              fontWeight: "500",
              wordWrap: "break-word",
            }}
          >
            Money Exchange
          </div>
          <div
            style={{
              alignSelf: "stretch",
              height: 141.22,
              borderRadius: 8.26,
              overflow: "hidden",
              border: "0.69px #262626 solid",
              flexDirection: "column",
              justifyContent: "flex-start",
              alignItems: "flex-start",
              display: "flex",
            }}
          >
            <div
              style={{
                alignSelf: "stretch",
                justifyContent: "flex-start",
                alignItems: "flex-start",
                display: "inline-flex",
              }}
            >
              <div
                style={{
                  flex: "1 1 0",
                  padding: 13.77,
                  background: "#1C1C1C",
                  flexDirection: "column",
                  justifyContent: "flex-start",
                  alignItems: "center",
                  gap: 6.89,
                  display: "inline-flex",
                  width: "176px",
                }}
              >
                <div
                  style={{
                    alignSelf: "stretch",
                    justifyContent: "flex-start",
                    alignItems: "center",
                    gap: 6.89,
                    display: "inline-flex",
                  }}
                >
                  <img
                    style={{
                      width: 27.62,
                      height: 27.47,
                      borderRadius: 9999,
                    }}
                    src={INR}
                  />
                  <div
                    style={{
                      flex: "1 1 0",
                      color: "white",
                      fontSize: 12.4,
                      fontFamily: "Lexend",
                      fontWeight: "400",
                      wordWrap: "break-word",
                    }}
                  >
                    INR
                  </div>
                </div>
                <div
                  style={{
                    alignSelf: "stretch",
                    color: "#E4E4E7",
                    fontSize: 11.02,
                    fontFamily: "Lexend",
                    fontWeight: "300",
                    wordWrap: "break-word",
                  }}
                >
                  Indian Rupees
                </div>
              </div>
              <div
                style={{
                  alignSelf: "stretch",
                  transformOrigin: "0 0",
                  border: "0.69px #262626 solid",
                }}
              ></div>
              <div
                style={{
                  flex: "1 1 0",
                  padding: 13.77,
                  background: "#1C1C1C",
                  flexDirection: "column",
                  justifyContent: "flex-start",
                  alignItems: "center",
                  gap: 6.89,
                  display: "inline-flex",
                }}
              >
                <div
                  style={{
                    alignSelf: "stretch",
                    justifyContent: "flex-start",
                    alignItems: "center",
                    gap: 6.89,
                    display: "inline-flex",
                  }}
                >
                  <img
                    style={{
                      width: 27.62,
                      height: 27.47,
                      borderRadius: 9999,
                    }}
                    src={USD}
                  />
                  <div
                    style={{
                      flex: "1 1 0",
                      color: "white",
                      fontSize: 12.4,
                      fontFamily: "Lexend",
                      fontWeight: "400",
                      wordWrap: "break-word",
                    }}
                  >
                    USD
                  </div>
                </div>
                <div
                  style={{
                    alignSelf: "stretch",
                    color: "#E4E4E7",
                    fontSize: 11.02,
                    fontFamily: "Lexend",
                    fontWeight: "300",
                    wordWrap: "break-word",
                  }}
                >
                  United States Dollar
                </div>
              </div>
            </div>
            <div
              style={{
                alignSelf: "stretch",
                height: 0,
                border: "0.69px #262626 solid",
              }}
            ></div>
            <div
              style={{
                alignSelf: "stretch",
                justifyContent: "flex-start",
                alignItems: "flex-start",
                display: "inline-flex",
              }}
            >
              <div
                style={{
                  flex: "1 1 0",
                  height: 62.32,
                  paddingLeft: 13.77,
                  paddingRight: 13.77,
                  paddingTop: 20.66,
                  paddingBottom: 20.66,
                  background: "#1C1C1C",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: 6.89,
                  display: "flex",
                }}
              >
                <div
                  style={{
                    flex: "1 1 0",
                    color: "white",
                    fontSize: 13.77,
                    fontFamily: "Lexend",
                    fontWeight: "500",
                    wordWrap: "break-word",
                  }}
                >
                  5,0000
                </div>
              </div>
              <div
                style={{
                  alignSelf: "stretch",
                  transformOrigin: "0 0",
                  border: "0.69px #262626 solid",
                }}
              ></div>
              <div
                style={{
                  flex: "1 1 0",
                  height: 62.32,
                  paddingLeft: 13.77,
                  paddingRight: 13.77,
                  paddingTop: 20.66,
                  paddingBottom: 20.66,
                  background: "#1C1C1C",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: 6.89,
                  display: "flex",
                }}
              >
                <div
                  style={{
                    flex: "1 1 0",
                    color: "white",
                    fontSize: 13.77,
                    fontFamily: "Lexend",
                    fontWeight: "500",
                    wordWrap: "break-word",
                  }}
                >
                  12.00
                </div>
              </div>
            </div>
          </div>
          <div
            style={{
              alignSelf: "stretch",
              paddingLeft: 20.66,
              paddingRight: 20.66,
              paddingTop: 11.02,
              paddingBottom: 11.02,
              background: "#22251B",
              borderRadius: 56.47,
              justifyContent: "center",
              alignItems: "center",
              gap: 6.89,
              display: "inline-flex",
            }}
          >
            <div
              style={{
                color: "#D1FF4D",
                fontSize: 12.4,
                fontFamily: "Lexend",
                fontWeight: "400",
                wordWrap: "break-word",
              }}
            >
              Exchange
            </div>
          </div>
        </div>
        <div
          style={{
            paddingLeft: 13.77,
            paddingRight: 13.77,
            paddingTop: 11.02,
            paddingBottom: 11.02,
            left: -48.34,
            top: -34.34,
            position: "absolute",
            background: "#22251B",
            borderRadius: 8.26,
            justifyContent: "flex-start",
            alignItems: "center",
            gap: 6.89,
            display: "inline-flex",
          }}
        >
          <div
            style={{
              padding: 6.89,
              background: "#CAFF33",
              borderRadius: 36.5,
              justifyContent: "flex-start",
              alignItems: "flex-start",
              gap: 6.89,
              display: "flex",
            }}
          >
            <div
              style={{
                width: 16.57,
                height: 16.48,
                position: "relative",
                display: "flex",
                justifyContent: "center",
              }}
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                <path d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H48c-17.7 0-32 14.3-32 32s14.3 32 32 32H192V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z" />
              </svg>
            </div>
          </div>
          <div
            style={{
              flexDirection: "column",
              justifyContent: "flex-start",
              alignItems: "flex-start",
              gap: 0.69,
              display: "inline-flex",
            }}
          >
            <div
              style={{
                alignSelf: "stretch",
                color: "white",
                fontSize: 13.77,
                fontFamily: "Lexend",
                fontWeight: "400",
                wordWrap: "break-word",
              }}
            >
              + $5000,00
            </div>
            <div
              style={{
                alignSelf: "stretch",
                color: "#E4E4E7",
                fontSize: 11.02,
                fontFamily: "Lexend",
                fontWeight: "300",
                wordWrap: "break-word",
              }}
            >
              Monthly Income
            </div>
          </div>
        </div>
        <div
          style={{
            width: 294.87,
            paddingTop: 6.89,
            paddingBottom: 6.89,
            paddingLeft: 16.53,
            paddingRight: 6.89,
            left: 156.76,
            top: 515.22,
            position: "absolute",
            background: "#22251B",
            borderRadius: 55.09,
            justifyContent: "space-between",
            alignItems: "center",
            display: "inline-flex",
          }}
        >
          <div
            style={{
              color: "white",
              fontSize: 12.4,
              fontFamily: "Lexend",
              fontWeight: "400",
              wordWrap: "break-word",
            }}
          >
            Supported Currency
          </div>
          <div
            style={{
              padding: 6.89,
              background: "#1A1A1A",
              borderRadius: 37.88,
              border: "0.69px #262626 solid",
              justifyContent: "flex-start",
              alignItems: "flex-start",
              gap: 5.51,
              display: "flex",
            }}
          >
            <div style={{ width: 27.62, height: 27.47, position: "relative" }}>
              <div
                style={{
                  width: 27.62,
                  height: 27.47,
                  left: 0,
                  top: 0,
                  position: "absolute",
                  background: "#262626",
                  borderRadius: "50%",
                }}
              ></div>
              <img
                style={{
                  width: 8.96,
                  height: 11.8,
                  left: 9.03,
                  top: 7.4,
                  position: "absolute",
                }}
                src={Currency1}
              />
            </div>
            <div style={{ width: 27.62, height: 27.47, position: "relative" }}>
              <div
                style={{
                  width: 27.62,
                  height: 27.47,
                  left: 0,
                  top: 0,
                  position: "absolute",
                  background: "#262626",
                  borderRadius: "50%",
                }}
              ></div>
              <img
                style={{
                  width: 8.96,
                  height: 11.8,
                  left: 9.03,
                  top: 7.4,
                  position: "absolute",
                }}
                src={Currency2}
              />
            </div>
            <div style={{ width: 27.62, height: 27.47, position: "relative" }}>
              <div
                style={{
                  width: 27.62,
                  height: 27.47,
                  left: 0,
                  top: 0,
                  position: "absolute",
                  background: "#262626",
                  borderRadius: "50%",
                }}
              ></div>
              <img
                style={{
                  width: 8.96,
                  height: 11.8,
                  left: 9.03,
                  top: 7.4,
                  position: "absolute",
                }}
                src={Currency3}
              />
            </div>
            <div style={{ width: 27.62, height: 27.47, position: "relative" }}>
              <div
                style={{
                  width: 27.62,
                  height: 27.47,
                  left: 0,
                  top: 0,
                  position: "absolute",
                  background: "#262626",
                  borderRadius: "50%",
                }}
              ></div>
              <img
                style={{
                  width: 8.96,
                  height: 11.8,
                  left: 9.03,
                  top: 7.4,
                  position: "absolute",
                }}
                src={Currency4}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Herosection;
