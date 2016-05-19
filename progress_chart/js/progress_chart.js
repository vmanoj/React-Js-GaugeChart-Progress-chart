/*var React = require('react');
var marked = require('marked');*/
import React from 'react';

var InsetShadow=React.createClass({

    propTypes: {
        id:React.PropTypes.string,
        stdDeviation:React.PropTypes.string,
        floodColor:React.PropTypes.string,
        floodOpacity:React.PropTypes.string
    },
    render:function(){
        return(
            <defs>
                <filter id={this.props.id}>
                    <feOffset dx="0" dy="0"/>
                    <feGaussianBlur is stdDeviation={this.props.stdDeviation} result="offset-blur"/>
                    <feComposite is operator="out" in="SourceGraphic" in2="offset-blur" result="inverse"/>
                    <feFlood is flood-color={this.props.floodColor} flood-opacity={this.props.floodOpacity} result="color"/>
                    <feComposite is operator="in" in="color" in2="inverse" result="shadow"/>
                    <feComposite is operator="over" in="shadow" in2="SourceGraphic"/>
                </filter>
            </defs>
        );
    }

});

var ProgressChart=React.createClass({
    propTypes: {
        width:React.PropTypes.number,
        height:React.PropTypes.number,
        chartId:React.PropTypes.string
    },

    getDefaultProps: function() {
        return {
            width: 100,
            height: 100,
            chartId: 'v_chart'
        };
    },
    getInitialState:function(){
        return {percent:0};
    },

    componentDidMount: function() {
      this.interval = setInterval(this.updateData, 4000);
    },
    componentWillMount:function(){

        this.setState({percent:.87});
    },
    componentWillUnmount:function(){


    },
    updateData:function(){

        var value=(Math.floor(Math.random() * (80) + 10))/100;

        this.setState({percent:value});
    },

    render:function(){

        var color = ['#404F70','#67BAF5','#2d384d'];

        var outerRadius=(this.props.height/2)-10;
        var innerRadius=outerRadius-10;

        var arc=d3.svg.arc()
            .innerRadius(innerRadius)
            .outerRadius(outerRadius)
            .startAngle(0)
            .endAngle(2*Math.PI);


        var arcLine=d3.svg.arc()
            .innerRadius(innerRadius)
            .outerRadius(outerRadius)
            .cornerRadius(20)
            .startAngle(-0.05);

        var transform='translate('+this.props.width/2+','+this.props.height/2+')';
        var style1={
            filter:'url(#inset-shadow1)'
        };
        var style2={
            filter:'url(#inset-shadow2)'
        };
        var styleText= {
            'fontSize': '20px'
        };
        return (
          <div className="container">
            <div className="col-md-10 chart_outer_div">
              <div className="col-sm-4 chart_sub_div">
                
                <div className="chart_header">
                    <p className="chart_os_img"></p>
                    <p className="chart_id_val">172.17.0.161-5560</p>
                </div>

                <div className="col-sm-4 chart_svg_div">

                  <svg id={this.props.chartId} width={this.props.width}
                       height={this.props.height} onClick={this.updateData}>

                      <g transform={transform}>
                          <InsetShadow id="inset-shadow1" stdDeviation="5" floodColor="black" floodOpacity=".5"/>
                          <InsetShadow id="inset-shadow2" stdDeviation="1" floodColor="white" floodOpacity=".5"/>

                          <path fill={color[0]} d={arc()}></path>
                          <path fill={color[1]} d={arcLine({endAngle:(2*Math.PI)*this.state.percent})}></path>
                          <circle r={innerRadius} cx="0" cy="0"
                                  fill={color[2]} fillOpacity="1"/>
                          <text textAnchor="middle" dy="15" dx="5" fill={d3.rgb(color[1]).brighter(2)}
                              style={styleText}>{this.state.percent*100+'%'}</text>
                      </g>
                      
                  </svg>
                  <p>CPU Load</p>
                </div>
                <div className="col-sm-4 chart_val_div">

                  <p><img className="os_img" />Andriod OS</p>
                  <p> <img  className="user_img" />Active Users - 49</p>
                  <p><img className="flash_img" /> Uptime - 10 days</p>
                </div>

              </div>

              <div className="col-sm-4 chart_sub_div">
                
                <div className="chart_header">
                    <p className="chart_os_img"></p>
                    <p className="chart_id_val">172.17.0.161-5560</p>
                </div>

                <div className="col-sm-4 chart_svg_div">

                  <svg id={this.props.chartId} width={this.props.width}
                       height={this.props.height} onClick={this.updateData}>

                      <g transform={transform}>
                          <InsetShadow id="inset-shadow1" stdDeviation="5" floodColor="black" floodOpacity=".5"/>
                          <InsetShadow id="inset-shadow2" stdDeviation="1" floodColor="white" floodOpacity=".5"/>

                          <path fill={color[0]} d={arc()}></path>
                          <path fill={color[1]} d={arcLine({endAngle:(2*Math.PI)*this.state.percent})}></path>
                          <circle r={innerRadius} cx="0" cy="0"
                                  fill={color[2]} fillOpacity="1"/>
                          <text textAnchor="middle" dy="15" dx="5" fill={d3.rgb(color[1]).brighter(2)}
                              style={styleText}>{this.state.percent*100+'%'}</text>
                      </g>
                      
                  </svg>
                  <p>CPU Load</p>
                </div>
                <div className="col-sm-6 chart_val_div">

                  <p><img className="os_img" />Andriod OS</p>
                  <p> <img  className="user_img" />Active Users - 49</p>
                  <p><img className="flash_img" /> Uptime - 10 days</p>
                </div>

              </div>

              <div className="col-sm-4 chart_sub_div">
                
                <div className="chart_header">
                    <p className="chart_os_img"></p>
                    <p className="chart_id_val">172.17.0.161-5560</p>
                </div>

                <div className="col-sm-4 chart_svg_div">

                  <svg id={this.props.chartId} width={this.props.width}
                       height={this.props.height} onClick={this.updateData}>

                      <g transform={transform}>
                          <InsetShadow id="inset-shadow1" stdDeviation="5" floodColor="black" floodOpacity=".5"/>
                          <InsetShadow id="inset-shadow2" stdDeviation="1" floodColor="white" floodOpacity=".5"/>

                          <path fill={color[0]} d={arc()}></path>
                          <path fill={color[1]} d={arcLine({endAngle:(2*Math.PI)*this.state.percent})}></path>
                          <circle r={innerRadius} cx="0" cy="0"
                                  fill={color[2]} fillOpacity="1"/>
                          <text textAnchor="middle" dy="15" dx="5" fill={d3.rgb(color[1]).brighter(2)}
                              style={styleText}>{this.state.percent*100+'%'}</text>
                      </g>
                      
                  </svg>
                  <p>CPU Load</p>
                </div>
                <div className="col-sm-6 chart_val_div">

                  <p><img className="os_img" />Andriod OS</p>
                  <p> <img  className="user_img" />Active Users - 49</p>
                  <p><img className="flash_img" /> Uptime - 10 days</p>
                </div>

              </div>

              <div className="col-sm-4 chart_sub_div">
                
                <div className="chart_header">
                    <p className="chart_os_img"></p>
                    <p className="chart_id_val">172.17.0.161-5560</p>
                </div>

                <div className="col-sm-4 chart_svg_div">

                  <svg id={this.props.chartId} width={this.props.width}
                       height={this.props.height} onClick={this.updateData}>

                      <g transform={transform}>
                          <InsetShadow id="inset-shadow1" stdDeviation="5" floodColor="black" floodOpacity=".5"/>
                          <InsetShadow id="inset-shadow2" stdDeviation="1" floodColor="white" floodOpacity=".5"/>

                          <path fill={color[0]} d={arc()}></path>
                          <path fill={color[1]} d={arcLine({endAngle:(2*Math.PI)*this.state.percent})}></path>
                          <circle r={innerRadius} cx="0" cy="0"
                                  fill={color[2]} fillOpacity="1"/>
                          <text textAnchor="middle" dy="15" dx="5" fill={d3.rgb(color[1]).brighter(2)}
                              style={styleText}>{this.state.percent*100+'%'}</text>
                      </g>
                      
                  </svg>
                  <p>CPU Load</p>
                </div>
                <div className="col-sm-6 chart_val_div">

                  <p><img className="os_img" />Andriod OS</p>
                  <p> <img  className="user_img" />Active Users - 49</p>
                  <p><img className="flash_img" /> Uptime - 10 days</p>
                </div>

              </div>

              <div className="col-sm-4 chart_sub_div">
                
                <div className="chart_header">
                    <p className="chart_os_img"></p>
                    <p className="chart_id_val">172.17.0.161-5560</p>
                </div>

                <div className="col-sm-4 chart_svg_div">

                  <svg id={this.props.chartId} width={this.props.width}
                       height={this.props.height} onClick={this.updateData}>

                      <g transform={transform}>
                          <InsetShadow id="inset-shadow1" stdDeviation="5" floodColor="black" floodOpacity=".5"/>
                          <InsetShadow id="inset-shadow2" stdDeviation="1" floodColor="white" floodOpacity=".5"/>

                          <path fill={color[0]} d={arc()}></path>
                          <path fill={color[1]} d={arcLine({endAngle:(2*Math.PI)*this.state.percent})}></path>
                          <circle r={innerRadius} cx="0" cy="0"
                                  fill={color[2]} fillOpacity="1"/>
                          <text textAnchor="middle" dy="15" dx="5" fill={d3.rgb(color[1]).brighter(2)}
                              style={styleText}>{this.state.percent*100+'%'}</text>
                      </g>
                      
                  </svg>
                  <p>CPU Load</p>
                </div>
                <div className="col-sm-6 chart_val_div">

                  <p><img className="os_img" />Andriod OS</p>
                  <p> <img  className="user_img" />Active Users - 49</p>
                  <p><img className="flash_img" /> Uptime - 10 days</p>
                </div>

              </div>

              <div className="col-sm-4 chart_sub_div">
                
                <div className="chart_header">
                    <p className="chart_os_img"></p>
                    <p className="chart_id_val">172.17.0.161-5560</p>
                </div>

                <div className="col-sm-4 chart_svg_div">

                  <svg id={this.props.chartId} width={this.props.width}
                       height={this.props.height} onClick={this.updateData}>

                      <g transform={transform}>
                          <InsetShadow id="inset-shadow1" stdDeviation="5" floodColor="black" floodOpacity=".5"/>
                          <InsetShadow id="inset-shadow2" stdDeviation="1" floodColor="white" floodOpacity=".5"/>

                          <path fill={color[0]} d={arc()}></path>
                          <path fill={color[1]} d={arcLine({endAngle:(2*Math.PI)*this.state.percent})}></path>
                          <circle r={innerRadius} cx="0" cy="0"
                                  fill={color[2]} fillOpacity="1"/>
                          <text textAnchor="middle" dy="15" dx="5" fill={d3.rgb(color[1]).brighter(2)}
                              style={styleText}>{this.state.percent*100+'%'}</text>
                      </g>
                      
                  </svg>
                  <p>CPU Load</p>
                </div>
                <div className="col-sm-6 chart_val_div">

                  <p><img className="os_img" />Andriod OS</p>
                  <p> <img  className="user_img" />Active Users - 49</p>
                  <p><img className="flash_img" /> Uptime - 10 days</p>
                </div>

              </div>              

            </div>

          </div>
        );
    }
});

//window.ProgressChart=ProgressChart;
module.exports = ProgressChart;