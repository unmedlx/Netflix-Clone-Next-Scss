import React from "react";
import styles from "./Navbar.module.scss";

const Navbar = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.lSide}>
        <div className={styles.logo}>
          <h1>Nitflix</h1>
        </div>
        <div className={styles.menu}>
          <button>Home</button>
          <button>About</button>
          <button>Contact</button>
        </div>
      </div>

      <div className={styles.rSide}>
        <div className={styles.search}>
          <input type="text" placeholder="search..." />
        </div>
        <div className={styles.profile}>
          <button>Login</button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
