import React, { useEffect, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import Input from "@mui/material/Input";
import Button from "@mui/material/Button";
import axios from "axios";
import "./AddEdit.scss";
import { useNavigate } from "react-router";
import { Box } from "@mui/system";
import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";

const AddEditDish = () => {
  const id = window.location.pathname.split("/")[3];
  const isAddMode = !id;
  const navigate = useNavigate();
  const [rests, setRests] = useState<any>([]);

  const {
    control,
    handleSubmit,
    register,
    reset,
    setValue,
    formState: { errors },
  }: any = useForm({
    defaultValues: {
      name: "",
      text: "",
      pic: "",
      icons: "",
      price: "",
      restaurant: "",
    },
    mode: "all",
  });

  const createQueryString = (rest: any) => {
    return Object.keys(rest)
      .map((key) => {
        let val = rest[key];
        if (val !== null && typeof val === "object")
          val = createQueryString(val);
        return `${key}=${encodeURIComponent(`${val}`.replace(/\s/g, " "))}`;
      })
      .join("&");
  };

  const onSubmit = (dish: any) => {
    const qs = createQueryString(dish);
    isAddMode ? createDish(qs) : updateDish(id, qs);
    navigate("/admin");
  };

  const createDish = (dish: any) => {
    (async () => {
      const headers = {
        "Content-Type": "application/x-www-form-urlencoded",
      };

      await axios.post("http://localhost:3001/api/v1/dishes", dish, {
        headers: headers,
      });
    })();
  };

  const updateDish = (id: string, dish: any) => {
    (async () => {
      const headers = {
        "Content-Type": "application/x-www-form-urlencoded",
      };

      await axios.put("http://localhost:3001/api/v1/dishes/" + id, dish, {
        headers: headers,
      });
    })();
  };

  useEffect(() => {
    (async () => {
      const rests = await axios("http://localhost:3001/api/v1/restaurants");
      setRests(rests.data);
    })();
  }, []);

  useEffect(() => {
    if (!isAddMode) {
      (async () => {
        const res = await axios("http://localhost:3001/api/v1/dishes/" + id);
        const fields = ["name", "text", "pic", "icons", "price"];
        fields.forEach((field) => setValue(field, res.data[field]));
        setValue("restaurant", res.data.restaurant.name);
      })();
    }
  }, [id, isAddMode, setValue]);

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      onReset={reset}
      className="rest-form"
    >
      <h1>{isAddMode ? "Add Dish" : "Edit Dish"}</h1>
      <div className="input-container">
        <div>
          <div className="input-field">
            <label>Name</label>
            <Controller
              name="name"
              control={control}
              rules={{ required: true, maxLength: 20 }}
              render={() => <Input {...register("name")} />}
            />
          </div>
          {errors.name && errors.name.type === "required" && (
            <span role="alert" className="input-error">
              Name is required
            </span>
          )}
          {errors.name && errors.name.type === "maxLength" && (
            <span role="alert" className="input-error">
              Name length should be less than 20 characters
            </span>
          )}
        </div>
        <div>
          <div className="input-field">
            <label>Description</label>
            <Controller
              name="text"
              control={control}
              rules={{ required: true }}
              render={() => <Input {...register("text")} />}
            />
          </div>
          {errors.text && errors.text.type === "required" && (
            <span role="alert" className="input-error">
              Description is required
            </span>
          )}
        </div>
        <div>
          <div className="input-field">
            <label>Picture</label>
            <Controller
              name="pic"
              control={control}
              rules={{ required: true }}
              render={() => <Input {...register("pic")} />}
            />
          </div>
          {errors.pic && errors.pic.type === "required" && (
            <span role="alert" className="input-error">
              Picture is required
            </span>
          )}
        </div>
        <div>
          <div className="input-field">
            <label>Icons</label>
            <Controller
              name="icons"
              control={control}
              render={() => <Input {...register("icons")} />}
            />
          </div>
        </div>
        <div>
          <div className="input-field">
            <label>Price</label>
            <Controller
              name="price"
              control={control}
              render={() => <Input {...register("price")} />}
            />
          </div>
        </div>
        <div>
          <div className="input-field">
            <label>Restaurant</label>
            <Controller
              name="restaurant"
              control={control}
              rules={{ required: true }}
              render={() => (
                <Box sx={{ minWidth: 165 }}>
                  <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label">
                      Restaurant
                    </InputLabel>
                    <Select
                      {...register("restaurant")}
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      label="Restaurant"
                    >
                      {rests.map((rest: any, index: number) => {
                        return (
                          <MenuItem value={rest} key={index}>
                            {rest.name}
                          </MenuItem>
                        );
                      })}
                    </Select>
                  </FormControl>
                </Box>
              )}
            />
          </div>
          {errors.restaurant && errors.restaurant.type === "required" && (
            <span role="alert" className="input-error">
              Restaurant is required
            </span>
          )}
        </div>
      </div>
      <div className="input-button-cont">
        <Button type="submit" variant="contained">
          Save
        </Button>
      </div>
    </form>
  );
};

export default AddEditDish;
