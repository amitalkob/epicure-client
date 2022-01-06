import Restaurants from "../components/Restaurants/Restaurants";
import { useMediaQuery } from "react-responsive";
import { useEffect, useState } from "react";
import axios from "axios";

const RestaurantsPage = () => {
  const isDesktopScreen = useMediaQuery({ query: "(min-width: 600px)" });
  const [restaurants, setRestaurants] = useState<any>([]);

  useEffect(() => {
    (async () => {
      const restaurants = await axios(
        "http://ec2-3-132-215-69.us-east-2.compute.amazonaws.com/api/v1/restaurants"
      );
      setRestaurants(restaurants.data);
    })();
  }, []);

  return <Restaurants isDesktop={isDesktopScreen} rests={restaurants} />;
};

export default RestaurantsPage;
