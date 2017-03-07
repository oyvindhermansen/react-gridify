# React Gridify
<i>A very simple grid maker in form of React Components</i>
<small>Inspired by foundations row and column.</small>


### Usage
```javascript
import { Row, Column } from 'react-gridify'

<Row maxWidth="960px">
  <Column
    small="12"
    medium="6"
    large="12"
    padding="10px"
    className="someAdditionalClass"
  >
    <SomeCardComponent />
  </Column>
</Row>
```
### Example usage with centered
```javascript
// Might be good for e.g article text width

  <Row>
    <Column small="12" large="10" centered>
      <Row>
        <Column>
          <h1>Title<h1>
          <p>Lorem ipsum dolor sit amet</p>
        </Column>
      </Row>
    </Column>
  </Row>
```

### Pro tip!
column with xSmall / small / medium / large as 12 is 100%.

### API
Component | Props
--- | --- | ---
Row | maxWidth
Column | xSmall, small, medium, large, centered, padding, className

### Install it locally
```
$ git clone https://github.com/oyvindhermansen/react-gridify.git
$ npm install
```
