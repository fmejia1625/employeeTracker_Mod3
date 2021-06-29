import React, { Component } from 'react';

class HeaderComponent extends Component {
  constructor(props) {
    super(props)

    this.state = {

    }
  }


  render() {
    return (
      <div>
        {/* Inside the header element will live our nav with the bootstrap className assigned to it */}
        <header>
          <nav className="navbar navbar-expand-md navbar-dark bg-dark">
            <div><a href="https://github.com/fmejia1625/employeeTracker_Mod3" className="navbar-brand">Employee Tracker</a></div>
          </nav>

        </header>
      </div>
    );
  }
}

export default HeaderComponent;

// In this component, we are creating a header to be rendered onto our main page. Used RCC to create frame for HeaderComponent. 