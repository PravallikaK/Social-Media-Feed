import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import FeedInfo from "./FeedInfo";

class App extends Component {
  constructor(){
    super()
    this.state = {
        feeds: [],
        feed: {
          title: '',
          url: ''
        }
    }
    this.updateFeed = this.updateFeed.bind(this);
    this.addFeed = this.addFeed.bind(this);
  }
  updateFeed = (e) => {
    const { feed } = this.state;
    this.setState({
        feed: {
            ...feed,
            [e.target.name]: e.target.value
        }
    });
  }
  addFeed = (event) => {
    const { feeds, feed } = this.state;
  if(feed.title !== '' && feed.url !== ''){
    this.setState({
        feeds: [...feeds, feed]
    });
  }
    event.preventDefault();
  }

  render() {
    const { feeds } = this.state;
    return (
      <div className="App">
        <section id="search" className="alt" style={{ display: "block" }}>
            <form method="post" action="#">
                <input onChange={this.updateFeed} name="url" type="text" id= "url" placeholder="Enter URL" /><br />
                <input onChange={this.updateFeed} name="title" type="text" id= "title" placeholder="Title" />
                <button onClick={this.addFeed} id="mybutton" >New Post</button>
            </form>
        </section>
        {feeds.length >0 && (<FeedInfo feeds= {feeds} />  )}
      </div>
    ); 
  }
}

ReactDOM.render(<App />, document.getElementById("root"));  
