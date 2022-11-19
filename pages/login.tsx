import React, { useEffect, useRef } from 'react'
import styles from '../styles/Login.module.css'
import * as cookie from 'cookies-next';
import * as crypto from 'crypto';
import { useRouter } from 'next/router';


export default function LoginPage(props) {
  const btnRef = useRef(null);
  const router = useRouter();

  const handleSubmit = async (event:React.SyntheticEvent) => {
    event.preventDefault();
    const data = {
      password: event.target[0].value,
    }
    
    const hash = crypto.createHash('sha512').update(data.password).digest('hex');    
    const response = await fetch('/api/login');
    const pw = await response.json();

    if(hash === pw.password) {
      cookie.setCookie('session_id', hash, {maxAge: 60 * 60, })
      await fetch('/api/stats?logins=69');
      router.push('/stats/web')
    }
  }

  const enter = async (event) => {
    if(event.key == 'Enter') {
      btnRef.current.click();
    }
  }
  

  useEffect(() => {
    window.addEventListener('keyup', enter);
    return(() => window.removeEventListener('keyup', enter));
  });

  return (
    <div>
        <div className={styles.loginBox}>
          <form method='POST' onSubmit={handleSubmit} >
            <input type="password" id='password' name="password" placeholder='Password' className={styles.input}/>
            <button type="submit" style={{display: 'none'}} ref={btnRef}> </button>
          </form>
          <div className={styles.hintBox}>
            <p className={styles.hint}>eine frucht die grün ist und einen schwarzen kern hat, ist meine lieblingfrucht</p>
          </div>
        </div>
    </div>
  )
}
