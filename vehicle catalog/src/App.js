import React, { useState } from "react"
import './App.css';
import axios from "axios"
import vehicles from "./vehicles.json"

function App() {
  const [search,setsearch]=useState("")
  const [filter,setFilter]=useState("")


  const Handler=(e)=>{
  setsearch(e.target.value)
  }
  
  return (
    <div className="App">
      <h1>VEHICLE MANUFACTURERS</h1>
      <label className="search"> Search :
      <input className="" value={search} onChange={Handler} type="text" />
      </label>
      <label className="filtertype"> Filter by vehicles Type:
      {/* <input  type=""></input> */}
     < select value={filter} onChange={(e) => setFilter(e.target.value)}>
    <option value="">All</option>
    <option value="Passenger Car">Passenger Car</option>
    <option value="Truck">Truck</option>
    <option value="Multipurpose Passenger vehicle (MPV)">Multipurpose Passenger Vehicle (MPV)</option>
    <option value="Low speed vehicle (LSV)">Low Speed Vehicle (LSV)</option>
    <option value="off Road Vehicle">off Road Vehicle</option>
    <option value="Bus">Bus</option>
    <option value="Incomplete Vehicle">Incomplete Vehicle</option>

  
   
  </select>

      </label>


      <section>
      </section>
      <br/>
      <br/>
      <table id="table1">
          <tr>
            <th className="name">Name</th>
            <th className="country">Country</th>
            <th className="type">Type</th>
          </tr>
          {
            vehicles.filter((item)=>item.name.toLowerCase().includes(search.toLowerCase()) && (filter ==="" || item.type===filter)).map(
              (item)=>{return<tr >
                <th className="itemname">{item.name}</th>
                <th className="itemcountry">{item.country}</th>
                <th className="itemtype">{item.type}</th>


              </tr>
              }
            )

          }
      </table>
    </div>
  );
}

export default App;
