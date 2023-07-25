import React from 'react'
import RestaurantCard from './RestaurantCard'
import { restrautList } from '../utils/mockData'


const Body =() =>
{
 return (
 <div className="body">
  <div className="search">Search</div>
  <div className="res-conatiner">
   {restrautList.map((x)=>
   
   
    {
     return <RestaurantCard key={x.data.id} {...x.data} />
    }
    
    
    )}

  </div>
 </div>

 )

}

export default Body