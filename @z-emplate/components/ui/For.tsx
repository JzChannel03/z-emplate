interface Props<T> {
  items: T[];
  children: (item: T, index: number) => JSX.Element;
}

const For = <T,>({ items, children: render }: Props<T>) => {
  //FIX: Improve this check
  if (!items) {
    return <>Loading...</>;
  }
  return (
    <>
      {items.map((item, index) => {
        return render(item, index);
      })}
    </>
  );
};

export default For;
