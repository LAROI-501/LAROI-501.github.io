import React, { useState, useEffect } from "react";
import Footer from "../Footer";
import Modal from "./Modal";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { RestaurantInfo } from "./RestaurantInfo";
import "./Foodie.css";

export default function Foodie() {
  const [isOpen, setIsOpen] = useState(false);
  const [clickedPost, setClickedPost] = useState("");
  const [selectedFilters, setSelectedFilters] = useState([]);
  const [filteredItems, setFilteredItems] = useState(RestaurantInfo);
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
  let filters = ["日式", "中式", "義式", "韓式", "美式", "下午茶"];
  const handleFilterBtn = (selectedCategory) => {
    if (selectedFilters.includes(selectedCategory)) {
      let filters = selectedFilters.filter((el) => el !== selectedCategory);
      setSelectedFilters(filters);
    } else {
      setSelectedFilters([...selectedFilters, selectedCategory]);
    }
  };
  const filterItems = () => {
    if (selectedFilters.length > 0) {
      let tempItems = selectedFilters.map((selectedCategory) => {
        let temp = RestaurantInfo.filter(
          (restaurant) => restaurant.category === selectedCategory
        );
        return temp;
      });
      setFilteredItems(tempItems.flat());
    } else {
      setFilteredItems([...RestaurantInfo]);
    }
  };
  useEffect(() => {
    filterItems();
  }, [selectedFilters]);
  useEffect(() => {
    if (isOpen == true) {
      document.body.style.overflow = "hidden";
      // console.log(isOpen);
    } else {
      document.body.style.overflow = "unset";
    }
  });
  const postData = (e) => {
    setIsOpen(true);
    setClickedPost(RestaurantInfo.find((rstr) => rstr.id === e.target.id));
    // console.log(clickedPost);
  };

  return (
    <>
      <div className="foodie">
        <div className="dropdown-filter" data-dropdown>
          <button
            className="filters-btn"
            data-dropdown-btn
            onMouseOver={dropdownFunM}
          >
            <FontAwesomeIcon
              icon={fas.faFilter}
              className="filter-icon"
              size="2xl"
            />
          </button>

          <div className="filter-container">
            {filters.map((category) => {
              return (
                <button
                  onClick={() => {
                    handleFilterBtn(category);
                  }}
                  className={`filter-btn ${
                    selectedFilters?.includes(category)
                      ? "filter-btn-active"
                      : ""
                  }`}
                >
                  {category}
                </button>
              );
            })}
          </div>
        </div>
        <div className="grid">
          {filteredItems.map((restaurant) => {
            return (
              <>
                <div
                  className="card-container"
                  id={restaurant.id}
                  key={restaurant.id}
                  onClick={postData}
                >
                  <img
                    className="card-img"
                    src={restaurant.rstrImg.img1}
                    alt=""
                  />
                  <div className="card-text">
                    <h3 className="card-title">{restaurant.rstrName}</h3>
                    <h4 className="card-body">
                      {restaurant.rstrLoc.substring(0, 6)}
                    </h4>
                  </div>
                </div>
              </>
            );
          })}
        </div>
      </div>
      <Modal
        open={isOpen}
        onClose={() => {
          setIsOpen(false);
        }}
        clickedPost={clickedPost}
      >
        Fancy Modal
      </Modal>
      <Footer />
    </>
  );
}
