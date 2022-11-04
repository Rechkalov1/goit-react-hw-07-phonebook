import styled from 'styled-components';

export const Ul = styled.ul`
  width: 400px;
  display: flex;
  margin-right: auto;
  margin-left: auto;
  align-items: flex-end;

  flex-direction: column;
`;

export const Li = styled.li`
  margin-bottom: 20px;
  color: orange;
  align-items: baseline;
  display: flex;
  font-size: 14px;
  font-weight: 700;
`;

export const Button = styled.button`
  padding: 4px 8px;
  display: block;
  font-size: 14px;
  border-radius: 10px;
  margin-left: 10px;
  outline: 0;
  text-decoration: none;
  cursor: pointer;
  :hover {
    color: red;
    background-color: orange;
    outline: 0;
    text-decoration: none;
  }
`;
