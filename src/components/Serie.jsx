import React, { Component } from 'react';
import {NavLink} from 'react-router-dom';
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
            .then(series => {
              this.setState ({ series: series, error: ''});
            }).catch (() => {
              this.setState({error: 'No se pudieron cargar las series'});
            });

          } else if (this.props.nombre) {
            this.service.findSeries(this.props.nombre)
            .then(series => {
              this.setState({series: series, error: ''});
            }).catch(() => {
              this.setState({error: 'No se pudieron cargar las series'});
            });
          
          } else {
              this.service.getSeries()
              .then(series => {
                this.setState({series: series, error: ''});
              }).catch(() => {
                this.setState({error: 'No se pudieron cargar las series'});
              });
            }
          }

        render() {
          return (
            <div className="container mt-4">
              <h2>Series</h2>

              {this.state.error !== '' &&
              <div className="alert alert-danger">
                {this.state.error}
              </div>
        }

        <div className="table-responsive">
          <table className= "table table-stripedtable-bordered">
            <thead className="table-dark">
              <tr>
                <th>Nombre</th>
                <th>Imagen</th>
                <th>Puntuacion</th>
                <th>Anyo</th>
              </tr>
            </thead>

            <tbody>
              {
                this.state.series.map(serie => (
                  <tr key={serie.idSerie}>
                    <td>
                      <img src={serie.imagen} alt={serie.nombre} style={{width: '65px', height: '65px', objectFit:'cover'}}
                      />
                    </td>
                    <td>{serie.nombre}</td>
                    <td>{serie.puntuacion}</td>
                    <td>{serie.pais}</td>

                    <Navlink className="btn btn-info btn-sm" to= {'/series/' + serie.idSerie} >
                    Ver detalles
                    </Navlink>
                  </tr>
                ))
              }
            </tbody>
          </table>
        </div>


            </div> 
);
    }
}
