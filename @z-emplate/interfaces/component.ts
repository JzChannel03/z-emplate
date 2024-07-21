export type ParentComponent<T = object> = Component<
  { children: React.ReactNode | React.ReactNode[] } & T
>;

export type Component<T> = (props: T) => JSX.Element;

export type VoidComponent<T> = (props: T) => Component<{ children: never } & T>;

export type ComponentWithoutProps = () => JSX.Element;
