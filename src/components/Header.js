import React from "react";
import Form from "./Form";
import Navigation from "./Navigation";

const Header = ({ history, handleSubmit }) => {
  return (
    <div>
      <h1>SnapShot</h1>
      {console.log("fuckkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkk")}
      {console.log("fuckkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkk")}
      {console.log("fuckkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkk")}
      {console.log("fuckkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkk")}
      <Form history={history} handleSubmit={handleSubmit} />
      <Navigation />
    </div>
  );
};

export default Header;
