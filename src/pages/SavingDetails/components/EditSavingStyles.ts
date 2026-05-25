import styled from "styled-components";

export const Button = styled.button`
  flex: 1;
  padding: 20px 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  border-radius: 6px;
  font-size: 16px;
  font-weight: bold;
  cursor: pointer;
  color: ${({ theme }) => theme["gray-300"]};

  &:hover {
    color: ${({ theme }) => theme.white};
  }
`;

export const EditButton = styled(Button)`
  background-color: ${({ theme }) => theme["green-500"]};
  border: 2px solid ${({ theme }) => theme["green-700"]};

  &:hover {
    background-color: ${({ theme }) => theme["green-700"]};
  }
`;
