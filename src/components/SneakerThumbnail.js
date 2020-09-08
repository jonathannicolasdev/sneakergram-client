import React from "react";
import PropTypes from "prop-types";
import styled from "@emotion/styled";

const Thumbnail = styled.div`
  display: flex;
  align-items: center;
  width: 300px;
  height: 200px;
  background-color: #fff;
  margin: 10px;
  overflow: hidden;
`;

const SneakerImage = styled.img`
  width: 300px;
  /* height: 200px; */
  object-fit: cover;
`;

const SneakerThumbnail = ({ sneaker }) => {
  return (
    <Thumbnail>
      <SneakerImage src={sneaker.imageUrl} alt={sneaker.name} />
    </Thumbnail>
  );
};

SneakerThumbnail.propTypes = {
  sneaker: PropTypes.object,
};

export default SneakerThumbnail;
