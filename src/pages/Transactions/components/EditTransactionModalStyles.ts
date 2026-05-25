import styled from "styled-components";
import * as Dialog from "@radix-ui/react-dialog";
import * as RadioGroup from "@radix-ui/react-radio-group";

export const Overlay = styled(Dialog.Overlay)`
  position: fixed;
  width: 100vw;
  height: 100vh;
  inset: 0;
  background: rgba(0, 0, 0, 0.75);
`;

export const Content = styled(Dialog.Content)`
  width: 90%;
  max-width: 32rem;
  max-height: 90vh;

  overflow-y: auto;

  border-radius: 12px;
  padding: 2.5rem 3rem;

  background: ${(props) => props.theme["gray-100"]};

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

      border-radius: 6px;
      border: 0;

      background: ${(props) => props.theme["gray-200"]};
      color: ${(props) => props.theme.black};

      padding: 1rem;

      box-sizing: border-box;

      &::placeholder {
        color: ${(props) => props.theme["gray-500"]};
      }
    }

    button[type="submit"] {
      height: 50px;
      border: 0;

      background: ${(props) => props.theme["green-500"]};
      color: ${(props) => props.theme.white};

      font-weight: bold;

      padding: 0 1.25rem;

      border-radius: 6px;

      margin-top: 1.25rem;

      cursor: pointer;

      transition: background-color 0.2s;

      &:disabled {
        opacity: 0.6;
        cursor: not-allowed;
      }

      &:not(:disabled):hover {
        background: ${(props) => props.theme["green-300"]};
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
        margin-top: 1rem;
        font-size: 14px;
      }
    }
  }
`;

export const CloseButton = styled(Dialog.Close)`
  position: absolute;

  background: transparent;

  border: 0;

  top: 1.5rem;
  right: 1.5rem;

  line-height: 0;

  cursor: pointer;

  color: ${(props) => props.theme["gray-500"]};

  @media (max-width: 480px) {
    top: 1rem;
    right: 1rem;
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
  background: ${(props) => props.theme["gray-200"]};

  padding: 1rem;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;

  border-radius: 6px;

  cursor: pointer;

  border: 0;

  color: ${(props) => props.theme["gray-700"]};

  transition: all 0.2s ease;

  text-align: center;

  svg {
    color: ${(props) =>
      props.variant === "income"
        ? props.theme["green-300"]
        : props.theme["red-500"]};
  }

  &[data-state="unchecked"]:hover {
    background: ${(props) => props.theme["gray-300"]};
  }

  &[data-state="checked"] {
    color: ${(props) => props.theme.white};

    background: ${(props) =>
      props.variant === "income"
        ? props.theme["green-500"]
        : props.theme["red-500"]};

    svg {
      color: ${(props) => props.theme.white};
    }
  }

  @media (max-width: 480px) {
    padding: 0.9rem;
    font-size: 14px;
  }
`;

export const EditButton = styled.button`
  border-radius: 6px;

  cursor: pointer;

  padding: 6px;

  transition: 0.3s ease-in-out;

  border: 2px solid ${(props) => props.theme["green-500"]};

  background-color: ${(props) => props.theme["green-500"]};

  color: ${(props) => props.theme.white};

  &:hover {
    border: 2px solid ${(props) => props.theme.black};

    color: ${(props) => props.theme.black};
  }

  @media (max-width: 480px) {
    padding: 5px 8px;
    font-size: 12px;
  }
`;

export const SelectCategory = styled.select`
  width: 100%;

  padding: 12px;

  border: 0;
  border-radius: 12px;

  background-color: ${(props) => props.theme["gray-200"]};

  cursor: pointer;

  appearance: none;
  -webkit-appearance: none;
  -moz-appearance: none;

  outline: none;

  box-sizing: border-box;

  background-image: url("data:image/svg+xml;utf8,<svg fill='%23666' height='20' viewBox='0 0 20 20' width='20' xmlns='http://www.w3.org/2000/svg'><path d='M5 7l5 5 5-5z'/></svg>");

  background-repeat: no-repeat;

  background-position: right 12px center;

  padding-right: 40px;

  @media (max-width: 480px) {
    font-size: 14px;
    padding: 10px 36px 10px 10px;
  }
`;
