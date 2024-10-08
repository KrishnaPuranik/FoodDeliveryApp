import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";

const RestaurantMenu = () => {
  const { resId } = useParams();
  console.log(resId);
  console.log("Use hook to fetch restaurant menu");
  const restInfo = useRestaurantMenu(resId);
  console.log("restInfo value: ", restInfo);

  if (restInfo === null) {
    return <Shimmer />;
  }

  const { name, cuisines, costForTwoMessage, avgRatingString } =
    restInfo?.cards?.[2]?.card?.card?.info;
  const { itemCards } =
    restInfo?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.[2]?.card
      ?.card;
  console.log(itemCards);

  return (
    <div>
      <h1 className="m-4 font-bold text-lg">{name}</h1>
      <p className="mx-4 text-base">
        {cuisines.join(", ")} - {costForTwoMessage} - {avgRatingString}
      </p>
      <h2 className="m-4 font-bold text-lg">Menu</h2>
      <ul>
        {itemCards.map((item) => (
          <li className="mx-4 text-sm" key={item?.card?.info?.id}>
            {item?.card?.info?.name} - Rs.{" "}
            {item?.card?.info?.price / 100 ||
              item?.card?.info?.defaultPrice / 100}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RestaurantMenu;
