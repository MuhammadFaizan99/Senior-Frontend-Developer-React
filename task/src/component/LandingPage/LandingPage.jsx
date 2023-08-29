import React, { useState } from "react";
import DataTableView from "../DataTableView/DataTableView";
import CardView from "../CardView/CardView";
import "./LandingPage.css";
import mockListings from "../mockListings";

function LandingPage() {
  const [view, setView] = useState("table");

  return (
    <div className="content-container">
      <div>
        <button onClick={() => setView("table")}>Table View</button>
        <button onClick={() => setView("card")}>Card View</button>
      </div>
      {view === "table" ? (
        <DataTableView listings={mockListings} />
      ) : (
        <CardView listings={mockListings} />
      )}
    </div>
  );
}

export default LandingPage;
