import React from "react";
import { Link } from "react-router-dom";
import foodYumIP from "./assets/img/foodyumIP.png";
import dcardLogo from "./assets/img/dcardLogo.png";
import dcardLogo2 from "./assets/img/dcardLogo2.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { fab } from "@fortawesome/free-brands-svg-icons";
import "./Navbar.css";
export default function Navbar() {
  // function dropdownFun(e) {
  //   document.addEventListener("click", (e) => {
  //     const isDropdownButton = e.target.matches("[data-dropdown-btn]");
  //     if (!isDropdownButton && e.target.closest("[data-dropdown]") != null)
  //       return;
  //     let currentDropdown;
  //     if (isDropdownButton) {
  //       currentDropdown = e.target.closest("[data-dropdown]");
  //       currentDropdown.classList.toggle("active");
  //     }
  //     document
  //       .querySelectorAll("[data-dropdown].active")
  //       .forEach((dropdown) => {
  //         if (dropdown === currentDropdown) return;
  //         dropdown.classList.remove("active");
  //       });
  //   });
  // }
  function dropdownFunM(e) {
    document.addEventListener("mouseover", (e) => {
      const isDropdownButton = e.target.matches("[data-dropdown-btn]");
      if (!isDropdownButton && e.target.closest("[data-dropdown]") != null)
        return;
      let currentDropdown;
      if (isDropdownButton) {
        currentDropdown = e.target.closest("[data-dropdown]");
        currentDropdown.classList.toggle("active");
      }
      document
        .querySelectorAll("[data-dropdown].active")
        .forEach((dropdown) => {
          if (dropdown === currentDropdown) return;
          dropdown.classList.remove("active");
        });
    });
  }
  return (
    <nav className="nav">
      <div className="navLeft">
        <a href="">
          <img className="navIP" src={foodYumIP} alt="" />
        </a>
        <Link className="logo-name" to="/">
          4FoodisYumYum
        </Link>
        {/* <span className="logo-name">
          <a href="/">4FoodisYumYum</a>
        </span> */}
      </div>
      <ul className="navRht">
        <li>
          <Link to="/eatwhat"> Eat what?</Link>
        </li>
        {/* <li>
          <div className="dropdown" data-dropdown>
            <button
              className="link"
              data-dropdown-btn
              onMouseOver={dropdownFunM}
            >
              Category
            </button>
            <div className="dropdown-menu" data-dropdown-btn>
              <a className="drop-link" href="">
                Japanese 日式
              </a>
              <a className="drop-link" href="">
                Taiwanese 台式
              </a>
              <a className="drop-link" href="">
                Korean 韓式
              </a>
              <a className="drop-link" href="">
                Italian 義式
              </a>
              <a className="drop-link" href="">
                Dessert 甜點
              </a>
            </div>
          </div>
        </li> */}
        <li>
          <Link to="/foodie">Foodie</Link>
          {/* <a href="">Foodie</a> */}
        </li>
        <li>
          <a href="https://www.instagram.com/4foodisyumyum/">
            <FontAwesomeIcon
              className="navImg"
              icon={fab.faInstagram}
              size="sm"
              style={{ color: "#ffffff" }}
            />
          </a>
        </li>
        <li>
          <a href="https://www.dcard.tw/@architect_bob">
            <img className="navImg2" src={dcardLogo2} alt="" />
          </a>
        </li>
      </ul>
    </nav>
  );
}
