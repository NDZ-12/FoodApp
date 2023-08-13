import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { CDN_IMG } from "../utils/constants";
import { clearItem, removeItem } from "../utils/cartSlice";

const Cart = () => {
  const cartitemdata = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();
  console.log(cartitemdata);

  if (cartitemdata.length === 0)
    return (
      <div className="text-center m-4 p-4">
        <h2 className="text-lg font-extrabold">Cart Item is empty </h2>
        <h2 className="text-lg font-extrabold">
          Please add new cart item 🍕🍕🍕🍕🥓🥓🧀🧀🧀🥗🥗🥙🥪
        </h2>
      </div>
    );

  return (
    <div className="text-center m-4 p-4">
      <h1 className="text-2xl font font-extrabold ">Cart</h1>
      <button
        className="bg-black text-white rounded-lg m-2 p-2"
        onClick={() => {
          dispatch(clearItem());
        }}
      >
        Clear Data{" "}
      </button>

      <div className="w w-6/12 m-auto border-x-amber-900 ">
        {cartitemdata.map((item) => (
          <div
            key={item.card.info.id}
            className="p-2 m-2 border-black border-b-2 flex justify-between "
          >
            <div className="p-2 text-left w-9/12">
              <span className="text-xl font-bold text-slate-900">
                {item.card.info.name}-{" "}
              </span>
              <span>
                ₹-{" "}
                {item.card.info.price / 100 ||
                  item.card.info.defaultPrice / 100}
              </span>
              <p>{item.card.info.description}</p>
              <div className="p-2 m-2">
                <button
                  className="bg-amber-500 text-2xl hover:bg-orange-600 font-bold rounded-md"
                  onClick={() => {
                    dispatch(removeItem());
                  }}
                >
                  {" "}
                  Remove Cart
                </button>
              </div>
            </div>

            <div className="w-3/12 p-4">
              <img
                alt={item.card.info.name}
                src={CDN_IMG + item.card.info.imageId}
                className="w-auto"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cart;
