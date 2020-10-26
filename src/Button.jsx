import React, { Component } from 'react';
import './button.css'

class Button extends Component {
  
  render() {
    const {children, onClick} = this.props
    return (
      <button className="button-text" onClick={onClick}>
        {children}
      </button>
    );
  }
}

export default Button;
