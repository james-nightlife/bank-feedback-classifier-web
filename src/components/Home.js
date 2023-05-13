import React from "react";
import Banner from "./Banner";
import FromComponent from "./FormComponent";

function Home() {
  return (
    <div className="content-layout">
      <Banner />
      <div className="main-page">
        <FromComponent />
      </div>
    </div>
  );
}

export default Home;
