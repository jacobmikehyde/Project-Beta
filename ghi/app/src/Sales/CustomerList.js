import { useEffect, useState } from 'react';

function CustomerList() {
  const [customers, setCustomers] = useState([])

  const getData = async () => {
    const response = await fetch('http://localhost:8090/api/customers/');

    if (response.ok) {
      const data = await response.json();
      setCustomers(data.customers)
    }
  }

  useEffect(()=>{
    getData()
  }, [])

  const deleteCustomer = async (id) => {
    const deleteCustomerUrl = `http://localhost:8090/api/customers/${id}` 
    const fetchConfig = {
      method: 'delete',
      headers: {
        'Content-Type': 'application/json'
      }
    }
    const response = await fetch(deleteCustomerUrl, fetchConfig)
    
    if (response.ok) {
      getData();
    }
}

  return (
    <table className="table table-striped">
      <thead>
        <tr>
          <th>Name</th>
          <th>Address</th>
          <th>Phone Number</th>
        </tr>
      </thead>
      <tbody>
        {customers.map(customer => {
          return (
            <tr key={ customer.id }>
              <td>{ customer.name }</td>
              <td>{ customer.address }</td>
              <td>{ customer.phone_number }</td>
              <td><button className="btn btn-primary" onClick={() => deleteCustomer(customer.id)} type="button">Delete</button></td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

export default CustomerList;
