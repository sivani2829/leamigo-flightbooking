import React from 'react';
import { useState } from 'react';
import './index.css'
import Header from '../Header'
// import {Link} from 'react-router-dom'
 import VehicleList from '../VehicleList'
// var data = require("./FLIGHT_DATA.json");



const SearchForm = ({ data }) => {

  const [pointA, setPointA] = useState('');
  const [pointB, setPointB] = useState('');
  const [date, setDate] = useState('');
  const [search,setSearch]=useState(false);

  const onChangeA= (event) => {
    setPointA(event.target.value);
  };
  
  const onChangeB = (event) => {
    setPointB(event.target.value);
  };

  const onSearchA = (searchTerm) => {
    setPointA(searchTerm);
    // setPointB(searchTerm);
    // our api to fetch the search result
    console.log("search ", searchTerm);
  };  

  const onSearchB = (searchTerm) => {
    // setPointA(searchTerm);
    setPointB(searchTerm);
    // our api to fetch the search result
    console.log("search ", searchTerm);
  };  

  return (
    <>
     
    <div className='main-container'>
    <Header/>
    
    <div className='booking-container'>
      <div className='from-class'>
      <label className="label-name">
        From:
        <input type="text" value={pointA} onChange={onChangeA}  className='input-class'/>
        </label>

      <div className="dropdown">
          {data
            .filter((item) => {
              const searchTerm = pointA.toLowerCase();
              const fullName = item.name.toLowerCase();

              return (
                searchTerm &&
                fullName.startsWith(searchTerm) &&
                fullName !== searchTerm
              );
            })
            .slice(0, 10)
            .map((item) => (
              <div
                onClick={() => onSearchA(item.name)}
                className="dropdown-row"
                key={item.name}
              >
                {item.name}
              </div>
            ))}</div></div>
 
    <div className='to-class'>
      <label className="label-name">
        To:
        <input type="text" value={pointB} onChange={onChangeB}  className='input-class'/>
      </label>

      <div className="dropdown">
          {data
            .filter((item) => {
              const searchTerm = pointB.toLowerCase();
              const fullName = item.name.toLowerCase();

              return (
                searchTerm &&
                fullName.startsWith(searchTerm) &&
                fullName !== searchTerm
              );
            })
            .slice(0, 10)
            .map((item) => (
              <div
                onClick={() => onSearchB(item.name)}
                className="dropdown-row"
                key={item.name}
              >
                {item.name}
              </div>
            ))}</div> </div>
      
      <label className="label-name">
        Date:
        <input type="date" value={date} onChange={(e) => setDate(e.target.value)}  className='input-class'/>
      </label>
      <button onClick={() => setSearch(true)} className='search-button'>Search</button>
      
    </div>

    <div className='flight-availability'>
          <VehicleList   pointA={pointA}  pointB={pointB}  date={date} search={search}/>
    </div>
    </div>
    </>
    
  );
};

export default SearchForm;
