import useResturantMenu from "../utils/useResturantMenu";

import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";

const RestaurantMenu = () => {
  const { resId } = useParams();
  const restInfo = useResturantMenu(resId);
  if (restInfo === null) return <Shimmer />;

  const { name, cuisines, costForTwoMessage } =
    restInfo.cards[0].card.card.info;
  const { itemCards } =
    restInfo.cards[2].groupedCard.cardGroupMap.REGULAR.cards[1].card.card;

  return (
    <div>
      <div>
        <h3 className="px-4 sm:px-0 text-cyan-950 font-extrabold text-2xl">
          {name}
        </h3>
        <p className="mt-1 max-w-2xl  leading-6 text-gray-500 font-bold text-lg">
          {cuisines.join(",")}- {costForTwoMessage}
        </p>
      </div>

      <div className="flex p-2 m-2">
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
    </div>
  );
};

export default RestaurantMenu;
