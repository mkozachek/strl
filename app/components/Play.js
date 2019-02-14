import React from 'react';
import { Link } from 'react-router-dom';
import routes from '../constants/routes';
import Display from './Display';
import styles from './Play.css';
import Game from './Game';

export default class Play extends React.Component {
    render() {
        return (
            <div className={styles.mainGame}>
                <Link to={routes.HOME}>
                    <i className="fa fa-arrow-left fa-3x" />
                </Link>
                <Display className={styles.display} />
                <Game />
            </div>
        );
    }
}