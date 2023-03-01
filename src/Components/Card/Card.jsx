import React from "react";
import "./Card.scss";
function Card() {
  return (
    <div className="listCard">
      <a className="card" href="#">
        <div className="card-content">
          <img src="./img/image-1.png" alt="" />
          <div className="card-body">
            <div className="content">
              <h5>
                <strong>TOI 3D Customize E-commerce</strong>
              </h5>
              <i className="fa fa-arrow-right"></i>
            </div>
          </div>
        </div>
      </a>
      <a className="card" href="#">
        <div className="card-content">
          <img src="./img/image-2.png" alt="" />
          <div className="card-body">
            <div className="content">
              <h5>
                <strong>E-learning - Internal training platform</strong>
              </h5>
              <i className="fa fa-arrow-right"></i>
            </div>
          </div>
        </div>
      </a>
      <a className="card" href="#">
        <div className="card-content">
          <img src="./img/image-3.png" alt="" />
          <div className="card-body">
            {" "}
            <div className="content">
              <h5>
                <strong>Summer 21 Cosmetic E-commerce Platform</strong>
              </h5>
              <i className="fa fa-arrow-right"></i>
            </div>
          </div>
        </div>
      </a>
      <a className="card" href="#">
        <div className="card-content">
          <img src="./img/image-4.png" alt="" />
          <div className="card-body">
            {" "}
            <div className="content">
              <h5>
                <strong>
                  Kiva – Ambition to digital transformation in the brokerage
                  assiduity
                </strong>
              </h5>
              <i className="fa fa-arrow-right"></i>
            </div>
          </div>
        </div>
      </a>
      <a className="card" href="#">
        <div className="card-content">
          <img src="./img/image-5.png" alt="" />
          <div className="card-body">
            <div className="content">
              <h5>
                <strong>Boxgo - Professional Warehouse Management</strong>
              </h5>
              <i className="fa fa-arrow-right"></i>
            </div>
          </div>
        </div>
      </a>
    </div>
  );
}

export default Card;
