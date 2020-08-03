import React, { useState } from "react";
import axios from "axios";

const Upload = () => {
  const [state, setState] = useState({
    file: null,
  });

  const onFormSubmit = async (event) => {
    event.preventDefault();
    await fileUpload(state.file);
  };

  const onChange = (event) => {
    setState({
      file: event.target.files[0],
    });
  };

  const fileUpload = (file) => {
    if (localStorage.getItem("token")) {
      const bodyFormData = new FormData();

      bodyFormData.append("sneaker", file);

      return axios.post(
        `${process.env.REACT_APP_API_URL}/sneakers`,
        bodyFormData,
        {
          headers: {
            Authorization: "Bearer " + localStorage.getItem("token"),
            "content-type": "multipart/form-data",
          },
        }
      );
    } else {
      console.error("Token is not available");
    }
  };

  return (
    <form onSubmit={onFormSubmit}>
      <h1>File Upload</h1>
      <input type="file" onChange={onChange} />
      <button type="submit">Upload</button>
    </form>
  );
};

export default Upload;
