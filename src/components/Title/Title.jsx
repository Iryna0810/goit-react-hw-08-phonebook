import React from 'react';
import PropTypes from 'prop-types';
import { Heading } from '@chakra-ui/react';

export const Title = ({ title }) => (
  <Heading size="2xl">{title}</Heading>
);

Title.propTypes = { title: PropTypes.string.isRequired, };