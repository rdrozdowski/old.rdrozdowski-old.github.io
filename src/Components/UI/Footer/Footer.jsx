import React, { Component } from 'react';
import {BrowserHistory as Router, Link} from 'react-router-dom';
import Privacy from '../Policy/index';
import Styles from './Footer.scss';

export default class Footer extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <footer role="contentinfo" className={'row'}>
        <div className={'col-md-2 col-lg-2'}><Link className={Styles.footer_privacy_policy} to={'/policy'}>Show Privacy Policy</Link></div>
        <div className={'col-md-8 col-lg-8'}>
          <p>All rights reserved ©  <span id="now">2019</span> Rafal Drozdowski</p>
        </div>
        <div className={'col-md-2 col-lg-2'}></div>
      </footer>
    )
  }
}