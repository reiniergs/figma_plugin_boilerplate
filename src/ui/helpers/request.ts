import { nanoid } from "nanoid";

export interface Request {
  uri: string;
  data?: unknown;
}

export type Response = Promise<any>;

const request = async (req: Request): Response => {
  const { uri, data } = req;
  const messageId = nanoid();
  return new Promise((resolve) => {
    parent.postMessage(
      {
        pluginMessage: {
          uri,
          data,
          __message_id__: messageId,
        },
      },
      "*"
    );
    const handler = (message) => {
      const { pluginMessage } = message.data;
      if (pluginMessage && pluginMessage["__message_id__"] === messageId) {
        window.removeEventListener("message", handler);
        return resolve(pluginMessage.res);
      }
    };
    window.addEventListener("message", handler);
  });
};

export default request;
