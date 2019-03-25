import React, { Component } from 'react';
import JsonMenu from '../Menu/Menu.json';
import Img from './img/websites.jpg';

export default class Contact extends Component {
  constructor() {
    super();
    this.submitForm = this.submitForm.bind(this);
  }

  submitForm(evt) {
    //alert('ff');
    fetch('http://localhost:80/php.php', {
      method: 'get',
      mode: 'cors',
      headers: new Headers({
        'Access-Control-Allow-Origin': 'http://localhost:80/',
        'Content-Type': 'multipart/form-data'
      })
    }).
      then(e => {
        console.log(e);
        e.json();
      }).
      then(e => {
        console.log('e:' + e);
        console.log(e);
      })
  }

  render() {
    return (
      <section>
        <img src={Img} className={'img-responsive'} />
        <h4 dangerouslySetInnerHTML={{ __html: JsonMenu[3].menuTitle }}></h4>
        <p>
          If you have enquiries or would just like to contact me, please use the details below or fill out the form.</p>
        <form id="contact-form" onSubmit={this.submitForm} action="javascript:void(0);">
        <div id="labels" className={'float-left'}>
            <label for="usernameInp" className={'display-block'}>Name</label>
            <label for="userEmailInp" className={'display-block'}>E-mail</label>
            <label for="userDescInp" className={'display-block'}>Message</label> 
          </div>        
          <div id="inputs">
            <input id="usernameInp" name="usernameInp" type="text" placeholder="eg. John" />
            <input type="text" id="userEmailInp" name="userEmailInp" placeholder="eg. john@server.com" />
            <textarea id="userDescInp" name="userDescInp" placeholder="message content"></textarea>
            <input className="clear-both" type="submit" value="Send" name="submit" id="submit" />
          </div>
        </form>
      </section>
    )
  }
}