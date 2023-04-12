import React from "react";
import Main from "../Main";
import Row from "../Row";
import requests from "../../Request";

const Home = () => {
  return (
    <>
      <Main />
      <Row rowID="1" title="Trending" fetchURL={requests.requestTrending} />
      <Row rowID="3" title="Most Popular" fetchURL={requests.requestPopular} />
      <Row rowID="4" title="Top Rated" fetchURL={requests.requestTopRated} />
      <Row rowID="5" title="UpComing" fetchURL={requests.requestUpcoming} />
    </>
  );
};

export default Home;
