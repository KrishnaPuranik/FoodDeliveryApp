import { useEffect, useState } from "react";
import { RES_DETAIL_URL } from "../utils/constants";

const useRestaurantMenu = (resId) => {
  const [resInfo, setResInfo] = useState(null);

  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const data = await fetch(
      RES_DETAIL_URL + resId + "&catalog_qa=undefined&submitAction=ENTER"
    );
    const json = await data.json();
    console.log("Menu data fetched!");
    setResInfo(json.data);
  };

  console.log("Return restaurant data!");
  return resInfo;
};

export default useRestaurantMenu;
