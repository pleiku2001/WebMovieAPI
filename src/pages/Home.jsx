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
  background-color: #081b27;
  min-height: 370vh;
  color: white;
  padding: 20vh;
  /* padding-top: 20vh; */
  display: flex;
  @media only screen and (min-width: 768px) {
  /* For everything bigger than 768px */
  
  
}
`;

const Right = styled.div`
  flex: 4;
  /* background-color: red; */
`;
const Left = styled.div`
  flex: 1;
  /* background-color: blue; */
`;

function Home() {
  return (
    <Main>
      <Header />
      <Container>
        <Right>
            <Movies/>
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
