import { CDN_URL } from "../utils/constants";

const RestaurantCard = ({resData}) => {
    console.log(resData);
    const {name, cuisines, avgRatingString, costForTwo, cloudinaryImageId, sla: {deliveryTime}} = resData?.info;
    return (
        <div className='res-card' style={{backgroundColor: '#f0f0f0'}}>
            <img className='res-logo' src={CDN_URL + cloudinaryImageId}></img>
            <h3>{name}</h3>
            <h4>{cuisines.join(", ")}</h4>
            <h4>{avgRatingString}</h4>
            <h4>{costForTwo}</h4>
            <h4>{deliveryTime} mins</h4>
        </div>
    );
}

export default RestaurantCard;