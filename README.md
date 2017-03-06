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
    <SomeChildComponent />
  </Column>
</Row>
```

### API
Component | Props
--- | --- | ---
Row | maxWidth
Column | small, medium, large, padding, className
### Install it locally
```
$ git clone https://github.com/oyvindhermansen/react-gridify.git
$ npm install
```
