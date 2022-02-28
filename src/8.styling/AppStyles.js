import React from 'react'
import './appStyle.css'
import styles from './appStyle.module.css'

function AppStyles() {
  return (
    <div>
        <h2 className='error background'>Error Message</h2>
        <h2 className={styles.error + ' ' + styles.background}>Success Message</h2>
    </div>
  )
}

export default AppStyles