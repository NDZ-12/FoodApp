import React ,{useEffect, useState}from 'react'
import RestaurantCard from './RestaurantCard'
import { Link } from 'react-router-dom';
import Shimmer from './Shimmer';

const Body =() =>
{

  const [restaurants, setRestaurants] = useState([]);
  const[filterdata, setFileterData]=useState([]);
  
   const [searchText, setSearchText] = useState("");

  useEffect (()=>{
   fetchData();
  },[])

  


  const fetchData= async() =>
  {
    try {
    let data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=19.9974533&lng=73.78980229999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
    console.log(data); 
    console.log("Fetch Data sucessfully .......");
    const json = await data.json();
    console.log(json);
    setRestaurants(json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    setFileterData(json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants);

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

<div className='body'>
   <div className="search-container">
    <div className='search'>
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
            const filterdata = restaurants.filter((res) =>
                res.info.name.toLowerCase().includes(searchText.toLowerCase())
              );

             setFileterData(filterdata);
          }}
        >
          Search
        </button>
       
        
        <button className='fiter-btn' onClick={()=>{const avgFilterData =restaurants.filter(
          (res) =>res.info.avgRating >4); 
          setFileterData(avgFilterData.sort());
          }}> Avg Data 

        </button>
        </div>
        
      </div> 
    
  
  <div className="res-conatiner">
   {filterdata.map((x)=>
    {
     return <Link key={x.info.id} to={"/restuarants/"+x.info.id} ><RestaurantCard  {...x?.info} /></Link>
    }
    
    )}

  </div>

  </div>
 )

}

export default Body