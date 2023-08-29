import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./ListingTable.css";

function ListingTable({ listings }) {
  const [sortKey, setSortKey] = useState("");
  const [sortDirection, setSortDirection] = useState("asc");

  const sortedListings = [...listings].sort((a, b) => {
    if (
      sortKey === "title" ||
      sortKey === "address" ||
      sortKey === "propertyType"
    ) {
      return sortDirection === "asc"
        ? a[sortKey].localeCompare(b[sortKey])
        : b[sortKey].localeCompare(a[sortKey]);
    } else {
      return sortDirection === "asc"
        ? a[sortKey] - b[sortKey]
        : b[sortKey] - a[sortKey];
    }
  });

  const handleSort = (key) => {
    if (key === sortKey) {
      setSortDirection(sortDirection === "asc" ? "desc" : "asc");
    } else {
      setSortKey(key);
      setSortDirection("asc");
    }
  };

  return (
    <table>
      <thead>
        <tr>
          <th onClick={() => handleSort("id")}>Id</th>
          <th onClick={() => handleSort("title")}>Title</th>
          <th onClick={() => handleSort("address")}>Address</th>
          <th onClick={() => handleSort("beds")}>Beds</th>
          <th onClick={() => handleSort("bath")}>Bath</th>
          <th onClick={() => handleSort("coveredAreaSQFT")}>
            Covered Area (sqft)
          </th>
          <th onClick={() => handleSort("propertyType")}>Property Type</th>
          <th onClick={() => handleSort("isCommercial")}>Is Commercial</th>
          <th onClick={() => handleSort("price")}>Price</th>
          <th>View Details</th>
        </tr>
      </thead>
      <tbody>
        {sortedListings.map((listing) => (
          <tr key={listing.id}>
            <td>{listing.id}</td>
            <td>{listing.title}</td>
            <td>{listing.address}</td>
            <td>{listing.beds}</td>
            <td>{listing.bath}</td>
            <td>{listing.coveredAreaSQFT}</td>
            <td>{listing.propertyType}</td>
            <td>{listing.isCommercial ? "Yes" : "No"}</td>
            <td>${listing.price}</td>
            <td>
              <Link to={`/listing/${listing.id}`}>View Details</Link>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
export default ListingTable;
