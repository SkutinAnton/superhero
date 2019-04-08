import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons'
import classNames from 'classnames';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import * as actions from '../../store/actions';
import './Hero.scss';

/**
 * Компонент супергероя
 *
 * @class Hero
 * @extends {Component}
 */
class Hero extends Component {

  static propTypes = {
    isMyTeam: PropTypes.bool,
    name: PropTypes.string,
    image: PropTypes.string,
  }

  /**
   * Показать крест для удаления героя
   *
   * @memberof Hero
   */
  showRemoveCross(hero) {
    return (
      <div onClick={() => this.props.removeHero(hero)} className="Hero__remove">
        <FontAwesomeIcon icon={faTimes} />
      </div>
    );
  }

  /**
   * Показывает счетчик героя
   *
   * @param {*} hero
   * @memberof Hero
   */
  showHeroCount(hero) {
    return hero.count > 1 ? <div className="Hero__count">{hero.count}</div> : null;
  }

  /**
   * Показать имя героя
   *
   * @param {*} name
   * @memberof Hero
   */
  showHeroName(hero) {
    return <p className="Hero__name">{hero.name}</p>;
  }

  render() {
    const { isMyTeam, hero } = this.props;

    const removeCross = isMyTeam ? this.showRemoveCross(hero) : null;
    const heroCount = isMyTeam ? this.showHeroCount(hero) : null;
    const heroName = !isMyTeam ? this.showHeroName(hero) : null;
    const addHero = isMyTeam ? () => {} : this.props.addHero;
    let imgLink = require(`../../${hero.image}`);

    if (hero.name === 'Человек-паук' && hero.count >= 30) {
      imgLink = require('../../assets/img/fat_spider-man.png');
    }

    const HeroClass = classNames({
      'Hero': true,
      'Hero--touch': !isMyTeam,
      'Hero--spider-man': !isMyTeam,
    });

    const HeroImageWrapperClass = classNames({
      'Hero__image-wrapper': true,
      'Hero__image-wrapper--spider-man': imgLink.includes('fat_spider-man'),
    });

    return (
      <div onClick={() => addHero(hero)} className={HeroClass}>
        <div className={HeroImageWrapperClass}>
          <img src={imgLink} className="Hero__image" alt="Hero" />
          {removeCross}
          {heroCount}
        </div>
        {heroName}
      </div>
    );
  }
}

export default connect(null, actions)(Hero);