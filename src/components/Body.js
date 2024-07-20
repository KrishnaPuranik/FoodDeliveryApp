// import { resList } from "../utils/mockData";
import RestaurantCard from "./RestaurantCard";
import {useState, useEffect} from "react";
import Shimmer from "./Shimmer";

const Body = () => {

    const [searchText, setSearchText] = useState('');
    const [listOfRestaurants, setListOfRestaurants] = useState([]);
    const [filteredRestaurants, setFilteredRestaurants] = useState([]);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        const data = await fetch(
        "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.96340&lng=77.58550&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
        );
        const jsonData = await data.json();
        setListOfRestaurants(jsonData?.data?.cards?.[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setFilteredRestaurants(jsonData?.data?.cards?.[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);

    }

    // Conditional Rendering
    // if (listOfRestaurants.length === 0) {
    //     return <Shimmer />
    // }

    return listOfRestaurants.length === 0 ? (
        <Shimmer />
    ) : (
        <div className='body'>
            <div className='filter'>
                <div>     
                    <input className="search-box" value={searchText} onChange={e => {
                        setSearchText(e.target.value);
                    }} />
                    <button onClick={() => {
                            const filteredList = listOfRestaurants.filter((res) => {
                                return res.info.name.toLowerCase().includes(searchText.toLowerCase());
                            }
                            )
                            setFilteredRestaurants(filteredList);
                        }}>
                        Search
                    </button>
                </div>
                <button className="filter-btn" onClick={() => {
                    const filteredList = listOfRestaurants.filter((res) => res.info.avgRating > 4.5);
                    setListOfRestaurants(filteredList);
                    setFilteredRestaurants(filteredList);
                }}>
                Top Rated Restaurants</button>
            </div>
            <div className='res-container'>
                {filteredRestaurants.map(restaurant => (
                    <RestaurantCard key={restaurant.info.id} resData= {restaurant}/>
                ))}
            </div>
        </div>
    );
}

export default Body;