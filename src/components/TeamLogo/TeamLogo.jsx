import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../store/actions';
import PropTypes from 'prop-types';

/**
 * Компонент логотипа команды супергероев
 *
 * @class TeamLogo
 * @extends {Component}
 */
class TeamLogo extends Component {
  static propTypes = {
    link: PropTypes.string,
    changeText: PropTypes.func
  }

  /**
   * Сбросить текст поиска
   *
   * @memberof TeamLogo
   */
  resetSearchText = () => {
    this.props.changeText('');
  }

  render() {
    const { link } = this.props;
    const imgLink = require(`../../assets/img/logo/${link}.svg`)
    
    return (
      <div onClick={this.resetSearchText} className="TeamLogo__image-wrapper">
        <img src={imgLink} className="TeamLogo__image" alt="TeamLogo" />
      </div>
    );
  }
}

export default connect(null, actions)(TeamLogo);