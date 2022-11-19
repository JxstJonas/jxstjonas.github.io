import React, { useEffect, useState } from 'react'
import styles from '../../styles/Web.module.css'


export default function WebStats(props) {
  return (
    <div className={styles.mainFlex}>
      <div>
        <h1 className={styles.header}>Avocados</h1>
      </div>
      <div className={styles.displayText}>
        <div className={styles.displayStats}>
          <div><h3>Clicks 69</h3></div>
          <div><h3>Logins 69</h3></div>
          <div><h3>Github 69</h3></div>
          <div><h3>Avocados 69</h3></div>
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