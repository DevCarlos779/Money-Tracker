import styled from "styled-components";

export const ContainerTransactions = styled.div`
  width: 100%;
  min-height: 100%;
  box-sizing: border-box;
  flex: 1;

  display: flex;
  flex-direction: column;
  gap: 32px;

  background-color: ${({ theme }) => theme["gray-100"]};
  border-radius: 12px;
  padding: 24px;

  @media (max-width: 890px) {
    padding: 12px;
  }

  @media (max-width: 750px) {
    padding: 0px;
  }
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
    border-radius: 10px;
    cursor: pointer;
    transition: 0.3s ease-in-out;
    font-size: 16px;
  }

  button:hover {
    background-color: ${({ theme }) => theme["green-500"]};
    border: 2px solid ${({ theme }) => theme["green-500"]};
    color: ${({ theme }) => theme.white};
  }

  @media (max-width: 650px) {
    flex-direction: column;
    gap: 20px;

    button {
      width: 100%;
    }
  }
`;
