import React from 'react';
import { Container, Copy, Key, Value } from './Styles';
import Skeleton from 'react-loading-skeleton';
import { FaRegCopy } from 'react-icons/fa';

type Props = {
  name: string;
  value?: string;
  label?: any;
  copy?: any;
};

export const Info = (props: Props) => {
  const { name, value, label, copy } = props;
  const newValue = value ? value?.replaceAll('_', ' ') : null;

  const copyValue = () => {
    navigator.clipboard.writeText(`${copy}`);
  };

  return (
    <Container onClick={copyValue}>
      <Key>
        {name}
        {copy && (
          <Copy>
            <FaRegCopy />
          </Copy>
        )}
      </Key>
      <Value label={label}>{newValue || <Skeleton />}</Value>
    </Container>
  );
};
