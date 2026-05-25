import styled from "styled-components";
import * as Dialog from "@radix-ui/react-dialog";
import * as RadioGroup from "@radix-ui/react-radio-group";

export const NewTransactionButton = styled.button`
  height: 50px;
  border: 0;
  background: ${({ theme }) => theme["green-300"]};
  color: ${({ theme }) => theme.white};
  font-weight: bold;
  padding: 0 1.5rem;
  border-radius: 6px;
  cursor: pointer;
  transition: background 0.2s;

  &:hover {
    background: ${({ theme }) => theme["green-500"]};
  }

  @media (max-width: 480px) {
    width: 100%;
    font-size: 14px;
    padding: 0 1rem;
  }
`;

export const CloseButton = styled(Dialog.Close)`
  position: absolute;
  top: 1.5rem;
  right: 1.5rem;
  background: transparent;
  border: 0;
  cursor: pointer;
  color: ${({ theme }) => theme["gray-500"]};
  line-height: 0;

  @media (max-width: 480px) {
    top: 1rem;
    right: 1rem;
  }
`;

export const Overlay = styled(Dialog.Overlay)`
  position: fixed;
  inset: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.75);
`;

export const Content = styled(Dialog.Content)`
  z-index: 2000;
  width: 90%;
  max-width: 32rem;
  max-height: 90vh;
  overflow-y: auto;

  border-radius: 12px;
  padding: 2.5rem 3rem;
  background: ${({ theme }) => theme["gray-100"]};

  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  box-sizing: border-box;

  form {
    margin-top: 2rem;

    display: flex;
    flex-direction: column;
    gap: 1rem;

    input {
      width: 100%;
      padding: 1rem;
      border-radius: 6px;
      border: 0;
      background: ${({ theme }) => theme["gray-200"]};
      color: ${({ theme }) => theme.black};

      box-sizing: border-box;

      &::placeholder {
        color: ${({ theme }) => theme["gray-400"]};
      }
    }

    button[type="submit"] {
      height: 50px;
      padding: 0 1.25rem;
      border-radius: 6px;
      border: 0;
      font-weight: bold;
      cursor: pointer;
      background: ${({ theme }) => theme["green-500"]};
      color: ${({ theme }) => theme.white};
      transition: background 0.2s;

      &:disabled {
        opacity: 0.6;
        cursor: not-allowed;
      }

      &:not(:disabled):hover {
        background: ${({ theme }) => theme["green-300"]};
      }
    }
  }

  @media (max-width: 768px) {
    padding: 2rem;
  }

  @media (max-width: 480px) {
    width: 95%;
    padding: 1.5rem 1rem;

    form {
      margin-top: 1.5rem;
      gap: 0.8rem;

      input {
        padding: 0.9rem;
        font-size: 14px;
      }

      button[type="submit"] {
        font-size: 14px;
      }
    }
  }
`;

export const TransactionType = styled(RadioGroup.Root)`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
  margin-top: 0.5rem;

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
  }
`;

interface TransactionTypeButtonProps {
  variant: "income" | "outcome";
}

export const TransactionTypeButton = styled(
  RadioGroup.Item,
)<TransactionTypeButtonProps>`
  background: ${({ theme }) => theme["gray-200"]};
  padding: 1rem;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;

  border-radius: 6px;
  cursor: pointer;
  border: 0;

  color: ${({ theme }) => theme["gray-700"]};

  transition: all 0.2s ease;

  text-align: center;

  svg {
    color: ${({ variant, theme }) =>
      variant === "income" ? theme["green-300"] : theme["red-500"]};
  }

  &[data-state="unchecked"]:hover {
    background: ${({ theme }) => theme["gray-300"]};
  }

  &[data-state="checked"] {
    background: ${({ variant, theme }) =>
      variant === "income" ? theme["green-500"] : theme["red-500"]};

    color: ${({ theme }) => theme.white};

    svg {
      color: ${({ theme }) => theme.white};
    }
  }

  @media (max-width: 480px) {
    padding: 0.9rem;
    font-size: 14px;
  }
`;

export const SelectCategory = styled.select`
  width: 100%;
  padding: 12px 40px 12px 12px;

  border: 0;
  border-radius: 6px;

  background: ${({ theme }) => theme["gray-200"]};
  color: ${({ theme }) => theme["gray-800"]};

  cursor: pointer;

  appearance: none;
  outline: none;

  transition: all 0.2s ease;

  box-sizing: border-box;

  &:focus {
    outline: 2px solid ${({ theme }) => theme["green-300"]};
  }

  background-repeat: no-repeat;
  background-position: right 12px center;

  option {
    color: ${({ theme }) => theme["gray-800"]};
    background: ${({ theme }) => theme.white};
  }

  @media (max-width: 480px) {
    font-size: 14px;
    padding: 10px 36px 10px 10px;
  }
`;
