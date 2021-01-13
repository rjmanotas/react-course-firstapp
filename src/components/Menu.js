import React, { Component } from 'react';

import { aerolineas } from './../data/aerolineas.json';
import ResponsiveMenu from 'react-responsive-navbar';
import { FaBars,FaTimes } from 'react-icons/fa';

export default class Menu extends Component {

  constructor(props){
    super(props);

    this.state = {
      aerolineas,
      name: ''
    }
  }

  render(){

    return(
      <div className="nav">
        <ResponsiveMenu
          menuOpenButton={<FaBars />}
          menuCloseButton={<FaTimes />}
          changeMenuOn="1000px"
          largeMenuClassName="large-menu-classname"
          smallMenuClassName="small-menu-classname"
          menu={
             <ul className="nav-link"><a>
          { 
            this.state.aerolineas.map((aerolinea, i) => {
              return(
                <li id="menuItem" key={i} onClick={() => this.props.handlerClick(aerolinea.aeroNombre)}>{ aerolinea.aeroNombre }</li>
              )
            }) 
          }</a>
        </ul>
          }
       />
      </div>
    )
  }

}
