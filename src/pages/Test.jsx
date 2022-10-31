import axios from "axios";
import * as React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";

export default function Test() {
  const [data, setData] = useState([]);
  const [search, setSearch] = useState("");
  const imgLink = "https://image.tmdb.org/t/p/w500";
  const image = 'https://images.unsplash.com/photo-1594908900066-3f47337549d8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fG1vdmllfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60'
  let name = useParams();
  let x = name?.name;
  useEffect(() => {
    axios
    .get(
      `https://api.themoviedb.org/3/search/tv?api_key=3bf3a3b00cb251027bb7566559b066c1&language=en-US&include_adult=false&query=${x}`
      )
      .then((res) => {
        console.log(res);
        setData(res?.data?.results);
      })
      .catch((error) => {
        console.log(error);
      });
    }, [x]);
    
    // console.log(x);
  console.log(data)
  // const Submit = (e)=>{
  //   e.preventDefault();
  //   console.log(data)
  // }

  return (
    <>
      <div>
        {/* <input onChange={(e)=>setSearch(e.target.value)} />
        <button onClick={Submit}>Search</button> */}
        <h1> Result:{x}</h1>
        {data?.map((e) => {
          return (
            <>
              <img
                key={e?.id}
                style={{ width: "100px" }}
                alt=""
                src={ imgLink + e?.poster_path   }
              />
              <div> {e?.title || e?.name}</div>
              <hr/>
            </>
          );
        })}
      </div>
    </>
  );
}
