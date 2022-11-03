import styled from "styled-components";
import { colors } from "../../constants";
import Scene from "./matter/reactMatter";

const Pond = styled.div`
  height: calc(100vh - 8.5rem);
  width: calc(100vw - 5rem);
  padding: 6rem 2.5rem 1.5rem 2.5rem;
  border-radius: 2rem;
`;
const PondContent = styled.div`
  width: calc(100vw - 5rem);
  height: calc(100vh - 8.5rem);
  position: absolute;
  z-index: 0;
  border-radius: 2rem;
  backdrop-filter: blur(8px);
  background-color: transparent;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2.5rem;
`;
const PondWater = styled.div`
  position: absolute;
  z-index: -1;
  width: calc(100vw - 5rem);
  height: calc(100vh - 8.5rem);
  border-radius: 2rem;
  background-color: ${colors.offWhite};
  overflow: hidden;
`;

const PolygonPond = ({ children }) => {
  const mousePosition = (e) => {
    let xValue = e.x;
    let yValue = e.y;
    const HEIGHT = window.innerHeight - 136;
    const WIDTH = window.innerWidth - 80;
    let mousePosition = {
      mousePosX: -2 + (xValue / WIDTH) * 4,
      mousePosY: -2 + (yValue / HEIGHT) * 4,
    };
    return mousePosition;
  };
  return (
    <Pond>
      <PondContent>{children}</PondContent>
      <PondWater>
        <Scene />
      </PondWater>
    </Pond>
  );
};

export default PolygonPond;
