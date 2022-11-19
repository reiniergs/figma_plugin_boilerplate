import { css } from "styled-components";
const palette = {
  primary: "#2C6297",
  primaryHover: "#FCD3DE",
  error: "#B3261E",
  border: "#DDDDDD",
  borderReverse: "#FFFFFF",
  icon: "#444444",
  surface1: "#FFFFFF",
  surface1Hover: "#F2F2F2",
  surface2: "#FAFAFA",
  surface2Hover: "#E6E6E6",
  surface3: "#F1F4FA",
  surfaceError: "#F9DEDC",
  onSurfacePrimary: "#1F1F1F",
  onSurfaceSecondary: "#767676",
  selected: "#F1F4FA",
  cta1: "#FFEAF1",
  cta1Hover: "#FEDFE8",
  cta1Disabled: "#D5CACE",
  onCta1: "#250F14",
  onCta1Disabled: "#79656A",
  cta2: "#FDD280",
  cta2Hover: "#FDCA66",
  cta2Disabled: "#DDDDDD",
  onCta2: "#1F1F1F",
  onCta2Disabled: "#767676",
  hover1: "#F1F4FA",
  cta3: "#F2F2F2",
  cta3Hover: "#E6E6E6",
};

const theme = {
  palette,
  typography: {
    display: css`
      font-family: "Google Sans";
      font-style: normal;
      font-weight: 400;
      font-size: 64px;
      line-height: 80px;
      color: ${palette.onSurfacePrimary};
    `,
    title: css`
      font-family: "Google Sans Text";
      font-style: normal;
      font-weight: 500;
      font-size: 20px;
      line-height: 24px;
      color: ${palette.onSurfacePrimary};
    `,
    subtitle: css`
      font-family: "Google Sans Text";
      font-style: normal;
      font-weight: 400;
      font-size: 14px;
      line-height: 20px;
      color: ${palette.onSurfacePrimary};
    `,
    body: css`
      font-family: "Google Sans Text";
      font-style: normal;
      font-weight: 400;
      font-size: 16px;
      line-height: 24px;
      color: ${palette.onSurfacePrimary};
    `,
    bodySmall: css`
      font-family: "Google Sans Text";
      font-style: normal;
      font-weight: 400;
      font-size: 14px;
      line-height: 20px;
      color: ${palette.onSurfaceSecondary};
    `,
    button: css`
      font-family: "Google Sans Text";
      font-style: normal;
      font-weight: 500;
      font-size: 16px;
      line-height: 24px;
      color: ${palette.onSurfacePrimary};
    `,
    header1: css`
      font-family: "Google Sans Text";
      font-style: normal;
      font-weight: 500;
      font-size: 16px;
      line-height: 24px;
      color: ${palette.onSurfacePrimary};
    `,
    header2: css`
      font-family: "Google Sans Text";
      font-style: normal;
      font-weight: 400;
      font-size: 16px;
      line-height: 24px;
      color: ${palette.onSurfacePrimary};
    `,
    labelXLarge: css`
      font-family: "Google Sans";
      font-style: normal;
      font-weight: 700;
      font-size: 24px;
      line-height: 24px;
      color: ${palette.onSurfacePrimary};
    `,
    labelLarge: css`
      font-family: "Google Sans Text";
      font-style: normal;
      font-weight: 500;
      font-size: 14px;
      line-height: 24px;
      color: ${palette.onSurfacePrimary};
    `,
    label: css`
      font-family: "Google Sans Text";
      font-style: normal;
      font-weight: 400;
      font-size: 12px;
      line-height: 16px;
      display: flex;
      align-items: center;
      letter-spacing: 0.1px;
      color: ${palette.onSurfacePrimary};
    `,
    labelSmall: css`
      font-family: "Google Sans Text";
      font-style: normal;
      font-weight: 500;
      font-size: 11px;
      line-height: 16px;
      display: flex;
      align-items: center;
      letter-spacing: 0.1px;
      color: ${palette.onSurfacePrimary};
    `,
    labelMono: css`
      font-family: "Google Sans Mono";
      font-style: normal;
      font-weight: 400;
      font-size: 12px;
      line-height: 16px;
      color: ${palette.onSurfacePrimary};
    `,
    inter: css`
      font-family: "Google Sans Text";
      font-style: normal;
      font-weight: 400;
      font-size: 11px;
      line-height: 16px;
      letter-spacing: 0.01em;
      color: ${palette.surface1};
    `,
  },
};

export const color = (name: string): ((props) => string) => {
  return (props) => props.theme.palette[name];
};

export const typography = (name: string): ((props) => string) => {
  return (props) => props.theme.typography[name];
};

export default theme;
