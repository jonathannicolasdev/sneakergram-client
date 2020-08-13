import React, { useState } from "react";
import axios from "axios";
import styled from "@emotion/styled";

const Form = styled.form`
  max-width: 480px;
  margin: 0 auto;
`;

const Field = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
`;

const Label = styled.label`
  font-weight: bold;
  font-size: 1.2em;
  margin-bottom: 2px;
`;

const Input = styled.input`
  padding: 10px;
  font-size: 1.2em;
  border: 2px;
  border-radius: 5px;
  border-color: border;
`;

const Submit = styled.input`
  cursor: pointer;
  border-radius: 5px;
  border: none;
  color: #fff;
  font-size: 1.2em;
  font-weight: bold;
  padding: 10px;
  width: 100%;
  transition: background-color 0.2s ease-in-out;
  background-color: blue;
  &:hover {
    background-color: darkblue;
  }
`;

const Upload = () => {
  const [state, setState] = useState({
    name: "",
    style: "",
    colorway: "",
    retailPrice: 0,
    releaseDate: "",
    size: "",
    location: "",
    file: null,
  });

  const onFormSubmit = async (event) => {
    event.preventDefault();
    await submitSneaker(state.file);
  };

  const onFileChange = (event) => {
    setState({
      ...state,
      file: event.target.files[0],
    });
  };

  const onTextChange = (event) => {
    const name = event.target.name;
    let value = event.target.value;

    if (event.target.name === "retailPrice") {
      value = Number(value);
    }

    setState({
      ...state,
      [name]: value,
    });
  };

  const submitSneaker = (file) => {
    if (localStorage.getItem("token")) {
      try {
        const body = new FormData();

        body.append("name", state.name);
        body.append("style", state.style);
        body.append("colorway", state.colorway);
        body.append("retailPrice", state.retailPrice);
        body.append("releaseDate", state.releaseDate);
        body.append("size", state.size);
        body.append("location", state.location);
        body.append("sneaker", file);

        // Display the key/value pairs
        // for (let pair of body.entries()) {
        //   console.log(pair[0] + ", " + pair[1]);
        // }

        return axios.post(`${process.env.REACT_APP_API_URL}/sneakers`, body, {
          headers: {
            Authorization: "Bearer " + localStorage.getItem("token"),
            "content-type": "multipart/form-data",
          },
        });
      } catch (error) {
        console.error("Error when submitting sneaker", error);
      }
    } else {
      console.error("Token is not available");
    }
  };

  return (
    <Form onSubmit={onFormSubmit}>
      <h1>Post New Sneaker</h1>
      <Field>
        <Input type="file" onChange={onFileChange} />
      </Field>
      <Field>
        <Label>Name</Label>
        <Input
          name="name"
          type="text"
          placeholder="Jordan 1 Retro High Hot Punch (W)"
          onChange={onTextChange}
        />
      </Field>
      <Field>
        <Label>Style</Label>
        <Input
          name="style"
          type="text"
          placeholder="AQ9131-600"
          onChange={onTextChange}
        />
      </Field>
      <Field>
        <Label>Colorway</Label>
        <Input
          name="colorway"
          type="text"
          placeholder="HOT PUNCH/VOLT-BLACK"
          onChange={onTextChange}
        />
      </Field>
      <Field>
        <Label>Retail Price (USD)</Label>
        <Input
          name="retailPrice"
          type="number"
          placeholder="145"
          onChange={onTextChange}
        />
      </Field>
      <Field>
        <Label>Release Date</Label>
        <Input name="releaseDate" type="date" onChange={onTextChange} />
      </Field>
      <Field>
        <Label>Size</Label>
        <Input
          name="size"
          type="text"
          placeholder="9.5 US"
          onChange={onTextChange}
        />
      </Field>
      <Field>
        <Label>Location</Label>
        <Input
          name="location"
          type="text"
          placeholder="Jakarta, Indonesia"
          onChange={onTextChange}
        />
      </Field>
      <Field>
        <Submit type="submit" value="Post Sneaker" />
      </Field>
    </Form>
  );
};

export default Upload;
