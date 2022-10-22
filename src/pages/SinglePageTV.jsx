import { style } from "@mui/system";
import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Movies from "../components/Movies";
import SIdeBar from "../components/SIdeBar";

const Main = styled.div`
  /* position: relative; */
  overflow-x: none;
  background-color: #081b27;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Container = styled.div`
  width: 100%;
  overflow-x: none;

  color: white;


  background-color: #081b27;
  /* background-color: red; */

  min-height: 200vh;
  color: white;
  padding: 20vh;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  /* justify-content: space-around; */

  /* opacity: 0.5; */
`;

const Styles1 = styled.img`
  background-image: url("https://lumiere-a.akamaihd.net/v1/images/au_movies_poster_doctorstrange_multiverseofmadness_trai_cc08bfbc.jpeg");
  background-repeat: repeat;
  background-position: right;
  background-size: contain;
  opacity: 0.8;
  /* width: 30vh; */
  /* margin-top: 20vh; */
  flex: 1;
`;
const Styles2 = styled.img`
  flex: 1;
  opacity: 0.8;
  /* width: 30vh; */
  background-image: url("https://lumiere-a.akamaihd.net/v1/images/au_movies_poster_doctorstrange_multiverseofmadness_trai_cc08bfbc.jpeg");
  background-repeat: repeat;
  background-position: left;
  background-size: contain;
  /* margin-top: 20vh; */
`;
const Content = styled.div`
 overflow-x: none;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: start;
  /* flex: 3; */
  /* background-color: red; */
  /* opacity: 0.8; */
  padding: 1vh;
  z-index: 2;
`;
const Infomation = styled.div`
  display: flex;
  padding: 5px ;
`;

const Img = styled.img`
  /* background-image: url("https://lumiere-a.akamaihd.net/v1/images/au_movies_poster_doctorstrange_multiverseofmadness_trai_cc08bfbc.jpeg"); */
  /* background-repeat: repeat; */
  background-position: center;
  background-size: contain;
  width: 30vh;
`;
const Info = styled.div`
  padding: 10px;
`;
const Title = styled.div`
  font-size: 5vh;
  font-weight: bold;

`;
const Cate = styled.div`
  /* margin-top: 20px ; */
  /* text-decoration: none; */
  color: #f1b722;
  margin: 5px;
  /* padding-top: 20px; */
`;
const Day = styled.div`
  margin: 20px auto;
`;
const Btn = styled.div`
  margin-top: 20px;
`;
const Button = styled.button`
  width: 100px;
  height: 30px;
  margin-right: 5px;
  border-radius: 5px;
  cursor: pointer;
  font-weight: bold;
  color: #081b27;
  background-color: #f1b722;
  &:hover {
    color: #f1b722;
    background-color: #081b27;
  }
`;
const Detail = styled.div`
  /* width: 80%; */
  margin-top: 50px;
  margin-left: 5px;
  word-wrap: break-word;
  line-height: 23px;
  -webkit-text-size-adjust: 100%;
  color: white;
  font-family: Roboto, sans-serif;
`;
const Review = styled.div`
  color: white;
  padding-top: 20px;
  padding-bottom: 40px;
  font-size: 40px;
  /* margin-top: 10px ; */
`;
const ErrorPage = styled.div`
z-index: 2;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  /* justify-content: center; */
`;
const Error = styled.div`
  margin: 100px auto;
  font-size: 80px;
  color: #f1b722;
`;
const TurnBack = styled.button`
  width: 100px;
  height: 30px;
  border-radius: 5px;
  cursor: pointer;
  font-weight: bold;
  color: #081b27;
  background-color: #f1b722;
  &:hover {
    color: #f1b722;
    background-color: #081b27;
  }
`;
// backdrop_path
const Layout = styled.img`
  opacity: 0.3;
  width: 100%;
  position: absolute;
  top: 80px;
  left: 0;
  /* top: 190px; */
  /* right: 50px; */
  /* height: 300px; */
  z-index: 0;
