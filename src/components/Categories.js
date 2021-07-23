import React from "react";

export default (props) => {
  return (
    <div
      className="test m-2 d-flex justify-content-center align-items-center"
      style={{
        height: "20rem",
        width: "20rem",
        overflow: "hidden",
        background: props.color,
      }}
    >
      <div
        style={{
          backgroundImage: `url(${props.image})`,
          width: 80,
          height: 80,
        }}
      >
        <h6>{props.title}</h6>
      </div>
    </div>
  );
};
