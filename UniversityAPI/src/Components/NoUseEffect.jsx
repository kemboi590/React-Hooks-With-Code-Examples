import React, { useState } from "react";

function NoUseEffect() {
  const [country, setCountry] = useState("");
  const [universities, setUniversities] = useState([]);

  const handleCountryChange = (e) => {
    setCountry(e.target.value);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(
        `http://universities.hipolabs.com/search?country=${country}`
      );
      const data = await response.json();
      setUniversities(data);
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <>
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
          <>
            <li key={university.name}>{university.name}</li>
          </>
        ))}
      </ul>
    </>
  );
}

export default NoUseEffect;
