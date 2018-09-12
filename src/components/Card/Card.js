import React from "react";
import "./Card.css";

const Card = props => (
  <div className="card">
    <img 
      src={props.src}
      alt={props.src}
      onClick={() => props.cardClicked(props.src)}
    />
  </div>
);

export default Card;
