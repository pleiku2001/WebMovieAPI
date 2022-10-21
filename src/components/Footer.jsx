import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
const Container = styled.div`
  width: 100%;
  color: white;
  background-image: linear-gradient(180deg, #081b27, #132a37cc),
    url("https://images.unsplash.com/photo-1570385253185-75d46e6cc2c6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80");
  background-position: left;
  background-repeat: no-repeat;
  background-size: cover;
  /* height: 70vh; */
  position: relative;
`;
const Content = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  @media only screen and (max-width: 850px) {
      /* background-color: red; */
      display: flex;
      flex-direction: column;
  }
`;
const Ul = styled.ul`
  display: flex;
  flex-direction: column;
  margin: 110px;
  @media only screen and (max-width: 850px) {
      /* background-color: red; */
      display: flex;
      flex-direction: row;
  }
`;
const Li = styled(Link)`
  margin: 15px;
  text-decoration: none;
  color: white;
  width: 100px;
  /* font-weight: bold; */
  &:hover {
    color: #f1b722;
  }
`;
const Img = styled.img`
  width: 50px;
  height: 50px;
`;

function Footer() {
  return (
    <Container>
      <Content>
        <Ul>
          <Li to={"/"}>Contact</Li>
          <Li to={"/"}>Introduction</Li>
          <Li to={"/"}>License</Li>
        </Ul>
        <Ul>
          <Li to={"/"}>New Movies</Li>
          <Li to={"/"}>TV Shows</Li>
          <Li to={"/"}>Movies</Li>
        </Ul>
        <Ul>
          <Li to={"/"}>
            <Img
              src="https://cdn-icons-png.flaticon.com/512/733/733547.png"
              alt=""
            />
          </Li>
          <Li to={"/"}>
            <Img
              src="https://cdn-icons-png.flaticon.com/512/733/733558.png"
              alt=""
            />
          </Li>
          <Li to={"/"}>
            <Img
              src="https://cdn-icons-png.flaticon.com/128/733/733590.png"
              alt=""
            />
          </Li>
        </Ul>
      </Content>
    </Container>
  );
}

export default Footer;
