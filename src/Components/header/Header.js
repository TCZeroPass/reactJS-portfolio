import React, { Component } from 'react';
import * as styles from './Header.module.scss';


class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <div className={styles.headerContainer}>
                <div className={styles.headerLeft}>
                    <h1>NAAAAME</h1>
                </div>
                <div className={styles.headerRight}>
                    <ul>
                        <li><a href='#'>about</a></li>
                        <li><a href='#'>skill</a></li>
                        <li><a href='#'>contact</a></li>
                    </ul>
                </div>
            </div>
        );
    }
}

export default Header;
