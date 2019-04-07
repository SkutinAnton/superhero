import React, { Component } from 'react';
import { Hero } from '../index';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { superhero } from '../../assets/data/superhero';
import { connect } from 'react-redux';
import './HeroesList.scss';

class HeroesList extends Component {

  state = {
    heroes: []
  }

  static propTypes = {
    isMyTeam: PropTypes.bool,
    url: PropTypes.string,
  }

  componentDidMount() {
    const { isMyTeam } = this.props;
    if (!isMyTeam) {
      this.getHeroesFromUrl();
    }
  }

  componentDidUpdate(prevProps, prevState) {
    const { isMyTeam, heroesList, searchText } = this.props;

    if (isMyTeam && JSON.stringify(heroesList) !== JSON.stringify(prevState.heroes)) {
      this.getHeroesFromStore();
    }

    if (!isMyTeam && prevProps.searchText !== searchText) {
      this.getHeroesFromUrl();
    }
  }

  /**
   * Получаем героев в зависимости от текущего url
   *
   * @memberof HeroesList
   */
  getHeroesFromUrl() {
    const { url, searchText } = this.props;
    let heroes;

    if (searchText) {
      heroes = superhero[url].filter(hero => hero.name.toLowerCase().includes(searchText.toLowerCase()));
    } else {
      heroes = superhero[url];
    }

    this.setState({ heroes });
  }

  /**
   * Получаем героев из store
   *
   * @memberof HeroesList
   */
  getHeroesFromStore() {
    const { heroesList } = this.props;
    this.setState({ heroes: heroesList });
  }

  /**
   * Возвращаем список героев
   *
   * @param {*} heroes
   * @param {*} isMyTeam
   * @returns
   * @memberof HeroesList
   */
  getListItem(heroes, isMyTeam) {
    return heroes.map(item => {
      const hero = { ...item };
      return (
        <li key={hero.name}>
          <Hero isMyTeam={isMyTeam} hero={hero} />
        </li>
      )
    })
  }

  render() {
    const { isMyTeam } = this.props;
    const { heroes } = this.state;
    const heroesList = this.getListItem(heroes, isMyTeam);
    const heroesClass = classNames({
      'HeroesList': true,
      'HeroesList--vertical': !isMyTeam,
      'HeroesList--horizontal': isMyTeam,
    });

    if (!heroes.length) {
      return isMyTeam ? 
        <p className="HeroesList--empty-list">Выберите героя</p> :
        <p className="HeroesList--not-found">Ничего не найдено</p>;
    }

    return (
      <ul className={heroesClass}>
        {heroesList}
      </ul>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    heroesList: state.heroesList,
    searchText: state.searchText
  };
};

export default connect(mapStateToProps)(HeroesList);