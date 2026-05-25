import styled from "styled-components";

export const ContainerTransactions = styled.div`
  width: 100%;
  height: 100%;
  min-height: 0;
  box-sizing: border-box;

  display: flex;
  flex-direction: column;
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

export const SavingsContainer = styled.div`
  flex: 1;
  min-height: 0;

  display: grid;
  align-content: start;

  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 24px;

  overflow-y: auto;

  border-radius: 12px;
  background: ${({ theme }) => theme.white};
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);

  padding: 30px;
  box-sizing: border-box;
`;

export const Conteiner = styled.div`
  padding: 30px;
  flex: 1;
  overflow-y: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 12px;
  background: ${({ theme }) => theme.white};
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);
`;
