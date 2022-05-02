import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
const Container = styled.div`
  width: 100%;
  color: white;
  background-image: linear-gradient(180deg, #081b27, #132a37cc),
    url("https://cdn.pixabay.com/photo/2018/11/23/21/59/westminster-3834645__340.jpg");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  height: 70vh;
  position: relative;
`;
const Content = styled.div`
    display: flex;

`;
const Ul = styled.ul`
    display: flex;
    flex-direction: column;
    margin: 110px;
`;
const Li = styled(Link)`
    margin: 15px;
    text-decoration: none;
    color: white;
    /* font-weight: bold; */
    &:hover{
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
