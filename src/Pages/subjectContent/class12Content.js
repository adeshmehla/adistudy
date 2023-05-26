import React from 'react'
import Button from '@material-ui/core/Button';
import styles from './subjectContent.module.css'
import { Link } from 'react-router-dom';
export const Class12content=()=> {
  return (
    <>
     <Button style={{margin: "2%"}} className={styles.subject_btn} variant="contained" color="secondary">
     <Link to="/class11">   Back</Link>
      </Button>
    <div>
         <Button style={{margin: "2%"}} className={styles.subject_btn} variant="contained" color="primary">
       Details Notes
      </Button>
         <Button style={{margin: "2%"}} className={styles.subject_btn} variant="contained" color="primary">
       Mind Maps
      </Button>
        <Button style={{margin: "2%"}} className={styles.subject_btn} variant="contained" color="primary">
       Book Pdf
      </Button>
         <Button style={{margin: "2%"}} className={styles.subject_btn} variant="contained" color="primary">
       Syllabus
      </Button>
    </div>
    </>
  )
}