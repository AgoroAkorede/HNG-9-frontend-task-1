import React from "react";
import "./home.scss";
import Header from './../header/header';
import Content from './../content/content';
import Footer from './../footer/footer';
import Socials from "./../socials/socials";

function Home() {
  return (
    <div className="home">
      <Header />
      <Content />
    </div>
  );
}

export default Home;
