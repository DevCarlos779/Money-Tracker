import styled from "styled-components";

export const TableWrapper = styled.div`
  flex: 1;
  overflow-y: auto;
  border-radius: 12px;
  background: ${({ theme }) => theme.white};
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.05);

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
  border-collapse: separate;
  border-spacing: 0 0.5rem;
  margin-top: 1rem;

  thead {
    background: ${({ theme }) => theme["gray-50"]};
  }

  th {
    padding: 1rem 2rem;
    text-align: left;
    font-size: 14px;
    font-weight: 600;
    color: ${({ theme }) => theme["gray-700"]};
  }

  td {
    padding: 1rem 2rem;
    background: ${({ theme }) => theme["gray-100"]};
    color: ${({ theme }) => theme["gray-800"]};
    transition: background 0.2s ease;

    &:first-child {
      border-top-left-radius: 6px;
      border-bottom-left-radius: 6px;
    }

    &:last-child {
      border-top-right-radius: 6px;
      border-bottom-right-radius: 6px;
    }

    div {
      display: flex;
      align-items: center;
      justify-content: flex-start;
      gap: 12px;
    }
  }

  tbody tr {
    border-bottom: 1px solid ${({ theme }) => theme["gray-200"]};
    transition:
      background 0.2s ease,
      transform 0.1s ease;
    cursor: default;

    &:hover {
      background: ${({ theme }) => theme["gray-50"]};
      transform: translateY(-1px);
    }

    &:last-child {
      border-bottom: none;
    }
  }
`;

export const DontHaveTransactionsConteiner = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: ${({ theme }) => theme["gray-400"]};

  h2 {
    color: ${({ theme }) => theme.black};
  }
`;

export const DeleteButton = styled.button`
  border-radius: 6px;
  cursor: pointer;
  padding: 6px 10px;
  transition:
    background 0.2s ease,
    border 0.2s ease;
  border: 2px solid ${({ theme }) => theme["red-500"]};
  background-color: ${({ theme }) => theme["red-500"]};
  color: ${({ theme }) => theme.white};

  &:hover {
    background-color: ${({ theme }) => theme["red-300"]};
    border: 2px solid ${({ theme }) => theme["red-500"]};
    color: ${({ theme }) => theme.white};
  }
`;
