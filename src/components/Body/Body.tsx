import { ChangeEvent, useEffect, useState } from "react";
import { RestaurantListInterface } from "../../types/ResObj";
import { SWIGGY_API_URL } from "../../utils/constants";
import { RestaurantCard } from "../RestaurantCard/RestaurantCard";
import { Shimmer } from "../Shimmer/Shimmer";
import "./Body.css";
export const Body = () => {
  const [restaurantList, setRestaurantList] = useState<RestaurantListInterface[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [searchText, SetSearchText] = useState<string>("");

  const fetchData = async (): Promise<void> => {
    setIsLoading(true);
    const data = await fetch(SWIGGY_API_URL);
    const json = await data.json();
    setRestaurantList(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    setIsLoading(false);
  };
  useEffect((): void => {
    fetchData();
  }, []);
  if (isLoading) return <Shimmer />;
  return (
    <main className="body">
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            setRestaurantList(restaurantList.filter((restaurant) => restaurant.info.avgRating > 4));
          }}
        >
          Top rated restaurant
        </button>
        <search className="search">
          <input
            type="text"
            name=""
            id=""
            className="search-box"
            value={searchText}
            onChange={(e: ChangeEvent<HTMLInputElement>) => {
              SetSearchText(e.target.value);
            }}
          />
          <button
            onClick={() => {
              setRestaurantList(
                restaurantList.filter((restaurant) => restaurant.info.name.includes(searchText))
              );
            }}
          >
            Search
          </button>
          <button
            onClick={() => {
              SetSearchText("");
              fetchData();
            }}
          >
            Clear
          </button>
        </search>
      </div>
      <div className="res-container">
        {restaurantList.map((restaurant) => {
          return <RestaurantCard key={restaurant?.info?.id} resData={restaurant} />;
        })}
      </div>
    </main>
  );
};
