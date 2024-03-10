import { ComponentType, PropsWithChildren } from "react";

const withChild =
  (Childrenx: ComponentType<PropsWithChildren<{}>>) =>
  (props: PropsWithChildren<{}>) => {
    return (
      <>
        <Childrenx {...props} />
        <button>From Child</button>
      </>
    );
  };

export default withChild;
