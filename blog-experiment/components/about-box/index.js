import React from "react";
import Link from "next/link";
import Image from "next/image";

import styles from "./styles.module.css";
import lineImage from "@/assets/line.png";
import avatarImage from "@/assets/avatar.jpg";

function AboutBox() {
    return <main className={styles.grid} fluid container>
        <div className={styles.grid_cell}>
            <Image 
            src="https://thebatuhansnetwork.xyz/assets/img/avatar.jpg"
            alt="avatar" 
            width={50} 
            height={50}  
            className={styles.profileP} 
            />
        </div>
        <h2 className={styles.name}>Batuhan Y. Yılmaz</h2>
        <Image src={lineImage} width={500} />
        <div className={styles.description}>I'm a 18 years old high school student who is interested in FOSS projects, Photography, Graphic design and technology.
        </div>
    </main>
}

export default AboutBox;