import styles from '../styles/Home.module.css'

export default function Home() {
    return (
        <div className={styles.middle}>
            <div className={styles.grid} >
                <div className={`${styles.flexSection}`}>
                    <h1 className={`${styles.title}`}>Hello, I'm Jonas</h1>
                </div>
                <div>
                    <p className={styles.textBox}>
                        I have been programming with the Java programming language for over 4 years. 
                        I also work with databases such as Redis, MongoDB and MySQL. 
                        And recently I started with web development.
                    </p>
                </div>
                <div className={`${styles.icon}`}>
                    ICON
                </div>
            </div>
        </div>
    );
}