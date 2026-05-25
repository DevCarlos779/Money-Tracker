import styled from "styled-components";

export const Button = styled.button`
  flex: 1;

  padding: 20px;

  display: flex;
  align-items: center;
  justify-content: center;

  gap: 10px;

  border-radius: 6px;

  font-size: 16px;

  font-weight: bold;

  cursor: pointer;

  color: ${({ theme }) => theme["gray-300"]};

  transition: 0.2s ease;

  white-space: nowrap;

  &:hover {
    color: ${({ theme }) => theme.white};
  }

  @media (max-width: 768px) {
    flex: none;
    width: 100%;
  }

  @media (max-width: 480px) {
    padding: 16px;
    font-size: 14px;
  }
`;

export const EditButton = styled(Button)`
  background-color: ${({ theme }) => theme["green-500"]};

  border: 2px solid ${({ theme }) => theme["green-700"]};

  &:hover {
    background-color: ${({ theme }) => theme["green-700"]};
  }
`;
