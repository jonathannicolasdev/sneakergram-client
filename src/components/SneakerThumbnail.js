import React, { useState } from "react";
import PropTypes from "prop-types";
import styled from "@emotion/styled";
import Modal from "react-overlays/Modal";
import SneakerCard from "./SneakerCard";

const Thumbnail = styled.div`
  display: flex;
  align-items: center;
  width: 300px;
  height: 200px;
  background-color: #fff;
  margin: 10px;
  overflow: hidden;
`;

const Backdrop = styled("div")`
  position: fixed;
  z-index: 1040;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: #000;
  opacity: 0.5;
`;

// we use some pseudo random coords so nested modals
// don't sit right on top of each other.
const RandomlyPositionedModal = styled(Modal)`
  position: fixed;
  z-index: 1040;
  top: 20%;
  left: 25%;
`;

const SneakerImage = styled.img`
  width: 300px;
  /* height: 200px; */
  object-fit: cover;
`;

const SneakerThumbnail = ({ sneaker }) => {
  const [show, setShow] = useState(false);

  const renderBackdrop = (props) => <Backdrop {...props} />;
  return (
    <>
      <Thumbnail onClick={() => setShow(true)}>
        <SneakerImage src={sneaker.imageUrl} alt={sneaker.name} />
      </Thumbnail>

      <RandomlyPositionedModal
        show={show}
        onHide={() => setShow(false)}
        renderBackdrop={renderBackdrop}
        aria-labelledby="modal-label"
      >
        <SneakerCard sneaker={sneaker}></SneakerCard>
      </RandomlyPositionedModal>
    </>
  );
};

SneakerThumbnail.propTypes = {
  sneaker: PropTypes.object,
};

export default SneakerThumbnail;
