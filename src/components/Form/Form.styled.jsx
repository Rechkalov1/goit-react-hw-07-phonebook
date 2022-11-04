import styled from 'styled-components';

export const Forms = styled.form`
  padding: 16px;
  display: flex;
  align-items: flex-end;
  justify-content: flex-end;
  flex-direction: column;
  font-size: 24px;
`;
export const Input = styled.input`
  padding: 8px;
  margin-top: 10px;
  outline: none;
  border: solid 1px orange;
  border-radius: 15px;
`;
export const Label = styled.label`
  color: #777;
`;

export const Button = styled.button`
  padding: 4px;
  margin-top: 20px;
  font-size: 14px;
  border-radius: 10px;

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
