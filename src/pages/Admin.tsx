import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { useEffect, useState } from "react";
import axios from "axios";
import RestsTable from "../components/Tables/RestsTable";
import ChefsTable from "../components/Tables/ChefsTable";
import DishesTable from "../components/Tables/DishesTable";
import { NavLink } from "react-router-dom";

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

const TabPanel = (props: TabPanelProps) => {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
};

const a11yProps = (index: number) => {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
};

const Admin = () => {
  const [value, setValue] = React.useState(0);
  const [restaurants, setRestaurants] = useState<any>([]);
  const [dishes, setDishes] = useState<any>([]);
  const [chefs, setChefs] = useState<any>([]);

  useEffect(() => {
    (async () => {
      const restaurants = await axios(
        "http://ec2-3-132-215-69.us-east-2.compute.amazonaws.com/api/v1/restaurants"
      );
      const dishes = await axios(
        "http://ec2-3-132-215-69.us-east-2.compute.amazonaws.com/api/v1/dishes"
      );
      const chefs = await axios(
        "http://ec2-3-132-215-69.us-east-2.compute.amazonaws.com/api/v1/chefs"
      );

      setRestaurants(restaurants.data);
      setDishes(dishes.data);
      setChefs(chefs.data);
    })();
  }, []);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
        >
          <Tab label="Restaurants" {...a11yProps(0)} />
          <Tab label="Chefs" {...a11yProps(1)} />
          <Tab label="Dishes" {...a11yProps(2)} />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        <Button variant="contained" component={NavLink} to="/admin/add-rest">
          Add Restaurant
        </Button>
        <RestsTable rests={restaurants} />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <Button variant="contained" component={NavLink} to="/admin/add-chef">
          Add Chef
        </Button>
        <ChefsTable chefs={chefs} />
      </TabPanel>
      <TabPanel value={value} index={2}>
        <Button variant="contained" component={NavLink} to="/admin/add-dish">
          Add Dish
        </Button>
        <DishesTable dishes={dishes} />
      </TabPanel>
    </Box>
  );
};

export default Admin;
