import React, { Component } from 'react';
import './App.css';

export default class FeedInfo extends Component {
  constructor(props){
    super(props);
  }
  render() {
    const { feeds } = this.props;
    return (
      <div className="main">
        <section className="feeds-container">
          <div className="feeds" >
              { 
                 feeds.map((fee, i)=>{
                      return (
                          <div key={i} className="iterate-info">
                            <h4>{fee.title}</h4>
                            <img src={fee.url} alt={fee.title} style={{width: "80%", height: "460px"}}/>
                          </div>                         
                      )
                  })
              }
          </div>
        </section>
      </div>
    );
  }
}