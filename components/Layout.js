import styles from '../styles/Layout.module.css'
import Head from 'next/head'

const header = ({children}) => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Jonas Portfolio</title>
      </Head>
      <main className={styles.main}>
        {children}
      </main>
    </div>
  )
}

export default header