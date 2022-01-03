import React from "react";
import PicContainer from "../PicContainer/PicContainer";
import "./Restaurants.scss";

type Props = {
  isDesktop: boolean;
  rests: any[];
};

const Restaurants: React.FC<Props> = ({ isDesktop, rests }) => {
  const type = isDesktop ? "rest-home" : "rest";

  return (
    <div className="restaurants-container">
      {!isDesktop && <div className="rests-title">RESTAURANTS</div>}
      <div className="rests-buttons">
        <div className="rests-button">All</div>
        <div className="rests-button">New</div>
        <div className="rests-button">Most Popular</div>
        <div className="rests-button">Open Now</div>
      </div>
      <div className="rests">
        {rests.map((rest, index) => {
          return (
            <PicContainer
              key={index}
              type={type}
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

export default Restaurants;
