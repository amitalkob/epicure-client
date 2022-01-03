import PicContainer from "../PicContainer/PicContainer";
import "./ChefOfTheWeekSlide.scss";

type Props = {
  rests: any[];
};

const ChefOfTheWeekSlide: React.FC<Props> = ({ rests }) => {
  return (
    <div className="chef-slide-cont">
      <div className="chef-slide-first-title">Yossi's restaurants :</div>
      <div className="chef-slide">
        {rests.map((rest, index) => {
          return (
            <PicContainer
              key={index}
              type="chef-slide"
              pic={rest.pic}
              title={rest.name}
              text=" "
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

export default ChefOfTheWeekSlide;
