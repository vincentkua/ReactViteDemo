interface Child3Props {
  samplestring: string;
  samplenumber: number;
  sampleaction: () => void;
}

const Child3: React.FC<Child3Props> = ({
  samplestring,
  samplenumber,
  sampleaction,
}) => {
  return (
    <>
      <h3>Sample Child3</h3>
      <p>Sample String: {samplestring}</p>
      <p>Sample Number: {samplenumber}</p>
      <button onClick={sampleaction}>Add X Action</button>
    </>
  );
};

export default Child3;
