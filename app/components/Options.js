import React from 'react';
import { PayloadAction } from '../reducers/types';
import { Link } from 'react-router-dom';
import routes from '../constants/routes';
import styles from './Options.css';

type Props = {
    +setHeight: (height: number) => PayloadAction,
    +setWidth: (width: number) => PayloadAction,
    +height: number,
    +width: number,
};

export default class Options extends React.PureComponent<Props> {
    props: Props;

    render() {
        const { setWidth, setHeight, width, height } = this.props;
        return (
            <div className={styles.options}>
                <form>
                    <span className={styles.option}>
                        <p className={styles.label}>Width:</p>
                        <input value={width} onChange={(e) => setWidth(e.target.value)} />
                    </span>
                    <span className={styles.option}>
                        <p className={styles.label}>Height:</p>
                        <input value={height} onChange={(e) => setHeight(e.target.value)} />
                    </span>
                </form>
                <Link className={styles.doneLink} to={routes.HOME}>Done</Link>
            </div>
            
        );
    }
}