import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import Card from "../../Components/Card/Card";
import "./section.scss";

function Section() {
  useEffect(() => {
    isActive();
  }, []);
  const isActive = () => {
    let aElement = document.querySelectorAll(".title a");
    aElement.forEach((a, index) => {
      a.addEventListener("click", () => {
        addActive(index);
      });
    });
  };
  const addActive = (index) => {
    let aElement = document.querySelectorAll(".title a");
    aElement.forEach((a) => {
      a.classList.remove("active");
    });
    aElement[index].classList.add("active");
  };

  return (
    <div className="section">
      <div className="container">
        <div className="title">
          <a className="active" href="#">
            <strong>All</strong>
          </a>
          <a href="#">
            <strong>Manpower Supply</strong>
          </a>
          <a href="#">
            <strong>Mobile App / Websites</strong>
          </a>
          <a href="#">
            <strong>UI/UX Design</strong>
          </a>
        </div>
        <div className="card">
          <Card />
        </div>
      </div>
    </div>
  );
}

export default Section;
