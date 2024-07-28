import React from "react";
import background from "/img/img-site/tresse_01.webp";

const Index = () => {
  const pageStyle = {
    backgroundImage: `url(${background})`,
    height: "100vh",
    fontSize: "50px",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
  };
  return (
    <div className="index" style={pageStyle}>
      <h1>Page D'acceuil</h1>
      <img src="/img-site/tresse_01.webp" alt="" />
    </div>
  );
};

export default Index;
