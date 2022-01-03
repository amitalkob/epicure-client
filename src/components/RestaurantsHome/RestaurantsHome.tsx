import React from "react";
import PicContainer from "../PicContainer/PicContainer";
import "./RestaurantsHome.scss";
import { NavLink } from "react-router-dom";
import arrow from "../../assets/icons/all-restaurants-arrows.png";

type Props = {
  rests: any[];
};

const RestaurantsHome: React.FC<Props> = ({ rests }) => {
  return (
    <div className="rests-home-container">
      <div className="rests-home-title">
        THE POPULAR RESTAURANTS IN EPICURE :
      </div>
      <div className="rests-home">
        {rests.map((rest, index) => {
          return (
            <PicContainer
              key={index}
              type="rest-home"
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
      <div className="rests-home-button-cont">
        <NavLink to="/restaurants" className="rests-home-button">
          All Restaurants
        </NavLink>
        <img src={arrow} alt="arrow" />
      </div>
    </div>
  );
};

export default RestaurantsHome;
