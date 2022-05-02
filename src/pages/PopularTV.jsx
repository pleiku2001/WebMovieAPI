
import React from "react";
import styled from "styled-components";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import CateLink from "../components/CateLink";


import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";


const Main = styled.div`
  position: relative;
`;

const Container = styled.div`
  width: 100%;
  background-color: #081b27;
  min-height: 250vh;
  color: white;
  padding: 20vh;
  /* padding-top: 20vh; */
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
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
  display: flex;
  justify-content: center;
`;
function PopularTV() {
    const [data, setData] = useState([]);
    const [page, setPage] = useState(1);
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
        // "https://api.themoviedb.org/3/tv/airing_today?api_key=3bf3a3b00cb251027bb7566559b066c1&language=en-US&page=1"
       `https://api.themoviedb.org/3/tv/popular?api_key=3bf3a3b00cb251027bb7566559b066c1&language=en-US&page=${page}`
      )
      .then((res) => {
        // console.log(res?.data?.results);

        setData(res?.data?.results);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [page]);
  return (
    <Main>
      <Header />
      <Container>
      <Title>POPULAR TV</Title>
       
        <Films>
          {data?.map((e) => {
            return (
              <Film>
                <Img src={imgLink + e.poster_path} ></Img>
                <Number>{e.vote_average}</Number>
                <Name to={"/tv/"+ e.id} cate={e?.media_type}>
                  <NameLink>{e.title || e.name}</NameLink>
                </Name>
               
                {e?.genre_ids?.map((k) => {
                  return (
                    <Category to={"/"}>
                      <NameLink >
                        <CateLink idCate={k} type={e?.media_type}/>
                      </NameLink>
                    </Category>
                  );
                })}
              </Film>
            );
          })}
        </Films>
        

      </Container>
      <StackNigate>
          <Stack spacing={2}>
            {/* <Typography>Page: {page}</Typography> */}
            <Pagination
              color="primary"
              count={10}
              page={page}
              onChange={handleChange}
            />
          </Stack>
        </StackNigate>
      <Footer />
    </Main>
  );
}

export default PopularTV;
