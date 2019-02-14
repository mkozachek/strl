// @flow
import React, { Component } from 'react';
import routes from '../constants/routes';
import styles from './Home.css';
import MainMenu from './MainMenu';

type Props = {};

export default class Home extends Component<Props> {
  props: Props;

  render() {
    return (
      <div className={styles.container} data-tid="container">
        <h2>Totally Not Star Trek</h2>
        <MainMenu />
      </div>
    );
  }
}
