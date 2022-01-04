import React, { useEffect, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import Input from "@mui/material/Input";
import Button from "@mui/material/Button";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import axios from "axios";
import "./AddEdit.scss";
import { Box } from "@mui/system";
import { FormControl, InputLabel } from "@mui/material";
import { useNavigate } from "react-router";

const AddEditRest = () => {
  const id = window.location.pathname.split("/")[3];
  const isAddMode = !id;
  const [chefs, setChefs] = useState<any>([]);
  const navigate = useNavigate();

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
      pic: "",
      chef: "",
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

  const onSubmit = (rest: any) => {
    const qs = createQueryString(rest);
    isAddMode ? createRest(qs) : updateRest(id, qs);
    navigate("/admin");
  };

  const createRest = (rest: any) => {
    (async () => {
      const headers = {
        "Content-Type": "application/x-www-form-urlencoded",
      };

      await axios.post("http://localhost:3001/api/v1/restaurants", rest, {
        headers: headers,
      });
    })();
  };

  const updateRest = (id: string, rest: any) => {
    (async () => {
      const headers = {
        "Content-Type": "application/x-www-form-urlencoded",
      };

      await axios.put("http://localhost:3001/api/v1/restaurants/" + id, rest, {
        headers: headers,
      });
    })();
  };

  useEffect(() => {
    (async () => {
      const chefs = await axios("http://localhost:3001/api/v1/chefs");
      setChefs(chefs.data);
    })();
  }, []);

  useEffect(() => {
    if (!isAddMode) {
      (async () => {
        const res = await axios(
          "http://localhost:3001/api/v1/restaurants/" + id
        );
        const fields = ["name", "pic"];
        fields.forEach((field) => setValue(field, res.data[field]));
        setValue("chef", res.data.chef.name);
      })();
    }
  }, [id, isAddMode, setValue]);

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      onReset={reset}
      className="rest-form"
    >
      <h1>{isAddMode ? "Add Restaurant" : "Edit Restaurant"}</h1>
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
            <label>Chef</label>
            <Controller
              name="chef"
              control={control}
              rules={{ required: true }}
              render={() => (
                <Box sx={{ minWidth: 165 }}>
                  <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label">Chef</InputLabel>
                    <Select
                      {...register("chef")}
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      label="Chef"
                    >
                      {chefs.map((chef: any, index: number) => {
                        return (
                          <MenuItem value={chef} key={index}>
                            {chef.name}
                          </MenuItem>
                        );
                      })}
                    </Select>
                  </FormControl>
                </Box>
              )}
            />
          </div>
          {errors.chef && errors.chef.type === "required" && (
            <span role="alert" className="input-error">
              Chef is required
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

export default AddEditRest;
