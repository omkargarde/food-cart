import { useEffect, useState } from "react";
import { mockRestaurantList } from "../../data/data";
import { RestaurantListInterface } from "../../types/ResObj";
import { SWIGGY_API_URL } from "../../utils/constants";
import { RestaurantCard } from "../RestaurantCard/RestaurantCard";
import "./Body.css";
export const Body = () => {
  const [restaurantList, setRestaurantList] =
    useState<RestaurantListInterface[]>(mockRestaurantList);
  
  const fetchData = async () => {
    const data = await fetch(SWIGGY_API_URL);
    const json = await data.json();
    setRestaurantList(json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants);
  };
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <main className="body">
      <button
        className="filter-btn"
        onClick={() => {
          setRestaurantList(restaurantList.filter((restaurant) => restaurant.info.avgRating > 4));
        }}
      >
        Top rated restaurant
      </button>
      <button
        className="filter-btn"
        onClick={() => {
          setRestaurantList(mockRestaurantList);
        }}
      >
        Reset
      </button>
      <div className="res-container">
        {restaurantList.map((restaurant) => {
          return <RestaurantCard key={restaurant?.info?.id} resData={restaurant} />;
        })}
      </div>
    </main>
  );
};
