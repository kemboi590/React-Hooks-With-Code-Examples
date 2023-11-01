import React, { useState, useEffect } from "react";

function WithUseEffect() {
    const [country, setCountry] = useState("");
    const [universities, setUniversities] = useState([]);
  
    useEffect(() => {
      const fetchUniversities = async () => {
        try {
          const response = await fetch(`http://universities.hipolabs.com/search?country=${country}`);
          const data = await response.json();
          setUniversities(data);
        } catch (error) {
          console.error(error);
        }
      };
  
      if (country) {
        fetchUniversities();
      }
    }, [country]);
  
    const handleCountryChange = (e) => { 
      setCountry(e.target.value);
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
    };
  return (
    <>
      <h1>Universities</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="country">Enter a country name:</label>
        <input
          type="text"
          id="country"
          value={country}
          onChange={handleCountryChange}
        />
        <button type="submit">Search</button>
      </form>
      <ul>
        {universities.map((university) => (
          <li key={university.name}>{university.name}</li>
        ))}
      </ul>
    </>
  )
}

