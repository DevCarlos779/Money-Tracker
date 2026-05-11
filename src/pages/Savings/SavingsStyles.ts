import styled from "styled-components";

export const ContainerTransactions = styled.div`
  width: 100%;
  height: 100vh;
  box-sizing: border-box;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  gap: 32px;

  background-color: ${({ theme }) => theme["gray-100"]};
  border-radius: 12px;
  padding: 50px;
`;

export const HeaderTransactionsPage = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  button {
    padding: 10px 16px;
    background-color: ${({ theme }) => theme["green-500"]};
    color: ${({ theme }) => theme.white};
    border: 2px solid ${({ theme }) => theme["green-500"]};
    border-radius: 6px;
    cursor: pointer;
    transition: 0.3s ease-in-out;
    font-size: 16px;
  }

  button:hover {
    background-color: ${({ theme }) => theme["green-300"]};
    border: 2px solid ${({ theme }) => theme["green-500"]};
    color: ${({ theme }) => theme.white};
  }
`;

export const SavingsContainer = styled.div`
  flex: 1;
  display: grid;

  grid-template-columns: repeat(3, 1fr);
  gap: 32px;
  margin-bottom: 40px;

  overflow-y: auto;

  border-radius: 12px;
  background: ${({ theme }) => theme.white};
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);

  padding: 30px;
  box-sizing: border-box;
`;

export const Conteiner = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;

  margin-bottom: 40px;

  overflow-y: auto;

  border-radius: 12px;
  background: ${({ theme }) => theme.white};
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);

  padding: 30px;
  box-sizing: border-box;
`;
