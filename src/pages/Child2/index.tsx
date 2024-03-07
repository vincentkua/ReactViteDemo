interface Child2Props {
  samplestring: string;
  samplenumber: number;
  sampleaction: () => void;
}

const Child2 = ({ samplestring, samplenumber, sampleaction }: Child2Props) => {
  return (
    <>
      <h3>Sample Child2</h3>
      <p>Sample String: {samplestring}</p>
      <p>Sample Number: {samplenumber}</p>
      <button onClick={sampleaction}>Add X Action</button>
    </>
  );
};

export default Child2;
