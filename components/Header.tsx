"use client";
import { useState } from "react";
import Image from "next/image";
import styles from "@/styles/page.module.css";

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isCloseButtonVisible, setCloseButtonVisible] = useState(false)

    const toggleMenu = () => {
        console.log("Clicked")
        setIsMenuOpen(!isMenuOpen);
        setCloseButtonVisible(true);
    };
    const toggleMenuClose = () => setIsMenuOpen(false);


    return (
        <div className={styles.header}>
            <Image src="/image/logo.png" width={120} height={60} alt="Logo" />
            <span className={styles.hamburger} onClick={toggleMenu} id="openToggle">
                &#9776;
            </span>
            <div id="myNav" className={`${styles.overlay} ${isMenuOpen ? styles.show : ''}`}>
                <div className={styles.closeSection}>
                    {
                        isCloseButtonVisible ? <span className={styles.close} onClick={toggleMenuClose} id="closeToggle">
                            &times;
                        </span> : null
                    }
                </div>
                <div className={`${styles.leftSection} ${styles.overlayContent}`}>
                    <button>Learn</button>
                    <a href="#">About</a>
                    <a href="#">Download</a>
                    <a href="#">Blog</a>
                    <a href="#">Docs</a>
                    <a href="#">Contribute</a>
                    <a href="#">Certification</a>
                </div>
                <div className={`${styles.rightSection} ${styles.overlayContent}`}>
                    <div className={styles.search}>
                        <i className={`${styles.fa} ${styles.faSearch}`} />
                        <input type="text" placeholder="..start typing" />
                        <kbd className={styles.sKey}>ctrl + k</kbd>
                    </div>
                    <div className={styles.icons}>
                        <span><i className={`${styles.fa} ${styles.faMoon}`} /></span>
                        <span><i className={`${styles.fa} ${styles.faLanguage}`} /></span>
                        <Image src="/image/githubLogo.PNG" width={20} height={20} alt="GitHub" />
                    </div>
                </div>
            </div >
        </div >
    );
}
