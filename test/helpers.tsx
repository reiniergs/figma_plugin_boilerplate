type MockableFunction = (...args: any[]) => any;

export const asMock = <Func extends MockableFunction>(mockedFunc: Func) =>
  mockedFunc as jest.MockedFunction<typeof mockedFunc>;
