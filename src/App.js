import React from 'react';

import { Header } from './Components/header';

import Skills from './pages/skills/Skills';
import Contact from './pages/contact/Contact';
import Home from './Home';
import { Route, Switch } from 'react-router-dom';


class App extends React.Component {



    render() {

        return (
            <React.Fragment>
                <Header />
                <main>
                    <Switch>
                        <Route path="/" component={Home} exact />
                        <Route path="/skills" component={Skills} />
                        <Route path="/contact" component={Contact} />
                    </Switch>
                </main>

            </React.Fragment>
        )
    }
}


export default App;