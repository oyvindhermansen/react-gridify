import React, { Component } from 'react'
import { css } from 'glamor'

export default class Column extends Component {
  calculateWidth(size) {
    return 100 / size
  }

  setStandardStyles(columnNumber) {
    const { centered } = this.props
    if (centered) {
      return {
        width: `${this.calculateWidth(columnNumber)}%`,
        margin: '0 auto',
        position: 'relative'
      }
    } else {
      return {
        width: `${this.calculateWidth(columnNumber)}%`,
        float: 'left',
        position: 'relative'
      }
    }
  }

  largify(columnNumber) {
    let styles = {}

    if (columnNumber) {
      styles = this.setStandardStyles(columnNumber)
    } else {
      styles = {
        width: `100%`,
      }
    }

    return css(styles)
  }

  mediumify(columnNumber) {
    if (columnNumber) {
      return css({
        '@media(max-width: 900px)': this.setStandardStyles(
          columnNumber
        )
      })
    }
  }

  smallify(columnNumber) {
    if (columnNumber) {
      return css({
        '@media(max-width: 600px)': this.setStandardStyles(
          columnNumber
        )
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
      centered,
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
