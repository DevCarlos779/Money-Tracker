import { Link } from "react-router-dom";
import styled from "styled-components";

export const TableWrapper = styled.div`
  flex: 1;
  max-height: 180px;
  overflow-y: auto;
  border-radius: 12px;
  background: ${({ theme }) => theme.white};

  h2 {
    width: 100%;
    text-align: center;
    color: ${({ theme }) => theme["gray-500"]};
    font-size: 1.25rem;
    font-weight: 500;
    padding: 2rem 0;
  }
`;

export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  background: transparent;

  thead {
    background: ${({ theme }) => theme["gray-50"]};
  }

  th {
    padding: 12px 16px;
    text-align: left;
    font-size: 14px;
    font-weight: 600;
    color: ${({ theme }) => theme["gray-700"]};
  }

  td {
    padding: 14px 16px;
    font-size: 14px;
    color: ${({ theme }) => theme["gray-800"]};
  }

  tbody tr {
    border-bottom: 1px solid ${({ theme }) => theme["gray-200"]};
    transition: background 0.2s ease;
  }

  tbody tr:hover {
    background: ${({ theme }) => theme["gray-100"]};
  }

  tbody tr:last-child {
    border-bottom: none;
  }
`;

export const DontHaveTransactionsConteiner = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;
  color: ${({ theme }) => theme["gray-400"]};

  h2 {
    color: ${({ theme }) => theme.black};
  }
`;

export const CreateNewTransactionButton = styled(Link)`
  padding: 10px 16px;
  background-color: ${({ theme }) => theme["green-600"]};
  color: ${({ theme }) => theme["gray-200"]};
  border: 2px solid ${({ theme }) => theme["green-600"]};
  border-radius: 24px;
  cursor: pointer;
  transition: 0.3s ease-in-out;
  font-size: 16px;
  font-weight: bold;
  text-decoration: none;

  &:hover {
    background-color: ${({ theme }) => theme["green-500"]};
    border: 2px solid ${({ theme }) => theme["green-500"]};
    color: ${({ theme }) => theme.white};
  }
`;
