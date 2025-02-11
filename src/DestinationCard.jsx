import React from "react";

const DestinationCard = ({ destination }) => {
  return (
    <div className="card">
      <img src={destination.image} alt={destination.name} className="card-img" />
      <div className="card-content">
        <h2>{destination.name}</h2>
        <h4>{destination.location}</h4>
        <p>{destination.description}</p>
        <p className="price">{destination.price}</p>
      </div>
    </div>
  );
};

export default DestinationCard;
