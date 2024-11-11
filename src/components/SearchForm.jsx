// SearchForm.jsx
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function SearchForm() {
  const [centuries, setCenturies] = useState([]);
  const [countries, setCountries] = useState([]);
  const [categories, setCategories] = useState([]);
  
  const [selectedCentury, setSelectedCentury] = useState('');
  const [selectedCountry, setSelectedCountry] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  
  const navigate = useNavigate();

  // Fetch unique filter options from the API
  useEffect(() => {
    const fetchFilterOptions = async () => {
      try {
        const response = await fetch('http://localhost:3000/events');
        if (!response.ok) throw new Error('Failed to fetch events for filters');
        const events = await response.json();

        // Extract unique centuries, countries, and categories
        const uniqueCenturies = Array.from(new Set(events.map(event => event.data.century)));
        const uniqueCountries = Array.from(new Set(events.map(event => event.data.country)));
        const uniqueCategories = Array.from(new Set(events.map(event => event.data.category)));

        setCenturies(uniqueCenturies);
        setCountries(uniqueCountries);
        setCategories(uniqueCategories);
      } catch (error) {
        console.error('Error fetching filter options:', error);
      }
    };

    fetchFilterOptions();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Build query parameters based on selected filters
    const queryParams = new URLSearchParams();
    if (selectedCentury) queryParams.append('century', selectedCentury);
    if (selectedCountry) queryParams.append('country', selectedCountry);
    if (selectedCategory) queryParams.append('category', selectedCategory);

    // Navigate to the filtered events page with query parameters
    navigate(`/home/search?${queryParams.toString()}`);
  };

  return (
    <form className="search-form" onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="century">Century:</label>
        <select
          id="century"
          value={selectedCentury}
          onChange={(e) => setSelectedCentury(e.target.value)}
        >
          <option value="">All Centuries</option>
          {centuries.map((century, index) => (
            <option key={index} value={century}>
              {century}
            </option>
          ))}
        </select>
      </div>

      <div className="form-group">
        <label htmlFor="country">Country:</label>
        <select
          id="country"
          value={selectedCountry}
          onChange={(e) => setSelectedCountry(e.target.value)}
        >
          <option value="">All Countries</option>
          {countries.map((country, index) => (
            <option key={index} value={country}>
              {country}
            </option>
          ))}
        </select>
      </div>

      <div className="form-group">
        <label htmlFor="category">Category:</label>
        <select
          id="category"
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
        >
          <option value="">All Categories</option>
          {categories.map((category, index) => (
            <option key={index} value={category}>
              {category}
            </option>
          ))}
        </select>
      </div>

      <button type="submit">Search</button>
    </form>
  );
}

export default SearchForm;
