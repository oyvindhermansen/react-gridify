import React, { Component } from 'react';
import { css } from 'glamor';

export default class Row extends Component {
  constructor(props) {
    super(props);
    this.defaultStyles = css({
      maxWidth: '64rem',
      width: '100%',
      margin: '0 auto',
      display: 'table'
    })
  }

  render() {
    const { children } = this.props;
    return (
      <div className="row" {...this.defaultStyles}>
        {children}
      </div>
    )
  }
}
