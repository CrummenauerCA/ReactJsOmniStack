import React, { Component } from 'react';

import './Login.css';
import tweeterLogo from '../twitter.svg';

export default class Login extends Component {
  render() {
    return (
      <div className='login-wrapper'>
        <img src={tweeterLogo} alt="Logotipo do Tweeter" />
        <form>
          <input placeholder="Nome de usuário" />
          <button type="submit">Entrar</button>
        </form>
      </div>
    );
  }
}
