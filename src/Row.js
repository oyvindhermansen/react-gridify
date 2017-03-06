import React, { Component } from 'react';
import { css } from 'glamor';

export default class Row extends Component {
  setStyles(maxWidth) {
    let styles = {
      maxWidth: '64rem',
      width: '100%',
      margin: '0 auto',
      display: 'table'
    }

    if (maxWidth) {
      styles = Object.assign(
        styles,
        { maxWidth: maxWidth }
      )
    }

    return css(styles)
  }

  render() {
    const { children, maxWidth } = this.props;
    return (
      <div className="row" {...this.setStyles(maxWidth)}>
        {children}
      </div>
    )
  }
}
