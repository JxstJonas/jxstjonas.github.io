import styles from '../styles/Home.module.css'
import Image from 'next/image';
import Link from 'next/link';

//Image
import GitIcon from '../public/img/github.png'
import Avocado from '../public/img/avocado.png'

import * as React from 'react';
import { tsParticles } from "tsparticles-engine";
import Script from 'next/script';
import { Particle } from '../components/Particle';

export default function Home() {
    let [click,setclick] = React.useState(0);
    const [display, setDisplay] = React.useState(false);
    const [avocado, setAvocado] = React.useState(false);
    const animation = async () => {
        setAvocado(true);
    }

    React.useEffect(() => {

        function handleClick() {
            setclick(click + 1);
            
            console.log(click);
            if(click == 9) {
                setDisplay(true);
            }
        }

        window.addEventListener("click", handleClick);
        return () => {
            window.removeEventListener("click", handleClick);
        };
    }, [click]);


    return (
        <div className={styles.noSelect}>
            <div style={{zIndex: 1}} className={styles.middle}>
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
                        <div className={styles.secret} onClick={() => animation()} style={{display: display ? 'block' : 'none'}}>
                            <Image src={Avocado} alt=''/>
                        </div>
                    </div>
                </div>
            </div>
            {avocado&&<Particle/>}
        </div>
    );
}