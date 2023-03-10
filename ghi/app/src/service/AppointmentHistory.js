import { useEffect, useState } from 'react';

function AppointmentHistory() {
  const [appointments, setAppointments] = useState([])
  const [vinSearch, setVinSearch] = useState("")

  const getData = async () => {
    const response = await fetch('http://localhost:8080/api/appointments/');

    if (response.ok) {
      const data = await response.json();
      setAppointments(data.appointments)
      }
  }

  useEffect(()=>{
    getData()
  }, [])

  const handleChange = (e) => {
    setVinSearch(e.target.value)
  }
  
  const filteredVin = () => {
    return appointments.filter((appointment) => 
      appointment["vin"].toLowerCase().includes(vinSearch)
      )
  }
  
  return (
    <>
    <h1>Search Appointments by VIN</h1>
      <input onChange={ handleChange } placeholder="filter for vin" />
      <table className="table table-striped">
      <thead>
        <tr>
          <th>Customer</th>
          <th>Vip</th>
          <th>VIN</th>
          <th>Start Date</th>
          <th>Start Time</th>
          <th>Technician</th>
          <th>Reason</th>
          <th>Finished?</th>
        </tr>
      </thead>
      <tbody>
        {filteredVin().map(appointment => {
          return (
              <tr key={ appointment.id }>
                  <td>{ appointment.customer_name }</td>
                  { appointment.vip && <td>VIP</td> }
                  { !appointment.vip && <td></td>}
                  <td>{ appointment.vin }</td>
                  <td>{ appointment.start_date }</td>
                  <td>{ appointment.start_time }</td>
                  <td>{ appointment.technician.name }</td>
                  <td>{ appointment.reason }</td>
                  { appointment.finish && <td>Finished</td> }
              </tr>
          );
        })}
      </tbody>
      </table>
    </>
  );
}
  
  export default AppointmentHistory;
        