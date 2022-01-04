import React from "react";
import { useNavigate } from "react-router-dom";
import DishModal from "../DishModal/DishModal";
import { useState } from "react";

import "./PicContainer.scss";

type Props = {
  type: string;
  pic: string;
  title: string;
  text: string;
  icons: string[];
  price: string;
  id: number;
};

const PicContainer: React.FC<Props> = ({
  type,
  pic,
  title,
  text,
  icons,
  price,
  id,
}) => {
  const navigate = useNavigate();
  const containerClass = type + "-container";
  const pictureClass = type + "-picture";
  const titleClass = type + "-title";
  const textClass = type + "-text";
  const infoClass = type + "-info";
  const priceClass = type + "-price";
  const lineClass = type + "-line";
  const picClass = type + "-pic";
  const iconsClass = type + "-icons";
  const cropClass = type + "-crop";

  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    if (
      type === "rest" ||
      type === "rest-carusel" ||
      type === "rest-home" ||
      type === "chef-slide"
    ) {
      navigate(`/restaurants/${id}`, { state: { id: id } });
    } else {
      setIsOpen(!isOpen);
    }
  };

  return (
    <div>
      {isOpen && <DishModal id={id} />}
      <div className={containerClass} onClick={handleClick}>
        <div className={cropClass}>
          <img src={pic} alt="pic" className={pictureClass} />
        </div>
        <div className={titleClass}>{title}</div>
        <div className={textClass}>{text}</div>
        {icons && price && (
          <div className={infoClass}>
            <div className={iconsClass}>
              {icons.map((icon, index) => {
                return (
                  <img key={index} src={icon} alt="icon" className={picClass} />
                );
              })}
            </div>
            <div className={priceClass}>
              <div className={lineClass} />
              {price}
              <div className={lineClass} />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default PicContainer;
