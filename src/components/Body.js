import React, { useEffect, useState } from "react";
import RestaurantCard, { with5KRestaurantcard } from "./RestaurantCard";
import { Link } from "react-router-dom";
import Shimmer from "./Shimmer";
import useOnlineStatus from "../utils/useOnlineStatus";

const Body = () => {
  const [restaurants, setRestaurants] = useState([]);
  const [filterdata, setFileterData] = useState([]);

  const [searchText, setSearchText] = useState("");

  const Restaurant5KCard = with5KRestaurantcard(RestaurantCard);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      let data = await fetch(
        "https://www.swiggy.com/dapi/restaurants/list/v5?lat=19.9974533&lng=73.78980229999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
      );
      console.log(data);
      console.log("Fetch Data sucessfully .......");
      const json = await data.json();
      console.log(json);
      setRestaurants(
        json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants
      );
      setFileterData(
        json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants
      );
    } catch (error) {
      console.error("Error fetching data :", error);
    }
  };

  const onlineStatus = useOnlineStatus();
  console.log(onlineStatus);
  if (onlineStatus === false) {
    return <h1>Please check your Internet connection Status </h1>;
  }

  return restaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="m-4 p-4 bg-lime-200">
        <div className="search">
          <input
            type="text"
            className="search-input border border-solid border-blue-50 hover:bg-emerald-300"
            placeholder="Search"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button
            className="bg-lime-400 px-4 mx-4 hover:bg-green-900"
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

          <button
            className="bg-lime-400 px-4 mx-4 hover:bg-green-900"
            onClick={() => {
              const avgFilterData = restaurants.filter(
                (res) => res.info.avgRating > 4
              );
              setFileterData(avgFilterData.sort());
            }}
          >
            {" "}
            Avg Data (more than 4+ rating )
          </button>
        </div>
      </div>

      <div className="flex flex-wrap ">
        {filterdata.map((x) => {
          // totalRatingsString ="5K+"
          return (
            <Link key={x.info.id} to={"/restuarants/" + x.info.id}>
              {x.info.totalRatingsString === "5K+" ||
              x.info.totalRatingsString === "10K+" ? (
                <Restaurant5KCard {...x?.info} />
              ) : (
                <RestaurantCard {...x?.info} />
              )}
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Body;
