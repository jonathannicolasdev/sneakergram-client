import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import styled from "@emotion/styled";

import Header from "../components/Header";
import Presentation from "../components/Presentation";
import SneakerCard from "../components/SneakerCard";

import getSneakers from "../redux/actions/sneakers/getSneakers"; // action/thunk

const HomeContainer = styled.div`
  background-color: #efefef;
`;
const SneakerContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const SneakerCards = styled.div``;

const Home = ({ isLoading, sneakers, handleGetSneakers }) => {
  useEffect(() => {
    handleGetSneakers();
  }, [handleGetSneakers]);

  return (
    <HomeContainer>
      <Header></Header>
      <Presentation></Presentation>
      <SneakerContainer>
        {isLoading && <p>Loading sneakers...</p>}
        {!isLoading && sneakers && (
          <SneakerCards>
            {sneakers.map((sneaker, index) => {
              return <SneakerCard sneaker={sneaker} key={index}></SneakerCard>;
            })}
          </SneakerCards>
        )}
      </SneakerContainer>
    </HomeContainer>
  );
};

Home.propTypes = {
  isLoading: PropTypes.bool,
  sneakers: PropTypes.array,
  handleGetSneakers: PropTypes.func,
};

const mapStateToProps = (state) => {
  return {
    isLoading: state.sneakers.isLoading,
    sneakers: state.sneakers.data,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    handleGetSneakers: () => dispatch(getSneakers()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
