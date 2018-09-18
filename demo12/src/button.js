import React, { Component } from 'react';

export default class Bottom extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const {
      opts,
    } = this.props;
    const {
      txt = '',
      type = 'normal',
    } = opts;
    return (
      <div className={`btn ${type}`}>{txt}</div>
    )
  }
}
