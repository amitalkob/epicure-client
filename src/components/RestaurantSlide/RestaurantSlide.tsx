import React from "react";
import PicContainer from "../PicContainer/PicContainer";
import "./RestaurantSlide.scss";

type Props = {
  rests: any[];
};

const RestaurantSlide: React.FC<Props> = ({ rests }) => {
  return (
    <div className="rest-slide-container">
      <div className="rest-slide-title">
        THE POPULAR RESTAURANTS IN EPICURE :
      </div>
      <div className="rest-slide">
        {rests.map((rest, index) => {
          return (
            <PicContainer
              key={index}
              type="rest-carusel"
              pic={rest.pic}
              title={rest.name}
              text={rest.chef.name}
              icons={[]}
              price=""
              id={rest._id}
            />
          );
        })}
      </div>
    </div>
  );
};

export default RestaurantSlide;
