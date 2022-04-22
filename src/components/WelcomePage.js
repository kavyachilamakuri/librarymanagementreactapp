import React from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
const WelcomePage = () => {
  return (
    <>
      <div className="WelcomeHeading">
        Welcome aboard,Please Navigate to the add page by clicking the button
        below
      </div>
      <Link to="/add">
        <Button variant="primary">Add Course</Button>
      </Link>
    </>
  );
};
export default WelcomePage;
