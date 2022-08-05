import { Card } from 'react-bootstrap';
import styled from 'styled-components';

export const StyledCard = styled(Card)`
  background-color: #fff;
  border: 0;
`;

export const Title = styled.h4`
  padding-top: 0;
  margin: 0;
  border-bottom: 1px solid #e6eaec;
  padding: 15px;
  text-align: left;
`;

export const Wrapper = styled.div`
  border-bottom: 1px solid #e6eaec;
  padding-bottom: 10px;
`;

export const Indicator = styled.div<{ color: string }>`
  background-color: ${({ color }) => color || 'grey'};
  height: 70px;
  border-radius: 8px;
  padding: 10px;
  align-items: center;
  justify-content: space-between;
  display: flex;
  flex-direction: column;
`;

export const IndicatorText = styled.p`
  color: #fff;
  font-weight: bold;
  font-size: 14px;
  text-align: center;
`;
