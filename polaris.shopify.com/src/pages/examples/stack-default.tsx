import {Stack, Badge} from '@shopify/polaris';
import React from 'react';
import {withPolarisExample} from '../../components/PolarisExampleWrapper';

function StackExample() {
  return (
    <Stack>
      <Badge>Paid</Badge>
      <Badge>Processing</Badge>
      <Badge>Fulfilled</Badge>
      <Badge>Completed</Badge>
    </Stack>
  );
}

export default withPolarisExample(StackExample);
