import { useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { fas } from "@fortawesome/free-solid-svg-icons";
import "./Carousel.css";

export default function Carousel({ children: slides }) {
  const [curImg, setCurImg] = useState(0);
  const prev = () =>
    setCurImg((curImg) => (curImg == 0 ? slides.length - 1 : curImg - 1));
  const next = () =>
    setCurImg((curImg) => (curImg == slides.length - 1 ? 0 : curImg + 1));
  console.log(slides.length);
  return (
    <>
      <div className="slides-container">
        <div
          className="slide-img"
          style={{
            transform: `translateX(-${(curImg * 100) / slides.length}%)`,
          }}
        >
          {slides}
        </div>
        {slides.length != 1 && (
          <div className="slide-btns">
            <button className="slide-btn" onClick={prev}>
              <FontAwesomeIcon
                icon={fas.faCircleChevronLeft}
                //   className="post-img-arrow"
              />
            </button>
            <button className="slide-btn" onClick={next}>
              <FontAwesomeIcon
                icon={fas.faCircleChevronRight}
                //   className="post-img-arrow img-arrow-rht"
              />
            </button>
          </div>
        )}

        <div className="post-pages">
          <div className="page-num">
            {slides.length != 1 &&
              slides.map((_, i) => {
                return (
                  <div
                    className="page-dot"
                    style={
                      curImg == i
                        ? { padding: "3px" }
                        : { background: "rgba(255, 255, 255, 0.5)" }
                    }
                  ></div>
                );
              })}
          </div>
        </div>
      </div>
    </>
  );
}
