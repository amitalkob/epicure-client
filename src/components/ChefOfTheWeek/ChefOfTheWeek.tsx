import axios from "axios";
import React, { useEffect, useState } from "react";
import "./ChefOfTheWeek.scss";
import ChefOfTheWeekSlide from "./ChefOfTheWeekSlide";
import qs from "querystring";

type Props = {
  chef: any;
};

const ChefOfTheWeek: React.FC<Props> = ({ chef }) => {
  const [rests, setRests] = useState<any>([]);

  useEffect(() => {
    (async () => {
      const headers = {
        "Content-Type": "application/x-www-form-urlencoded",
      };

      const res = await axios.post(
        "http://ec2-3-132-215-69.us-east-2.compute.amazonaws.com/api/v1/restaurants/get-rests-by-chef",
        qs.stringify({ chefId: chef._id }),
        { headers: headers }
      );
      setRests(res.data);
    })();
  }, [chef._id]);
  const title = (
    <span className="chef-title">
      CHEF OF THE WEEK:
      <br />
    </span>
  );

  const text = <div className="chef-text">{chef.description}</div>;

  return (
    <div className="chef-container">
      {title}
      <div className="chef-pic-and-text">
        <div className="chef-pic-container">
          <div className="chef-name">{chef.name}</div>
          <img src={chef.pic} alt="yossi-shitrit" className="chef-pic" />
        </div>
        {text}
      </div>

      <ChefOfTheWeekSlide rests={rests} />
    </div>
  );
};

export default ChefOfTheWeek;
