"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Head from "next/head";
import styles from "./page.module.css"; // or use Tailwind

const images = ["/image/s1.jpg", "/image/s2.jpg", "/image/s3.jpg"];

export default function Home() {

  const [slideIndex, setSlideIndex] = useState(0);

  const nextSlide = () => {
    // debugger;
    console.log("clicked");
    setSlideIndex((prevIndex) => (prevIndex + 1) % images.length);
  }
  const prevSlide = () => {
    setSlideIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);

    console.log("number", slideIndex);
  }
  const selectSlide = (index: number) => {
    setSlideIndex(index);
  }
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isCloseButtonVisible, setCloseButtonVisible] = useState(false)

  const toggleMenu = () => {
    console.log("Clicked")
    setIsMenuOpen(!isMenuOpen);
    setCloseButtonVisible(true);
  };
  const toggleMenuClose = () => setIsMenuOpen(false);

  return (
    <>
      <Head>
        <title>Manual Slideshow</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
        />
      </Head>

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

      <div className={styles.demo}>
        <h1 style={{ textAlign: "center", fontSize: 25, fontWeight: "bold" }}>
          Manual Slide Show
        </h1>
        <div className={styles.slideshowContainer}>
          <div className={styles.slides}>
            {images.map((src, index) => (
              <div key={index} style={{ display: index === slideIndex ? "block" : "none" }} className={styles.slides}>
                <Image src={src} width={1000} height={500} alt={`Slide ${index + 1}`} />
              </div>
            ))}

            <a className={styles.prev} onClick={() => prevSlide()}>❮</a>
            <a className={styles.next} onClick={() => nextSlide()}>❯</a>
          </div>
        </div>
        <br />
        <div style={{ textAlign: "center" }}>
          {images.map((_, index) => (
            <span
              key={index}
              className={`${styles.dot} ${slideIndex === index ? styles.active : ""}`}
              onClick={() => selectSlide(index)}
            />
          ))}
        </div>
      </div>

      <section className={styles.row}>
        {["/image/i1.jpg", "/image/i2.jpg", "/image/i3.jpg", "/image/i4.jpg", "/image/i5.jpg"].map(
          (src, index) => (
            <div key={index} className={styles.column}>
              <Image src={src} width={300} height={200} alt={`Image ${index + 1}`} />
            </div>
          )
        )}
      </section>

      <section className={styles.container}>
        <div className={styles.flexItemLeft} style={{ order: 3 }}>1</div>
        <div className={styles.flexItemRight}>2</div>
      </section>

      <div className={styles.paragraph}>
        <h1 style={{ fontSize: "20px", fontWeight: "bolder" }}>How much JavaScript do you need to know to use Node.js?</h1>
        <br />  <p className={styles.paragraph}>
          As a beginner, it's hard to get to a point where you are confident in your programming abilities...
        </p>
        <br />
        <h1 style={{ fontSize: "20px", fontWeight: "bold" }}>What is recommended to learn before diving deep with Node.js?</h1>
        <ul style={{ listStyleType: "disc", paddingLeft: "20px" }}>
          {[
            "Lexical Structure", "Expressions", "Data Types", "Classes", "Variables", "Functions",
            "Operator", "Arrow Functions", "Loops", "Scopes", "Arrays", "Template Literals",
            "Strict Mode", "ES6 and beyond", "Asynchronous JavaScript"
          ].map((topic, index) => (
            <li key={index}><a href="#">{topic}</a></li>
          ))}
        </ul>

        <h2 style={{ fontSize: "20px", fontWeight: "bolder" }}>Asynchronous Programming</h2>
        <p style={{ fontSize: "20px", fontWeight: "bold" }}>The following concepts are key:</p>
        <ul>
          {[
            "Asynchronous programming and callbacks",
            "Promises",
            "Async and Await",
            "Closure",
            "The Event Loop"
          ].map((item, index) => (
            <li key={index}><a href="#">{item}</a></li>
          ))}
        </ul>
      </div>
    </>
  );
}
