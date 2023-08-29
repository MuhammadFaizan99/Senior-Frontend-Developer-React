import React from "react";
import ListingCard from "../ListingCard/ListingCard";

function CardView({ listings }) {
  return (
    <div>
      {listings.map((listing) => (
        <ListingCard key={listing.id} listing={listing} />
      ))}
    </div>
  );
}

export default CardView;
