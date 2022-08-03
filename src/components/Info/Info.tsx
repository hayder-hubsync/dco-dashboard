import React from 'react';
import { Container, Key, Value } from './Styles';
import Skeleton from 'react-loading-skeleton';

type Props = {
  name: string;
  value?: string;
  label?: any;
};

export const Info = (props: Props) => {
  const { name, value, label } = props;
  const newValue = value ? value?.replaceAll('_', ' ') : null;

  return (
    <Container>
      <Key>{name}</Key>
      <Value label={label}>{newValue || <Skeleton />}</Value>
    </Container>
  );
};
