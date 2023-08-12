import React from "react";
import FoodItems from "./FoodItems";

const RestCategerory = ({ data, showitem, setshowIndex }) => {
  const handleClick = () => {
    setshowIndex(!showitem);
  };
  return (
    <div>
      <div className="w-6/12 mx-auto my-4 bg-gray-300 shadow-lg p-4">
        <div
          className="flex justify-between cursor-pointer"
          onClick={handleClick}
        >
          <span className="text-lg font-bold text-black ">
            {data.title}-({data.itemCards.length})
          </span>
          <span className="font-bold">⬇️</span>
        </div>
        {showitem && <FoodItems items={data.itemCards} />}
      </div>
    </div>
  );
};

export default RestCategerory;
