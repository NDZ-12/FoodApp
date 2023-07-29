import React ,{useState}from 'react'
import RestaurantCard from './RestaurantCard'
import { restrautList } from '../utils/mockData'


function filterData(searchText, restaurants) {
  const filterData = restaurants.filter((restaurant) =>
    restaurant.data.name.includes(searchText)
  );

  return filterData;
}






const Body =() =>
{

  const [restaurants, setRestaurants] = useState(restrautList);
  const [searchText, setSearchText] = useState("");

  function handleReset()
  {
   setRestaurants(restrautList);
   setSearchText('');
  }
 return (
 <div className="body">
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
            const data = filterData(searchText, restaurants);
            // update the state - restaurants
            setRestaurants(data);
          }}
        >
          Search
        </button>
        
        <button className="reset-btn" onClick={handleReset}>
          Reset
        </button>
      </div>
    
  
  <div className="res-conatiner">
   {restaurants.map((x)=>
   
   
    {
     return <RestaurantCard key={x.data.id} {...x.data} />
    }
    
    
    )}

  </div>
 </div>

 )

}

export default Body