import React from "react";

import { CDN_IMG } from "../utils/constants";

const RestaurantCard = (props) => {
  console.log(props);
  const { name, cloudinaryImageId, cuisines, avgRating, locality, veg } = props;

  return (
    <div className="m-1 p-1 h-{400px} w-{200px} hover:bg-amber-700 border border-solid bg-black">
      <img
        src={CDN_IMG + cloudinaryImageId}
        className="rounded-lg w-{100%}"
        alt="restImage"
      />

      <h3 className=" text-red-900 font-extrabold py-4 text-xl"> {name}</h3>
      <h4 className=" text-yellow-400">{cuisines.join(", ")}</h4>
      <h4 className="text-orange-500">Average rating : {avgRating}</h4>
      <h4 className="text-orange-500">locality -{locality}</h4>
      <h4 className="text-orange-500">{veg === true ? "veg" : "Non veg"}</h4>
    </div>
  );
};

export const with5KRestaurantcard = (RestaurantCard) => {
  return (props) => {
    return (
      <div>
        <label className="absolute bg-cyan-900 text-white m-2 p-2 rounded-lg">
          Top rating
        </label>
        <RestaurantCard {...props} />
      </div>
    );
  };
};

export default RestaurantCard;
