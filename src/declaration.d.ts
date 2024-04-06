declare module '*.module.css';
declare module '*.module.scss';
declare module '*.svg';

type DeepPartial<T> = T extends object
  ? {
      [P in keyof T]?: DeepPartial<T[P]>;
    }
  : T;
