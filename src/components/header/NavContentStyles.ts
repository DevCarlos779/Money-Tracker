import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const ContentContainer = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  background-color: ${({ theme }) => theme.black};

  padding: 40px 0;

  font-family: "Inter", sans-serif;

  position: relative;

  @media (max-width: 1320px) {
    width: 100%;
    padding: 30px 40px;

    flex-direction: row;
    justify-content: center;
    align-items: center;
  }
`;

export const Div = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;

  gap: 40px;

  padding: 20px;

  text-align: center;

  h1 {
    color: ${({ theme }) => theme.white};

    font-family: "Poppins", sans-serif;
    font-size: 22px;
    font-weight: 700;

    letter-spacing: 0.5px;
  }

  strong {
    color: ${({ theme }) => theme["green-300"]};

    font-family: "Poppins", sans-serif;
    font-size: 22px;
    font-weight: 700;

    letter-spacing: 0.5px;
  }

  @media (max-width: 1320px) {
    flex-direction: row;

    justify-content: space-between;
    align-items: center;
  }
`;

export const MenuButton = styled.button`
  display: none;

  background: transparent;
  border: none;

  color: ${({ theme }) => theme.white};

  cursor: pointer;

  @media (max-width: 900px) {
    display: flex;

    align-items: center;
    justify-content: center;
  }
`;

interface DivButtonsNavBarProps {
  $isOpen: boolean;
}

export const DivButtonsNavBar = styled.div<DivButtonsNavBarProps>`
  display: flex;
  flex-direction: column;

  gap: 8px;

  @media (max-width: 1320px) {
    flex-direction: row;
  }

  @media (max-width: 900px) {
    position: absolute;

    top: 100%;
    left: 0;
    right: 0;

    background-color: ${({ theme }) => theme.black};

    padding: 20px 40px;

    flex-direction: column;

    display: ${({ $isOpen }) => ($isOpen ? "flex" : "none")};

    z-index: 999;
  }
`;

export const NavButton = styled(NavLink)`
  width: 100%;
  max-width: 224px;
  height: 48px;

  display: flex;
  align-items: center;

  gap: 10px;

  padding: 0 18px;

  text-decoration: none;

  border-radius: 8px;

  color: ${({ theme }) => theme["gray-300"]};

  font-size: 15px;
  font-weight: 400;

  cursor: pointer;

  transition: all 0.2s ease;

  svg {
    flex-shrink: 0;
  }

  &:hover {
    background-color: ${({ theme }) => theme["gray-700"]};

    color: ${({ theme }) => theme.white};
  }

  &.active {
    background-color: ${({ theme }) => theme["green-600"]};

    color: ${({ theme }) => theme.white};

    font-weight: 600;

    position: relative;
  }

  &.active::before {
    content: "";

    position: absolute;

    left: 10px;
    top: 10px;
    bottom: 10px;

    width: 4px;

    border-radius: 4px;

    background: ${({ theme }) => theme["green-300"]};
  }

  @media (max-width: 900px) {
    max-width: 100%;

    justify-content: center;
  }
`;
