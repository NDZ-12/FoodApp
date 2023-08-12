import { useState } from "react";
import useResturantMenu from "../utils/useResturantMenu";
import RestCategerory from "./RestCategerory";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";

const RestaurantMenu = () => {
  const { resId } = useParams();
  const restInfo = useResturantMenu(resId);
  const [showIndex, setshowIndex] = useState(0);
  if (restInfo === null) return <Shimmer />;

  const { name, cuisines, costForTwoMessage } =
    restInfo.cards[0].card.card.info;

  // const { itemCards } =
  //   restInfo.cards[2].groupedCard.cardGroupMap.REGULAR.cards[1].card.card;

  const filteritemCard =
    restInfo.cards[2].groupedCard.cardGroupMap.REGULAR.cards.filter(
      (c) =>
        c.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );
  console.log(filteritemCard);

  return (
    <div className="text-center">
      <h1 className="my-6 text-cyan-950 font-extrabold text-2xl">{name}</h1>
      <p className=" text-gray-500 font-bold text-lg">
        {cuisines.join(",")}- {costForTwoMessage}
      </p>
      {filteritemCard.map((itemCategory, index) => (
        <RestCategerory
          key={itemCategory?.card?.card?.itemCards?.title}
          data={itemCategory?.card?.card}
          showitem={index === showIndex ? true : false}
          setshowIndex={() => setshowIndex(index)}
        />
      ))}
    </div>

    /* <div className="flex p-2 m-2">.
        <ul className="flex flex-col bg-pink-300 p-4">
          {itemCards.map((item) => (
            <li
              className="border-gray-400 flex flex-row mb-2"
              key={item.card.info.id}
            >
              <div className="text-xl bg-red-500 font-extrabold">
                {item.card.info.name} - Rs{" "}
                {item.card.info.price / 100 ||
                  item.card.info.defaultPrice / 100}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div> */
  );
};

export default RestaurantMenu;
