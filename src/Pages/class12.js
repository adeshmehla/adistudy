import React from 'react';
import Button from '@material-ui/core/Button';
import styles from './subjectlist.module.css'
import {useNavigate} from 'react-router-dom'
export const Class12 = () => {
  const navigate = useNavigate();
  return (
    <div className={styles.container}>
      <h1 style={{textAlign:"center"}}>Class 12th</h1>
      <ul>
      <li className='li'>
      <Button className={styles.subject_class_btn} variant="contained" color="secondary" onClick={()=>navigate('class12Content')}>
       Bio
      </Button>
        </li>
        <li>
      <Button onClick={()=>navigate('class12Content')} className={styles.subject_class_btn} variant="contained" color="secondary">
      Chemistry
      </Button>
        </li>
        <li>
      <Button onClick={()=>navigate('class12Content')} className={styles.subject_class_btn} variant="contained" color="secondary">
      physics
      </Button>
        </li>
      </ul>
    </div>
  );
};
