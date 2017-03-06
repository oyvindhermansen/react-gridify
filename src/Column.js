import React, { Component } from 'react'
import { css } from 'glamor'

export default class Column extends Component {
  calculateWidth(size) {
    return 100 / size
  }

  largify(gridSize) {
    let styles = {}

    if (gridSize) {
      styles = {
        width: `${this.calculateWidth(gridSize)}%`,
        float: 'left'
      }
    } else {
      styles = {
        width: `100%`,
      }
    }

    return css(styles)
  }

  mediumify(gridSize) {
    if (gridSize) {
      return css({
        '@media(max-width: 900px)': {
          width: `${this.calculateWidth(gridSize)}%`,
          float: 'left'
        }
      })
    }
  }

  smallify(gridSize) {
    if (gridSize) {
      return css({
        '@media(max-width: 600px)': {
          width: `${this.calculateWidth(gridSize)}%`,
          float: 'left'
        }
      })
    }
  }

  paddify(padding) {
    let p = css({
      boxSizing: 'border-box',
      paddingLeft: '5px',
      paddingRight: '5px'
    })
    if (padding) {
      p = css({
        boxSizing: 'border-box',
        paddingLeft: padding,
        paddingRight: padding
      })
    }
    return p
  }

  render() {
    const {
      small,
      medium,
      large,
      padding,
      className,
      children
    } = this.props

    const additionalClassNames = className ? className : ''

    return (
      <div
        className={`column ${additionalClassNames}`}
        {...this.largify(large)}
        {...this.mediumify(medium)}
        {...this.smallify(small)}
        {...this.paddify(padding)}
      >
        {children}
      </div>
    )
  }
}
