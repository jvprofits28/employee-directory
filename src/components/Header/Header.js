import React from "react";
import "./style.css";

function Header() {
  return (
    <header className="header">
      <h1> Employee Directory</h1>
      <p>
        Click on name to sort alphabetically or use the search bar to narrow
        results
      </p>
    </header>
  );
}
export default Header;
