import { useState, useEffect } from 'react';
import Shimmer from './Shimmer';
import { useParams } from 'react-router-dom';
import { RES_DETAIL_URL } from '../utils/constants';

const RestaurantMenu = () => {

    const [restInfo, setRestInfo] = useState(null);
    useEffect(() => {
        fetchMenu();
    }, []);

    const { resId } = useParams();
    console.log(resId);

    const fetchMenu = async () => {
        const data = await fetch( RES_DETAIL_URL + resId +
            "&catalog_qa=undefined&submitAction=ENTER"
        );
        const json = await data.json();

        console.log(json);
        setRestInfo(json.data);
    }

    if (restInfo === null) {
        return <Shimmer/>;
    }

    const { name, cuisines, costForTwoMessage, avgRatingString } = restInfo?.cards?.[2]?.card?.card?.info;
    const { itemCards } = restInfo?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.[2]?.card?.card;
    console.log(itemCards);

    return (
        <div>
            <h1>{name}</h1>
            <p>{cuisines.join(', ')} - {costForTwoMessage} - {avgRatingString}</p>
            <h2>Menu</h2>
            <ul>
                {itemCards.map((item) => (
                    <li key={item?.card?.info?.id}>
                        {item?.card?.info?.name} - Rs. {item?.card?.info?.price / 100 || item?.card?.info?.defaultPrice / 100}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default RestaurantMenu;