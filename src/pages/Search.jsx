import axios from "axios";
import * as React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { Link, Navigate, useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";
import Footer from "../components/Footer";
import Header from "../components/Header";

const Background = styled.div`
  background-color: #11374e;
`;

const Container = styled.div`
  padding-top: 100px;
  width: 80%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  min-height: 50vh;
`;
const Title = styled.div`
  margin: 20px auto;
  color: #f1b722;
  font-size: 30px;
  font-weight: bold;
`;

const Info = styled.div`
  display: flex;
  flex-direction: row;
  padding: 20px;
  gap: 20px;
  &:hover {
    background-color: white;
    /* color: red; */
    cursor: pointer;
  }
`;
const Image = styled.div``;
const Des = styled.div`
  display: flex;
  flex-direction: column;
  color: #f1b722;
  gap: 20px;
`;
const Name = styled.div`
  font-size: 25px;
  font-weight: bold;
`;
const Match = styled.div``;
const Day = styled.div``;

export default function Search() {
  const [data, setData] = useState([]);
  const [dataTV,setDataTV] = useState([])
  const [search, setSearch] = useState("");

  const imgLink = "https://image.tmdb.org/t/p/w500";
  const image =
    "https://images.unsplash.com/photo-1594908900066-3f47337549d8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fG1vdmllfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60";
  let name = useParams();
  let x = name?.name;
  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/search/movie?api_key=3bf3a3b00cb251027bb7566559b066c1&language=en-US&include_adult=false&query=${x}`
      )
      .then((res) => {
        // console.log(res);
        setData(res?.data?.results);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [x]);
  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/search/tv?api_key=3bf3a3b00cb251027bb7566559b066c1&language=en-US&include_adult=false&query=${x}`
      )
      .then((res) => {
          setDataTV(res?.data?.results);
          console.log(res?.data?.results);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [x]);


  



  return (
    <Background>
      <Header />
      <Container>
        {/* <input onChange={(e)=>setSearch(e.target.value)} />
        <button onClick={Submit}>Search</button> */}
        <Title> Result: {x}</Title>


        {data?.map((e) => {
          return (
            <Link to={'/movie/'+e?.id} style={{ "textDecoration": "none"}}>
              <Info key={e?.id} >
                <img
                  //    release_date
                  // vote_average
                  //  id
                  style={{ width: "100px" }}
                  alt="imagePoster"
                  src={imgLink + e?.poster_path}
                />
                <Des>
                  <Name> {e?.title}</Name>
                  <Day>Day Release: {e?.release_date}</Day>
                  <Match>Vote: {e?.vote_average}</Match>
                </Des>
              </Info>
              <hr />
            </Link>
          );
        })}
        <div>___________________________________________________________________________</div>

        {dataTV?.map((e) => {
          return (
            <Link to={'/tv/'+e?.id} style={{ "textDecoration": "none"}}>
              <Info key={e?.id} >
                <img
                  //    release_date
                  // vote_average
                  //  id
                  style={{ width: "100px" }}
                  alt="imagePoster"
                  src={imgLink +  e?.backdrop_path}
                />
                <Des>
                  <Name> {e?.name}</Name>
                  <Day>Day Release: {e?.first_air_date}</Day>
                  <Match>Vote: {e?.vote_average}</Match>
                </Des>
              </Info>
              <hr />
            </Link>
          );
        })}


      </Container>
      <Footer />
    </Background>
  );
}
