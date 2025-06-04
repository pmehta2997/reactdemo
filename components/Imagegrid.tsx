import Image from "next/image";
import styles from "@/styles/page.module.css";

export default function ImageGrid() {
    // const images = ["/image/i1.jpg", "/image/i2.jpg", "/image/i3.jpg", "/image/i4.jpg", "/image/i5.jpg"];
    return (
        <div className={styles.row}>
            <div className={styles.column}>
                <img src="/image/i1.jpg" />
                <img src="image/i2.jpg" />
                <img src="image/i3.jpg" />
                <img src="image/i4.jpg" />
                <img src="image/i5.jpg" />

            </div>

            <div className={styles.column}>
                <img src="image/i10.jpg" />
                <img src="/image/i7.jpg" />
                <img src="image/i6.jpg" />
                <img src="image/i5.jpg" />
                <img src="image/i11.jpg" />
            </div>

            <div className={styles.column}>
                <img src="image/i8.jpg" />
                <img src="image/i9.jpg" />
                <img src="image/i10.jpg" />
                <img src="image/i11.jpg" />
                <img src="/image/i1.jpg" />

            </div>

            <div className={styles.column}>
                <img src="image/i11.jpg" />
                <img src="image/i12.jpg" />
                <img src="image/i13.jpg" />
                <img src="image/i8.jpg" />
                <img src="image/i9.jpg" />

            </div>
        </div>
    );
}
