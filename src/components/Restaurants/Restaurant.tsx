import PicContainer from "../PicContainer/PicContainer";
import "./Restaurant.scss";
import clock from "../../assets/icons/clock-icon.png";

type Props = {
  rest: any;
  dishes: any;
  isDesktop: boolean;
};

const Restaurant: React.FC<Props> = ({ rest, dishes, isDesktop }) => {
  const type = isDesktop ? "dish-desk" : "dish";

  return (
    <>
      {rest && (
        <div className="restaurant-container">
          <img src={rest.pic} alt="rest-img" className="rest-img" />
          <div className="rest-name">{rest.name}</div>
          <div className="rest-chef">{rest.chefName}</div>
          <div className="rest-time">
            <img src={clock} alt="clock" className="rest-clock" />
            <div className="time">Open Now</div>
          </div>
          <div className="rest-buttons">
            <div className="rest-button">Breakfast</div>
            <div className="rest-button">Lunch</div>
            <div className="rest-button">Dinner</div>
          </div>
          <div className="dishes">
            {dishes.map((dish: any, index: number) => {
              return (
                <PicContainer
                  key={index}
                  type={type}
                  pic={dish.pic}
                  title={dish.name}
                  text={dish.text}
                  icons={dish.icons}
                  price={dish.price}
                  id={dish._id}
                />
              );
            })}
          </div>
        </div>
      )}
    </>
  );
};

export default Restaurant;
