import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import film from "../assets/popcorn.png"
const Container = styled.div`
  width: 100%;
  color: white;
  /* background-color: #192f3b; */
  background: linear-gradient( #192f3b, #081b27);
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
  /* flex: 2; */
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
function Header() {
  return (
    <Container>
      <LinkCate to={"/"}>
        <Img
          src={film}
          alt="dfs"
        />
      </LinkCate>
      <Cate>
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
