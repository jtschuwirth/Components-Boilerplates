import React from "react";
import Link  from 'next/link'
import { 
  MdAccountCircle, 
  MdDashboard,
  MdAccountBalanceWallet,
  MdFeed,
  MdAutoStories,
  MdSupportAgent,
  MdLogout
 } from "react-icons/md"
 import styles from "./style.module.css"

 type SidebarProps = {
  page: string;
};

export const Sidebar = ({page}:SidebarProps) => {
  return (
    <div className={styles.sidebar}>
      <div>
      <div className={styles.logoContainer}>
        <img
          src={"assets/eo2-logo.png"}
          alt=""
          className={styles.logo}
      />
      </div>
      <div className={styles.menuList}>
          <Link href="/profile" className={styles.link}>
            <div className={page==="profile"?styles.activeMenuItem:styles.menuItem}>
            <MdAccountCircle className={styles.icon} size={35}/>
            <span className={styles.items}>{"Profile"}</span>
          </div>
          </Link>
          <Link href="/dashboard" className={styles.link}>
            <div className={page==="dashboard"?styles.activeMenuItem:styles.menuItem}>
            <MdDashboard className={styles.icon} size={35}/>
            <span className={styles.items}>{"Dashboard"}</span>
            </div>
          </Link>
          <Link href="/wallet" className={styles.link}>
            <div className={page==="wallet"?styles.activeMenuItem:styles.menuItem}>
            <MdAccountBalanceWallet className={styles.icon} size={35}/>
            <span className={styles.items}>{"Wallet"}</span>
            </div>
          </Link>
          <Link href="/support" className={styles.link}>
            <div className={page==="support"?styles.activeMenuItem:styles.menuItem}>
            <MdSupportAgent className={styles.icon} size={35}/>
            <span className={styles.items}>{"Support"}</span>
            </div>
          </Link>
          <Link href="/logout" className={styles.link}>
            <div className={page==="logout"?styles.activeMenuItem:styles.menuItem}>
            <MdLogout className={styles.icon} size={35}/>
            <span className={styles.items}>{"Logout"}</span>
            </div>
          </Link>
      </div>
      </div>
    </div>
  );
};
