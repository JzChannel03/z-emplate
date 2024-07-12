interface Props {
  condition: boolean;
  children: React.ReactNode | React.ReactNode[];
  altChildren?: React.ReactNode | React.ReactNode[];
}

const If = ({ children, condition, altChildren }: Props) => {
  return <>{condition ? children : altChildren}</>;
};

export default If;
