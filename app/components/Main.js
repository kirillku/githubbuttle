import React from 'react';

module.exports = React.createClass({
  render() {
    return (
      <div className="main-container">
        <p>Hello from Main!</p>
        {this.props.children}
      </div>
    );
  }
});
