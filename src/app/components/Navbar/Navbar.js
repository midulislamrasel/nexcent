import React from "react";
import styles from "./navbar.module.css";
import Link from "next/link";
import Image from "next/image";
// import logo from "../../asset/logo/logo.png";
const Navbar = () => {
  return (
    <div className={styles.navbar__areya__all__section}>
      <div className={styles.navbar__areya}>
        <div className={styles.navbar__logo}>
          {/* <Image src={logo} width="77" height="54" alt="logo"></Image> */}
          logo
        </div>
        <div className={styles.navbar__menu__item}>
          <div className={styles.menu__item}>
            <Link className={styles.item} href={"#"}>
              Home
            </Link>
            <Link className={styles.item} href={"#"}>
              Features
            </Link>
            <Link className={styles.item} href={"#"}>
              Community
            </Link>
            <Link className={styles.item} href={"#"}>
              Blog
            </Link>
            <Link className={styles.item} href={"#"}>
              Pricing
            </Link>
          </div>
          <div>
            <button className="pl-100">Register</button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Navbar;
