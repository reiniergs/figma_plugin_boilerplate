import { Endpoint } from "@types";

export interface SetWindowResizeResquest {
  width: number;
  height: number;
}

export interface SetWindowResizeResponse {
  ok: boolean;
  error?: string;
}

const endpoint: Endpoint<SetWindowResizeResquest, SetWindowResizeResponse> = {
  uri: "RESIZE_WINDOW",
  handler: (data) => {
    const { width, height } = data;
    figma.ui.resize(width, height);
    return { ok: true };
  },
};

export default endpoint;
