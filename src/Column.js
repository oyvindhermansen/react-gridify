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

    const styles = { width: '100%' }

    switch(gridSize) {
      case "1" :
        return css({
          ...styles,
          width: '100%',
          float: 'left'
        })
      case "2" :
        return css({
          ...styles,
          width: '50%',
          float: 'left'
        })
      case "3" :
        return css({
          ...styles,
          width: '33.33332%',
          float: 'left'
        })
      case "4" :
        return css({
          ...styles,
          width: '25%',
          float: 'left'
        })
      case "5" :
        return css({
          ...styles,
          width: '20%',
          float: 'left'
        })
      case "6" :
        return css({
          ...styles,
          width: '16.666666666667%',
          float: 'left'
        })
      case "7" :
        return css({
          ...styles,
          width: '14.28571428%',
          float: 'left'
        })
      case "8" :
        return css({
          ...styles,
          width: '12.5%',
          float: 'left'
        })
      case "9" :
        return css({
          ...styles,
          width: '11.111111111%',
          float: 'left'
        })
      case "10" :
        return css({
          ...styles,
          width: '10%',
          float: 'left'
        })
      case "11" :
        return css({
          ...styles,
          width: '9.0909090909%',
          float: 'left'
        })
      case "12" :
        return css({
          ...styles,
          width: '8.33333333%',
          float: 'left'
        })
      default :
        return css(styles)
    }

  }

  mediumify(gridSize) {
    switch(gridSize) {
      case "1" :
        return css({
          '@media(max-width: 900px)': {
            width: '100%'
          }
        })
      case "2" :
        return css({
          '@media(max-width: 900px)': {
            width: '50%',
            float: 'left',
          }
        })
      case "3" :
        return css({
          '@media(max-width: 900px)': {
            width: '33.33332%',
            float: 'left',
          }
        })
      case "4" :
        return css({
          '@media(max-width: 900px)': {
            width: '25%',
            float: 'left',
          }
        })
      case "5" :
        return css({
          '@media(max-width: 900px)': {
            width: '20%',
            float: 'left',
          }
        })
      case "6" :
        return css({
          '@media(max-width: 900px)': {
            width: '16.666666666667%',
            float: 'left',
          }
        })
      case "7" :
        return css({
          '@media(max-width: 900px)': {
            width: '14.28571428%',
            float: 'left',
          }
        })
      case "8" :
        return css({
          '@media(max-width: 900px)': {
            width: '12.5%',
            float: 'left',
          }
        })
      case "9" :
        return css({
          '@media(max-width: 900px)': {
            width: '11.111111111%',
            float: 'left',
          }
        })
      case "10" :
        return css({
          '@media(max-width: 900px)': {
            width: '10%',
            float: 'left',
          }
        })
      case "11" :
        return css({
          '@media(max-width: 900px)': {
            width: '9.0909090909%',
            float: 'left',
          }
        })
      case "12" :
        return css({
          '@media(max-width: 900px)': {
            width: '8.33333333%',
            float: 'left',
          }
        })
      default :
        return css({width: '100%'})
    }
  }

  smallify(gridSize) {
    /*
    let currentType = ''
    if (type === 'medium') {
      currentType = '@media(max-width: 900px)'
    } else if (type === 'small') {
      currentType = '@media(max-width: 600px)'
    }
    */

    switch(gridSize) {
      case "1" :
        return css({
          '@media(max-width: 600px)': {
            width: '100%'
          }
        })
      case "2" :
        return css({
          '@media(max-width: 600px)': {
            width: '50%',
            float: 'left',
          }
        })
      case "3" :
        return css({
          '@media(max-width: 600px)': {
            width: '33.33332%',
            float: 'left',
          }
        })
      case "4" :
        return css({
          '@media(max-width: 600px)': {
            width: '25%',
            float: 'left',
          }
        })
      case "5" :
        return css({
          '@media(max-width: 600px)': {
            width: '20%',
            float: 'left',
          }
        })
      case "6" :
        return css({
          '@media(max-width: 600px)': {
            width: '16.666666666667%',
            float: 'left',
          }
        })
      case "7" :
        return css({
          '@media(max-width: 600px)': {
            width: '14.28571428%',
            float: 'left',
          }
        })
      case "8" :
        return css({
          '@media(max-width: 600px)': {
            width: '12.5%',
            float: 'left',
          }
        })
      case "9" :
        return css({
          '@media(max-width: 600px)': {
            width: '11.111111111%',
            float: 'left',
          }
        })
      case "10" :
        return css({
          '@media(max-width: 600px)': {
            width: '10%',
            float: 'left',
          }
        })
      case "11" :
        return css({
          '@media(max-width: 600px)': {
            width: '9.0909090909%',
            float: 'left',
          }
        })
      case "12" :
        return css({
          '@media(max-width: 600px)': {
            width: '8.33333333%',
            float: 'left',
          }
        })
      default :
        return css({width: '100%'})
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
