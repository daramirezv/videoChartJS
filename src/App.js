import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Radar } from 'react-chartjs-2';

class App extends Component {
  render() {

    const data = { labels: ["Eating", "Drinking", "Sleeping", "Designing", "Coding", "Cycling", "Running"], "datasets": [{ pointRadius: 5, "label": "My First Dataset", "data": [65, 59, 90, 81, 56, 55, 40], "fill": true, "backgroundColor": "rgba(255, 99, 132, 0.2)", "borderColor": "rgb(255, 99, 132)", "pointBackgroundColor": "rgb(255, 99, 132)", "pointBorderColor": "#fff", "pointHoverBackgroundColor": "#fff", "pointHoverBorderColor": "rgb(255, 99, 132)" }] }

    const options = {
      animation:
      {
        duration: 3000
      },
      legend: {
        display: true,
        labels: {
          fontColor: 'rgb(255, 99, 132)'
        }
      },
      title: {
        display: true,
        text: 'Proyecto web'
      },
      elements: {
        point: {
          pointStyle: 'rect'
        }
      },
      maintainAspectRatio: false,
      scales: {
        yAxes: [{
          ticks: {
            beginAtZero: true
          }
        }]
      }
    }
    return (
      <div className="col-md-6">
        <Radar
          data={data}
          width={100}
          height={500}
          options={options}
        />
      </div>
    );
  }
}

export default App;
