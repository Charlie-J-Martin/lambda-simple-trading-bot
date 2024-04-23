import './Graph.css';
import ChartJS from './Chart/ChartJS';

const Graph = () => {
  return (
    <>
      <h1 className='text-3xl text-center'>Open and Close Tracker</h1>
      <div className='graph-container'>
        <ChartJS />
      </div>
    </>
  );
};

export default Graph;
