import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import * as actions from '../../store/actions';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import './Search.scss'

/**
 * Компонент поиска по супергероям
 *
 * @class Search
 * @extends {Component}
 */
class Search extends Component {

  static propTypes = {
    searchText: PropTypes.string,
    changeText: PropTypes.func
  }
  
  /**
   * Текст поиска
   *
   * @param {*} event
   * @memberof Search
   */
  changeText = (event) => {
    const text = event.target.value;
    this.props.changeText(text);
  }

  render() {
    const { searchText } = this.props;

    return (
      <div className="Search">
        <input value={searchText} onChange={this.changeText} className="Search__text" type="text" placeholder="Имя героя" />
        <FontAwesomeIcon className="Search__icon" icon={faSearch} />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    searchText: state.searchText
  };
};

export default connect(mapStateToProps, actions)(Search);