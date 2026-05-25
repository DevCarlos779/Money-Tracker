import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const Card = styled(NavLink)`
  width: 100%;
  max-width: 800px;
  min-height: 220px;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  gap: 15px;

  background-color: ${({ theme }) => theme["green-500"]};
  border-radius: 12px;
  padding: 20px;

  text-decoration: none;
  color: ${({ theme }) => theme.white};

  transition:
    transform 0.2s ease,
    filter 0.2s ease;

  &:hover {
    transform: translateY(-2px);
    filter: brightness(1.05);
  }

  p {
    font-size: 16px;
    line-height: 1.4;
  }
`;

export const HeaderCard = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;

  h2 {
    font-size: 22px;
    font-weight: 800;
    margin: 0;
  }
`;

export const ProgressBarContainer = styled.div`
  width: 100%;
  height: 10px;

  background-color: ${({ theme }) => theme["gray-300"]};
  border-radius: 8px;

  overflow: hidden;
`;

interface ProgressProps {
  progress: number;
}

export const Progress = styled.div<ProgressProps>`
  height: 100%;
  width: ${({ progress }) => Math.min(100, Math.max(0, progress))}%;

  background-color: ${({ theme }) => theme["green-700"]};
  border-radius: 8px;

  transition: width 0.3s ease;
`;
