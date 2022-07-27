import React from 'react';
import PropTypes from 'prop-types';

import "./Titulo.css";

export default class Titulo extends React.Component{
    static propTypes = {
        value: PropTypes.string,
    };

    render(){
        return(
          <div className="component-titulo">
              <div>{this.props.value}</div>
          </div>
        );
    }
}