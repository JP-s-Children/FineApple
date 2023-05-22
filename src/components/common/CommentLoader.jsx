import React from 'react';
import styled from '@emotion/styled';
import { Container, Loader as MantineLoader } from '@mantine/core';

const LoaderContent = styled(MantineLoader)`
  position: relative;
  top: 30%;
  width: 60px;
  height: 60px;
  transform: translate(-50%, -50%);
`;

const Loader = () => (
  <Container h="1024px">
    <LoaderContent />
  </Container>
);

export default Loader;
