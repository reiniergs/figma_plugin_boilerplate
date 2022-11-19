import resizeWindow from "endpoints/window/resize";

const endpoints = {
  [resizeWindow.uri]: resizeWindow.handler,
};

export default endpoints;
