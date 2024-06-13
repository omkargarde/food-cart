import { resObj } from "../../data/PizzaHut";
import { ResObj } from "../../types/ResObj";
import { RestaurantCard } from "../RestaurantCard/RestaurantCard";
import "./Body.css";
export const Body = () => {
  return (
    <main className="body">
      <div className="search">SEARCH BAR HERE</div>
      <div className="res-container">
        {resObj.map((restaurant: ResObj) => {
          return <RestaurantCard key={restaurant?.info?.id} resData={restaurant} />;
        })}
      </div>
    </main>
  );
};
