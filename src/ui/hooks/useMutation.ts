import { useMutation as useReactMutation } from "react-query";
import request, { Request } from "../helpers/request";

export interface MutationHookProps extends Pick<Request, "uri"> {
  onSuccess?: () => void;
}

function useMutation<Req, Res>({ uri, onSuccess }: MutationHookProps) {
  return useReactMutation(
    async (data?: Req) => {
      return (await request({
        uri,
        data,
      })) as Res;
    },
    {
      onSuccess,
    }
  );
}

export default useMutation;
