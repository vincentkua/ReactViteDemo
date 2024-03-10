type Child1props = {
  children: string;
};

const Child1 = ({ children }: Child1props) => {
  return (
    <>
      <h3>Child1</h3>
      <p>{children}</p>
    </>
  );
};

export default Child1;
