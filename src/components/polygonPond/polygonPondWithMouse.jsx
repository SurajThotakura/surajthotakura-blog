import styled from "styled-components";
import { colors, FULL_HEIGHT, FULL_WIDTH } from "../../constants";
import SceneForPond from "./matter/sceneForPond";

const Pond = styled.div`
  height: 100vh;
  width: 100vw;
`;

const Fog = styled.div`
  width: 100vw;
  height: 100vh;
  position: absolute;
  z-index: 0;
  border-radius: 2rem;
  backdrop-filter: blur(8px);
  background-color: transparent;
`;
const PondWater = styled.div`
  position: absolute;
  z-index: -1;
  width: 100vw;
  height: 100vh;
  border-radius: 2rem;
  background-color: ${colors.offWhite};
  overflow: hidden;
`;

const PolygonPondWithMouse = () => {
  return (
    <Pond>
      <Fog />
      <PondWater>
        <SceneForPond />
      </PondWater>
    </Pond>
  );
};

export default PolygonPondWithMouse;
