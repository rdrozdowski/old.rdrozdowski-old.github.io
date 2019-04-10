import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Redirect } from "react-router-dom";
import Policy from '../Policy/index';
import Styles from './Styles.scss';

class Popup extends Component {
  constructor() {
    super();
    this.state = {
      consent: false
    }
  }

  /*
  * onClick action
  */
  consentClick() {

    /**
     * set state key
     */
    this.setState({
      consent: true
    })

    /**
     * set localStorage key 
     */
    window.localStorage.setItem(
      'visited', true
    )

    /**
     * add google analytics script on users' consent
     */

    const scriptNode = document.createElement('script');
      scriptNode.type = "text/javascript";
    let googleScript = document.createTextNode("(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)})(window,document,'script','//www.google-analytics.com/analytics.js','ga');ga('create', 'UA-26045403-1', 'auto');ga('send', 'pageview');");
    scriptNode.appendChild(googleScript);
    document.head.appendChild(scriptNode);
  }

  render() {
    {
      console.log(`Consent button ${this.state.consent}`);
    }

    return (
      <div>
        {
          this.state.consent === false && !window.localStorage.getItem('visited') ? (
            <div className={Styles.popup}>
              <h4>Compliance Check</h4>
              <p>This site tracks visits anonymously using localStorage. Close this dialog to confirm you are happy with that, or
                &nbsp; <Link to={'/policy'} >find out more </Link> in the privacy statement.</p>
              <button className={Styles.button} onClick={this.consentClick.bind(this)}>Agree and close</button>
            </div>
          ) : (
              ""
            )
        }
      </div>
    )
  }
}

export default Popup