import React, { Component } from 'react'
import { css } from 'glamor'

/*
* TODO:
* Need to cut down to one switch/case for checking sizes.
* Three switches seems a bit excessive, and I am sure
* this can be done in a more efficient way.
*/

export default class Column extends Component {
  largify(gridSize) {
    const gridWidth = 100 / gridSize
    const styles = css({
      width: gridWidth+'%',
      float: 'left'
    })

    return styles

  }

  mediumify(gridSize) {
    const gridWidth = 100 / gridSize
    const styles = css({
      '@media(max-width: 900px)': {
        width: gridWidth+'%',
        float: 'left'
      }
    })

    return styles
  }

  smallify(gridSize) {
    const gridWidth = 100 / gridSize
    const styles = css({
      '@media(max-width: 600px)': {
        width: gridWidth+'%',
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
    const { small, medium, large, padding, children, className } = this.props

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
