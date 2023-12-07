import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { fas } from "@fortawesome/free-solid-svg-icons";
import foodYumIP from "../assets/img/foodyumIP.png";
import Footer from "../Footer";
import "./Home.css";

export default function Home() {
  return (
    <>
      <div className="home">
        <img className="homeImg" src={foodYumIP} alt="" />
        <div className="homeRht">
          <h1>Welcome to the Foodie land</h1>
          {/* <h2>
            Afraid of going into a <span>bomb</span> restaurant? <br />
            let me help u with my experiences
          </h2> */}
          <h2>Trouble deciding what to eat?</h2>
          <h2>
            Go to the "Eat what?" {"  "}
            <FontAwesomeIcon
              icon={fas.faCircleUp}
              bounce
              size="sm"
              style={{ color: "#004643" }}
            />
            {"  "}
          </h2>
        </div>
      </div>
      <Footer />
    </>
  );
}
