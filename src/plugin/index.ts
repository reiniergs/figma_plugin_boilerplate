import endpoints from "./endpoints";
import { onSelectionChange } from "./events";

const messageIdKey = "__message_id__";
const DEFAULT_WINDOW_SIZE = { width: 400, height: 640 };

const handleRequest = async (message) => {
  const { uri } = message;
  console.log("request", message);
  const res = await endpoints[uri](message.data);
  const messageId = message[messageIdKey];
  console.log("response", res);
  if (res !== undefined) {
    figma.ui.postMessage({
      [messageIdKey]: messageId,
      res,
    });
  }
};

export const run = () => {
  figma.ui.onmessage = (message) => {
    const { uri } = message;
    if (typeof endpoints[uri] === "function") {
      handleRequest(message);
      return true;
    } else {
      console.error(
        `We couldn't find a handler for message type ${uri}`,
        message
      );
    }
  };
  figma.on("selectionchange", onSelectionChange);
  figma.on("currentpagechange", onSelectionChange);
  figma.showUI(__html__, DEFAULT_WINDOW_SIZE);
};

run();
