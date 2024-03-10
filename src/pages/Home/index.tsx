import Child1 from "../Child1";
import Child2 from "../Child2";

const Home = () => {
  const constNodeString = (
    <>
      <p>children ReactNode (JSX.Element constant)</p>
    </>
  );

  const ConstReactNode = () => {
    return (
      <>
        <p>children ReactNode (React Component)</p>
      </>
    );
  };

  return (
    <>
      <h3>Home Page</h3>
      <hr />

      <Child1>children text</Child1>
      <Child2>
        <p>children ReactNode (p tag)</p>
      </Child2>
      <Child2>{constNodeString}</Child2>
      <Child2>
        <ConstReactNode />
      </Child2>
    </>
  );
};

export default Home;
