import styled from 'styled-components';

export const Container = styled.div`
  flex: 1;
  height: 100%;
  padding: 40px;
`;

export const Card = styled.div`
  background-color: #fff;
  border-radius: 7px;
  margin-bottom: 20px;
`;

export const Title = styled.h3`
  padding-top: 0;
  margin: 0;
  border-bottom: 1px solid #e6eaec;
  padding: 15px;
  text-align: left;
`;

export const Content = styled.div`
  padding: 15px;
  text-align: left;
  font-size: 15px;
`;

export const Wrapper = styled.div`
  border-bottom: 1px solid #e6eaec;
  padding-bottom: 10px;
`;

export const Input = styled.input`
  width: 100%;
  height: 37px;
  outline: 0;
  border: none;
  outline-width: 0;
  border: 1px solid hsl(0, 0%, 80%);
  border-radius: 3px;
  padding-left: 7px;
  padding-right: 7px;
  box-sizing: border-box;
`;

export const SendButton = styled.button`
  background-color: #0cbfb6;
  border: 0;
  padding: 0;
  height: 37px;
  padding: 0 20px;
  border-radius: 3px;
  color: #fff;
  font-weight: bold;
  cursor: pointer;
  &:active {
    filter: brightness(85%);
  }
`;
