import { ChangeEvent, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { RestaurantListInterface } from "../../types/ResObj";
import { SWIGGY_API_URL_FOR_HOMEPAGE } from "../../utils/constants";
import { RestaurantCard } from "../RestaurantCard/RestaurantCard";
import { Shimmer } from "../Shimmer/Shimmer";
import "./Body.css";

export const Body = () => {
  const [restaurantList, setRestaurantList] = useState<RestaurantListInterface[]>([]);
  const [filteredRestaurantList, setFilteredRestaurantList] = useState<RestaurantListInterface[]>(
    []
  );

  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [searchText, setSearchText] = useState<string>("");
  const fetchData = async (): Promise<void> => {
    setIsLoading(true);

    const data = await fetch(SWIGGY_API_URL_FOR_HOMEPAGE);
    const json = await data.json();
    const restaurantData =
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants;

    setRestaurantList(restaurantData);
    setFilteredRestaurantList(restaurantData);

    setIsLoading(false);
  };
  useEffect((): void => {
    fetchData();
  }, []);
  const resetData = () => {
    setFilteredRestaurantList(restaurantList);
    setSearchText("");
  };
  if (isLoading) return <Shimmer />;
  return (
    <main className="body">
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            setFilteredRestaurantList(
              restaurantList.filter((restaurant) => restaurant.info.avgRating > 4)
            );
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
              setSearchText(e.target.value.toLowerCase());
            }}
          />
          <button
            onClick={() => {
              setFilteredRestaurantList(
                restaurantList.filter((restaurant) =>
                  restaurant.info.name.toLowerCase().includes(searchText)
                )
              );
            }}
          >
            Search
          </button>
          <button
            onClick={() => {
              resetData();
            }}
          >
            Clear
          </button>
        </search>
      </div>
      <div className="res-container">
        {filteredRestaurantList.map((restaurant) => {
          return (
            <Link key={restaurant?.info?.id} to={"/restaurants/" + restaurant?.info?.id}>
              <RestaurantCard resData={restaurant} />
            </Link>
          );
        })}
      </div>
    </main>
  );
};
