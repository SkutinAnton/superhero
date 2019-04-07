import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import * as actions from '../../store/actions';
import { connect } from 'react-redux';
import './Search.scss'

class Search extends Component {
  
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