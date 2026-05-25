import styled from "styled-components";

export const TableWrapper = styled.div`
  width: 100%;
  max-width: 100%;
  max-height: 740px;
  overflow-x: auto;
  overflow-y: auto;
  display: block;
  border-radius: 12px;
  background: ${({ theme }) => theme.white};
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);

  h2 {
    width: 100%;
    text-align: center;
    color: ${({ theme }) => theme["gray-500"]};
    font-size: 1.25rem;
    font-weight: 500;
    padding: 2rem 0;
  }

  @media (max-width: 768px) {
    max-height: 100%;
  }
`;

export const Table = styled.table`
  width: 100%;
  min-width: 650px;
  border-collapse: separate;
  border-spacing: 0 0.5rem;
  margin-top: 1rem;

  thead {
    background: ${({ theme }) => theme["gray-50"]};
  }

  th {
    padding: 1.25rem 2rem;
    text-align: left;
    font-size: 14px;
    font-weight: 600;
    color: ${({ theme }) => theme["gray-700"]};
    white-space: nowrap;
  }

  td {
    padding: 1.25rem 2rem;
    background: ${({ theme }) => theme["gray-100"]};
    color: ${({ theme }) => theme["gray-800"]};
    box-shadow: inset 0 2px 0 ${({ theme }) => theme["gray-200"]};
  }

  tbody tr:hover {
    background: ${({ theme }) => theme["gray-50"]};
  }

  div {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
  }

  @media (max-width: 768px) {
    th,
    td {
      padding: 0.8rem 1rem;
      font-size: 13px;
    }
  }

  @media (max-width: 480px) {
    th,
    td {
      padding: 0.6rem 0.8rem;
      font-size: 12px;
    }
  }
`;

export const DeleteButton = styled.button`
  border-radius: 6px;
  cursor: pointer;
  padding: 8px;
  transition: all 0.2s ease;
  border: 2px solid ${({ theme }) => theme["red-500"]};
  background-color: ${({ theme }) => theme["red-500"]};
  color: ${({ theme }) => theme.white};

  &:hover {
    background-color: ${({ theme }) => theme["red-300"]};
    border-color: ${({ theme }) => theme["red-500"]};
  }

  @media (max-width: 480px) {
    padding: 4px 8px;
    font-size: 12px;
  }
`;

export const Conteiner = styled.div`
  width: 100%;
  padding: 24px;
  flex: 1;
  overflow-x: auto;
  display: block;
  border-radius: 12px;
  background: ${({ theme }) => theme.white};
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);

  @media (max-width: 768px) {
    padding: 12px;
  }
`;

export const DontHaveTransactionsConteiner = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 25px;
  color: ${({ theme }) => theme["gray-400"]};
  text-align: center;
  padding: 20px;

  h2 {
    color: ${({ theme }) => theme.black};
    font-size: 1.2rem;
  }

  @media (max-width: 480px) {
    gap: 15px;

    h2 {
      font-size: 1rem;
    }
  }
`;
