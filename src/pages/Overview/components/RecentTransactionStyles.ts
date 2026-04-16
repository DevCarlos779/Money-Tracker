import styled from "styled-components";

export const TableWrapper = styled.div`
  flex: 1;
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
