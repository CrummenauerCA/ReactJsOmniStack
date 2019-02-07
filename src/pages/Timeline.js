import React, { Component } from 'react';

import './Timeline.css';
import twitterLogo from '../twitter.svg';

export default class Timeline extends Component {

  state = {
    newTweet: ''
  }

  handleInputChange = event => {
    this.setState({
      newTweet: event.target.value
    });
  }

  handleNewTweet = event => {
    if (event.keyCode !== 13) return;
    const content = this.state.newTweet;
    const author = localStorage.getItem('@GoTwitter:username');
    console.log(content, author);
  }

  render() {
    return (
      <div className="timeline-wrapper">
        <img height={24} src={twitterLogo} alt="Logotipo do Twitter" />
        <form>
          <textarea
            value={this.state.newTweet}
            onChange={this.handleInputChange}
            onKeyDown={this.handleNewTweet}
            placeholder="O que está acontecendo?"
          ></textarea>
        </form>
        <ul>

        </ul>
      </div>
    );
  }
}
