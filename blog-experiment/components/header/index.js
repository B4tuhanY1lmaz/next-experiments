import React from "react";
import Link from "next/link";

import styles from "./styles.module.css"

function Header() {
    return <header className={styles.header} container fluid>
        <div className={styles.headerWrapper}>
            <Link href="/" className={styles.logo}>
                The Batuhan's Network
            </Link>
            <nav className={styles.navigationMenu}>
                <Link href="/">Home</Link>
                <Link href="/blog">Blog</Link>
                <Link href="/about">About</Link>
                <Link href="/contact">Contact</Link>
            </nav>
        </div>
    </header>
}

export default Header;