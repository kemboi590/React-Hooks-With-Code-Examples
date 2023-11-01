import React, { useState, useEffect } from 'react';

function ExampleComponent() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {

    async function fetchData() {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');
        const result = await response.json();
        setData(result);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error);
        setLoading(false);
      }
    }

    // Call the fetchData function
    fetchData();
  }, []); 

  return (
    <div>
      <h1>Fetching Data with useEffect</h1>
      {loading ? (
        <p>Loading data...</p>
      ) : (
        <ul>
          {data.map((post) => (
           
              <ol>
                   <li key={post.id}>{post.title}</li>
              </ol>
          ))}
        </ul>
      )}
    </div>
  );
}

export default ExampleComponent;
