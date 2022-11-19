export interface Endpoint<Req, Res> {
  uri: string;
  handler: (data?: Req) => Res;
}

export interface Event<T> {
  type: string;
  data: T;
}
