import React from 'react';
import UseFetch from './UseFetch';

const FetchYogaData = () => {
  const [data] = UseFetch('https://api.npoint.io/4459a9a10e43812e1152');
  
  console.log(data); // For debugging

  return (
    <>
      <h1 className='usefetch_heading'>Use Fetch Custom Hook</h1>
      <ul className='list_data_main'>
        {data && data.map((e) => (
          <li className='list-data' key={e.name}>
            <h3>{e.name}</h3>
            <p>Benefits: {e.benefits}</p>
            <p>Time  Duration: {e.time_duration}</p>
          </li>
        ))}
      </ul>
    </>
  );
};

export default FetchYogaData;
