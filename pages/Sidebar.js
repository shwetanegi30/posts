import React from "react";
import Link from "next/link";
import SearchIcon from "@mui/icons-material/Search";
import HomeIcon from "@mui/icons-material/Home";
import LiveTvIcon from "@mui/icons-material/LiveTv";
import LogoutIcon from "@mui/icons-material/Logout";
import DescriptionIcon from "@mui/icons-material/Description";
import { styled } from "@mui/material/styles";

const Container = styled("div")({
  display: "flex",
  marginTop: "80px",
});

const SidebarContainer = styled("div")({
  // backgroundColor: '#f0f0f0',
  padding: "20px",
});

const SidebarList = styled("ul")({
  listStyle: "none",
  padding: "0",
  margin: "0",
  lineHeight: "3",
  fontSize: "20px",
});

const SidebarListItem = styled("li")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  marginBottom: "10px",
  cursor: "pointer",
  "& svg": {
    marginRight: "8px",
  },
}));

function Sidebar() {
  return (
    <Container>
      <SidebarContainer>
        <SidebarList>
          <SidebarListItem>
            <HomeIcon /> Home
          </SidebarListItem>

          <SidebarListItem>
            <SearchIcon /> Search
          </SidebarListItem>
          <Link href="/posts">
            <SidebarListItem>
              <DescriptionIcon /> Posts
            </SidebarListItem>
          </Link>
          <SidebarListItem>
            <LiveTvIcon /> Live
          </SidebarListItem>
          <SidebarListItem>
            <LogoutIcon /> Logout
          </SidebarListItem>
        </SidebarList>
      </SidebarContainer>
    </Container>
  );
}

export default Sidebar;
