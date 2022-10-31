import React from "react";
import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import CateLink from "./CateLink";
import CategoryLink from "../pages/TopRated";

import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";

const Container = styled.div`
  /* background-color: red; */
`;
const Title = styled.div`
  margin: 20px;
  font-weight: bold;
  font-size: 30px;
  color: #f1b722;
`;
const Films = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: start;
`;
const Film = styled.div`
  position: relative;
  margin: 20px;
  display: flex;
  flex-direction: column;
`;
const Img = styled.img`
  width: 170px;
  height: 250px;
  border-radius: 10px;
  /* background-color: blue; */
  &:hover {
    box-shadow: -5px -6px 8px 1px #f1b722;
    -webkit-box-shadow: -5px -6px 8px 1px #f1b722;
    -moz-box-shadow: -5px -6px 8px 1px #f1b722;
    /* transition: ease-in-out 0.5s; */
    opacity: 0.8;
  }
`;
const Name = styled(Link)`
  margin: 10px auto;
  font-weight: bold;
  font-size: 20px;
  text-decoration: none;
  color: white;
  &:hover {
    color: #f1b722;
  }
  /* width: 15px; */
`;
const NameLink = styled.div`
  width: 170px;
  word-wrap: break-word;
`;
const Number = styled.div`
  position: absolute;
  top: -10px;
  left: 70px;
  background-color: #f1b722;
  border-radius: 50%;
  padding: 5px;
`;
const Category = styled(Link)`
  text-decoration: none;
  color: #f1b722;
  &:hover {
    color: white;
  }
`;

const StackNigate = styled.div`
  color: white;
  background-color: #11374e;
  border-radius: 10px;
  text-align: center;
`;
const CoverInput = styled.div`
  width: 100%;
  /* background-color: red; */
  height: 50px;
  margin-top: 20px;
  display: flex;
  padding: 5px;
  gap: 5px;
`;
const Input = styled.input`
  flex: 3;
  border: 2px solid  #f1b722;
  border-radius: 5px;
  padding-left: 5px;
  background-color: black;
  color:  #f1b722;
`;
const BtnInput = styled.button`
  border: 2px solid  #f1b722;
  background-color: black;
  border-radius: 5px;
  flex: 1;
  color:  #f1b722;
  font-size: 20px;
  font-weight: bold;
  &:hover{
    border-color: red;
    color: red;
    cursor: pointer;
  }
`;

function Movies() {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const [countPage, setCountPage] = useState();
  const navigate = useNavigate()
  const handleChange = (event, value) => {
    setPage(value);
    window.scrollTo(0, 0);
  };

  const imgLink = "https://image.tmdb.org/t/p/w500/";
  const param = useParams();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [param]);

  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/trending/all/day?api_key=3bf3a3b00cb251027bb7566559b066c1&page=${page}`
      )
      .then((res) => {
        setCountPage(res?.data?.total_pages);
        // console.log(res?.data?.total_pages)
        setData(res?.data?.results);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [page]);
  // console.log(cate);
  // cate.filter
  // console.log(cate?.filter(g => g.id > 28)[0].name)
  const [search, setSearch] = useState([]);
  const Submit = (e) => {
    e.preventDefault();
    navigate(`/search/${search}`)
  };
  return (
    <>
      <Container>
        <CoverInput>
          <Input onChange={(e) => setSearch(e.target.value)} placeholder="Search movies ..."/>
          <BtnInput onClick={Submit}>Search</BtnInput>
        </CoverInput>
        <Title>TRENDING MOVIES</Title>
        <Films>
          {data?.map((e) => {
            return (
              <Film>
                <Img src={imgLink + e.poster_path}></Img>
                <Number>{e.vote_average.toFixed(2)}</Number>
                {e?.media_type === "movie" ? (
                  <Name
                    to={"/" + e?.media_type + "/" + e.id}
                    cate={e?.media_type}
                  >
                    <NameLink>{e.title || e.name}</NameLink>
                  </Name>
                ) : (
                  <Name
                    to={"/" + e?.media_type + "/" + e.id}
                    cate={e?.media_type}
                  >
                    <NameLink>{e.title || e.name}</NameLink>
                  </Name>
                )}

                {e?.genre_ids?.map((k) => {
                  return (
                    <Category to={"/"}>
                      <NameLink>
                        <CateLink idCate={k} type={e?.media_type} />
                      </NameLink>
                    </Category>
                  );
                })}
              </Film>
            );
          })}
        </Films>
        <StackNigate>
          <Stack spacing={2}>
            {/* <Typography>Page: {page}</Typography> */}
            <Pagination
              color="primary"
              count={countPage}
              page={page}
              onChange={handleChange}
            />
          </Stack>
        </StackNigate>
      </Container>
    </>
  );
}

export default Movies;
