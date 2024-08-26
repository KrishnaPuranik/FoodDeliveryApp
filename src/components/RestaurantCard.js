import { CDN_URL } from "../utils/constants";

const RestaurantCard = ({ resData }) => {
  console.log(resData);
  const {
    name,
    cuisines,
    avgRatingString,
    costForTwo,
    cloudinaryImageId,
    sla: { deliveryTime },
  } = resData?.info;
  return (
    <div className="p-4 bg-gray-300 hover:bg-gray-500 w-[250] h-full rounded-lg">
      <img
        className="rounded-lg size-[218]"
        src={CDN_URL + cloudinaryImageId}
      ></img>
      <h3 className="font-bold py-4">{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{avgRatingString}</h4>
      <h4>{costForTwo}</h4>
      <h4>{deliveryTime} mins</h4>
    </div>
  );
};

export default RestaurantCard;
