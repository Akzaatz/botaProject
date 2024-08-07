// Nav.jsx

import React from "react";
import { useState } from "react";
import styles from "./nav.module.scss";
import { NavLink } from "react-router-dom";

const Nav = () => {
  const [isNavVisible, setIsNavVisible] = useState(false);

  const [showLinks, setShowLinks] = useState(false);

  const handleShowLinks = () => {
    setShowLinks(!showLinks);
  };

  return (
    <div>
      <nav className={`${styles.navbar} ${showLinks ? styles.showNav : ""}`}>
        <div className={styles.navbar_logo}>
          <NavLink to="/">BotaProject</NavLink>{" "}
        </div>{" "}
        <ul className={styles.navbar_links}>
          {" "}
          <li
            className={`${styles.navbar_item} ${
              showLinks ? styles["slideInDown-4"] : ""
            }`}
          >
            <NavLink to="Blog">Blog</NavLink>
          </li>
          <li
            className={`${styles.navbar_item} ${
              showLinks ? styles["slideInDown-3"] : ""
            }`}
          >
            <NavLink to="Boutique">Boutique</NavLink>
          </li>
          <li
            className={`${styles.navbar_item} ${
              showLinks ? styles["slideInDown-2"] : ""
            }`}
          >
            <NavLink to="Signin">Zone Membres</NavLink>
          </li>
        </ul>
        <div className={styles.navbar_burger} onClick={handleShowLinks}>
          <span className={styles.burger_bar}></span>{" "}
        </div>
      </nav>
    </div>
  );
};

export default Nav;

// import React, { useState } from "react";
// import styles from "./nav.module.scss";
// import { Link } from "react-router-dom";

// const Nav = () => {
//   const [showLinks, setShowLinks] = useState(false);

//   const handleShowLinks = () => {
//     setShowLinks(!showLinks);
//   };

//   return (
//     <nav className={`${styles.navbar} ${showLinks ? styles.showNav : ""}`}>
//       <div className={styles.navbar_logo}>
//         <NavLink to="/">BotaProject</NavLink>
//       </div>

//       <ul className={styles.navbar_links}>
//         <li
//           className={`${styles.navbar_item} ${
//             showLinks ? styles["slideInDown-4"] : ""
//           }`}
//         >
//           <NavLink to="Blog">Blog</NavLink>
//         </li>
//         <li
//           className={`${styles.navbar_item} ${
//             showLinks ? styles["slideInDown-3"] : ""
//           }`}
//         >
//           <NavLink to="Boutique">Boutique</NavLink>
//         </li>
//         <li
//           className={`${styles.navbar_item} ${
//             showLinks ? styles["slideInDown-2"] : ""
//           }`}
//         >
//           <NavLink to="Signin">Zone Membres</NavLink>
//         </li>
//       </ul>
//       <div className={styles.navbar_burger} onClick={handleShowLinks}>
//         <span className={styles.burger_bar}></span>
//       </div>
//     </nav>
//   );
// };

// export default Nav;
