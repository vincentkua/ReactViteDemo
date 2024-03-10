type Child2props = {
  children: React.ReactNode;
};

const Child2 = ({ children }: Child2props) => {
  return (
    <>
      <h3>Child2</h3>
      <p>{children}</p>
    </>
  );
};

export default Child2;
