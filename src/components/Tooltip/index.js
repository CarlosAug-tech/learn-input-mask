import React from 'react';
import PropTypes from 'prop-types';

import { Container } from './styles';

export default function Tooltip({ title, children }) {
  return (
    <Container>
      {children}
      <span>{title}</span>
    </Container>
  );
}

Tooltip.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node,
};
