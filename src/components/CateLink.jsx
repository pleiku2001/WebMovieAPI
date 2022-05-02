import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import styled from "styled-components";

const Content = styled.div`
    margin: 5px auto;
`

export default function CateLink({ idCate,type}) {
  const [cate, setCate] = useState();
  const [cate1, setCate1] = useState();
  useEffect(() => {
    axios
      .get(
        "https://api.themoviedb.org/3/genre/movie/list?api_key=3bf3a3b00cb251027bb7566559b066c1&language=en-US" 
      )
      .then((res) => {
        // console.log(res?.data?.genres);
        setCate(res?.data?.genres);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  useEffect(() => {
    axios
      .get(
       "https://api.themoviedb.org/3/genre/tv/list?api_key=3bf3a3b00cb251027bb7566559b066c1&language=en-US"
      )
      .then((res) => {
        // console.log(res?.data?.genres);
        setCate1(res?.data?.genres);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
//   console.log(type);
  let category
  type === "movie" ? ( category =  cate?.filter((e)=> e.id === idCate )[0]?.name) : (( category =  cate1?.filter((e)=> e.id === idCate )[0]?.name))
  

  return <Content>{category}</Content>;
}
