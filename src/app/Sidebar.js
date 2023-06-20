import React from "react";

function Sidebar() {
  return (
    <div className="sidebar">
      <ul className="sidebarList">
        <li className="sidebarListItem">
          <Home /> &nbsp; Home
        </li>

        <li className="sidebarListItem">
          <TrendingUp /> &nbsp; Search
        </li>

        <li className="sidebarListItem">
        <ChromeReaderMode /> &nbsp; Posts
        </li>

        <li className="sidebarListItem">
          <TrendingUp /> &nbsp; Live
        </li>
      </ul>

      <div>
        Logout
      </div>
    </div>
  );
}

export default Sidebar;
