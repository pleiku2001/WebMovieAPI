import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import start from "../assets/rating.png";
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
const Container = styled.div`
  width: 100%;
`;
const Content = styled.div``;
const Title = styled.div`
  font-size: 25px;
  color: #f1b722;
  margin: 10px;
  padding: 10px ;
`;
const Lists = styled.div`
  height: 70vh;
  /* background-color: #a7a79e; */
  overflow-y: scroll;
  body::-webkit-scrollbar {
    width: 0.8em;
    background-color: #0e2736;
  }

  body::-webkit-scrollbar-track {
    box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
  }

  body::-webkit-scrollbar-thumb {
    background-color: #17384d;
  }
  body::-webkit-scrollbar-thumb:hover {
    background-color: #1d425b;
  }
`;

const List = styled.div`
  display: flex;
  padding: 20px;
`;
const Name = styled(Link)`
  margin-left: 10px;
  text-decoration: none;
  color: #f1b722;

  &:hover {
    color: white;
  }
`;
const Picture = styled.div`
  position: relative;
`;
const Start = styled.div`
  position: absolute;
  top: -5px;
  left: -5px;
  opacity: 2;
  border-radius: 50%;
  background-color: #f1b722;
  padding: 5px;
`;
const Img = styled.img`
  width: 70px;
  /* height: 100px; */
  border-radius: 5px;
`;

function SIdeBar() {
  const [data, setData] = useState();
  const [data1, setData1] = useState();
  const [data2, setData2] = useState();
  
  const imgLink = "https://image.tmdb.org/t/p/w500/";
    useEffect(() => {
      axios
        .get(
          "https://api.themoviedb.org/3/movie/top_rated?api_key=3bf3a3b00cb251027bb7566559b066c1&language=en-US&page=1"
        )
        .then((res) => {
          // console.log(res?.data?.results);
          setData(res?.data?.results);
        })
        .catch((error) => {
          console.log(error);
        });
    }, []);
  useEffect(() => {
    axios
      .get(
        "https://api.themoviedb.org/3/movie/popular?api_key=3bf3a3b00cb251027bb7566559b066c1"
      )
      .then((res) => {
        // console.log(res?.data?.results);
        setData1(res?.data?.results);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  useEffect(() => {
    axios
      .get(
        "https://api.themoviedb.org/3/movie/upcoming?api_key=3bf3a3b00cb251027bb7566559b066c1&language=en-US&page=1"
      )
      .then((res) => {
        // console.log(res?.data?.results);
        setData2(res?.data?.results);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <Container>
      <Content>
        <Title>Top Rarking</Title>
        <Lists>
         
          {/* backdrop_path id original_title overview  poster_path  release_date   title vote_average */}
          {data?.map((e) => {
            return (
              <List key={e.id}>
                <Picture>
                  <Img src={imgLink + e.poster_path} />
                  <Start>{e.vote_average}</Start>
                </Picture>
                <Name to={"/movie/"+e.id}>{e.title}</Name>
                
              </List>
            );
          })}
        </Lists>
      </Content>
      {/*  */}
      <Content>
        <Title>Popular Movies</Title>
        <Lists>
        {data1?.map((e) => {
            return (
              <List key={e.id}>
                <Picture>
                  <Img src={imgLink + e.poster_path} />
                  <Start>{e.vote_average}</Start>
                </Picture>
                <Name to={"/movie/"+e.id}>{e.title}</Name>
              </List>
            );
          })}
        </Lists>
      </Content>
      {/*  */}
      <Content>
        <Title>Upcomming</Title>
        <Lists>
        {data2?.map((e) => {
            return (
              <List key={e.id}>
                <Picture>
                  <Img src={imgLink + e.poster_path} />
                  <Start>{e.vote_average}</Start>
                </Picture>
                <Name to={"/movie/"+e.id}>{e.title}</Name>
              </List>
            );
          })}
        </Lists>
      </Content>
      {/*  */}
    </Container>
  );
}

export default SIdeBar;
