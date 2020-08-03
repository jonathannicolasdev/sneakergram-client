import React from "react";
import axios from "axios";
import { useForm } from "react-hook-form";

function Upload() {
  const { register, handleSubmit, watch, errors } = useForm();
  const onSubmit = (data) => console.log(data);
  console.log(watch("sneaker")); // watch input value by passing the name of it

  return (
    <div>
      <form encType="multipart/form-data" onSubmit={handleSubmit(onSubmit)}>
        <div>
          <input name="sneaker" ref={register} type="file" />
          <input type="submit" value="Upload Sneaker" />
        </div>
      </form>
    </div>
  );
}

export default Upload;
