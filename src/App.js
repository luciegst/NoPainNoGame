import React, { Component } from 'react';
import { withRouter } from 'react-router';
import { Route, Switch } from 'react-router-dom';
import Accueil from './Components/home/Accueil';
import NavBar from './Components/NavBar';
import Footer from './Components/Footer';
import PageAdmin from './Components/admin/PageAdmin';
import PageGame from './Components/game/PageGame';
import PageTheme from './Components/theme/PageTheme';
import PageReservation from './Components/reservation/PageReservation';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }

  render() {
    return (
      <div>
        <NavBar
          link2="/admin"
          name2="Admin"
        />
        <div className="content">
          {/* Routage */}
          <Switch>
            <Route exact path='/' component={Accueil} />
            <Route path='/Joelneverdie' component={PageAdmin} />
            <Route path='/games/:id' component={PageGame} />
            <Route path='/theme/:theme' component={PageTheme} />
            <Route path='/reservation' component={PageReservation} />
          </Switch>
        </div>
        <Footer className="footer" />
      </div>
    );
  }
}

export default withRouter(App);
