import React from "react";
import Footer2 from "../Common/Footer/index2";
import Image1 from "../../asset/img/lab report/labreport.png";

const Lab = () => {
  return (
    <>
      <div className="lab">
        <div className="row">
          <div className="col-lg-12 w-100">
            <div className="lab-heading py-1">
              <p className="fs-1 fw-bold text-center text-light text-uppercase">
                lab report
              </p>
            </div>
          </div>
          <div className="col-lg-6 py-3 px-4">
            <div className="lab-report d-flex border border-black">
              <div className="report-text fs-1 fw-bold text-uppercase">
                <p className="m-auto mt-3">lab </p>
                <p className="border-top m-auto border-3 border-black my-4"></p>
                <p className="m-auto">test </p>
                <p className="border-top m-auto border-3 border-black my-4"></p>
                <p className="m-auto">report</p>
              </div>
              <div className="report-img">
                <img src={Image1} alt="" className="w-100 h-100" />
              </div>
            </div>
          </div>
          <div className="col-lg-6 py-1">
            <div className="lab-description">
              <p className="fs-1 fw-bold text-uppercase text-center">about lab report</p>
            </div>
          </div>
        </div>
      </div>
      <Footer2/>
    </>
  );
};

export default Lab;
