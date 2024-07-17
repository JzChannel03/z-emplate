import { ParentComponent } from "../../interfaces/component/component-type.interfaces";

const ZemplateProvider: ParentComponent<{ abuelito: string }> = ({
  children,
}) => {
  return <div>{children}</div>;
};

export default ZemplateProvider;