`;

/* suggestion */

const Suggest = styled.div`
  display: flex;
  width: 80%;
  height: 50vh;
  background-color: #081b27;

  justify-content: center;
  align-items: center;
  margin: auto;
  overflow-x: scroll;
  overflow-y: hidden;
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
const MoviesList = styled.div`
  width: 180px;
  /* background-color: blue; */
  margin: 10px;
`;
const Movie = styled.img`
  width: 180px;
`;
const NameMovie = styled(Link)`
  /* text-align: center; */
  text-decoration: none;
  color: white;
  font-weight: bold;
  margin: 5px;
  /* white-space: wrap; */
  /* width: 100px; */
  word-wrap: break-word;
`;
const NameFilm = styled.div`
  /* text-overflow: ellipsis; */
  /* width: 100px; */
  padding: 5px;
`;
const Liked = styled.div`
  color: white;
  margin-left: 170px;
  margin-bottom: 30px;
  font-size: 40px;
  margin:  50px auto;
`;

function SinglePageTV() {
  const [data, setData] = useState();
  const [video, setVideo] = useState();
  const [suggest, setSuggest] = useState();
  const [err, setErr] = useState(false);
  const param = useParams();
  const imgLink = "https://image.tmdb.org/t/p/w500/";
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/");
  };
 


  useEffect(() => {
    window.scrollTo(0, 0);
    // window.onload()
  }, [param]);

  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/tv/${param.movieId}?api_key=3bf3a3b00cb251027bb7566559b066c1&language=en-US`
      )
      .then((res) => {
        // console.log(res?.data);
        setData(res?.data);

      })
      .catch((error) => {
        console.log(error);
        setErr(true);
      });
  }, [param]);

  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/tv/${param.movieId}/videos?api_key=3bf3a3b00cb251027bb7566559b066c1&language=en-US`
      )
      .then((res) => {
        console.log(res?.data?.results);

        let x = res?.data?.results?.filter((e) => e.type === "Trailer");

        setVideo(x);
      })
      .catch((error) => {
        setErr(true);
        console.log(error);

      });
  }, [param]);
  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/tv/${param.movieId}/similar?api_key=3bf3a3b00cb251027bb7566559b066c1&language=en-US&page=1`
      )
      .then((res) => {
        // console.log(res?.data?.results);
        // console.log(res?.data?.results);
        setSuggest(res?.data?.results);
      })
      .catch((error) => {
        setErr(true);
        console.log(error);

      });
  }, []);

  // console.log(video);

  return (
    <Main>
      <Header />
      <Container>
        <Layout src={imgLink + data?.backdrop_path }></Layout>
        {err ? (
          <ErrorPage>
            <Error>Not Find Page</Error>
            <TurnBack onClick={handleClick}>Turn Back </TurnBack>
          </ErrorPage>
        ) : (
          <Content>
            <Infomation>
              <Img src={imgLink + data?.poster_path} alt="No image" />
              <Info>
                <Title>{data?.original_name }</Title>
                <Day>⏲{data?.release_date}</Day>
                <Day>Vote: {data?.vote_average}</Day>
                {data?.genres?.map((e) => {
                  return (
                    <Cate key={e.id} to={"/" + e.name}>
                      {e.name}
                    </Cate>
                  );
                })}
                <Btn>
                  <Button>Trailer</Button>
                  {/* <Button>Play</Button> */}
                </Btn>
              </Info>
            </Infomation>
            <Detail>
              <Review>Review</Review>
              {data?.overview}
            </Detail>
            {video?.map((e) => {
              return (
                <div key={e?.key}>
                  <Review >{e?.name}</Review>
                  <iframe
                    key={e?.key}
                    width="475"
                    height="335"
                    src={"https://www.youtube.com/embed/" + e?.key}
                    title="video"
                    frameborder="0"
                  ></iframe>
                </div>
              );
            })}
          </Content>
        )}
      </Container>
      <Liked>Recommendation</Liked>

      <Suggest>
        {suggest?.map((e) => {
          return (
            <MoviesList key={e.id}>
              <Movie src={imgLink + e?.poster_path} />
              <NameMovie to={"/tv/" + e.id}>
                <NameFilm>{e.original_name}</NameFilm>
              </NameMovie>
            </MoviesList>
          );
        })}
      </Suggest>
      <Footer />
    </Main>
  );
}

export default SinglePageTV;
