import React from "react";
import "./RestaurantCard.css";
import { CDN_IMG } from "../utils/constants";




const RestaurantCard = ({name,
  cuisines,
  cloudinaryImageId,
  deliveryTime}) => {
  return (
    <div className="res-card">
    <img
        src={CDN_IMG
           +
          cloudinaryImageId
        }
        alt="restImage"
      />
      
      <h3> {name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h4>deliveryTime: {deliveryTime}</h4>
    </div>
  );
};

export default RestaurantCard;
