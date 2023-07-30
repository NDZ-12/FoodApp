import React ,{useEffect, useState}from 'react'
import RestaurantCard from './RestaurantCard'

import Shimmer from './Shimmer';
const Body =() =>
{

  const [restaurants, setRestaurants] = useState([]);
  const [filteredRestaurant, setFilteredRestaurant] = useState([]);
   const [searchText, setSearchText] = useState("");

  useEffect (()=>{
   fetchData();
  },[])

  

  const fetchData= async() =>
  {
    try {
    let data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING");
    console.log(data); 
    console.log("Fetch Data sucessfully .......");
    const json = await data.json();
    console.log(json);
    setRestaurants(json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    setFilteredRestaurant(json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants);

    } 
    catch(error)
    {
      console.error("Error fetching data :", error)
    }

  }
  if (!restaurants) return null;
 
  console.log("render body");
  
 return restaurants.length=== 0 ?(
  <Shimmer/>
 ):
 (
<>
   <div className="search-container">
        <input
          type="text"
          className="search-input"
          placeholder="Search"
          value={searchText}
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
        />
        <button
          className="search-btn"
          onClick={() => {
            //need to filter the data
            const filteredRestaurant = restaurants.filter((res) =>
                res.info.name.toLowerCase().includes(searchText.toLowerCase())
              );

              setFilteredRestaurant(filteredRestaurant);
          }}
        >
          Search
        </button>
      </div> 
    
  
  <div className="res-conatiner">
   {filteredRestaurant.map((x)=>
    {
     return <RestaurantCard key={x?.info?.id} {...x?.info} />
    }
    
    )}

  </div>

  </>
 )

}

export default Body