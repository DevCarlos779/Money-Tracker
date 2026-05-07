import styled from "styled-components";

export const SavingContainer = styled.div`
  overflow: hidden;
  width: 100%;
  min-height: 100%;
  padding: 24px;
  border-radius: 12px;
  display: flex;
  flex-direction: column;
  gap: 32px;
  color: ${({ theme }) => theme.white};

  a {
    text-decoration: none;
    color: ${({ theme }) => theme["green-500"]};
    font-weight: bold;

    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: 10px;
  }

  a:hover {
    color: ${({ theme }) => theme["green-700"]};
  }
`;

export const SavingInfoConteiner = styled.div`
  width: 100%;
  background-color: ${({ theme }) => theme["green-700"]};
  border: 2px solid ${({ theme }) => theme.white};
  border-radius: 12px;
  padding: 20px;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  gap: 20px;
`;

export const IconCreditCardConteiner = styled.div`
  border-radius: 50%;
  background-color: ${({ theme }) => theme["green-500"]};
  color: ${({ theme }) => theme.white};
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
`;

export const InfoSaving = styled.div`
  flex: 1;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  padding: 10px;
  gap: 15px;
  flex-direction: column;

  h1 {
    color: ${({ theme }) => theme.white};
    font-size: 30px;
  }

  p {
    color: ${({ theme }) => theme["gray-300"]};
    font-size: 16px;
  }
`;

export const SavingTransactionsTableContainer = styled.div`
  display: flex;
  flex-direction: column;
  overflow: hidden;
  width: 100%;
  flex: 1;
  border: 2px solid ${({ theme }) => theme.white};
  border-radius: 12px;
  background: ${({ theme }) => theme.white};
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);
  padding: 24px;
`;

export const HeaderTransactionsPage = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 24px;
  color: ${({ theme }) => theme.black};

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
    background-color: ${({ theme }) => theme["green-700"]};
    border: 2px solid ${({ theme }) => theme["green-500"]};
    color: ${({ theme }) => theme.white};
  }

  div {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 12px;
  }
`;

export const IconTransactionsTableConteiner = styled.div`
  border-radius: 12px;
  background-color: ${({ theme }) => theme["green-500"]};
  color: ${({ theme }) => theme.white};
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 15px;
`;

export const ContainerActionButtons = styled.div`
  width: 100%;
  padding: 15px;
  gap: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

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

export const DeleteButton = styled(Button)`
  background-color: ${({ theme }) => theme["red-500"]};
  border: 2px solid ${({ theme }) => theme["red-700"]};

  &:hover {
    background-color: ${({ theme }) => theme["red-700"]};
  }
`;

export const ProgressBarContainer = styled.div`
  position: relative;
  width: 100%;
  height: 10px;
  background-color: ${({ theme }) => theme["gray-350"]};
  border-radius: 8px;
`;

interface ProgressProps {
  progress: number;
}

export const Progress = styled.div<ProgressProps>`
  background-color: ${({ theme }) => theme["green-500"]};
  position: relative;
  width: ${({ progress }) => progress}%;
  height: 10px;
  border-radius: 8px;
`;
