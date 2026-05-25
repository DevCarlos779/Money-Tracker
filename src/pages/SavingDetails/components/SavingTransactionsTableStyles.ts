import styled from "styled-components";

export const TableWrapper = styled.div`
  flex: 1;

  width: 100%;
  max-width: 100%;

  max-height: 250px;

  overflow-x: auto;
  overflow-y: auto;

  border-radius: 12px;

  background: ${({ theme }) => theme.white};

  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.05);

  box-sizing: border-box;

  h2 {
    width: 100%;

    text-align: center;

    color: ${({ theme }) => theme["gray-500"]};

    font-size: 1.25rem;

    font-weight: 500;

    padding: 2rem 1rem;

    box-sizing: border-box;
  }

  @media (max-width: 768px) {
    max-height: 320px;

    h2 {
      font-size: 1rem;
      padding: 1.5rem 1rem;
    }
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
    padding: 1rem 2rem;

    text-align: left;

    font-size: 14px;

    font-weight: 600;

    color: ${({ theme }) => theme["gray-700"]};

    white-space: nowrap;
  }

  td {
    padding: 1rem 2rem;

    background: ${({ theme }) => theme["gray-100"]};

    color: ${({ theme }) => theme["gray-800"]};

    transition: background 0.2s ease;

    white-space: nowrap;

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

  @media (max-width: 768px) {
    th,
    td {
      padding: 0.8rem 1rem;
      font-size: 13px;
    }

    td div {
      gap: 8px;
    }
  }

  @media (max-width: 480px) {
    min-width: 550px;

    th,
    td {
      padding: 0.7rem 0.8rem;
      font-size: 12px;
    }
  }
`;

export const DontHaveTransactionsConteiner = styled.div`
  display: flex;
  flex-direction: column;

  align-items: center;
  justify-content: center;

  text-align: center;

  gap: 16px;

  color: ${({ theme }) => theme["gray-400"]};

  padding: 20px;

  box-sizing: border-box;

  h2 {
    color: ${({ theme }) => theme.black};

    font-size: 1.2rem;
  }

  @media (max-width: 480px) {
    gap: 12px;

    h2 {
      font-size: 1rem;
    }
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

  white-space: nowrap;

  &:hover {
    background-color: ${({ theme }) => theme["red-300"]};

    border: 2px solid ${({ theme }) => theme["red-500"]};

    color: ${({ theme }) => theme.white};
  }

  @media (max-width: 480px) {
    padding: 5px 8px;
    font-size: 12px;
  }
`;
