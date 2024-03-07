import { useState } from "react";
import Child1 from "../Child1";
import Child2 from "../Child2";
import Child3 from "../Child3";

const Home = () => {
  const [homevalue, sethomevalue] = useState("X");
  const actionAddXValue = () => sethomevalue(homevalue + "X");
  return (
    <>
      <h3>Home Page</h3>
      <p>Value: {homevalue}</p>
      <button onClick={actionAddXValue}>Add X</button>
      <hr />

      <Child1
        samplestring="hello1"
        samplenumber={111}
        sampleaction={actionAddXValue}
      />

      <Child2
        samplestring="hello2"
        samplenumber={222}
        sampleaction={actionAddXValue}
      />

      <Child3
        samplestring="hello3"
        samplenumber={333}
        sampleaction={actionAddXValue}
      />
    </>
  );
};

export default Home;
