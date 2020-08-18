import React from "react";
import { useParams } from "react-router-dom";

const Profile = () => {
  let { username } = useParams();

  return <div>{username}</div>;
};

export default Profile;
