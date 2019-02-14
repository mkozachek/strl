import React from 'react';
import { Link } from 'react-router-dom';
import routes from '../constants/routes';
import styles from './MainMenu.css';

export default () => (
    <div className={styles.mainMenu}>
        <Link className={styles.menuItem} to={routes.PLAY}>New Game</Link>
        <Link className={styles.menuItem} to={routes.OPTIONS}>Options</Link>
    </div>
);