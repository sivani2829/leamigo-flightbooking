
// import React, { useState} from 'react';
// import SearchForm from '../SearchForm';
// import VehicleList from '../VehicleList';
// import Header from '../Header'
// import './index.css'

// const Home= ({data}) => {
  
  
//   const [vehicles, setVehicles] = useState([]);
//  

//   const onChangeA= (event) => {
//     setPointA(event.target.value);
//   };
  
//   const onChangeB = (event) => {
//     setPointB(event.target.value);
//   };

//   const onSearch = (searchTerm) => {
//     setPointA(searchTerm);
//     setPointB(searchTerm);
//     // our api to fetch the search result
//     console.log("search ", searchTerm);
//   };




//   // Function to handle the search button click
//   const handleSearch = () => {
//     // Make an API call here to fetch available vehicles based on the user inputs (pointA, pointB, and date).
//     // For now, use dummy JSON data as an example.
    

//     // const dummyData=[
//     //   {
//     //     "city_code": "DHN",
//     //     "country_code": "US",
//     //     "name": "Dothan Regional Airport",
//     //   },
       
//     //   {
//     //     "city_code": "SHL",
//     //     "country_code": "IN",
//     //     "name": "Shillong Airport",
//     //   },

//     // {
//     // "city_code": "JNB",
//     // "country_code": "ZA",
//     // "name": "Lanseria International Airport"},

//     // {
//     //   "city_code": "IZO",
//     //   "country_code": "JP",
//     //   "name": "Izumo Airport"
     
//     // },

//     // {
//     //   "city_code": "SYX",
//     // "country_code": "CN",
//     // "name": "Sanya Phoenix International Airport"

//     // },
      
//     // ]
//     setVehicles(data);
//     setSearch(true)
//   };

//   return (
//     <div className='background-app'>
//        <Header/>
//       <h1 className='airport-heading'>Airport Transfer Booking</h1>
//       <SearchForm
//         pointA={pointA}
//         setPointA={setPointA}
//         pointB={pointB}
//         setPointB={setPointB}
//         date={date}
//         setDate={setDate}
//         onSearch={handleSearch}
//         search={search}
        
//       />
//   
//     </div>
//   );
// };

// export default Home;


