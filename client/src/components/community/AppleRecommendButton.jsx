import React from 'react';
import { Button } from '@mantine/core';

const AppleRecommendButton = ({ onClick }) => (
  <Button radius="xl" mb="4px" h="32px" color="orange" onClick={onClick}>
    채택
  </Button>
);

export default AppleRecommendButton;
