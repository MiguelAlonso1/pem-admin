import React from "react";
import testIcon from "../assets/icons/toxicology-icon-80.png";
import "./pages.css";
import Categories from "../components/Categories";
import index from "../assets/icons/index";
import Colors from "../constants/Colors";

export default () => {
  return (
    <div className="container ">
      <h1>Main Admin Page</h1>
      <div className="d-flex justify-content-center align-items-center flex-wrap">
        <Categories
          title="Medical"
          image={index.medical}
          color={Colors.medicalTile}
        />
        <Categories icon={testIcon} />
        <Categories icon={testIcon} />
        <Categories icon={testIcon} />
      </div>
    </div>
  );
};
