import React from "react";
import styled from "@emotion/styled";

const PresentationCard = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const UsersDisplay = styled.div`
  display: flex;
  width: 500px;
  margin: 10px;
  padding: 30px;
  background-color: #ffff;
  border: 1px solid #c4c4c4;
  border-radius: 5px;
`;

const UserContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 68px;
  height: 68px;
  border-radius: 100%;
  background-color: #ffff;
  border: 3px solid #e12e6f;
  margin: 0px 5px;
`;

const UserImage = styled.img`
  width: 60px;
  height: 60px;
  border-radius: 100%;
  max-width: 100%;
`;

const Presentation = () => {
  return (
    <PresentationCard>
      <UsersDisplay>
        <UserContainer>
          <UserImage src="/assets/avatars/bujangan.jpg" />
        </UserContainer>
        <UserContainer>
          <UserImage src="/assets/avatars/jonathan.jpg" alt="jonathan" />
        </UserContainer>
        <UserContainer>
          <UserImage src="/assets/avatars/nickolakoshkosh.jpg" alt="jonathan" />
        </UserContainer>
      </UsersDisplay>
    </PresentationCard>
  );
};

export default Presentation;
