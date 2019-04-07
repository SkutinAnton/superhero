import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../store/actions';
import "react-router-dom";

class TeamLogo extends Component {
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