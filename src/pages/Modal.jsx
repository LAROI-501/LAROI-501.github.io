import React from "react";
import ReactDOM from "react-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { fas } from "@fortawesome/free-solid-svg-icons";
import Carousel from "./Carousel";
import "./Modal.css";
export default function Modal({ open, onClose, clickedPost }) {
  if (!open) return null;
  let imgList = [];
  let time = 0;
  for (let r in clickedPost.rstrImg) {
    imgList.push(clickedPost.rstrImg[r]);
  }

  let foods = [];
  for (let f in clickedPost.foods) {
    foods.push(clickedPost.foods[f]);
    console.log(foods);
  }
  return ReactDOM.createPortal(
    <>
      <div className="overlay" onClick={onClose}>
        <button onClick={onClose} className="overlay-x">
          <FontAwesomeIcon icon={fas.faXmark} />
        </button>

        <button className="overlay-arrow arrow-left">
          <FontAwesomeIcon icon={fas.faCircleChevronLeft} />
        </button>
        <button className="overlay-arrow arrow-right">
          <FontAwesomeIcon icon={fas.faCircleChevronRight} />
        </button>
      </div>
      <div className="modal">
        <div className="post-imgs">
          <Carousel>
            {imgList.map((img) => {
              time += 1;
              console.log(time, img);
              return <img className="post-img" src={img} />;
            })}
          </Carousel>
        </div>
        <div className="post-texts post-scrollbar">
          <h4>
            Restaurant:
            <span className="post-text" style={{ marginLeft: "5px" }}>
              {clickedPost.rstrName}
            </span>
          </h4>
          <h4>
            <FontAwesomeIcon
              className="post-icon"
              icon={fas.faMapLocationDot}
            />
            <span className="post-text">{clickedPost.rstrLoc}</span>
          </h4>
          {clickedPost.rstrTime.same != undefined && (
            <h4>
              <FontAwesomeIcon className="post-icon" icon={fas.faClock} />
              <span className="post-text">{clickedPost.rstrTime.same}</span>
            </h4>
          )}
          {clickedPost.rstrTime.same == undefined && (
            <h4>
              <FontAwesomeIcon className="post-icon" icon={fas.faClock} />
              <span className="post-text">
                {clickedPost.rstrTime.weekday}
                {clickedPost.rstrTime.weekend}
              </span>
            </h4>
          )}
          <h4>
            <FontAwesomeIcon className="post-icon" icon={fas.faPhone} />
            <span className="post-text">{clickedPost.rstrPhone}</span>
          </h4>
          {foods.map((food) => {
            return (
              <>
                <h4>
                  <FontAwesomeIcon
                    className="post-icon"
                    icon={fas.faUtensils}
                  />
                  <span className="post-text">{food.foodName}</span>
                </h4>
                <h4>
                  <FontAwesomeIcon className="post-icon" icon={fas.faStar} />
                  <span className="post-text" style={{ fontSize: "1.2em" }}>
                    {" "}
                    {food.foodScore}
                  </span>
                </h4>
                <h4 className="post-des">
                  <FontAwesomeIcon className="post-icon" icon={fas.faMessage} />
                  <span className="post-text">{food.foodCmt}</span>
                </h4>
              </>
            );
          })}
        </div>
      </div>
    </>,
    document.getElementById("portal")
  );
}
