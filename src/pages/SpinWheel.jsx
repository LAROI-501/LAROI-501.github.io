import React, { useEffect } from "react";
import "./SpinWheel.css";
import { text } from "@fortawesome/fontawesome-svg-core";

export default function SpinWheel(props) {
  let foodLists = props.foodLists;
  let foodListsLength = props.angle;

  useEffect(() => {
    var c = document.getElementById("myCanvas");
    var ctx = c.getContext("2d");
    var cx = 225;
    var cy = 225;
    var r = 225;
    // const palette = ["#35CE8D", "#E0D0C1", "#FF5964", "#35A7FF"];
    const palette = ["#C8AC93", "#357677"];
    var checkedFoodNum = 0;
    for (let k = 0; k < foodListsLength; k++) {
      if (foodLists[k].completed == true) {
        checkedFoodNum += 1;
      }
    }
    console.log(checkedFoodNum, foodListsLength);
    var startAngle = -0.5 * Math.PI;
    var endAngle = startAngle + (2 * Math.PI) / checkedFoodNum;
    for (let i = 0; i < checkedFoodNum; i++) {
      ctx.beginPath();
      ctx.moveTo(cx, cy);
      ctx.arc(cx, cy, r, startAngle, endAngle);
      ctx.closePath();
      ctx.lineWidth = 5;
      ctx.stroke();
      ctx.strokeStyle = "#004643";
      if ((i + 1) % 2 != 0) {
        ctx.fillStyle = palette[0];
      } else {
        ctx.fillStyle = palette[1];
      }
      ctx.fill();
      startAngle = endAngle;
      endAngle += (2 * Math.PI) / checkedFoodNum;
    }
    var cyText = 10;
    var colorWhite = true;
    var test = checkedFoodNum;
    for (let j = 0; j < test; j++) {
      ctx.save();
      ctx.translate(225, 225);
      ctx.rotate((startAngle + endAngle) / 2);
      ctx.font = "1.6em Noto Sans TC";
      ctx.textAlign = "center";
      if (colorWhite == true) {
        ctx.fillStyle = "#004643";
      } else {
        ctx.fillStyle = "white";
      }
      if (foodLists[j].completed == true) {
        ctx.fillText(foodIndexList[j], 150, cyText);
        console.log("success");
        colorWhite = !colorWhite;
        startAngle = endAngle;
        endAngle += (2 * Math.PI) / checkedFoodNum;
      } else {
        test += 1;
      }
      ctx.restore();
    }
    // console.log(foodIndexList.length, foodListsLength);
    // ctx.beginPath();
    // ctx.moveTo(cx, cy);
    // ctx.arc(cx, cy, 33, 0, 360);
    // ctx.closePath();
    // ctx.lineWidth = 5;
    // ctx.stroke();
    // ctx.fillStyle = "black";
    // ctx.fill();
  }, [foodLists]);

  let wheel = document.querySelector(".wheel");
  let spinBtn = document.querySelector(".spinBtn");
  let value = Math.ceil(Math.random() * 5400);
  function spinBtnFun() {
    wheel.style.transform = "rotate(" + value + "deg)";
    value += Math.ceil(Math.random() * 5400);
    // console.log(value);
  }
  let foodIndexList = [];
  for (var i = 0; i < foodListsLength; i++) {
    foodIndexList.push(foodLists[i].title);
  }

  const foodTextStyleFun = (foodLists) => {
    for (let i = 0; i < foodListsLength; i++) {
      // console.log("HI", "food" + i);
      var classNum = "food" + i;
      console.log(classNum);
      // document.querySelector(`.${classNum}`).style.color = "rotate(-45deg)";
      // var wheelTextNum = "food" + foodLists.indexOf(foodList[i].title);
    }
  };
  // foodTextStyleFun();
  return (
    <>
      <div className="eat-what-wheel">
        <canvas className="wheel" id="myCanvas" width="450" height="450">
          Your browser does not support the HTML canvas tag.
        </canvas>
        <button className="spinBtn" onClick={spinBtnFun}>
          Spin
        </button>
      </div>
    </>
  );
}
