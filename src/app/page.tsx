"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Head from "next/head";
import styles from "./page.module.css"; // or use Tailwind

const images = ["/image/s1.jpg", "/image/s2.jpg", "/image/s3.jpg"];

export default function Home() {

  //  var slideIndex = 1;
  //     showSlides(slideIndex);

  //     function plusSlides(n) {
  //       showSlides(slideIndex += n);
  //     }
  //     function currentSlide(n) {
  //       showSlides(slideIndex = n);
  //     }
  //     function showSlides(n) {
  //       let i;
  //       let slides = document.getElementsByClassName("slides");
  //       let dots = document.getElementsByClassName("dot");
  //       if (n > slides.length) { slideIndex = 1 }
  //       if (n < 1) { slideIndex = slides.length }
  //       for (i = 0; i < slides.length; i++) {
  //         slides[i].style.display = "none";
  //       }
  //       for (i = 0; i < dots.length; i++) {
  //         dots[i].className = dots[i].className.replace(" active", "");
  //         // dots[i].style.add = "background-color:gray";
  //       }
  //       slides[slideIndex - 1].style.display = "block";
  //       dots[slideIndex - 1].className += " active";
  //     }

  //     function toggleMenu() {
  //       document.getElementById("leftSection").classList.add("show");
  //       document.getElementById("rightSection").classList.add("show");
  //       document.getElementById("leftSection").classList.remove("hide");
  //       document.getElementById("rightSection").classList.remove("hide");
  //       document.getElementById("openToggle").style.display = "none";
  //       document.getElementById("closeToggle").style.display = "block";

  //       document.getElementById("myNav").style.height = "80%";
  //     }

  //     function toggleMenuClose() {
  //       document.getElementById("leftSection").classList.remove("show");
  //       document.getElementById("rightSection").classList.remove("show");
  //       document.getElementById("leftSection").classList.add("hide");
  //       document.getElementById("rightSection").classList.add("hide");
  //       document.getElementById("openToggle").style.display = "block";
  //       document.getElementById("closeToggle").style.display = "none";
  //       document.getElementById("myNav").style.height = "0%";
  //     }
  //     const toggleBtn = document.getElementById("openToggle");

  //     // Hide mobile menu if screen is resized to desktop
  //     window.addEventListener("resize", () => {
  //       if (window.innerWidth >= 1024) { // 1024px or more = desktop
  //         toggleBtn.classList.add("hidden");
  //         toggleBtn.style.display = ("none");
  //       }
  //       else {
  //         toggleBtn.style.display = ("block");
  //       }
  //     });
  //     function search_topic() {
  //       let input = document.getElementById('searchbar').value.toLowerCase();
  //       let items = document.getElementsByClassName('topics');
  //       for (let i = 0; i < items.length; i++) {
  //         if (!items[i].innerHTML.toLowerCase().includes(input)) {
  //           items[i].style.display = "none";
  //         } else {
  //           items[i].style.display = "list-item";
  //         }
  //       }
  //     }
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
        {/* <span className={styles.hamburger} onClick={toggleMenu} id="openToggle"> */}
        <span className={styles.hamburger} id="openToggle">
          &#9776;
        </span>
        <div id="myNav" className={styles.overlay}>
          {/* <span className={styles.close} onClick={toggleMenuClose} id="closeToggle"> */}
          <span className={styles.close} id="closeToggle">
            &times;
          </span>
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
        </div>
      </div>

      <div className={styles.demo}>
        <h1 style={{ textAlign: "center", fontSize: 25, fontWeight: "bold" }}>
          Manual Slide Show
        </h1>
        <div className={styles.slideshowContainer}>
          <div className={styles.slides}>
            {/* <Image src={images[slideIndex]} width={1000} height={500} alt={`Slide ${slideIndex + 1}`} /> */}
            {/* <Image src={images[slideIndex]} width={1000} height={500} alt={`Slide ${slideIndex + 1}`} /> */}
          </div>
          {/* <a className={styles.prev} onClick={prevSlide}>❮</a>
          <a className={styles.next} onClick={nextSlide}>❯</a> */}
          <a className={styles.prev}>❮</a>
          <a className={styles.next} >❯</a>
        </div>
        <br />
        <div style={{ textAlign: "center" }}>

        </div>
      </div>

      <section className={styles.row}>
        {["/image/i1.jpg", "/image/i2.jpg", "/image/i3.jpg", "/image/i4.jpg", "/image/i5.jpg"].map(
          (src, idx) => (
            <div key={idx} className={styles.column}>
              <Image src={src} width={300} height={200} alt={`Image ${idx + 1}`} />
            </div>
          )
        )}
      </section>

      <section className={styles.container}>
        <div className={styles.flexItemLeft} style={{ order: 3 }}>1</div>
        <div className={styles.flexItemRight}>2</div>
      </section>

      <section>
        <h1>How much JavaScript do you need to know to use Node.js?</h1>
        <p>
          As a beginner, it's hard to get to a point where you are confident in your programming abilities...
        </p>

        <h1>What is recommended to learn before diving deep with Node.js?</h1>
        <ul>
          {[
            "Lexical Structure", "Expressions", "Data Types", "Classes", "Variables", "Functions",
            "Operator", "Arrow Functions", "Loops", "Scopes", "Arrays", "Template Literals",
            "Strict Mode", "ES6 and beyond", "Asynchronous JavaScript"
          ].map((topic, idx) => (
            <li key={idx}><a href="#">{topic}</a></li>
          ))}
        </ul>

        <h2>Asynchronous Programming</h2>
        <p>The following concepts are key:</p>
        <ul>
          {[
            "Asynchronous programming and callbacks",
            "Promises",
            "Async and Await",
            "Closure",
            "The Event Loop"
          ].map((item, idx) => (
            <li key={idx}><a href="#">{item}</a></li>
          ))}
        </ul>
      </section>
    </>
  );
}
