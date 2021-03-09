export type AsyncData<T> = {
  loading: boolean;
  error: string | null;
  data: T | null;
};

export const asyncDataInitialState = {
  loading: false,
  error: null,
  data: null
};
