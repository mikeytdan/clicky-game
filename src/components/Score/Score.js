import React from "react";
import "./Score.css";

const Container = props =>
  <div className={`container${props.fluid ? "-fluid" : ""}`} {...props} />;

const Score = props => (
    <div className="container text-center">
      <h2>Score: {props.guessed}</h2>
    </div>
  );

export default Score;
