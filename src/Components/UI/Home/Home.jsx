import React, { Component } from 'react';
import JsonMenu from '../Menu/Menu.json';
import Popup from '../Popup/index';
import Img from './img/websites.jpg';


export default class Home extends Component {
  render() {
    return (
      <section>
        <img src={Img} className={'img-responsive'} />
        <h4 dangerouslySetInnerHTML={{__html: JsonMenu[0].menuTitle}}></h4>
        <p dangerouslySetInnerHTML={{ __html: JsonMenu[0].menuText }}></p>
        <Popup />
      </section>    
    )
  }
}