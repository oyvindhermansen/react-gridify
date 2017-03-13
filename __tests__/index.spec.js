import React from 'react';
import renderer from 'react-test-renderer';
import { Row, Column } from '../src/index';

describe('React gridify', () => {

  describe('Row', () => {
    it('should match snapshot', () => {
      const component = renderer.create(
        <Row>This is children</Row>
      );

      const tree = component.toJSON();
      expect(tree).toMatchSnapshot();
    });
  });

  describe('Column', () => {
    it('should match snapshot', () => {
      const component = renderer.create(
        <Column
          centered
          padding="10px"
          xSmall="12"
          small="6"
          medium="4"
          large="3">
          This is children
        </Column>
      );

      const tree = component.toJSON();
      expect(tree).toMatchSnapshot();
    })

    it('adding additional classNames properly', () => {
      const component = renderer.create(
        <Column
          className="myAdditionalClass"
          large="12">
        </Column>
      );
      let tree = component.toJSON();

      expect(tree.props.className).toBe('column myAdditionalClass');
    });

    it('should throw when adding column numbers < 12', () => {
      function componentFailure() {
        const component = renderer.create(
          <Column large="15"></Column>
        );
        return component;
      }

      expect(() => {
        componentFailure()
      }).toThrow()
    });
  });

});
