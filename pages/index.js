import styles from '../styles/Home.module.css'
import Image from 'next/image';
import Link from 'next/link';

//Image
import GitIcon from '../public/img/github.png'
import Avocado from '../public/img/avocado.png'

export default function Home() {
    return (
        <div className={styles.middle}>
            <div className={styles.grid} >
                <div className={styles.flexSection}>
                    <h1 className={styles.title}>Hello, I&apos;m Jonas</h1>
                </div>
                <div>
                    <p className={styles.textBox}>
                        I have been programming with the Java programming language for over 4 years. 
                        I also work with databases such as Redis, MongoDB and MySQL. 
                        And recently I started with web development.
                    </p>
                </div>
                <div className={styles.flex}>
                    <div className={styles.icon}>                        
                        <a href='https://github.com/JxstJonas' target='_blank' rel='noreferrer'>
                            <Image src={GitIcon} className={styles.gitIcon} alt='github'/>
                        </a>
                    </div>
                    <div className={styles.secret}>
                        <Image src={Avocado} alt=''/>
                    </div>
                </div>
            </div>
        </div>
    );
}