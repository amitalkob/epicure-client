import React, { useEffect } from "react";
import { Controller, useForm } from "react-hook-form";
import Input from "@mui/material/Input";
import Button from "@mui/material/Button";
import axios from "axios";
import qs from "querystring";
import "./AddEdit.scss";
import { useNavigate } from "react-router";

const AddEditChef = () => {
  const id = window.location.pathname.split("/")[3];
  const isAddMode = !id;
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
      description: "",
      pic: "",
    },
    mode: "all",
  });

  const onSubmit = (chef: any) => {
    isAddMode ? createChef(chef) : updateChef(id, chef);
    navigate("/admin");
  };

  const createChef = (chef: any) => {
    (async () => {
      const headers = {
        "Content-Type": "application/x-www-form-urlencoded",
      };

      await axios.post(
        "http://localhost:3001/api/v1/chefs",
        qs.stringify(chef),
        { headers: headers }
      );
    })();
  };

  const updateChef = (id: string, chef: any) => {
    (async () => {
      const headers = {
        "Content-Type": "application/x-www-form-urlencoded",
      };

      await axios.put(
        "http://localhost:3001/api/v1/chefs/" + id,
        qs.stringify(chef),
        { headers: headers }
      );
    })();
  };

  useEffect(() => {
    if (!isAddMode) {
      (async () => {
        const res = await axios("http://localhost:3001/api/v1/chefs/" + id);
        const fields = ["name", "description", "pic"];
        fields.forEach((field) => setValue(field, res.data[field]));
      })();
    }
  }, [id, isAddMode, setValue]);

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      onReset={reset}
      className="rest-form"
    >
      <h1>{isAddMode ? "Add Chef" : "Edit Chef"}</h1>
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
              name="description"
              control={control}
              rules={{ required: true }}
              render={() => <Input {...register("description")} />}
            />
          </div>
          {errors.description && errors.description.type === "required" && (
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
      </div>
      <div className="input-button-cont">
        <Button type="submit" variant="contained">
          Save
        </Button>
      </div>
    </form>
  );
};

export default AddEditChef;
