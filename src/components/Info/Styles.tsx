import styled from 'styled-components';

export const Container = styled.div`
  flex: 1;
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  padding-top: 6px;
`;

export const Key = styled.div`
  font-weight: bold;
`;

export const Value = styled.div<{ label?: any }>`
  min-width: 80px;
  border-radius: 5px;
  padding: 2px 4px;
  text-align: right;
  ${({ label }) => {
    if (label) {
      return `
        background-color: #0cbfb6;
        color: #fff;
        font-weight: bold;
        font-size: 12px;
        min-width: 20px;
      `;
    }
  }}
`;

export const Copy = styled.button`
  border: 0;
  background-color: transparent;
  cursor: pointer;
  &:active {
    background-color: #f7f7f7;
  }
`;
