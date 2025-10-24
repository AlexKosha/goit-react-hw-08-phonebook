import styled from '@emotion/styled';

export const FilterBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 20px;
`;

export const FilterLabel = styled.label`
  font-size: 16px;
  margin-bottom: 8px;
  color: #333;
`;

export const FilterInput = styled.input`
  padding: 10px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 6px;
  width: 100%;
  max-width: 300px;
  box-sizing: border-box;
  transition: border 0.2s, box-shadow 0.2s;

  &:focus {
    border-color: #4caf50;
    box-shadow: 0 0 5px rgba(76, 175, 80, 0.3);
    outline: none;
  }
`;
