//var React = require('react');
//var marked = require('marked');
import React from 'react';

(function() {
//google.load('visualization', '1', { 'packages': ['gauge'] });
//google.setOnLoadCallback(init);
google.charts.load('current', {'packages':['gauge']});
google.charts.setOnLoadCallback(init);

var GChart = React.createClass({
  displayName: "GChart",
  getInitialState: function() {
    return {
      data: this.getData()
    };
  },
  
  render: function() {
    return React.DOM.div({
      id: this.props.graphName,
    });
  },
  componentDidMount: function() {
    this.draw();
    this.interval = setInterval(this.update, 5000);
  },
  update: function(){
    this.setState({
      data : this.getData()
    });
    this.draw();
  },
  draw: function() {
    var data = this.state.data;
    var options = {
      width: 400, height: 220,
      redFrom: 90, redTo: 100,
      yellowFrom:75, yellowTo: 90,
      minorTicks: 100
    };
    var element = document.getElementById(this.props.graphName);
    var chart = new google.visualization.Gauge(element);
    chart.draw(data, options);
  },
  getData: function() {
    var data = google.visualization.arrayToDataTable([
        ['Label', 'Value'],
        ['Memory', 80],
        ['CPU', 55],
        ['Network', 68]
    ]);
    console.log(this.props.data);
    data.setValue(0, 1, 40 + Math.round(60 * Math.random()));
    data.setValue(1, 1, 40 + Math.round(60 * Math.random()));
    data.setValue(2, 1, 60 + Math.round(20 * Math.random()));
    return data;
  }
});

/*var data = google.visualization.arrayToDataTable([
        ['Label', 'Value'],
        ['Memory', 80],
        ['CPU', 55],
        ['Network', 68]
    ]);*/
//console.log(data);
function init() {
  
    React.render(React.createElement(GChart, {
      graphName: "line"
    }), document.body);
}


})()