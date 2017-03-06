# React Gridify
<i>A very simple grid maker in form of React Components</i>


### Usage
```javascript
import { Row, Column } from 'react-gridify'

<Row maxWidth="960px">
  <Column
    small="2"
    medium="4"
    large="6"
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
    <Column medium="1" large="2" centered>
      <Row>
        <Column>
          <h1>Title<h1>
          <p>Lorem ipsum dolor sit amet</p>
        </Column>
      </Row>
    </Column>
  </Row>
```

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
