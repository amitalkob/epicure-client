import spicy from "../../assets/icons/spicy-icon.png";
import vegiterian from "../../assets/icons/vegiterian-icon.png";
import vegan from "../../assets/icons/vegan-icon.png";
import "./DishIcons.scss";

const DishIcons = () => {
  const title = (
    <span className="icons-title">
      THE MEANING OF OUR ICONS:
      <br />
    </span>
  );

  return (
    <div className="dish-icons-container">
      {title}
      <div className="icons-container">
        <div className="icon-container">
          <img src={spicy} alt="spicy" className="spicy-icon" />
          <span className="icons-text">Spicy</span>
        </div>
        <div className="icon-container">
          <img src={vegiterian} alt="vegiterian" className="vegi-icon" />
          <span className="icons-text">Vegiterian</span>
        </div>
        <div className="icon-container">
          <img src={vegan} alt="vegan" className="vegan-icon" />
          <span className="icons-text">Vegan</span>
        </div>
      </div>
    </div>
  );
};

export default DishIcons;
