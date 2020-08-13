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
      <div>
        <label>Name</label>
        <input
          name="name"
          type="text"
          placeholder="Jordan 1 Retro High Hot Punch (W)"
        />
      </div>
      <div>
        <label>Style</label>
        <input name="style" type="text" placeholder="AQ9131-600" />
      </div>
      <div>
        <label>Colorway</label>
        <input name="colorway" type="text" placeholder="HOT PUNCH/VOLT-BLACK" />
      </div>
      <div>
        <label>Retail Price (USD)</label>
        <input name="retail-price" type="number" placeholder="145" />
      </div>
      <div>
        <label>Release Date</label>
        <input name="release-date" type="date" />
      </div>
      <div>
        <label>Size</label>
        <input name="size" type="text" placeholder="9.5 US" />
      </div>
      <div>
        <label>Location</label>
        <input name="location" type="text" placeholder="Jakarta, Indonesia" />
      </div>
      <button type="submit">Post Sneaker</button>
    </form>
  );
};

export default Upload;

//  name: "dummy",
//         style: "dummy",
//         colorway: "dummy",
//         retailPrice: 100,
//         releaseDate: "2020-01-01",
//         size: "10",
//         location: "Canada",
