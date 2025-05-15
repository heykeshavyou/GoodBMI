import { use, useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import minusIcon from "./assets/Group 1 (1).svg";
import plusIcon from "./assets/Group 2.svg";
import male from "./assets/gender-male.svg";
import female from "./assets/gender-female.svg";
import arrow from "./assets/arrow-right.svg";
import "./App.css";

function App() {
  const [Age, SetAge] = useState(20);
  const [Weight, SetWeight] = useState(52);
  const [Gender, SetGender] = useState(true);
  const [typeOfHeight, SettypeOfHeight] = useState(2);
  const [Centimeter, SetCentimeter] = useState(1.0);
  const [Foot, SetFoot] = useState(1);
  const [Inch, SetInch] = useState(1);
  const [Meter, SetMeter] = useState(1.0);
  const [Bmi, SetBmi] = useState("");
  const [BmiMessage, setBmiMessage] = useState("");
  const [BmiMessageNo, SetBmiMessageNo] = useState(1);
  const calculateBmi = () => {
    let height;
    switch (typeOfHeight) {
      case 1:
        height = Centimeter / 100;
        break;
      case 2:
        height = Foot * 0.3048 + Inch * 0.0254;
        break;
      case 3:
        height = Meter;
        break;
      case 4:
        height = Inch * 0.0254;
        break;
    }
    height *= height;
    let bmi = Weight / height;
    SetBmi(parseFloat(bmi).toFixed(2).toString());
    if (bmi < 18.5) {
      setBmiMessage("Time to grab a bite!");
      SetBmiMessageNo(1);
    } else if (bmi < 24.9) {
      setBmiMessage("Great Shape");
      SetBmiMessageNo(2);
    } else if (bmi <= 29.9) {
      setBmiMessage("Time to run!");
      SetBmiMessageNo(3);
    } else if (bmi > 30) {
      setBmiMessage("Time to run! it's Obesity condition");
      SetBmiMessageNo(4);
    }
  };
  return (
    <>
      <h1 className="text-[#081854] text-3xl uppercase text-center py-5">
        BMI Calculator
      </h1>
      <div className="container px-10 flex justify-center items-center">
        <div>
          <div className="bg-white w-[156px] h-[175px] rounded-2xl m-4">
            <h1 className="text-[#2F2E41] text-center pt-5 pb-2">Age</h1>
            <h1 className="text-6xl font-bold text-center text-[#6C63FF]">
              {Age}
            </h1>
            <div className="flex p-3 justify-around ">
              <img
                src={minusIcon}
                className="cursor-pointer"
                onClick={() => {
                  if (Age > 2) {
                    SetAge(Age - 1);
                  } else {
                    alert("Age should not be less than 2 Years");
                  }
                }}
              />
              <img
                src={plusIcon}
                className="cursor-pointer"
                onClick={() => {
                  if (Age < 120) {
                    SetAge(Age + 1);
                  } else {
                    alert("Age should not be greater than 120 Years");
                  }
                }}
              />
            </div>
          </div>
          <div className="bg-white w-[156px] h-[175px] rounded-2xl m-4">
            <h1 className="text-[#2F2E41] text-center pt-5 pb-2">
              Weight (KG)
            </h1>
            <h1 className="text-6xl font-bold text-center text-[#6C63FF]">
              {Weight}
            </h1>
            <div className="flex p-3 justify-around">
              <img
                src={minusIcon}
                className="cursor-pointer"
                onClick={() => {
                  if (Weight > 1) {
                    SetWeight(Weight - 1);
                  }
                }}
              />
              <img
                src={plusIcon}
                className="cursor-pointer"
                onClick={() => {
                  SetWeight(Weight + 1);
                }}
              />
            </div>
          </div>
        </div>
        <div>
          <div className="bg-white w-[312px] h-[175px] rounded-2xl m-4 flex p-10 justify-around items-center">
            <div
              className={
                Gender
                  ? "border-[#6C63FF] border-2 p-2 rounded-2xl mx-2 "
                  : "p-2 rounded-2xl mx-2 border-2 border-white"
              }
              onClick={() => {
                SetGender(true);
              }}
            >
              <img src={male} width={60} />
              <p className="text-[#081854] text-center">Male</p>
            </div>
            <div
              className={
                Gender
                  ? "p-2 rounded-2xl mx-2 border-2 border-white"
                  : "border-[#6C63FF] border-2 p-2 rounded-2xl mx-2 "
              }
              onClick={() => {
                SetGender(false);
              }}
            >
              <img src={female} width={60} />
              <p className="text-[#081854] text-center">Female</p>
            </div>
          </div>
          <div className="bg-white w-[312px] h-[175px] rounded-2xl m-4  p-4  items-center">
            <h1 className="text-[#081854]   text-center">Height</h1>{" "}
            <select
              className="w-[100%] border-[#6C63FF] border-2 py-1 rounded-[5px] "
              onChange={(event) => {
                SettypeOfHeight(Number(event.target.value));
              }}
            >
              <option value={1} selected={typeOfHeight==1 ? true:false}>Centimeter</option>
              <option value={2} selected={typeOfHeight==2 ? true:false}>Feet Inch.</option>
              <option value={3} selected={typeOfHeight==3 ? true:false}>Meter</option>
              <option value={4} selected={typeOfHeight==4 ? true:false}>Inch.</option>
            </select>
            {(() => {
              if (typeOfHeight === 1) {
                return (
                  <div>
                    <input
                      type="number"
                      onChange={(event) => {
                        SetCentimeter(event.target.value);
                      }}
                      placeholder="Enter height in cm"
                      className="border-2 border-[#6C63FF] rounded-[5px] py-1 px-2 my-3 w-[100%] "
                    />
                  </div>
                );
              } else if (typeOfHeight === 2) {
                return (
                  <>
                    <div>
                      <input
                        type="number"
                        placeholder="Feet"
                        onChange={(event) => {
                          SetFoot(event.target.value);
                        }}
                        className="border-2 border-[#6C63FF] rounded-[5px] py-1 px-2 mt-3 w-[100%] "
                      />
                      <input
                        type="number"
                        placeholder="Inches"
                        onChange={(event) => {
                          SetInch(event.target.value);
                        }}
                        className="border-2 border-[#6C63FF] rounded-[5px] py-1 px-2 mt-3 w-[100%] "
                      />
                    </div>
                  </>
                );
              } else if (typeOfHeight === 3) {
                return (
                  <div>
                    <input
                      type="number"
                      onChange={(event) => {
                        SetMeter(event.target.value);
                      }}
                      placeholder="Enter height in meters"
                      className="border-2 border-[#6C63FF] rounded-[5px] py-1 px-2 my-3 w-[100%] "
                    />
                  </div>
                );
              } else if (typeOfHeight === 4) {
                return (
                  <div>
                    <input
                      type="number"
                      onInput={(event) => {
                        SetInch(event.target.value);
                      }}
                      placeholder="Enter height in inches"
                      className="border-2 border-[#6C63FF] rounded-[5px] py-1 px-2 my-3 w-[100%] "
                    />
                  </div>
                );
              } else {
                return null;
              }
            })()}
          </div>
        </div>
        <div>
          <div onClick={calculateBmi}>
            <button className="bg-[#6C63FF] p-2 rounded-full cursor-pointer">
              <img src={arrow} width={30} />
            </button>
          </div>
        </div>
        <div>
          <div className="bg-white w-[312px] h-[372px] rounded-2xl m-4 flex flex-col justify-between p-5">
            <h1 className="text-[#2F2E41] text-center pt-5 pb-2">Result</h1>
            <h1 className="text-6xl font-bold text-center text-[#6C63FF]">
              {Bmi}
            </h1>
            {(() => {
              switch(BmiMessageNo){
                case 1:
                  return(
                    <div>
                      <p className="text-center text-yellow-400 text-2xl">{BmiMessage}</p>
                    </div>
                  )
                  case 2:
                    return(
                    <div>
                      <p className="text-center text-green-400 text-2xl">{BmiMessage}</p>
                    </div>
                  )
                  case 3:
                    return(
                    <div>
                      <p className="text-center text-orange-400 text-2xl">{BmiMessage}</p>
                    </div>
                  )
                  case 4:
                    return(
                    <div>
                      <p className="text-center text-red-600 text-2xl">{BmiMessage}</p>
                    </div>
                  )
              }
            })()}
            <h1 className="mx-2 text-center text-[14px]">
              By maintaining a healthy weight, you lower your risk of developing
              serious health problems.
            </h1>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
