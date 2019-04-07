import React, { Component } from 'react';
import { Route, NavLink, Switch, Redirect } from "react-router-dom";
import 'normalize.css';
import '../../assets/style/main.scss';
import './App.scss';
import { HeroesList, TeamLogo, Search } from '../index';
import { superhero } from '../../assets/data/superhero'

class App extends Component {

  state = {
    logos: [],
    routes: [],
  }

  componentDidMount() {
    const supeheroKeys = Object.keys(superhero);
    this.getLogos(supeheroKeys);
    this.getRoutes(supeheroKeys);
  }

  /**
   * Получаем логотипы команд супергероев
   *
   * @param {*} logosKeys
   * @memberof App
   */
  getLogos(logosKeys) {
    const logos = logosKeys.map(logo => {
      return (
        <NavLink key={logo} to={`/${logo}`}
          className="App__logo"
          activeClassName="App__logo--selected"
        >
          <TeamLogo link={logo} />
        </NavLink>
      );
    });

    this.setState({ logos });
  }

  /**
   * Получаем роуты команд супергероев
   *
   * @param {*} routesKeys
   * @memberof App
   */
  getRoutes(routesKeys) {
    const routes = routesKeys.map(route => {
      return <Route key={route} path={`/${route}`} render={() => <HeroesList url={route} isMyTeam={false} />} />;
    });

    this.setState({ routes });
  }

  render() {
    const { logos, routes } = this.state;

    return (
      <div className="App">
        <header className="App__header">
          <HeroesList isMyTeam />
        </header>
        <main className="App__main">
          <section className="App__search">
            <Search />
          </section>

          <section className="App__hero-list">
            <Switch>
              {routes}
              <Redirect to="/dc" />
            </Switch>
          </section>

          <section className="App__logos">
            {logos}
          </section>
        </main>
      </div>
    );
  }
}

export default App;
