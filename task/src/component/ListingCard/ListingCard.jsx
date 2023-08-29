import React from "react";
import { Link } from "react-router-dom";
import "./ListingCard.css";

function ListingCard({ listing }) {
  return (
    <div className="listing-card">
      <img src={listing.imageUrl} alt={listing.title} />
      <h3>{listing.title}</h3>
      <p>{listing.address}</p>
      <p>Beds: {listing.beds}</p>
      <p>Bath: {listing.bath}</p>
      <p>Covered Area: {listing.coveredAreaSQFT} sqft</p>
      <p>Property Type: {listing.propertyType}</p>
      <p>Commercial: {listing.isCommercial ? "Yes" : "No"}</p>
      <p>Price: ${listing.price}</p>
      <Link to={`/listing/${listing.id}`}>View Details</Link>
    </div>
  );
}

export default ListingCard;
