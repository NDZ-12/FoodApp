import React from "react";
import "./RestaurantCard.css";
import { CDN_IMG } from "../utils/constants";

const RestaurantCard = (props) => {
  console.log(props);
  const { name, cloudinaryImageId, cuisines, avgRating, locality, veg } = props;

  return (
    <div className="res-card" style={{ cursor: "pointer" }}>
      <img src={CDN_IMG + cloudinaryImageId} alt="restImage" />

      <h3> {name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h4>Average rating : {avgRating}</h4>
      <h4>locality -{locality}</h4>
      <h4>{veg === true ? "veg" : "Non veg"}</h4>
    </div>
  );
};

export default RestaurantCard;
