import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import mockListings from "../mockListings";
import "./DetailPage.css";

function DetailPage() {
  const { id } = useParams();
  const [listingDetails, setListingDetails] = useState(null);

  useEffect(() => {
    // Find the listing details based on the ID from mockListings
    const selectedListing = mockListings.find(
      (listing) => listing.id === parseInt(id)
    );

    if (selectedListing) {
      setListingDetails(selectedListing);
    }
  }, [id]);

  if (!listingDetails) {
    return <div>Loading...</div>;
  }

  return (
    <div className="detail-page">
      <img src={listingDetails.imageUrl} alt={listingDetails.title} />
      <h1>{listingDetails.title}</h1>
      <p>{listingDetails.address}</p>
      <p>Beds: {listingDetails.beds}</p>
      <p>Bath: {listingDetails.bath}</p>
      <p>Covered Area: {listingDetails.coveredAreaSQFT} sqft</p>
      <p>Property Type: {listingDetails.propertyType}</p>
      <p>Commercial: {listingDetails.isCommercial ? "Yes" : "No"}</p>
      <p>Price: ${listingDetails.price}</p>
    </div>
  );
}

export default DetailPage;
