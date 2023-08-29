import React, { useState } from "react";
import ListingTable from "../ListingTable/ListingTable";
import "./DataTableView.css";

function DataTableView({ listings }) {
  const [sortedListings, setSortedListings] = useState(listings);
  const [sortKey, setSortKey] = useState(""); // Column to sort by
  const [sortDirection, setSortDirection] = useState("asc"); // Sorting direction
  const [searchTerm, setSearchTerm] = useState(""); // Search term
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  // Function to sort listings based on the selected column
  const sortListings = (key) => {
    const newSortDirection =
      sortKey === key && sortDirection === "asc" ? "desc" : "asc";
    setSortKey(key);
    setSortDirection(newSortDirection);

    const sorted = [...sortedListings].sort((a, b) => {
      if (newSortDirection === "asc") {
        return a[key] > b[key] ? 1 : -1;
      } else {
        return a[key] < b[key] ? 1 : -1;
      }
    });

    setSortedListings(sorted);
  };

  // Function to filter listings based on the search term
  const filteredListings = sortedListings.filter((listing) =>
    listing.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Pagination
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredListings.slice(
    indexOfFirstItem,
    indexOfLastItem
  );

  return (
    <div>
      <input
        type="text"
        placeholder="Search by title"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <table>
        <thead>
          <tr>
            <th onClick={() => sortListings("id")}>Id</th>
            <th onClick={() => sortListings("title")}>Title</th>
            <th onClick={() => sortListings("address")}>Address</th>
            <th onClick={() => sortListings("beds")}>Beds</th>
            <th onClick={() => sortListings("bath")}>Bath</th>
            <th onClick={() => sortListings("coveredAreaSQFT")}>
              CoveredAreaSQFT
            </th>
            <th onClick={() => sortListings("propertyType")}>PropertyType</th>
            <th onClick={() => sortListings("isCommercial")}>IsCommercial</th>
            <th onClick={() => sortListings("price")}>Price</th>
          </tr>
        </thead>
        <tbody>
          {currentItems.map((listing) => (
            <tr key={listing.id}>
              <td>{listing.id}</td>
              <td>{listing.title}</td>
              <td>{listing.address}</td>
              <td>{listing.beds}</td>
              <td>{listing.bath}</td>
              <td>{listing.coveredAreaSQFT}</td>
              <td>{listing.propertyType}</td>
              <td>{listing.isCommercial ? "Yes" : "No"}</td>
              <td>{listing.price}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="pagination-btn">
        <button
          onClick={() => setCurrentPage(currentPage - 1)}
          disabled={currentPage === 1}
        >
          Previous
        </button>
        <button
          onClick={() => setCurrentPage(currentPage + 1)}
          disabled={indexOfLastItem >= filteredListings.length}
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default DataTableView;
