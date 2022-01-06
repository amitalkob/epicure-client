import React, { useEffect, useState } from "react";
import About from "../components/About/About";
import ChefOfTheWeek from "../components/ChefOfTheWeek/ChefOfTheWeek";
import DishIcons from "../components/DishIcons/DishIcons";
import DishSlide from "../components/DishSlide/DishSlide";
import Hero from "../components/Hero/Hero";
import PageButtons from "../components/PageButtons/PageButtons";
import RestaurantSlide from "../components/RestaurantSlide/RestaurantSlide";
import { useMediaQuery } from "react-responsive";
import RestaurantsHome from "../components/RestaurantsHome/RestaurantsHome";
import DishesHome from "../components/DishesHome/DishesHome";
import axios from "axios";

const Homepage = () => {
  const isDesktopScreen = useMediaQuery({ query: "(min-width: 600px)" });
  const [restaurants, setRestaurants] = useState<any>([]);
  const [dishes, setDishes] = useState<any>([]);
  const [chef, setChef] = useState<any>();

  useEffect(() => {
    (async () => {
      const restaurants = await axios(
        "http://ec2-3-132-215-69.us-east-2.compute.amazonaws.com/api/v1/restaurants"
      );
      const dishes = await axios(
        "http://ec2-3-132-215-69.us-east-2.compute.amazonaws.com/api/v1/dishes"
      );
      const chefs = await axios(
        "http://ec2-3-132-215-69.us-east-2.compute.amazonaws.com/api/v1/chefs"
      );
      const id = chefs.data[0]._id;
      const chef = await axios(
        "http://ec2-3-132-215-69.us-east-2.compute.amazonaws.com/api/v1/chefs/" +
          id
      );

      setRestaurants(restaurants.data);
      setDishes(dishes.data);
      setChef(chef.data);
    })();
  }, []);

  return (
    <>
      <Hero />
      {!isDesktopScreen && <PageButtons />}
      {!isDesktopScreen ? (
        <RestaurantSlide rests={restaurants} />
      ) : (
        <RestaurantsHome rests={restaurants} />
      )}
      {!isDesktopScreen ? (
        <DishSlide dishes={dishes} />
      ) : (
        <DishesHome dishes={dishes.slice(0, 3)} />
      )}
      <DishIcons />
      {chef && <ChefOfTheWeek chef={chef} />}
      <About />
    </>
  );
};

export default Homepage;
