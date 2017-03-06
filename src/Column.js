import React, { Component, PropTypes } from 'react'
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
        '@media only screen and (max-width: 64em)': this.setStandardStyles(
          columnNumber
        )
      })
    }
  }

  smallify(columnNumber) {
    if (columnNumber) {
      return css({
        '@media only screen and (max-width: 40em)': this.setStandardStyles(
          columnNumber
        )
      })
    }
  }

  extraSmallify(columnNumber) {
    if (columnNumber) {
      return css({
        '@media only screen and (max-width: 25em)': this.setStandardStyles(
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
      xSmall,
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
        {...this.extraSmallify(xSmall)}
        {...this.paddify(padding)}
      >
        {children}
      </div>
    )
  }
}

Column.PropTypes = {
  xSmall: React.PropTypes.string,
  small: React.PropTypes.string,
  medium: React.PropTypes.string,
  large: React.PropTypes.string,
  padding: React.PropTypes.string,
}
