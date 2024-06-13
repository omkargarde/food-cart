import { ResObj } from "../../types/ResObj";
import "./RestaurantCard.css";
/* 
  img
  name
  star rating
  cuisine
  delivery time
*/
export const RestaurantCard = (props: { resData: ResObj }) => {
  const info = props?.resData?.info;
  return (
    <div className="res-card">
      <img
        className="res-logo"
        src={
          "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" +
          info.cloudinaryImageId
        }
        alt=""
      />
      <h3>{info?.name}</h3>
      <h4>{info?.cuisines.join(", ")}</h4>
      <h4>{info?.avgRating} stars</h4>
      <h4>{info?.costForTwo}</h4>
      <h4>{info?.sla?.deliveryTime} minutes</h4>
    </div>
  );
};
