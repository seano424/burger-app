import React from 'react'
import styles from './DrawerToggle.module.css'

const drawerToggleHandler = (props) => (
  <div className={styles.DrawerToggle} onClick={props.clicked}>
    <div></div>
    <div></div>
    <div></div>
  </div>
) 

export default drawerToggleHandler