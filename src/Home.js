import React from 'react';

import * as styles from './App.module.scss';
import imagee from './assets/image.jpg';




class Home extends React.Component {

    state = {
        factsVisible: false,
    }

    toggleVisibility() {
        const { factsVisible } = this.state;
        this.setState({
            factsVisible: !factsVisible
        })
    }

    render() {

        const { factsVisible } = this.state;

        return (
            <React.Fragment>
                <main>
                    <div className={styles.container}>
                        <section>
                            <h1>Tomas Ciernik</h1>
                            <h2>Associate , photograph enthusiast</h2>
                            <span>SOME TEXT wdvwvwq ev qwew ebl lewblk  wererlk merbl klenrlkn lkelk b lk welb l  qwe qwve qwv wqev wqev
                            w qevw evweq wqev wqev wqve wqweblmelm ewe ewrblklek lkelb l lkelrbkmlk g weewr ew er ewr ewr e rbv wev wqev wqev wve
                            wqe vwqe vwqev wqev qwe vwqe vwqe vqwe ewbrlkmwe ew blknle llkblkew bv wqe ewq w rerewrtnbretlnkmlk elbk  e
                            OME TEXT wdvwvwq ev qwew ebl lewblk  wererlk merbl klenrlkn lkelk b lk welb l  qwe qwve qwv wqev wqev
                            w qevw evweq wqev wqev wqve wqweblmelm ewe ewrblklek lkelb l lkelrbkmlk g weewr ew er ewr ewr e rbv wev wqev wqev wve
                            wqe vwqe vwqev wqev qwe vwqe vwqe vqwe ewbrlkmwe ew blknle llkblkew bv wqe ewq w rerewrtnbretlnkmlk elbk  e
                    </span>
                        </section>
                        <img src={imagee} alt="Mee" />
                    </div>

                    <section className={styles.facts}>
                        <button onClick={this.toggleVisibility.bind(this)} >Show facts</button>

                        {factsVisible && (
                            <ul>
                                <li> thingy 1</li>
                                <li> thingy 2</li>
                                <li> thingy 3</li>
                            </ul>
                        )
                        }
                    </section>
                </main>

            </React.Fragment>
        )
    }
}


export default Home;