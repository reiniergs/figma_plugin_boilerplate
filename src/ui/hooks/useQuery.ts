import request from "../helpers/request";
import { useQuery as useReactQuery } from "react-query";
import { Request } from "../helpers/request";

interface QueryOpts<T> {
  initialData: T;
  queryKey?: string;
}

function useQuery<T>(req: Request, opts: QueryOpts<T>) {
  const { initialData, queryKey = req.uri } = opts;
  return useReactQuery(
    queryKey,
    async () => {
      return (await request(req)) as T;
    },
    {
      initialData,
      refetchOnWindowFocus: false,
      retry: false,
    }
  );
}
export default useQuery;
