import React from 'react';
import {  FaArrowRightLong} from 'react-icons/fa6';
import './index.css'

const VehicleList = ({pointB,pointA,date,search}) => {
  return (
    <div className='flight-container'>
      <h2 className='heading'>Available Flights:</h2>
      <p className='description'>Based on Your Availability Flight Details Will Be Displayed Here</p>
      {search?(<div className="describe">
        <p className='availability'>{pointA}<FaArrowRightLong className='icons'/> {pointB}</p>
        <p className="availability">No Flights Are Available For This Date:{date} </p></div>):null}
      {/* <ul>
        {vehicles.map((vehicle) => (
          <li key={vehicle.id} className='flight-list-items'>{`${vehicle.name} (${vehicle.country_code})`}</li>
        ))}
      </ul> */}
    </div>
  );
};

export default VehicleList;
