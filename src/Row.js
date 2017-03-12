import React, { Component, PropTypes } from 'react';
import { css } from 'glamor';

const setDefaultRowStyles = maxWidth => css({
  ...(maxWidth ? { maxWidth: maxWidth } : { maxWidth: `64rem` }),
  width: '100%',
  margin: '0 auto',
  display: 'table'
});

const Row = ({ maxWidth, children }) => {
  return (
    <div className="row" {...setDefaultRowStyles(maxWidth)}>
      {children}
    </div>
  );
};

export default Row;
