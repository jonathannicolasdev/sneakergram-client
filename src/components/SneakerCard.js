import React from "react";
import styled from "@emotion/styled";
import PropTypes from "prop-types";

const Card = styled.div`
  width: 500px;
  background-color: #ffff;
  border: 1px solid #c4c4c4;
  padding: 30px;
  border-radius: 5px;
  margin-bottom: 30px;
`;

// const UserAvatar = styled.img`
//   width: 35px;
//   border-radius: 100%;
// `;

const SneakerImage = styled.img`
  max-width: 100%;
  height: auto;
`;

// const UserInfo = styled.div`
//   display: flex;
//   align-items: center;
//   span {
//     margin-left: 10px;
//     font-weight: bold;
//     font-size: 14px;
//   }
// `;

const SneakerInfo = styled.div`
  display: flex;
  ul {
    list-style-type: none;
    padding: 0;
  }
`;

const SneakerInfoKeys = styled.ul`
  text-transform: uppercase;
  font-weight: 700;
`;

const SneakerInfoValues = styled.ul`
  margin-left: 30px;
`;

const SneakerCard = ({ sneaker }) => {
  return (
    <Card>
      {/* <UserInfo>
                    <UserAvatar
                      src={sneaker.createdBy.avatarUrl}
                      alt={sneaker.createdBy.username}
                    />
                    <span>{sneaker.createdBy.username}</span>
                  </UserInfo> */}
      <div>
        <SneakerImage src={sneaker.imageUrl} alt={sneaker.name} />
      </div>
      <div>
        <h2>{sneaker.name}</h2>
        <SneakerInfo>
          <SneakerInfoKeys>
            <li>style</li>
            <li>colorway</li>
            <li>retail price</li>
            <li>release date</li>
            <li>size</li>
            <li>location</li>
          </SneakerInfoKeys>
          <SneakerInfoValues>
            <li>{sneaker.style}</li>
            <li>{sneaker.colorway}</li>
            <li>{sneaker.retailPrice}</li>
            <li>{sneaker.releaseDate ? sneaker.releaseDate : "-"}</li>
            <li>{sneaker.size}</li>
            <li>{sneaker.location}</li>
          </SneakerInfoValues>
        </SneakerInfo>
      </div>
    </Card>
  );
};

SneakerCard.propTypes = {
  sneaker: PropTypes.object,
};

export default SneakerCard;
