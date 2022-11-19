import { useRef } from "react";
import request from "../helpers/request";
import resizeEndpoint, {
  SetWindowResizeResquest,
} from "endpoints/window/resize";

const useScreenSize = async (props: SetWindowResizeResquest): Promise<void> => {
  const isFirstRender = useRef(true);
  if (isFirstRender.current) {
    const { width, height } = props;
    await request({
      uri: resizeEndpoint.uri,
      data: { width, height },
    });
  }
  isFirstRender.current = false;
};

export default useScreenSize;
