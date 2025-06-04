import styles from "@/styles/page.module.css";

export default function MainContent() {
    return (
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
    );
}
