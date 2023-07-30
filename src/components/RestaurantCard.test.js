import React from "react";
import { render ,screen} from "@testing-library/react";
import "@testing-library/jest-dom"; // for additional matchers like toBeInTheDocument
import '@testing-library/jest-dom/extend-expect'; 
import RestaurantCard from "./RestaurantCard";

describe("Restaurant card", () => {
  const RestaurantMockData = {
    name: "Vihar Misal",
    cuisines: ["Misal Pav", "Lassi", "butterMilk"],
    cloudinaryImageId: "cloudinaryImageId",
    deliveryTime: "30min",
  };

  it('Name should be Loading', ()=> {
    render(<RestaurantCard {...RestaurantMockData} />);
    const name =screen.getByText(RestaurantMockData.name);
    expect(name).toBeDefined();
  })
  it('cuisines should be render',()=>{

    render(<RestaurantCard {...RestaurantMockData} />)
    const cuisines =screen.getByText(RestaurantMockData.cuisines.join(', '));
    expect(cuisines).toBeDefined();

  })
  it('delivery time should be render',()=>
  { 
    render(<RestaurantCard {...RestaurantMockData} />)
    const time =screen.getByText(`deliveryTime: ${RestaurantMockData.deliveryTime}`);
    expect(time).toBeDefined();
  })


});
