import React,{useEffect,useState} from 'react'

import { MENU_API } from '../utils/constants';
import Shimmer from './Shimmer';
import { useParams } from 'react-router-dom';

const RestaurantMenu = () => {
const[restInfo,setrestInfo]=useState(null);
const {resId}=useParams();
    useEffect(()=>{
        const fetchMenu=async()=>{
            try {
                let data = await fetch(MENU_API+resId);
                
                console.log("Fetch Data sucessfully .......");
                const json = await data.json();
                console.log(json.data);
                setrestInfo(json.data);
                
            
                } 
                catch(error)
                {
                  console.error("Error fetching data :", error)
                }
        };
        console.log(fetchMenu);
        fetchMenu();
    },[]);

    if (restInfo===null) return <Shimmer/>
    
    const {name ,cuisines,costForTwoMessage}=restInfo.cards[0].card.card.info;
    const{ itemCards}=restInfo.cards[2].groupedCard.cardGroupMap.REGULAR.cards[1].card.card;

 
  return (
    <div className='menu'>
        <h1>{name}</h1>
        <h2>{cuisines.join(",")}- {costForTwoMessage}</h2>
        <h2>Menu - Veg & Non veg Special </h2>
        
        <ul>
            {itemCards.map((item)=> <li key={item.card.info.id}>{item.card.info.name} - {item.card.info.price/100}</li>)}
        </ul>
    </div>
  );
};

export default RestaurantMenu;