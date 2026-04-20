import styled from "styled-components";

export const SavingContainer = styled.div`
  background-color: blue;
  width: 100%;
  height: 90vh;
  padding: 24px;
  border-radius: 12px;
  display: flex;
  flex-direction: column;
  gap: 32px;
  color: ${({ theme }) => theme.white};
`;

export const SavingDetailsContainer = styled.div`
  overflow: hidden;
  flex: 1;
  background-color: ${({ theme }) => theme.black};
  border: 2px solid ${({ theme }) => theme.white};
  border-radius: 12px;
  padding: 24px;
  display: flex;
  align-items: center;
  gap: 24px;
  flex-direction: column;
`;

export const InfoSaving = styled.div`
  width: 100%;
  height: 200px;
  background-color: ${({ theme }) => theme.black};
  border: 2px solid ${({ theme }) => theme.white};
  border-radius: 12px;
  padding: 15px;
  display: flex;
  align-items: flex-start;
  justify-content: space-around;
  flex-direction: column;
`;

export const SavingTransactionsTableContainer = styled.div`
  display: flex;
  flex-direction: column;
  overflow: hidden;
  width: 100%;
  flex: 1;
  background-color: ${({ theme }) => theme.black};
  border: 2px solid ${({ theme }) => theme.white};
  border-radius: 12px;
  padding: 15px;
`;

export const HeaderTransactionsPage = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 0;

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

export const ContainerActionButtons = styled.div`
  width: 100%;
  padding: 15px;
  gap: 32px;
  display: flex;
  align-items: center;
  justify-content: center;

  button {
    flex: 1;
    padding: 10px 20px;
  }
`;

export const ProgressBarContainer = styled.div`
  position: relative;
  width: 100%;
  height: 10px;
  background-color: ${({ theme }) => theme["gray-300"]};
  border-radius: 8px;
`;

interface ProgressProps {
  progress: number;
}

export const Progress = styled.div<ProgressProps>`
  background-color: ${({ theme }) => theme["green-700"]};
  position: relative;
  width: ${({ progress }) => progress}%;
  height: 10px;
  border-radius: 8px;
`;
