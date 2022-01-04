import Restaurant from "../components/Restaurants/Restaurant";
import { useMediaQuery } from "react-responsive";
import { useEffect, useState } from "react";
import axios from "axios";
import { useLocation } from "react-router";
import qs from "querystring";

const RestaurantPage = () => {
  const { state } = useLocation();
  const isDesktopScreen = useMediaQuery({ query: "(min-width: 600px)" });
  const [restaurant, setRestaurant] = useState<any>();
  const [dishes, setDishes] = useState<any>([]);

  useEffect(() => {
    (async () => {
      const rest = await axios(
        "http://localhost:3001/api/v1/restaurants/" + state.id
      );
      setRestaurant(rest.data);

      const headers = {
        "Content-Type": "application/x-www-form-urlencoded",
      };

      const dishes = await axios.post(
        "http://localhost:3001/api/v1/dishes/get-dishes-by-rest",
        qs.stringify({ restId: state.id }),
        { headers: headers }
      );
      setDishes(dishes.data);
    })();
  }, [state]);

  return (
    <Restaurant rest={restaurant} dishes={dishes} isDesktop={isDesktopScreen} />
  );
};

export default RestaurantPage;
