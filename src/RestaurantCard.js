import React from "react";
import "./RestaurantCard.css";

const RestaurantCard = () => {
  return (
    <div className="res-card">
    
        <img
        className="res-logo"
        alt="res-logo"
        src="https://www.madhuseverydayindian.com/wp-content/uploads/2020/10/khichdi-instant-pot-1024x1024.jpg"></img>
      
      <h3> MDH Foods</h3>
      <h4>South food ,breakfast, lunch</h4>
      <h4>4.4 stars</h4>
      <h4>38 minutes</h4>
     
      
    </div>
  );
};

export default RestaurantCard;
