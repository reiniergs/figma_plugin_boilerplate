import { Endpoint } from "@types";

export type GetSelectionReq = void;
export interface GetSelectionRes {
  selection: readonly SceneNode[];
}

const GetSelection: Endpoint<GetSelectionReq, GetSelectionRes> = {
  uri: "GET_CURRENT_SELECTION",
  handler: () => {
    return {
      selection: figma.currentPage.selection,
    };
  },
};

export default GetSelection;
