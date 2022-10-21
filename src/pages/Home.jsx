import { style } from "@mui/system";
import React from "react";
import styled from "styled-components";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Movies from "../components/Movies";
import SIdeBar from "../components/SIdeBar";

const Main = styled.div`
  position: relative;
  overflow-x: hidden;
`;

const Container = styled.div`
  width: 100%;
  color: white;
  background-image: linear-gradient(180deg, #132a37cc, #132a37cc),
    url("https://images.unsplash.com/photo-1612036782180-6f0b6cd846fe?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  /* height: 70vh; */
  position: relative;
  background-color: #081b27;
  min-height: 370vh;
  color: white;
  padding: 20vh;
  display: flex;
  @media only screen and (min-width: 768px) {

  }
`;

const Right = styled.div`
  display: flex;
  flex: 4;
  /* background-color: red; */
  @media only screen and (max-width: 1259px) {

    /* flex: 5; */
    width: 100%;
    /* background-color: red; */

  }
`;
const Left = styled.div`
  flex: 1;
  @media only screen and (max-width: 1259px) {
    visibility: hidden;
    display: none;

  }
  /* background-color: blue; */
`;

function Home() {
  return (
    <Main>
      <Header />
      <Container>
        <Right>
          <Movies />
        </Right>
        <Left>
          <SIdeBar />
        </Left>
      </Container>
      <Footer />
    </Main>
  );
}

export default Home;
