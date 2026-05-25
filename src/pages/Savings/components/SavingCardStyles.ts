import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const Card = styled(NavLink)`
  max-width: 400px;
  max-height: 250px;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-flow: column wrap;
  gap: 15px;
  background-color: ${({ theme }) => theme["green-500"]};
  border-radius: 12px;
  padding: 20px;
  text-decoration: none;
  color: ${({ theme }) => theme.white};

  p {
    font-size: 16px;
  }
`;

export const HeaderCard = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;

  h2 {
    font-size: 25px;
    font-weight: 800;
    margin: 0;
  }
`;

export const ProgressBarContainer = styled.div`
  position: relative;
  width: 100%;
  height: 10px;
  background-color: ${({ theme }) => theme["gray-300"]};
  border-radius: 8px;
`;

interface ProgressProps {
  progress: number;
}

export const Progress = styled.div<ProgressProps>`
  background-color: ${({ theme }) => theme["green-700"]};
  position: relative;
  width: ${({ progress }) => progress}%;
  height: 10px;
  border-radius: 8px;
`;
