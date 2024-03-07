const Child1 = (props: {
  samplestring: string;
  samplenumber: number;
  sampleaction: () => void;
}) => {
  const samplestring = props.samplestring;
  const samplenumber = props.samplenumber;
  const sampleaction = props.sampleaction;
  return (
    <>
      <h3>Sample Child1</h3>
      <p>Sample String: {samplestring}</p>
      <p>Sample Number: {samplenumber}</p>
      <button onClick={sampleaction}>Add X Action</button>
    </>
  );
};

export default Child1;
