import useResturantMenu from '../utils/useResturantMenu';


import Shimmer from './Shimmer';
import { useParams } from 'react-router-dom';

const RestaurantMenu = () => {

const {resId}=useParams();
  const restInfo=useResturantMenu(resId) ;
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