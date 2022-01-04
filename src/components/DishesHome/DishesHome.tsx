import React from "react";
import PicContainer from "../PicContainer/PicContainer";
import "./DishesHome.scss";

type Props = {
  dishes: any[];
};

const DishesHome: React.FC<Props> = ({ dishes }) => {
  return (
    <div className="dishes-home-container">
      <div className="dishes-home-title">SIGNATURE DISH OF :</div>
      <div className="dishes-home">
        {dishes.map((dish, index) => {
          return (
            <div className="dishes-home-dish" key={index}>
              <span className="dishes-home-rest">{dish.restaurant.name}</span>
              <PicContainer
                key={index}
                type="dish-home"
                pic={dish.pic}
                title={dish.name}
                text={dish.text}
                icons={dish.icons}
                price={dish.price}
                id={dish._id}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default DishesHome;
