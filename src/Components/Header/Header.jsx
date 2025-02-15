import React from "react";
import Styles from "./Header.module.css";
import NetflixLogo from "../../assets/images/image-13-1024x277.png";
import SearchIcon from "@mui/icons-material/Search";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

function Header() {
  return (
    <div className={Styles.headerOuterContainer}>
      <div className={Styles.headerContainer}>
        <div
          className={`navbar navbar-expand-sm navbar-expand-md ${Styles.headerLeft}`}
        >
          <ul>
            <li>
              <img
                className={`navbar-toggler navbar-toggler-right`}
                src={NetflixLogo}
                alt="Netflix Logo"
                width="100"
              />
            </li>
            <li>Home</li>
            <li>TVShows</li>
            <li>Movies</li>
            <li>Latest</li>
            <li>MyList</li>
            <li>Browse by Languages</li>
          </ul>
        </div>
        <div className={Styles.headerRight}>
          <ul>
            <li>
              <SearchIcon />
            </li>
            <li>
              <NotificationsNoneIcon />
            </li>
            <li>
              <AccountBoxIcon />
            </li>
            <li>
              <ArrowDropDownIcon />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Header;
