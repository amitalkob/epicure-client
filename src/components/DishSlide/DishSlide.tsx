import PicContainer from "../PicContainer/PicContainer";
import "./DishSlide.scss";

type Props = {
  dishes: any[];
};

const DishSlide: React.FC<Props> = ({ dishes }) => {
  return (
    <div className="dish-slide-container">
      <div className="dish-slide-title">SIGNATURE DISHES OF :</div>
      <div className="dish-slide-name">Tiger Lilly</div>
      <div className="dish-slide">
        {dishes.map((dish, index) => {
          return (
            <PicContainer
              key={index}
              type="dish-carusel"
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
  );
};

export default DishSlide;
