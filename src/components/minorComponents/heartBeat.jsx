import styled from "styled-components";
import { colors } from "../../constants";

const HeartBeatIcon = styled.svg`
  @keyframes heartbeat {
    0% {
      fill: ${colors.midBlue};
      transform: scale(0.9);
    }
    20% {
      fill: ${colors.accent};
      transform: scale(1);
    }
    100% {
      fill: ${colors.midBlue};
      transform: scale(0.95);
    }
  }
  height: ${(props) => props.size};
  width: ${(props) => props.size};
  animation: heartbeat 1000ms ease none infinite;
`;

const HeartBeat = () => {
  return (
    <HeartBeatIcon
      size={"3rem"}
      height="360"
      width="360"
      viewBox="0 0 360 360"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M259.204 25C227.909 25 200.09 40.0044 181.628 63.4367C180.802 64.4857 179.198 64.4858 178.371 63.4368C159.904 40.0044 131.989 25 100.796 25C45.1843 25 0 72.2992 0 130.76C0 221.429 147.934 330.353 175.579 349.917C178.241 351.8 181.77 351.809 184.443 349.941C212.143 330.577 360 222.907 360 130.76C360 72.4097 314.921 25 259.204 25Z" />
    </HeartBeatIcon>
  );
};

export default HeartBeat;
