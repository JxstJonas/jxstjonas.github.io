import React, { useEffect, useRef, useState } from 'react'
import styles from '../../styles/Web.module.css'
import Script from 'next/script';
import CountUp from 'react-countup';
import { InferGetServerSidePropsType } from "next";
import useSWR from 'swr'

const fetcher = (args) => fetch(args).then(res => res.json())


function WebStats(props) {

  const { data, error } = useSWR('/api/stats', fetcher);
  const [int, setInt] = useState(0);

  useEffect(() => {
    const number = () => {
      return Math.ceil(Math.random() * 100);
    };
    setInt(number());
  }, []);

  return (
    <div className={styles.mainFlex}>
      <div>
        <h1 className={styles.header}>Avocados</h1>
      </div>
      <div className={styles.displayText}>
        <div className={styles.displayStats}>
          <div><h3>Clicks {error ? '/' : <CountUp end={!data ? 0 : data.clicks} duration={3} useEasing={true}/>}</h3></div>
          <div><h3>Logins {error ? '/' : <CountUp end={!data ? 0 : data.logins} duration={3} useEasing={true}/>}</h3></div>
          <div><h3>Github {error ? '/' : <CountUp end={!data ? 0 : data.github} duration={3} useEasing={true}/>}</h3></div>
          <div><h3>Avocados <CountUp end={int} duration={3} useEasing={true}/></h3></div>
        </div>
        <div className={styles.infoText}>
          <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
            sed diam nonumy eirmod tempor invidunt ut labore et dolore
              magna aliquyam erat, sed diam voluptua. At vero eos et
              accusam et justo duo dolores et ea rebum. Stet clita kasd gube
              rgren, no sea takimata sanctus est Lorem ipsum dolor sit amet. L
              orem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam n
              onumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, 
              sed diam voluptua. At vero eos et accusam et justo duo dolores et e
              a rebum. Stet clita kasd gubergren, no sea takimata sanctus est 
              Lorem ipsum dolor sit amet. </p>
        </div>
      </div>
    </div>
  )
}

export default WebStats