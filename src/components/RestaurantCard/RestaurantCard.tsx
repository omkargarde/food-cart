import { RestaurantListInterface } from "../../types/ResObj";
import { CDN_URL } from "../../utils/constants";
import "./RestaurantCard.css";
/* 
  img
  name
  star rating
  cuisine
  delivery time
*/
export const RestaurantCard = (props: { resData: RestaurantListInterface }) => {
  const info = props?.resData?.info;
  return (
    <div className="res-card">
      <img className="res-logo" src={CDN_URL + info.cloudinaryImageId} alt="" />
      <h3>{info?.name}</h3>
      <h4>{info?.cuisines.join(", ")}</h4>
      <h4>{info?.avgRating} stars</h4>
      <h4>{info?.costForTwo}</h4>
      <h4>{info?.sla?.deliveryTime} minutes</h4>
    </div>
  );
};
