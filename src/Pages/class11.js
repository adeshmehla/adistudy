import React from 'react';
import Button from '@material-ui/core/Button';
import styles from './subjectlist.module.css'
import {useNavigate} from 'react-router-dom'
export const Class11 = () => {
  const navigate = useNavigate();
  return (
    <div className={styles.container}>
      <h1>Class 11th</h1>
      <h3>Choose subject</h3>

      <ul>
        <li>
      <Button className={styles.subject_class_btn} variant="contained" color="secondary" onClick={()=>navigate('class11Content')}>
       Bio
      </Button>
        </li>
        <li>
      <Button onClick={()=>navigate('class11Content')} className={styles.subject_class_btn} variant="contained" color="secondary">
      Chemistry
      </Button>
        </li>
        <li>
      <Button onClick={()=>navigate('class11Content')} className={styles.subject_class_btn} variant="contained" color="secondary">
      physics
      </Button>
        </li>
      </ul>
    </div>
  );
};
