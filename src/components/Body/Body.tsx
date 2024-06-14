import { resObj } from "../../data/data";
import { ResObj } from "../../types/ResObj";
import { RestaurantCard } from "../RestaurantCard/RestaurantCard";
import "./Body.css";
export const Body = () => {
  return (
    <main className="body">
      <button className="filter-btn" onClick={() => {}}>
        Top rated restaurant
      </button>
      <div className="res-container">
        {resObj.map((restaurant: ResObj) => {
          return <RestaurantCard key={restaurant?.info?.id} resData={restaurant} />;
        })}
      </div>
    </main>
  );
};
