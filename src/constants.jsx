export const colors = {
  fontBlack: "#31373F",
  lightGrey: "#AFAFAF",
  accent: "#AB9DFF",
  background: "#FAF8F6",
  lightBlue: "#E1E9FA",
  offWhite: "#EEF4F1",
  midBlue: "#D8D8F4",
};
export const mobileBreakPoint = "824px";

export const HEIGHT =
  window.innerWidth > mobileBreakPoint
    ? window.innerHeight - 136
    : window.innerHeight;
export const WIDTH =
  window.innerWidth > mobileBreakPoint
    ? window.innerWidth - 80
    : window.innerWidth - 40;

export const FULL_HEIGHT = window.innerHeight;
export const FULL_WIDTH = window.innerWidth;
