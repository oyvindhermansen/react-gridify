import React, { Component } from 'react'
import { css } from 'glamor'

export default class Column extends Component {
  calculateWidth(size) {
    return 100 / size
  }

  largify(gridSize) {
    const styles = css({
      width: `${this.calculateWidth(gridSize)}%`,
      float: 'left'
    })

    return styles
  }

  mediumify(gridSize) {
    const styles = css({
      '@media(max-width: 900px)': {
        width: `${this.calculateWidth(gridSize)}%`,
        float: 'left'
      }
    })

    return styles
  }

  smallify(gridSize) {
    const styles = css({
      '@media(max-width: 600px)': {
        width: `${this.calculateWidth(gridSize)}%`,
        float: 'left'
      }
    })

    return styles
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
