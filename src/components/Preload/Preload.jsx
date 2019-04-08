import React, { Component } from 'react';
import './Preload.scss';

/**
 * Компонент прелоуда
 *
 * @class Preload
 * @extends {Component}
 */
class Preload extends Component {
  render() {
    const imgLink = require(`../../assets/img/super_heroes.png`)
    return (
      <div className='Preload'>
        <img className='Preload__image' src={imgLink} alt="Preload"/>
      </div>
    );
  }
}

export default Preload;