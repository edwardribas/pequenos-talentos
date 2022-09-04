import React from 'react';
import styles from './styles.module.scss';

export default function Title(prop){
    return (
        <div className={styles.title}>
            <h2>{prop.section.toUpperCase()}</h2>
        </div>
    )
}