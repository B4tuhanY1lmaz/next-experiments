import React from "react";
import Link from "next/link";

import Styles from './styles.module.css';

function Footer() {
    return <footer className={Styles.footer}>
        Made by <Link href="https://github.com/B4tuhanY1lmaz"> Batuhan Yilmaz</Link>
        </footer>
}

export default Footer;