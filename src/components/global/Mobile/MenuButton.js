import React, { Component } from 'react';
import { connect } from 'react-redux';

function mapStateToProps(state) {
  return state
};

class MenuButton extends Component {

  render() {
    console.log(this.props.router.location.pathname)
    let menu_btn_colour;
    // if(this.props.router.location.pathname.includes("product")) {
    //   menu_btn_colour = "";
    // }
    // else if(this.props.router.location.pathname.includes("styles")) {
    //   menu_btn_colour = "";
    // }
    // else if(this.props.router.location.pathname.includes("cart")) {
    //   menu_btn_colour = "";
    // }
    // else if(this.props.router.location.pathname.includes("checkout")) {
    //   menu_btn_colour = "";
    // }
    // else if(this.props.router.location.pathname.includes("order-confirmation")) {
    //   menu_btn_colour = "";
    // }
    // else {
    //   menu_btn_colour = "light";
    // };
    
    if (['/product', '/checkout', '/cart', 'order-confirmation'].includes(this.props.router.location.pathname)) {
      menu_btn_colour = "";
    } else {
      menu_btn_colour = "light";
    }

    
    return (
      <button id="nav-toggle" className={`menu-btn nav-toggle ${menu_btn_colour}`} aria-controls="nav-toggle" aria-expanded="false" aria-label="Open menu">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <g className="hamburger-menu">
                <rect className="top" y="10" width="24" height="2" fill="currentColor"/>
                <rect className="middle" y="2" width="24" height="2" fill="currentColor"/>
                <rect className="bottom" y="18" width="24" height="2" fill="currentColor"/>
            </g>
        </svg>
      </button>
    )
  }

}

export default connect(mapStateToProps)(MenuButton);
