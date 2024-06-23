import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { InfoInterface } from "../../types/ResObj";
import { SWIGGY_API_URL_FOR_PRODUCT_PAGE } from "../../utils/constants";
import { Shimmer } from "../Shimmer/Shimmer";

export const RestaurantMenu = () => {
  const [resData, setResData] = useState<InfoInterface>();
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const { resId } = useParams();

  const fetchData = async () => {
    setIsLoading(true);

    const res = await fetch(SWIGGY_API_URL_FOR_PRODUCT_PAGE + resId);
    const resData = await res.json();
    const restaurantData = resData?.data?.cards[2]?.card?.card?.info;
    console.log(restaurantData);
    setResData(restaurantData);

    setIsLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, []);
  if (isLoading) return <Shimmer />;

  return (
    <div className="menu">
      <h3>{resData?.name}</h3>
      <h4>{resData?.cuisines.join(", ")}</h4>
      <h4>{resData?.avgRating} stars</h4>
      <h4>paisa {resData?.costForTwo}</h4>
      <h4>{resData?.sla?.deliveryTime} minutes</h4>
    </div>
  );
};
