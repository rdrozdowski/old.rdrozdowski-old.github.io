import React, { Component } from 'react';
import JsonMenu from '../Menu/Menu.json';
import Img from './img/versatility.jpg';

export default class Portfolio extends Component {
  render() {
    return (
      <section>
        <h5 dangerouslySetInnerHTML={{ __html: JsonMenu[2].menuTitle }}></h5>
        <p dangerouslySetInnerHTML={{ __html: JsonMenu[2].menuText }}></p>
      </section>
    )
  }
}