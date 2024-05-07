import { Box, CircularProgress } from '@mui/material'
import React from 'react'
import styles from './Loader.module.css'
const Loader = () => {
  return (
    <div className={styles.loaderWrapper}>
      <CircularProgress />
      <h3>Loading...</h3>
    </div>
  )
}

export default Loader
