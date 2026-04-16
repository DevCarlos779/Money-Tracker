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
`;

export const Overlay = styled(Dialog.Overlay)`
  position: fixed;
  inset: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.75);
`;

export const Content = styled(Dialog.Content)`
  min-width: 32rem;
  border-radius: 6px;
  padding: 2.5rem 3rem;
  background: ${({ theme }) => theme["gray-100"]};
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  form {
    margin-top: 2rem;
    display: flex;
    flex-direction: column;
    gap: 1rem;

    input {
      padding: 1rem;
      border-radius: 6px;
      border: 0;
      background: ${({ theme }) => theme["gray-200"]};
      color: ${({ theme }) => theme["black"]};

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
`;
