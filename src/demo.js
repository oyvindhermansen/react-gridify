import React, { Component } from 'react';
import { render } from 'react-dom';
import { Row, Column } from '../lib/index';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [
        { id: 1, text: 'Hello World 1' },
        { id: 2, text: 'Hello World 2' },
        { id: 3, text: 'Hello World 3' },
        { id: 4, text: 'Hello World 4' },
        { id: 5, text: 'Hello World 5' },
        { id: 6, text: 'Hello World 6' },
        { id: 7, text: 'Hello World 7' },
        { id: 8, text: 'Hello World 8' },
        { id: 9, text: 'Hello World 9' },
        { id: 10, text: 'Hello World 10' },
        { id: 11, text: 'Hello World 11' },
        { id: 12, text: 'Hello World 12' }
      ]
    };
  }

  render() {
    const defaultStyles = {
      fontFamily: 'sans-serif'
    };

    const styles = {
      backgroundColor: 'darkred',
      color: '#fff',
      marginBottom: '1rem',
      minHeight: '150px',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center'
    };

    return (
      <div style={defaultStyles}>
        <header
          style={{ background: '#333', padding: '1rem', marginBottom: '1rem' }}>
          <Row>
            <Column>
              <span style={{ color: '#999' }}>Logo</span>
            </Column>
          </Row>
        </header>
        <Row>
          {this.state.items.map((item, index) => {
            return (
              <Column
                className="someOtherClass"
                key={item.id}
                xSmall="12"
                small="6"
                medium="4"
                large="3">
                <div style={styles}>{item.text}</div>
              </Column>
            );
          })}
        </Row>
        <br />
        <Row>
          <Column centered small="12" medium="10" large="8">
            <Row>
              <Column small="12">
                <h1>This is a title</h1>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </p>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </p>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </p>
              </Column>
            </Row>
          </Column>
        </Row>
        <br />
        <Row>
          <Column xSmall="12" small="8" medium="6" large="8">
            <div
              style={{
                backgroundColor: 'darkred',
                padding: '1rem',
                marginBottom: '1rem'
              }}
            />
          </Column>
          <Column xSmall="12" small="4" medium="6" large="4">
            <div
              style={{
                backgroundColor: 'darkred',
                padding: '1rem',
                marginBottom: '1rem'
              }}
            />
          </Column>
          <Column xSmall="12" small="4" medium="6" large="4">
            <div
              style={{
                backgroundColor: 'darkred',
                padding: '1rem',
                marginBottom: '1rem'
              }}
            />
          </Column>
          <Column xSmall="12" small="8" medium="6" large="8">
            <div
              style={{
                backgroundColor: 'darkred',
                padding: '1rem',
                marginBottom: '1rem'
              }}
            />
          </Column>
          <Column xSmall="12" small="3" medium="6" large="3">
            <div
              style={{
                backgroundColor: 'darkred',
                padding: '1rem',
                marginBottom: '1rem'
              }}
            />
          </Column>
          <Column xSmall="12" small="9" medium="6" large="9">
            <div
              style={{
                backgroundColor: 'darkred',
                padding: '1rem',
                marginBottom: '1rem'
              }}
            />
          </Column>
          <Column xSmall="12" small="5" medium="6" large="9">
            <div
              style={{
                backgroundColor: 'darkred',
                padding: '1rem',
                marginBottom: '1rem'
              }}
            />
          </Column>
          <Column xSmall="12" small="7" medium="6" large="3">
            <div
              style={{
                backgroundColor: 'darkred',
                padding: '1rem',
                marginBottom: '1rem'
              }}
            />
          </Column>
        </Row>
      </div>
    );
  }
}

document.addEventListener('DOMContentLoaded', () => {
  render(<App />, document.getElementById('root'));
});
