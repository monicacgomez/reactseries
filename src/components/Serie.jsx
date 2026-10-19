import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import ServiceSeries from '../services/ServiceSeries';

export default class Serie extends Component {

    service = new ServiceSeries();

    state = {
        series: [],
        error: ''
    };

    componentDidMount() {
        if (this.props.idpersonaje) {
            this.service.getSeriePersonajes(this.props.id)

        }
    }
  render() {
    return (
      <div>Serie</div>
    )
  }
}
