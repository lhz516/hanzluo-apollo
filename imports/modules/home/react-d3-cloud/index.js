// Forked from https://github.com/Yoctol/react-d3-cloud

import React from 'react';
import { Meteor } from 'meteor/meteor';
import { Component } from 'react';
import PropTypes from 'prop-types';
import ReactFauxDom from 'react-faux-dom';
import * as d3 from 'd3';
import cloud from 'd3-cloud';
import Icon from 'antd/lib/icon'

const defaultFontSizeMapper = word => word.value;
const fill = d3.scaleOrdinal(d3.schemeCategory10);

class WordCloud extends Component {
  static propTypes = {
    data: PropTypes.arrayOf(PropTypes.shape({
      text: PropTypes.string.isRequired,
      value: PropTypes.number.isRequired,
    })).isRequired,
    width: PropTypes.number,
    height: PropTypes.number,
    padding: PropTypes.oneOfType([
      PropTypes.number,
      PropTypes.func,
    ]),
    font: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.func,
    ]),
    fontSizeMapper: PropTypes.func,
    rotate: PropTypes.oneOfType([
      PropTypes.number,
      PropTypes.func,
    ]),
  }

  static defaultProps = {
    padding: 5,
    font: 'serif',
    fontSizeMapper: defaultFontSizeMapper,
    rotate: 0,
  }

  state = {
    width: 0,
    height: 0,
  }

  justUpdatedDOM = false;

  componentWillMount() {
    this.wordCloud = ReactFauxDom.createElement('div');
    this.wordCloud.style.setProperty('width', '100%');
    this.wordCloud.style.setProperty('height', '100%');
    this.wordCloud.style.setProperty('margin', '0 auto');
    if (Meteor.isServer) {
      this.wordCloud.style.setProperty('text-align', 'center');
      this.wordCloud.appendChild(<Icon key="1" style={{ fontSize: '36px', marginTop: '60px' }} type="loading" />)
    }
  }

  componentDidMount() {
    this.setState({
      width: this.wordCloud.component.offsetWidth,
      height: this.wordCloud.component.offsetHeight,
    });
    let windowWidth = window.innerWidth;
    d3.select(window).on('resize', () => {
      if (window.innerWidth >= 320 && this.justUpdatedDOM === false && window.innerWidth !== windowWidth) {
        windowWidth = window.innerWidth;
        this.setState({
          width: this.wordCloud.component.offsetWidth,
          height: this.wordCloud.component.offsetHeight,
        });
      }
    });
  }

  render() {
    if (Meteor.isServer) return this.wordCloud.toReact();
    const { data, padding, font, fontSizeMapper, rotate } = this.props;
    const { width, height } = this.state;
    const wordCounts = data.map(
      text => ({ ...text })
    );

    // clear old words
    d3.select(this.wordCloud).selectAll('*').remove();

    // render based on new data
    const layout = cloud()
      .size([width, height])
      .font(font)
      .words(wordCounts)
      .padding(padding)
      .rotate(rotate)
      .fontSize(fontSizeMapper)
      .on('end', words => {
        d3.select(this.wordCloud)
          .append('svg')
          // .attr('width', layout.size()[0])
          // .attr('height', layout.size()[1])
          .append('g')
          .attr('transform', `translate(${layout.size()[0] / 2},${layout.size()[1] / 2})`)
          .selectAll('text')
          .data(words)
          .enter()
          .append('text')
          .style('font-size', d => `${d.size}px`)
          .style('font-size', d => `${d.size}px`)
          .style('font-family', font)
          .style('fill', (d, i) => fill(i))
          .attr('text-anchor', 'middle')
          .attr('transform',
            d => `translate(${[d.x, d.y]})rotate(${d.rotate})`
          )
          .text(d => d.text);
      });

    layout.start();

    return this.wordCloud.toReact();
  }
}

export default WordCloud;
