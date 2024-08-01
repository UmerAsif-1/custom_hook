// 1. Importing React to create the component
import React from 'react';

// 2. Importing the custom hook UseFetch for fetching data
import UseFetch from './UseFetch';

// 3. Importing the CSS file for styling the component
import './FetchData.css';

// 4. Declaring the functional component FetchData
const FetchData = () => {
  
  // 5. Using the UseFetch hook to fetch data from the provided URL and destructuring the returned array to get the 'data'
  const [data] = UseFetch('https://api.npoint.io/9045c260b1565daa9e15');
  
  // 6. Logging the fetched data to the console for debugging
  console.log(data);

  // 7. Returning the JSX to render the component's UI
  return (
    <>
      {/* 8. Creating an unordered list with a class for styling */}
      <ul className='list_data_main'>
        
        {/* 9. Adding a heading inside the list */}
        <h1 className='usefetch_heading'>Use Fetch Custom Hook</h1>
        
        {/* 10. Checking if 'data' exists and mapping over it to create list items for each element */}
        {data && data.map((e) => (
          <>
            {/* 11. Creating a list item for each element in the data array */}
            <li className='list_data' key={e.name}>
              
              {/* 12. Displaying the name of the element */}
              <h3>{e.name}</h3>
              
              {/* 13. Displaying the importance of the element */}
              <p><strong>Importance: </strong>{e.importance}</p>
              
              {/* 14. Displaying the benefits of the element */}
              <p><strong>Benefits: </strong>{e.benefits}</p>
              
              {/* 15. Displaying the best time to intake the element */}
              <p><strong>Time to eat: </strong>{e.best_time_to_intake}</p>
            </li>
          </>
        ))}
      </ul>
    </>
  );
}

// 16. Exporting the component to use it in other parts of the application
export default FetchData;
