import React from "react";
// import circle_1 from "../../assets/Circle_1.png";
const Test = () => {
  return (
    <div class=" relative">
      <div class="container__item landing-page-container">
        <div class="content__wrapper">
          <div class="ellipses-container">
            <div class="ellipses ellipses__outer--thin">
              <div class="ellipses ellipses__orbit"></div>
            </div>
            <div class="ellipses ellipses__outer--thick">
              <div className=" circle absolute top-5">
                {/* <img src={circle_1} alt="circle_1" /> */}
                <div className=" flex circle_content">
                  icon
                  <h1>Innovation</h1>
                </div>
              </div>
              <div className=" circle absolute top-5">
                {/* <img src={circle_1} alt="circle_1" /> */}
                <div className=" flex circle_content">
                  icon
                  <h1>Innovation</h1>
                </div>
              </div>
            </div>
          </div>
          <div></div>
        </div>
      </div>
    </div>
  );
};

export default Test;
