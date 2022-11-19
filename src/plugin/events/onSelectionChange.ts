import getSelection, { GetSelectionRes } from "endpoints/selection/get";
import { Event } from "@types";

const onSelectionChange = () => {
  const selection = getSelection.handler();
  figma.ui.postMessage(<Event<GetSelectionRes>>{
    type: "SELECTION_CHANGE",
    data: selection,
  });
};

export default onSelectionChange;
