import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const Card = styled(NavLink)`
  width: 100%;
  max-width: 800px;
  min-height: 200px;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  gap: 14px;

  background-color: ${({ theme }) => theme.white};
  border: 1px solid ${({ theme }) => theme["gray-200"]};
  border-radius: 16px;
  padding: 22px;

  text-decoration: none;
  color: ${({ theme }) => theme["gray-800"]};

  box-shadow: 0 4px 20px rgba(16, 24, 40, 0.04);

  transition:
    transform 0.2s ease,
    box-shadow 0.2s ease,
    border-color 0.2s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 10px 28px rgba(16, 24, 40, 0.08);
    border-color: ${({ theme }) => theme["green-300"]};
  }

  p {
    font-size: 15px;
    line-height: 1.4;
    color: ${({ theme }) => theme["gray-500"]};
  }

  > strong {
    font-size: 13px;
    font-weight: 700;
    color: ${({ theme }) => theme["green-600"]};
  }
`;

export const HeaderCard = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;

  h2 {
    font-size: 18px;
    font-weight: 700;
    margin: 0;
    color: ${({ theme }) => theme["gray-800"]};
  }

  svg {
    color: ${({ theme }) => theme["green-600"]};
    background-color: rgba(16, 185, 129, 0.12);
    padding: 8px;
    width: 34px;
    height: 34px;
    border-radius: 10px;
    flex-shrink: 0;
  }
`;

export const ProgressBarContainer = styled.div`
  width: 100%;
  height: 8px;

  background-color: ${({ theme }) => theme["gray-100"]};
  border-radius: 8px;

  overflow: hidden;
`;

interface ProgressProps {
  progress: number;
}

export const Progress = styled.div<ProgressProps>`
  height: 100%;
  width: ${({ progress }) => Math.min(100, Math.max(0, progress))}%;

  background: linear-gradient(90deg, ${({ theme }) => theme["green-500"]}, ${({ theme }) => theme["green-300"]});
  border-radius: 8px;

  transition: width 0.3s ease;
`;
