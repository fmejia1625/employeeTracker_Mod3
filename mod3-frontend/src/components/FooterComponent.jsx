import React, { Component } from 'react';

class FooterComponent extends Component {
  constructor(props) {
    super(props)

    this.state = {

    }
  }

  // inside the footer element in our render, we will create a span that will contain the copyright text below
  render() {
    return (
      <div>
        <footer className="footer">
          <span className="navbar-dark bg-dark"><a href="https://github.com/fmejia1625/employeeTracker_Mod3" className="navbar-brand">Created 06/21/2021 @fmejia1625</a></span>
        </footer>
      </div>
    );
  }
}

export default FooterComponent;



// In this component, we are creating a footer to be rendered onto our main page. Used RCC to create frame for FooterComponent. 