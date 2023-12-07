import React, { useState, useEffect, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { fas } from "@fortawesome/free-solid-svg-icons";
import Footer from "../Footer";
import "./Eatwhat.css";
import SpinWheel from "./SpinWheel";

export default function Eatwhat() {
  const [newFood, setNewFood] = useState("");
  const [foodLists, setFoodLists] = useState([]);

  function addNewFood(e) {
    setNewFood(e.target.value);
  }
  function handleSubmit(e) {
    e.preventDefault();
    setFoodLists((currentFoodList) => {
      return [
        ...currentFoodList,
        { id: crypto.randomUUID(), title: newFood, completed: true },
      ];
    });
    setNewFood("");
  }
  function defaultFoodLists() {
    useEffect(() => {
      setFoodLists([
        { id: crypto.randomUUID(), title: "韓式料理", completed: true },
        { id: crypto.randomUUID(), title: "義大利麵", completed: true },
        { id: crypto.randomUUID(), title: "漢堡", completed: true },
        { id: crypto.randomUUID(), title: "火鍋", completed: true },
        { id: crypto.randomUUID(), title: "日式料理", completed: true },
        { id: crypto.randomUUID(), title: "泰式料理", completed: true },
      ]);
    }, []);
  }
  defaultFoodLists();
  console.log(foodLists);

  function toggleFoodList(id, completed) {
    setFoodLists((currentFoodList) => {
      return currentFoodList.map((foodLists) => {
        if (foodLists.id === id) {
          return { ...foodLists, completed };
        }
        return foodLists;
      });
    });
  }
  function deleteFoodList(id) {
    setFoodLists((currentFoodList) => {
      return currentFoodList.filter((foodLists) => foodLists.id !== id);
    });
  }

  // spin wheel section
  let wheel = document.querySelector(".wheel");
  let spinBtn = document.querySelector(".spinBtn");
  let value = Math.ceil(Math.random() * 3600);
  function spinBtnFun() {
    wheel.style.transform = "rotate(" + value + "deg)";
    value += Math.ceil(Math.random() * 3600);
  }
  // spin wheel section

  return (
    <>
      <div className="eat-what">
        <SpinWheel angle={foodLists.length} foodLists={foodLists} />
        <div className="eat-what-list">
          <form className="new-item-form" onSubmit={handleSubmit}>
            <label htmlFor="food">New Food</label>
            <div className="form-row">
              <input
                type="text"
                name="food"
                id="food"
                required
                placeholder="Input food here... "
                onChange={addNewFood}
                value={newFood}
              />
              <button className="btn" type="submit">
                <FontAwesomeIcon
                  icon={fas.faPlus}
                  beat
                  size="2xs"
                  style={{ color: "#000000" }}
                />
              </button>
            </div>
          </form>

          <ul className="food-lists">
            {foodLists.map((foodList) => {
              return (
                <>
                  <li key={foodList.id} className="food-list">
                    <label className="food-list-item">
                      <input
                        id="foodCheck"
                        type="checkbox"
                        required
                        checked={foodList.completed}
                        onChange={(e) => {
                          toggleFoodList(foodList.id, e.target.checked);
                        }}
                      />
                      <FontAwesomeIcon
                        icon={fas.faRectangleXmark}
                        className="icon-x"
                        onClick={() => deleteFoodList(foodList.id)}
                      />
                      {foodList.title}
                    </label>
                  </li>
                </>
              );
            })}
          </ul>
        </div>
      </div>
      <Footer />
    </>
  );
}
