import { useEffect, useRef } from "react";

function useSubscribe<T>(
  event: string,
  callback: (data: T) => void,
  dependencies = []
) {
  useEffect(() => {
    const handler = (message) => {
      const { pluginMessage } = message.data;
      if (pluginMessage && pluginMessage["type"] === event) {
        callback(pluginMessage["data"] as T);
      }
    };
    window.addEventListener("message", handler);
    return () => {
      window.removeEventListener("message", handler);
    };
  }, dependencies);
}

export default useSubscribe;
