import { useEffect, useState } from "react";
import { RestaurantListInterface } from "../../types/ResObj";
import { SWIGGY_API_URL } from "../../utils/constants";
import { RestaurantCard } from "../RestaurantCard/RestaurantCard";
import { Shimmer } from "../Shimmer/Shimmer";
import "./Body.css";
export const Body = () => {
  const [restaurantList, setRestaurantList] = useState<RestaurantListInterface[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const fetchData = async () => {
    setIsLoading(true);
    const data = await fetch(SWIGGY_API_URL);
    const json = await data.json();
    setRestaurantList(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    setIsLoading(false);
  };
  useEffect(() => {
    fetchData();
  }, []);
  if (isLoading) return <Shimmer />;
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
          fetchData();
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
