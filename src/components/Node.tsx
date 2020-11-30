import React from "react";
import styled, { css } from "styled-components";

interface IStyleProps {
  isWall: boolean;
  isStart: boolean;
  isTarget: boolean;
  isPath: boolean;
  isVisited: boolean;
}

interface IProps extends IStyleProps {
  onMouseDown: () => void;
  onMouseEnter: () => void;
  onMouseUp: () => void;
}

export const BORDER_COLOR = "#C1C1C1";
const WALL_COLOR = "#34495e";
const START_COLOR = "green";
const TARGET_COLOR = "red";
const VISITED_COLOR = "yellow";

const wallNode = css`
  background-color: ${WALL_COLOR};
  border-right: 1px solid ${WALL_COLOR};
  border-bottom: 1px solid ${WALL_COLOR};
`;

const startNode = css`
  background-color: ${START_COLOR};
  border-right: 1px solid ${START_COLOR};
  border-bottom: 1px solid ${START_COLOR};
`;

const targetNode = css`
  background-color: ${TARGET_COLOR};
  border-right: 1px solid ${TARGET_COLOR};
  border-bottom: 1px solid ${TARGET_COLOR};
`;

const visitedNode = css`
  background-color: ${VISITED_COLOR};

  animation-name: visitedAnimation;
  animation-duration: 1.5s;
  animation-timing-function: ease-out;
  animation-delay: 0;
  animation-direction: alternate;
  animation-iteration-count: 1;
  animation-fill-mode: forwards;
  animation-play-state: running;

  @keyframes visitedAnimation {
    0% {
      transform: scale(0.3);
      background-color: rgba(0, 0, 66, 0.75);
      border-radius: 100%;
    }

    50% {
      background-color: rgba(17, 104, 217, 0.75);
    }

    75% {
      transform: scale(1.2);
      background-color: rgba(0, 217, 159, 0.75);
    }

    100% {
      transform: scale(1);
      background-color: ${VISITED_COLOR};
    }
  }
`;

const SNode = styled.td<IStyleProps>`
  background-color: white;
  border-right: 1px solid ${BORDER_COLOR};
  border-bottom: 1px solid ${BORDER_COLOR};
  display: inline-block;
  height: 20px;
  width: 20px;

  ${(props) =>
    (props.isStart && startNode) ||
    (props.isPath && startNode) ||
    (props.isVisited && visitedNode) ||
    (props.isTarget && targetNode) ||
    (props.isWall && wallNode)}
`;

const Node = ({
  onMouseDown,
  onMouseEnter,
  onMouseUp,
  isWall,
  isStart,
  isTarget,
  isPath,
  isVisited,
}: IProps) => {
  return (
    <SNode
      onMouseDown={onMouseDown}
      onMouseEnter={onMouseEnter}
      onMouseUp={onMouseUp}
      isWall={isWall}
      isStart={isStart}
      isTarget={isTarget}
      isPath={isPath}
      isVisited={isVisited}
    />
  );
};

export default Node;
