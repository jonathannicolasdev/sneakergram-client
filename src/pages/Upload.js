import React from "react";
import axios from "axios";
import { useForm } from "react-hook-form";

function Upload() {
  const { register, handleSubmit, watch, errors } = useForm();
  const onSubmit = async (data) => {
    try {
      console.log(data);
      let bodyFormData = new FormData();
      bodyFormData.append("sneaker", data.sneaker[0]);

      const response = await axios.post(
        `${process.env.REACT_APP_API_URL}/sneakers`,
        { data: bodyFormData },
        {
          headers: {
            Authorization: "Bearer " + localStorage.getItem("token"),
            "Content-Type": "multipart/form-data",
          },
        }
      );
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  };
  // console.log(watch("sneaker")); // watch input value by passing the name of it

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <input name="sneaker" ref={register} type="file" />
          <input type="submit" value="Upload Sneaker" />
        </div>
      </form>
    </div>
  );
}

export default Upload;
