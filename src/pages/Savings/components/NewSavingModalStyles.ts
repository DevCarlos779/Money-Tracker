import styled from "styled-components";
import * as Dialog from "@radix-ui/react-dialog";

export const NewSavingButton = styled.button`
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

    border-radius: 10px;

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
