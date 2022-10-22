import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import film from "../assets/popcorn.png";

import { BiAlignLeft } from "react-icons/bi";
import { BiLabel } from "react-icons/bi";

const Container = styled.div`
  width: 100%;
  color: white;
  /* background-color: #192f3b; */
  background: linear-gradient(#081b27, #192f3b);
  /* url("https://cdn.pixabay.com/photo/2018/11/23/21/59/westminster-3834645__340.jpg"); */
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  height: 10vh;
  position: fixed;
  z-index: 3;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: space-around;
`;
const Img = styled.img`
  width: 50px;
  /* color: white; */
  /* background-color: white; */
  /* flex: 1; */
`;
const Cate = styled.div`
  display: flex;
  @media only screen and (max-width: 1259px) {
    display: flex;
    flex-direction: column;
    height: 100vh;
    width: 210px;
    position: fixed;
    color: #f1b722;
    top: 0;
    /* right: 0; */
    right: ${(props) => (props.open ? "0" : " -100%")};
    background-color: #081b27;
    gap: 10px;
    align-items: start;
    padding-left: 10px;
    justify-content: space-around;
    font-weight: bold;
    /* visibility: ${(props) => (props.open ? "visible" : " hidden")}; */
    font-size: 20px;
    transition: all ease 0.7s;
    opacity: 0.8;
}
`;
const LinkCate = styled(Link)`
  margin: 10px;
  text-decoration: none;
  color: white;
  &:hover {
    color: #f1b722;
    /* text-decoration: underline; */
  }
`;
const BtnIcon = styled.div`
  position: absolute;
  top: 20px;
  right: 80px;
  cursor: pointer;

  visibility: ${(props) => (props.open ? "hidden" : " visible")};

  @media only screen and (min-width: 1259px) {
    visibility: hidden;
  }
`;
const BtnIconList = styled.div`
  
  cursor: pointer;
  padding-left: 10px;
  /* visibility: ${(props) => (props.open ? "hidden" : " visible")}; */
  :hover{
    color: blueviolet;
  }
  @media only screen and (min-width: 1259px) {
    visibility: hidden;
  }
`;

function Header() {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(!open);

  return (
    <Container>
      <LinkCate to={"/"}>
        <Img src={film} alt="dfs" />
      </LinkCate>
      <BtnIcon onClick={handleOpen} open={open}>
       
     
        <BiAlignLeft
          style={{ fontSize: "30px", cursor: "pointer", color: "yellow" }}
        />
      </BtnIcon>
      <Cate open={open}>
        <BtnIconList>
          <BiLabel
            style={{ fontSize: "30px", cursor: "pointer" }}
            onClick={handleOpen}
            open={open}
          />
        </BtnIconList>
        <LinkCate to={"/newMovies"}>New Movies</LinkCate>
        <LinkCate to={"/newTVShows"}>New TV Shows</LinkCate>
        <LinkCate to={"/polularMovies"}>Popular Movies</LinkCate>
        <LinkCate to={"/popularTVShows"}>Popular TV Shows</LinkCate>
        <LinkCate to={"/TopRated"}>Top Rated Movies</LinkCate>
      </Cate>
    </Container>
  );
}

export default Header;
