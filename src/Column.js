import React from 'react';
import { css } from 'glamor';

const calculateWidth = size => {
  if (size > 12) {
    throw new Error(`Expected a number between 1 and 12.`);
  } else {
    return 100 / 12 * size;
  }
};

const setCalculatedWidth = (columnNumber = '12') => ({
  width: `${calculateWidth(columnNumber)}%`
});

const setCenteredAndPadding = (centered, padding) => css({
  position: 'relative',
  boxSizing: 'border-box',
  ...(centered ? { margin: 'auto' } : { float: 'left' }),
  ...(padding
    ? { paddingLeft: padding, paddingRight: padding }
    : { paddingRight: '1rem', paddingLeft: '1rem' })
});

const setLarge = columnNumber => {
  if (columnNumber) {
    return css({
      '@media screen and (min-width: 64rem)': setCalculatedWidth(columnNumber)
    });
  }
};

const setMedium = columnNumber => {
  if (columnNumber) {
    return css({
      '@media screen and (max-width: 64rem) and (min-width: 40rem)': setCalculatedWidth(
        columnNumber
      )
    });
  }
};

const setSmall = columnNumber => {
  if (columnNumber) {
    return css({
      '@media screen and (max-width: 40rem) and (min-width: 25rem)': setCalculatedWidth(
        columnNumber
      )
    });
  }
};

const setXSmall = columnNumber => {
  if (columnNumber) {
    return css({
      '@media screen and (max-width: 25rem) and (min-width: 1rem)': setCalculatedWidth(
        columnNumber
      )
    });
  }
};

const Column = (
  {
    xSmall,
    small,
    medium,
    large,
    centered,
    padding,
    className,
    children
  }
) => {
  const additionalClassNames = className ? ` ${className}` : '';
  return (
    <div
      className={`column${additionalClassNames}`}
      {...setCenteredAndPadding(centered, padding)}
      {...setLarge(large)}
      {...setMedium(medium)}
      {...setSmall(small)}
      {...setXSmall(xSmall)}>
      {children}
    </div>
  );
};

export default Column;
