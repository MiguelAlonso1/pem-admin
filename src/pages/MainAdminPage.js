import React from "react";
import testIcon from "../assets/icons/toxicology-icon-80.png";
import "./pages.css";
import Categories from "../components/Categories";
export default () => {
  return (
    <div className="container">
      <h1>Main Admin Page</h1>
      <Categories icon={testIcon} />
      <Categories icon={testIcon} />
      <Categories icon={testIcon} />
      <Categories icon={testIcon} />
    </div>
  );
};
