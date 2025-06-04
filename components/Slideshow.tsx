"use client";
import { useState } from "react";
import Image from "next/image";
import styles from "@/styles/page.module.css";

const images = ["/image/s1.jpg", "/image/s2.jpg", "/image/s3.jpg"];

export default function SlideShow() {
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
    return (
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
    );
}
