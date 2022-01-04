import { useState } from "react";
import Modal from "react-modal";
import "./DishModal.scss";
import { useEffect } from "react";
import axios from "axios";

type Props = {
  id: number;
};

const DishModal: React.FC<Props> = ({ id }) => {
  const [counter, setCounter] = useState<number>(1);
  const [isOpen, setIsOpen] = useState(true);
  const [dish, setDish] = useState<any>();

  useEffect(() => {
    (async () => {
      const dish = await axios("http://localhost:3001/api/v1/dishes/" + id);
      setDish(dish.data);
    })();
  }, [id]);

  const closeDish = () => {
    setIsOpen(!isOpen);
  };

  const decrementCounter = () => {
    setCounter(counter - 1);
  };

  const incrementCounter = () => {
    setCounter(counter + 1);
  };

  const sideOptions = (
    <div className="side-dishes">
      <div>
        <label>
          <input type="radio" name="option" checked={true} readOnly />
          White Bread
        </label>
      </div>
      <div>
        <label>
          <input type="radio" name="option" readOnly />
          Sticky Rice
        </label>
      </div>
    </div>
  );

  const changeOptions = (
    <div className="change-dishes">
      <div>
        <label>
          <input type="checkbox" name="option" readOnly />
          Without Onion
        </label>
      </div>
      <div>
        <label>
          <input type="checkbox" name="option" readOnly />
          Without Peanuts
        </label>
      </div>
      <div>
        <label>
          <input type="checkbox" name="option" />
          Less Spicy
        </label>
      </div>
    </div>
  );

  const changeQuantity = (
    <div className="quantity-container">
      {counter > 1 ? (
        <div className="decrement-counter" onClick={decrementCounter}>
          -
        </div>
      ) : (
        <div className="dis-decrement-counter">-</div>
      )}
      <div className="counter">{counter}</div>
      <div className="increment-counter" onClick={incrementCounter}>
        +
      </div>
    </div>
  );

  return (
    <Modal
      isOpen={isOpen}
      className="dish-modal"
      ariaHideApp={false}
      onRequestClose={closeDish}
      style={{ overlay: { background: "rgba(0, 0, 0, 0.8)" } }}
      closeTimeoutMS={1000}
    >
      <div className="dish-close-container">
        <button className="close-button" onClick={closeDish} />
      </div>
      {dish && (
        <div className="dish-wrap">
          <div className="dish-modal-crop">
            <img src={dish.pic} className="dish-modal-pic" alt="dish-pic" />
          </div>
          <div className="dish-details">
            {dish && <div className="dish-name">{dish.name}</div>}
            <div className="dish-desc">{dish.text}</div>
            <div className="dish-icons">
              {dish.icons.map((icon: string, index: number) => {
                return (
                  <img
                    key={index}
                    src={icon}
                    alt="icon"
                    className="dish-icon"
                  />
                );
              })}
            </div>
            <div className="dish-price-container">
              <div className="dish-line" />
              <div className="price">{dish.price}</div>
              <div className="dish-line" />
            </div>
          </div>
          <div className="choice-header">
            <label className="choice-title">Choose a side</label>
          </div>
          {sideOptions}
          <div className="choice-header">
            <label className="choice-title">Changes</label>
          </div>
          {changeOptions}
          <div className="choice-header">
            <label className="choice-title">Quantity</label>
          </div>
          {changeQuantity}
          <div className="add-div">
            <button className="add-to-bag">ADD TO BAG</button>
          </div>
        </div>
      )}
    </Modal>
  );
};

export default DishModal;
