import styled from "styled-components";

export const ContainerTransactions = styled.div`
  width: 100%;
  min-height: 100%;
  box-sizing: border-box;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  gap: 32px;

  background-color: ${({ theme }) => theme["gray-100"]};
  border-radius: 12px;
  padding: 24px;
`;

export const HeaderTransactionsPage = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  button {
    padding: 10px 16px;
    background-color: ${({ theme }) => theme["green-600"]};
    color: ${({ theme }) => theme["gray-200"]};
    border: 2px solid ${({ theme }) => theme["green-600"]};
    border-radius: 6px;
    cursor: pointer;
    transition: 0.3s ease-in-out;
    font-size: 16px;
  }

  button:hover {
    background-color: ${({ theme }) => theme["green-500"]};
    border: 2px solid ${({ theme }) => theme["green-500"]};
    color: ${({ theme }) => theme.white};
  }
`;
